import { initChapters } from './vendor/stoa/tabs.js';
import { seg } from './vendor/stoa/controls.js';
const D = window.TALARIA;
const IDS = D.register.map(r => r.id);
const REG = Object.fromEntries(D.register.map(r => [r.id, r]));
const LNAME = { L1: 'faster in the same space', L2: 'move the space', L3: 'take a shortcut', L4: 'leave the manifold', L5: 'send the message', L6: 'not FTL' };
const BILL = { 'B-neg': 'negative energy', 'B-mass': 'astronomical mass', 'B-new': 'new physics', 'B-boot': 'pre-laid route', 'B-caus': 'time machine', 'B-none': 'nothing exotic' };
const FNAME = { F4: 'engages', F3: 'acknowledges', F2: 'rule-bound', F1: 'handwave', F0: 'joke' };
const CNAME = { 'C-owns': 'owns the causality bill', 'C-dodges': 'dodges it with a rule', 'C-silent': 'never mentions it' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const chip = (t, cls = '') => `<span class="chip ${cls}">${esc(t)}</span>`;
const vcls = v => v === 'N/A' ? 'v-NA-bg' : `v-${v}-bg`;
const count = (d, v) => IDS.filter(i => d.verdicts[i] === v).length;

initChapters(['physics', 'fiction', 'join', 'register', 'lineage']);

/* ---------- panel ---------- */
const panel = document.getElementById('panel'), pbody = document.getElementById('panel-body');
document.getElementById('panel-close').onclick = () => panel.classList.add('hidden');
document.addEventListener('keydown', e => { if (e.key === 'Escape') panel.classList.add('hidden'); });
function openDossier(kind, slug) {
  const d = D[kind].find(x => x.slug === slug); if (!d) return;
  let h = `<h2>${esc(d.title)}</h2><div class="meta"><em>${esc(d.hook)}</em></div><div style="margin:8px 0 12px">`;
  h += chip(`${d.loophole} · ${LNAME[d.loophole]}`, d.loophole);
  if (kind === 'physics') h += ' ' + chip(d.standing) + ' ' + d.bill.map(b => chip(`${b} ${BILL[b] || ''}`)).join(' ');
  else h += ' ' + chip(d.notability) + ' ' + chip(`${d.coherence} ${FNAME[d.coherence]}`) + ' ' + chip(CNAME[d.causality] || d.causality);
  h += `</div><p><a href="pages/${kind}/${slug}.html">Read the dossier →</a></p>`;
  const shown = IDS.filter(i => d.verdicts[i] && d.verdicts[i] !== 'N/A');
  h += `<h4 style="margin:14px 0 6px;color:var(--muted);font-size:12px;letter-spacing:.06em">SCORES (${shown.length} of ${IDS.length} apply)</h4><ul>`;
  for (const i of shown) h += `<li>${chip(d.verdicts[i], 'v-' + d.verdicts[i])} <b><a href="pages/constraints/${i.toLowerCase()}.html">${i}</a></b> ${esc(REG[i]?.title || '')}<br><span class="note">${esc(d.notes[i] || '')}</span></li>`;
  pbody.innerHTML = h + '</ul>'; panel.classList.remove('hidden'); panel.scrollTop = 0;
}
function openConstraint(id) {
  const r = REG[id]; if (!r) return;
  const bites = kind => D[kind].filter(d => d.verdicts[id] && d.verdicts[id] !== 'N/A');
  let h = `<h2>${esc(r.id)}: ${esc(r.title)}</h2><div class="meta">${esc(D.families[r.family] || r.family)}</div><p style="font-size:13.5px">${esc(r.result)}</p><p style="font-size:13px;color:var(--muted)"><b>What it forbids or costs.</b> ${esc(r.forbids)}</p><p><a href="pages/constraints/${id.toLowerCase()}.html">Read the entry →</a></p>`;
  for (const [kind, label] of [['physics', 'Physics'], ['fiction', 'Fiction']]) {
    const bs = bites(kind); if (!bs.length) continue;
    const by = {}; bs.forEach(d => (by[d.verdicts[id]] = by[d.verdicts[id]] || []).push(d));
    h += `<h4 style="margin:14px 0 6px;color:var(--muted);font-size:12px;letter-spacing:.06em">${label.toUpperCase()} (${bs.length})</h4>`;
    for (const v of ['VIOLATES', 'ENGAGES', 'DODGES', 'RULE', 'SATISFIES', 'SILENT']) if (by[v]) h += `<div style="margin:6px 0 2px">${chip(v, 'v-' + v)} ${by[v].length}</div><ul>` + by[v].map(d => `<li><a href="#" data-open="${kind}:${d.slug}">${esc(d.title)}</a></li>`).join('') + '</ul>';
  }
  pbody.innerHTML = h; panel.classList.remove('hidden'); panel.scrollTop = 0;
}
pbody.addEventListener('click', e => { const a = e.target.closest('[data-open]'); if (a) { e.preventDefault(); const [k, s] = a.dataset.open.split(':'); openDossier(k, s); } });

/* ---------- grids ---------- */
function grid(table, rows, kind) {
  let h = '<thead><tr><th class="name">' + (kind === 'physics' ? 'proposal' : 'work') + '</th>';
  h += IDS.map(i => `<th class="rot" title="${esc(REG[i].title)}" data-c="${i}">${i}</th>`).join('') + '</tr></thead><tbody>';
  for (const d of rows) {
    h += `<tr><td class="name" data-open="${kind}:${d.slug}">${chip(d.loophole, d.loophole)} ${esc(d.title)}</td>`;
    h += IDS.map(i => { const v = d.verdicts[i] || 'N/A'; return `<td class="cell" data-open="${kind}:${d.slug}" title="${i} ${v}: ${esc(d.notes[i] || '')}"><span class="${vcls(v)}"></span></td>`; }).join('') + '</tr>';
  }
  table.innerHTML = h + '</tbody>';
}
document.querySelectorAll('table.grid').forEach(t => t.addEventListener('click', e => {
  const th = e.target.closest('th[data-c]'); if (th) return openConstraint(th.dataset.c);
  const td = e.target.closest('[data-open]'); if (td) { const [k, s] = td.dataset.open.split(':'); openDossier(k, s); }
}));
const K = { K4: 4, K3: 3, K2: 2, K1: 1, K0: 0 }, F = { F4: 4, F3: 3, F2: 2, F1: 1, F0: 0 };
function renderPhysics() {
  const loop = v('p-loop'), st = v('p-stand'), q = v('p-search').toLowerCase(), sort = v('p-sort');
  let rows = D.physics.filter(d => (!loop || d.loophole === loop) && (!st || d.standing === st) && (!q || (d.title + ' ' + d.hook).toLowerCase().includes(q)));
  const key = { loop: d => d.loophole + d.slug, viol: d => -count(d, 'VIOLATES'), stand: d => -K[d.standing], name: d => d.title.toLowerCase() }[sort];
  rows.sort((a, b) => key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0);
  grid(document.getElementById('p-grid'), rows, 'physics');
  document.getElementById('p-count').textContent = `${rows.length} of ${D.physics.length}`;
}
function renderFiction() {
  const loop = v('f-loop'), coh = v('f-coh'), cau = v('f-cau'), q = v('f-search').toLowerCase(), sort = v('f-sort');
  let rows = D.fiction.filter(d => (!loop || d.loophole === loop) && (!coh || d.coherence === coh) && (!cau || d.causality === cau) && (!q || (d.title + ' ' + d.hook).toLowerCase().includes(q)));
  const key = { loop: d => d.loophole + d.slug, coh: d => -F[d.coherence], eng: d => -count(d, 'ENGAGES'), name: d => d.title.toLowerCase() }[sort];
  rows.sort((a, b) => key(a) < key(b) ? -1 : key(a) > key(b) ? 1 : 0);
  grid(document.getElementById('f-grid'), rows, 'fiction');
  document.getElementById('f-count').textContent = `${rows.length} of ${D.fiction.length}`;
}
const v = id => document.getElementById(id).value;
['p-loop', 'p-stand', 'p-sort', 'p-search'].forEach(id => document.getElementById(id).addEventListener('input', renderPhysics));
['f-loop', 'f-coh', 'f-cau', 'f-sort', 'f-search'].forEach(id => document.getElementById(id).addEventListener('input', renderFiction));
renderPhysics(); renderFiction();

/* ---------- join ---------- */
const jseg = document.getElementById('joinSeg');
jseg.innerHTML = Object.keys(LNAME).map((l, i) => `<button data-loop="${l}" class="${i === 1 ? 'active' : ''}" aria-pressed="${i === 1}" style="border-color:var(--${l}-mark)">${l} · ${LNAME[l]}</button>`).join('');
seg('joinSeg', d => renderJoin(d.loop));
function renderJoin(l) {
  const ps = D.physics.filter(d => d.loophole === l), fs = D.fiction.filter(d => d.loophole === l);
  const bills = {}; ps.forEach(d => d.bill.forEach(b => bills[b] = (bills[b] || 0) + 1));
  const cohs = {}; fs.forEach(d => cohs[d.coherence] = (cohs[d.coherence] || 0) + 1);
  const billTxt = Object.entries(bills).sort((a, b) => b[1] - a[1]).map(([b, n]) => `${BILL[b]} ×${n}`).join(', ') || 'none';
  const cohTxt = ['F4', 'F3', 'F2', 'F1', 'F0'].filter(k => cohs[k]).map(k => `${FNAME[k]} ×${cohs[k]}`).join(', ') || 'none';
  document.getElementById('join-body').innerHTML = `<div class="join">
    <div class="col"><h3>Physics · ${ps.length} proposals</h3><div class="bill">The bill for this move: ${esc(billTxt)}.</div><ul>${ps.map(d => `<li><a href="#" data-open="physics:${d.slug}">${esc(d.title)}</a> ${chip(d.standing)} ${d.bill.map(b => chip(b)).join(' ')}</li>`).join('')}</ul></div>
    <div class="col"><h3>Fiction · ${fs.length} drives</h3><div class="bill">How the stories handle it: ${esc(cohTxt)}.</div><ul>${fs.map(d => `<li><a href="#" data-open="fiction:${d.slug}">${esc(d.title)}</a> ${chip(d.coherence)} ${chip(d.causality.replace('C-', ''))}</li>`).join('')}</ul></div></div>`;
}
document.getElementById('join-body').addEventListener('click', e => { const a = e.target.closest('[data-open]'); if (a) { e.preventDefault(); const [k, s] = a.dataset.open.split(':'); openDossier(k, s); } });
renderJoin('L2');

/* ---------- register and lineage lists ---------- */
document.getElementById('reg-list').innerHTML = D.register.map(r => `<div class="entry"><h3><span class="id">${r.id}</span><a href="pages/constraints/${r.id.toLowerCase()}.html">${esc(r.title)}</a> <span class="chip">${esc(D.families[r.family] || r.family)}</span></h3><p>${esc(r.forbids)}</p><p><a href="#" data-c="${r.id}" style="font-size:12.5px">who it bites →</a></p></div>`).join('');
document.getElementById('reg-list').addEventListener('click', e => { const a = e.target.closest('[data-c]'); if (a) { e.preventDefault(); openConstraint(a.dataset.c); } });
document.getElementById('lin-list').innerHTML = D.lineage.map(l => `<div class="entry"><h3><a href="pages/lineage/${l.slug}.html">${esc(l.title)}</a> <span class="chip">${esc(l.span)}</span></h3><p>${esc(l.hook)}</p></div>`).join('');
