// The timeline: one strip, 1900 to 2026, physics above the line, fiction
// below, the register as grey marks along it, lineage links as thin arcs.
// Data comes from data/timeline.json (tools/timeline.py). Colour is the
// project palette only: loophole marks for dots and arcs, loophole text for
// labels, ground tokens for everything else.
import { LOOPHOLES, INK, BOARD, PANEL, GRID, MUTED, colour, text } from './palette.js';
import { fit, pointer } from './vendor/stoa/draw.js';
import { seg } from './vendor/stoa/controls.js';
import { initPopovers } from './vendor/stoa/popover.js';

const D = await (await fetch('data/timeline.json')).json();
const BY = {};
for (const it of D.items) BY[it.id || it.slug] = it;
for (const l of D.links) { l.a = BY[l.from]; l.b = BY[l.to]; }

const canvas = document.getElementById('tl');
const card = document.getElementById('hovercard');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const R = 5, RS = 4, PITCH = 16, RPITCH = 12, PADL = 66, PADR = 26;
const LABEL_FONT = '11px system-ui, -apple-system, "Segoe UI", sans-serif';
const MONO = '10px "SF Mono", ui-monospace, Menlo, monospace';
const SPANS = { full: [1900, 2026], zoom: [1985, 2026] };
const state = { span: SPANS.full, loop: '', arcs: true, labels: true, hover: null };
let L = null;

/* ---------- popovers for the glossed terms ---------- */
initPopovers({
  loophole: { title: 'Loophole', html: '<p>The one move a scheme makes to get round the light barrier. There are six, L1 to L6, and every item here is filed under one of them. The seg control above the strip picks one.</p>' },
  register: { title: 'The register', html: '<p>Twenty-nine published results that put a price on beating light: theorems, inequalities and instabilities. On the strip they are the grey squares just above the line, placed at the year of their earliest citation.</p>' },
  lineage: { title: 'Lineage', html: '<p>Nine pages on who was reading whom, in either direction between physics and fiction. Each arc on the strip is one row from one of those pages, drawn from the item that gave to the item that took. A dashed arc is a link the page grades as a resemblance rather than a documented reading.</p>' },
  ansible: { title: 'Ansible', html: '<p>Le Guin\'s word for a box that talks to another box on another world with no delay. She coined it in 1966, gave it a theory in 1974 and lent it to anyone who asked.</p>' },
  posen: { title: 'Positive-energy warp drive', html: '<p>A warp bubble sourced by ordinary matter, with no negative energy anywhere. Three papers claimed one in 2021. The register\'s ENE-5 and WRP-3 record what survived: a subluminal shell, and nothing superluminal.</p>' },
  defyear: { title: 'The defining year', html: '<p>For a paper, the year on the paper. For a franchise, the year of the first instalment that shows the drive. For a register entry, the earliest citation in its row. A short override table in <code>tools/timeline.py</code> catches the cases where those rules pick the wrong paper.</p>' },
});

/* ---------- controls ---------- */
const lseg = document.getElementById('loopSeg');
lseg.innerHTML = `<button data-loop="" class="active" aria-pressed="true">all</button>` +
  Object.keys(LOOPHOLES).map(l => `<button data-loop="${l}" aria-pressed="false" style="--c:var(--${l}-mark);--t:var(--${l}-text)">${l} · ${LOOPHOLES[l].name}</button>`).join('');
seg('loopSeg', d => { state.loop = d.loop; render(); });
seg('spanSeg', d => { state.span = SPANS[d.span]; render(); });
document.getElementById('arcs').addEventListener('change', e => { state.arcs = e.target.checked; render(); });
document.getElementById('labels').addEventListener('change', e => { state.labels = e.target.checked; render(); });

/* ---------- layout ---------- */
function layout() {
  const w = canvas.clientWidth;
  const [y0, y1] = state.span;
  const X = yr => PADL + (yr - y0) / (y1 - y0) * (w - PADL - PADR);
  const vis = D.items.filter(it => it.year >= y0 && it.year <= y1 && (it.kind === 'register' || !state.loop || it.loophole === state.loop));
  const groups = { register: [], physics: [], fiction: [] };
  for (const it of vis) groups[it.kind].push(it);
  const m = canvas.getContext('2d'); m.font = LABEL_FONT;
  const pack = (arr, r) => {
    const ends = [];
    arr.sort((a, b) => a.year - b.year || a.short.localeCompare(b.short));
    for (const it of arr) {
      it.x = X(it.year);
      const need = state.labels ? m.measureText(it.short).width + 10 : 0;
      // a label that would run off the right edge sits to the left of its dot
      it.flip = state.labels && it.x + r + 3 + need > w - 4;
      const start = it.flip ? it.x - r - 3 - need : it.x - r - 3;
      let l = 0; while (l < ends.length && ends[l] > start) l++;
      it.lane = l; ends[l] = it.flip ? it.x + r + 3 : it.x + r + 3 + need;
    }
    return ends.length;
  };
  const regL = pack(groups.register, RS), phL = pack(groups.physics, R), fiL = pack(groups.fiction, R);
  const top = 30;
  const axisY = top + phL * PITCH + 14 + regL * RPITCH + 8;
  for (const it of groups.physics) it.y = axisY - 8 - regL * RPITCH - 14 - it.lane * PITCH;
  for (const it of groups.register) it.y = axisY - 8 - RPITCH / 2 - it.lane * RPITCH;
  for (const it of groups.fiction) it.y = axisY + 20 + it.lane * PITCH;
  const H = axisY + 20 + fiL * PITCH + 26;
  const visSet = new Set(vis);
  const links = state.arcs ? D.links.filter(l => visSet.has(l.a) && visSet.has(l.b)) : [];
  return { w, H, X, axisY, vis, groups, links, regBand: [axisY - 8 - regL * RPITCH, axisY - 8], y0, y1 };
}

/* ---------- drawing ---------- */
function arcPath(ctx, a, b, axisY) {
  const same = (a.y < axisY) === (b.y < axisY);
  ctx.beginPath(); ctx.moveTo(a.x, a.y);
  if (same) {
    const up = a.y < axisY ? -1 : 1;
    const far = (up < 0 ? Math.min(a.y, b.y) : Math.max(a.y, b.y)) + up * (22 + Math.abs(b.x - a.x) * 0.1);
    ctx.bezierCurveTo(a.x, far, b.x, far, b.x, b.y);
  } else {
    ctx.bezierCurveTo(a.x, axisY, b.x, axisY, b.x, b.y);
  }
}
function fillOf(it) { return it.kind === 'register' ? MUTED : colour(it.loophole); }
function inkOf(it) { return it.kind === 'register' ? MUTED : text(it.loophole); }

function draw() {
  L = layout();
  canvas.style.height = L.H + 'px';
  const { ctx, w, h } = fit(canvas);
  ctx.fillStyle = PANEL; ctx.fillRect(0, 0, w, h);
  const hov = state.hover;
  const linked = new Set();
  if (hov) for (const l of L.links) { if (l.a === hov) linked.add(l.b); if (l.b === hov) linked.add(l.a); }

  // register band, year grid and axis
  ctx.fillStyle = BOARD; ctx.fillRect(PADL - 4, L.regBand[0] - 2, w - PADL - PADR + 8, L.regBand[1] - L.regBand[0] + 4);
  const step = L.y1 - L.y0 > 60 ? 10 : 5;
  const years = [];
  for (let y = Math.ceil(L.y0 / step) * step; y <= L.y1; y += step) years.push(y);
  if (years[years.length - 1] !== L.y1) years.push(L.y1);
  ctx.strokeStyle = GRID; ctx.lineWidth = 1;
  for (const y of years) { const x = L.X(y); ctx.beginPath(); ctx.moveTo(x, 18); ctx.lineTo(x, h - 12); ctx.stroke(); }
  ctx.strokeStyle = MUTED; ctx.lineWidth = 1.2;
  ctx.beginPath(); ctx.moveTo(PADL - 6, L.axisY); ctx.lineTo(w - PADR + 6, L.axisY); ctx.stroke();
  ctx.font = MONO; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (const y of years) {
    const x = L.X(y), tw = ctx.measureText(String(y)).width + 8;
    ctx.fillStyle = PANEL; ctx.fillRect(x - tw / 2, L.axisY - 7, tw, 14);
    ctx.fillStyle = MUTED; ctx.fillText(String(y), x, L.axisY);
  }
  // band names in the left margin
  ctx.textAlign = 'right'; ctx.fillStyle = MUTED; ctx.font = MONO;
  const bandY = { physics: (30 + L.regBand[0] - 14) / 2, register: (L.regBand[0] + L.regBand[1]) / 2, fiction: (L.axisY + 20 + h - 26) / 2 };
  for (const [k, v] of Object.entries(bandY)) {
    if (!L.groups[k].length) continue;
    ctx.save(); ctx.translate(PADL - 16, v); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillText(k.toUpperCase(), 0, 0); ctx.restore();
  }

  // arcs
  for (const l of L.links) {
    const on = hov && (l.a === hov || l.b === hov);
    ctx.save();
    ctx.strokeStyle = fillOf(l.a);
    ctx.globalAlpha = hov ? (on ? 1 : 0.12) : 0.55;
    ctx.lineWidth = on ? 1.8 : 1.1;
    if (l.grade === 'LOW') ctx.setLineDash([4, 4]);
    arcPath(ctx, l.a, l.b, L.axisY); ctx.stroke();
    ctx.restore();
  }

  // items and labels
  ctx.font = LABEL_FONT; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  for (const it of L.vis) {
    const on = it === hov || linked.has(it);
    const dim = hov && !on;
    ctx.save();
    ctx.globalAlpha = dim ? 0.35 : 1;
    ctx.fillStyle = fillOf(it);
    if (it.kind === 'register') ctx.fillRect(it.x - RS, it.y - RS, RS * 2, RS * 2);
    else { ctx.beginPath(); ctx.arc(it.x, it.y, on ? R + 1.5 : R, 0, Math.PI * 2); ctx.fill(); }
    if (on) { ctx.strokeStyle = INK; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(it.x, it.y, R + 3.5, 0, Math.PI * 2); ctx.stroke(); }
    if (state.labels || on) {
      const rr = it.kind === 'register' ? RS : R;
      const tw = ctx.measureText(it.short).width;
      const flip = state.labels ? it.flip : it.x + rr + 4 + tw > w - 4;
      const lx = flip ? it.x - rr - 4 - tw : it.x + rr + 4;
      if (on && !state.labels) { ctx.fillStyle = PANEL; ctx.fillRect(lx - 2, it.y - 8, tw + 4, 16); }
      ctx.fillStyle = on ? INK : inkOf(it);
      ctx.fillText(it.short, lx, it.y + 0.5);
    }
    ctx.restore();
  }
  const n = L.vis.length, m = L.links.length;
  document.getElementById('count').textContent = `${n} items · ${m} link${m === 1 ? '' : 's'}`;
}
function render() { state.hover = null; card.hidden = true; draw(); }

/* ---------- hover and click ---------- */
function hit(px, py) {
  let best = null, bd = 100;
  for (const it of L.vis) {
    const d = (it.x - px) ** 2 + (it.y - py) ** 2;
    if (d < bd) { bd = d; best = it; }
  }
  return bd <= 81 ? best : null;
}
const LNAME = l => l ? `${l} · ${LOOPHOLES[l].name}` : '';
function showCard(it, ev) {
  const via = [...new Set(D.links.filter(l => l.a === it || l.b === it).map(l => D.lineages[l.lineage]))];
  const kind = it.kind === 'register' ? 'register entry' : it.kind;
  card.innerHTML = `<b>${esc(it.short)}</b> <span class="fam">${it.year} · ${kind}${it.loophole ? ' · ' + esc(LNAME(it.loophole)) : ''}</span>` +
    `<h4>${esc(it.title)}</h4><p>${esc(it.line)}</p>` +
    (via.length ? `<p style="color:var(--muted)">Lineage: ${esc(via.join('; '))}</p>` : '') +
    `<small>click to open the page</small>`;
  card.hidden = false;
  const cw = card.offsetWidth, ch = card.offsetHeight;
  let x = ev.clientX + 16, y = ev.clientY + 16;
  if (x + cw > innerWidth - 8) x = ev.clientX - cw - 16;
  if (y + ch > innerHeight - 8) y = ev.clientY - ch - 16;
  card.style.left = Math.max(8, x) + 'px'; card.style.top = Math.max(8, y) + 'px';
}
canvas.addEventListener('mousemove', ev => {
  const [px, py] = pointer(canvas, ev);
  const it = hit(px, py);
  if (it !== state.hover) { state.hover = it; draw(); }
  canvas.style.cursor = it ? 'pointer' : 'default';
  if (it) showCard(it, ev); else card.hidden = true;
});
canvas.addEventListener('mouseleave', () => { if (state.hover) { state.hover = null; draw(); } card.hidden = true; });
canvas.addEventListener('click', ev => {
  const [px, py] = pointer(canvas, ev);
  const it = hit(px, py);
  if (it) location.href = it.url;
});
addEventListener('resize', render);
render();
