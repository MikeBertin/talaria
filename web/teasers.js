// TALARIA hub teasers: six miniature, slowly moving previews of the demo
// pages, one canvas per demo card. One requestAnimationFrame loop drives all
// six (the STOA survey pattern). It stops while the tab is hidden or no card
// is on screen; under prefers-reduced-motion each canvas shows one still frame
// until the reader presses the Play previews button above the cards.
// Colours come from palette.js only, so each teaser matches its page.
import { fit } from './vendor/stoa/draw.js';
import { DEMO, LOOPHOLES, INK, BOARD, PANEL, GRID, MUTED } from './palette.js';

const TAU = Math.PI * 2;
const alpha = (hex, a) => hex + Math.round(a * 255).toString(16).padStart(2, '0');
const ease = p => p < 0 ? 0 : p > 1 ? 1 : p * p * (3 - 2 * p);

function line(ctx, x0, y0, x1, y1, col, w = 1.5, dash = null) {
  ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w; if (dash) ctx.setLineDash(dash);
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.restore();
}
function dot(ctx, x, y, r, col) { ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); }
function arrow(ctx, x0, y0, x1, y1, col, w = 2) {
  line(ctx, x0, y0, x1, y1, col, w);
  const a = Math.atan2(y1 - y0, x1 - x0), hl = 6;
  ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x1, y1);
  ctx.lineTo(x1 - hl * Math.cos(a - 0.45), y1 - hl * Math.sin(a - 0.45));
  ctx.lineTo(x1 - hl * Math.cos(a + 0.45), y1 - hl * Math.sin(a + 0.45));
  ctx.closePath(); ctx.fill();
}

// ---- shared spacetime exchange (antitelephone and pick-a-drive) ----------
// A at x = 0, B at x = d + v t, c = 1. Outbound at +u in A's frame, the reply
// at -u in B's frame. Same algebra as the demo pages.
function exchange(v, u, d) {
  if (u <= v) return { reach: false };
  const t1 = d / (u - v), x1 = u * t1;
  const w = (v - u) / (1 - u * v);
  return { reach: true, recv: [x1, t1], back: [0, t1 - x1 / w] };
}
function drawExchange(ctx, w, h, v, u, d) {
  const E = exchange(v, u, d);
  const far = E.reach ? [Math.abs(E.recv[0]), Math.abs(E.recv[1]), Math.abs(E.back[1])] : [d * 1.4];
  const span = Math.max(1.25, ...far) * 1.15;
  const ox = w * 0.5, oy = h * 0.6, k = Math.min(w * 0.46, h * 0.42) / span;
  const X = x => ox + x * k, Y = t => oy - t * k;
  const T = span * 2.2;
  line(ctx, 0, Y(0), w, Y(0), MUTED, 1, [2, 4]);                                 // the moment you send
  for (const s of [1, -1]) line(ctx, X(-s * T), Y(-T), X(s * T), Y(T), DEMO.light.mark, 1, [4, 4]);
  line(ctx, X(0), Y(-T), X(0), Y(T), DEMO.a.mark, 2);
  line(ctx, X(d - v * T), Y(-T), X(d + v * T), Y(T), DEMO.b.mark, 2);
  if (E.reach) {
    arrow(ctx, X(0), Y(0), X(E.recv[0]), Y(E.recv[1]), DEMO.signal.mark, 2);
    arrow(ctx, X(E.recv[0]), Y(E.recv[1]), X(0), Y(E.back[1]), DEMO.reply.mark, 2);
    dot(ctx, X(0), Y(0), 3, DEMO.signal.text);
    dot(ctx, X(E.recv[0]), Y(E.recv[1]), 3, DEMO.b.text);
    dot(ctx, X(0), Y(E.back[1]), 3.5, DEMO.reply.text);
  } else {
    arrow(ctx, X(0), Y(0), X(u * T), Y(T), DEMO.signal.mark, 2);              // never catches up
    dot(ctx, X(0), Y(0), 3, DEMO.signal.text);
  }
}

// 02 The antitelephone: her speed sweeps from 0.1c to 0.8c and back. With the
// message at 3c the threshold is 0.6c, so the reply crosses the send line.
function antitelephone(ctx, w, h, t) {
  const v = 0.45 + 0.35 * Math.sin(t * 0.35);
  drawExchange(ctx, w, h, v, 3, 1);
}

// 09 Pick a drive: a few catalogue drives in turn, each with its own
// effective signal speed, so the reply lands earlier, later or never.
const DRIVES = [
  { name: 'Star Trek: warp drive', L: 'L2', u: 10, v: 0.5 },
  { name: 'Spaceballs: ludicrous speed', L: 'L1', u: 5, v: 0.25 },
  { name: "Asimov's Foundation: the Jump", L: 'L4', u: 1000, v: 0.4 },
  { name: "Aurora's generation ship", L: 'L6', u: 0.5, v: 0.7 },
  { name: "Le Guin's ansible", L: 'L5', u: 1000, v: 0.25 },
  { name: '2001: the Star Gate', L: 'L3', u: 1000, v: 0.6 }
];
const HOLD = 3.2, BLEND = 0.7;
function pickADrive(ctx, w, h, t) {
  const i = Math.floor(t / HOLD) % DRIVES.length, p = ease((t % HOLD) / BLEND);
  const cur = DRIVES[i], prev = DRIVES[(i + DRIVES.length - 1) % DRIVES.length];
  const v = prev.v + (cur.v - prev.v) * p;
  const u = Math.exp(Math.log(prev.u) + (Math.log(cur.u) - Math.log(prev.u)) * p);
  drawExchange(ctx, w, h, v, u, 1);
  ctx.save();
  ctx.globalAlpha = p; ctx.fillStyle = LOOPHOLES[cur.L].text;
  ctx.font = 'italic 600 10.5px Georgia, serif'; ctx.textBaseline = 'top';
  ctx.fillText(`${cur.L} · ${cur.name}`, 8, 7);
  ctx.restore();
}

// 07 The Alcubierre bubble: the carried grid with the carry distance
// breathing. The flow map uses a tabulated shape function over a softened
// wall, as the demo does, so lines bunch ahead and stretch behind.
const GW = 0.45, GSIG = 2 / GW, GR = 1 + GW / 2, RMAX = 3, NTAB = 192;
const SHAPE = new Float32Array(NTAB + 1);
for (let i = 0; i <= NTAB; i++) {
  const r = RMAX * i / NTAB;
  SHAPE[i] = (Math.tanh(GSIG * (r + GR)) - Math.tanh(GSIG * (r - GR))) / (2 * Math.tanh(GSIG * GR));
}
function shape(r) {
  if (r >= RMAX) return 0;
  const q = r / RMAX * NTAB, i = q | 0, f = q - i;
  return SHAPE[i] + (SHAPE[i + 1] - SHAPE[i]) * f;
}
function bubble(ctx, w, h, t) {
  const A = 0.4 + 0.32 * Math.sin(t * 0.45);           // carry distance, in units of R
  const FX = w * 0.5, FY = h * 0.5, RPX = h * 0.34, STEP = 18, NSTEP = 8, hs = A / NSTEP;
  const dx = (px, py) => {
    let x = px; const yy = (py - FY) / RPX;
    for (let i = 0; i < NSTEP; i++) {
      const k1 = shape(Math.hypot((x - FX) / RPX, yy));
      const k2 = shape(Math.hypot((x + 0.5 * hs * RPX * k1 - FX) / RPX, yy));
      x += hs * RPX * k2;
    }
    return x - px;
  };
  // interior of the bubble, the shape function's flat region
  const g = ctx.createRadialGradient(FX, FY, 0, FX, FY, RPX * 1.1);
  g.addColorStop(0, alpha(LOOPHOLES.L2.mark, 0.32)); g.addColorStop(0.85, alpha(LOOPHOLES.L2.mark, 0.32)); g.addColorStop(1, alpha(LOOPHOLES.L2.mark, 0));
  ctx.fillStyle = g; ctx.fillRect(FX - RPX * 1.2, FY - RPX * 1.2, RPX * 2.4, RPX * 2.4);
  ctx.lineWidth = 1; ctx.lineJoin = 'round';
  for (let x0 = (FX % STEP) - STEP; x0 < w + STEP; x0 += STEP) {
    const ahead = x0 > FX + RPX * 0.85 && x0 < FX + RPX * (1.35 + A);
    const behind = x0 < FX - RPX * 0.85 && x0 > FX - RPX * (1.35 + A);
    ctx.strokeStyle = ahead ? alpha(DEMO.b.mark, 0.7) : behind ? alpha(DEMO.reply.mark, 0.7) : GRID;
    ctx.beginPath();
    for (let y = 0; y <= h; y += 4) { const x = x0 + dx(x0, y); y ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke();
  }
  ctx.strokeStyle = GRID;
  for (let y0 = FY % STEP; y0 < h; y0 += STEP) {
    ctx.beginPath();
    for (let x = -24; x <= w + 24; x += 4) { const xx = x + dx(x, y0); x === -24 ? ctx.moveTo(xx, y0) : ctx.lineTo(xx, y0); }
    ctx.stroke();
  }
  ctx.strokeStyle = alpha(LOOPHOLES.L2.text, 0.6); ctx.lineWidth = 1;
  for (const rr of [0.92, 1.08]) { ctx.beginPath(); ctx.arc(FX, FY, rr * RPX, 0, TAU); ctx.stroke(); }
  arrow(ctx, FX + 12, FY + 14, FX + 34, FY + 14, MUTED, 1);
  ctx.fillStyle = DEMO.a.mark; ctx.beginPath(); ctx.moveTo(FX + 8, FY); ctx.lineTo(FX - 6, FY - 5); ctx.lineTo(FX - 6, FY + 5); ctx.closePath(); ctx.fill();
}

// 08 The wormhole: the Ellis embedding z = acosh(r / b0), a surface of
// revolution, so the parallels stay put and only the meridians turn.
function wormhole(ctx, w, h, t) {
  const ZMAX = 1.9, cx = w * 0.5, cy = h * 0.5, s = h * 0.26, e = 0.42, phi = t * 0.22;
  const P = (u, th, z) => [cx + u * Math.cos(th) * s, cy - (z * Math.cos(e) + u * Math.sin(th) * Math.sin(e)) * s];
  const NR = 5, NM = 12;
  for (const back of [true, false]) {
    ctx.save(); ctx.globalAlpha = back ? 0.3 : 1;
    ctx.strokeStyle = MUTED; ctx.lineWidth = 0.8;
    for (let m = 0; m < NM; m++) {
      const th = phi + TAU * m / NM; if ((Math.sin(th) > 0) !== back) continue;
      ctx.beginPath();
      for (let i = 0; i <= 16; i++) { const z = -ZMAX + 2 * ZMAX * i / 16; const [x, y] = P(Math.cosh(z), th, z); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
    }
    for (let k = -NR; k <= NR; k++) {
      const z = k * ZMAX / NR, u = Math.cosh(z), throat = k === 0;
      ctx.strokeStyle = throat ? LOOPHOLES.L3.text : LOOPHOLES.L3.mark; ctx.lineWidth = throat ? 2.2 : 1;
      ctx.beginPath();
      for (let i = 0; i <= 24; i++) { const th = (back ? 0 : Math.PI) + Math.PI * i / 24; const [x, y] = P(u, th, z); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
    }
    ctx.restore();
  }
  // the traveller, down the axis from mouth A to mouth B
  const [x0, y0] = P(0, 0, ZMAX + 0.45), [x1, y1] = P(0, 0, -ZMAX - 0.45);
  arrow(ctx, x0, y0, x1, y1, DEMO.signal.mark, 1.5);
  const q = (t * 0.18) % 1;
  dot(ctx, x0 + (x1 - x0) * q, y0 + (y1 - y0) * q, 3, DEMO.signal.text);
}

// 10 The honest rocket: Proxima at one g, the ship's worldline traced out
// against the light cone, with a dot every half ship year.
const G1 = 1.032, DIST = 4.24;
const TRIP = (() => {
  const a = G1, hd = DIST / 2, gmax = 1 + a * hd;
  const tauHalf = Math.acosh(gmax) / a, tHalf = Math.sqrt(hd * hd + 2 * hd / a);
  return { a, d: DIST, tauHalf, tau: 2 * tauHalf, t: 2 * tHalf };
})();
function shipAt(s) {
  const { a, tauHalf, tau, t, d } = TRIP;
  if (s <= tauHalf) return [(Math.cosh(a * s) - 1) / a, Math.sinh(a * s) / a];
  const r = tau - s;
  return [d - (Math.cosh(a * r) - 1) / a, t - Math.sinh(a * r) / a];
}
function rocket(ctx, w, h, t) {
  const { d, tau, t: tHome } = TRIP;
  const p = Math.min(1, ((t % 7.5) / 5.5));
  const TOP = 8, BOT = h - 10;
  const k = Math.min((w - 28) / d, (BOT - TOP) / tHome);   // one scale for both axes keeps light at 45 degrees
  const L = (w - d * k) / 2;                                // centre the plot when height is the limit
  const X = x => L + x * k, Y = tt => BOT - tt * k;
  const tTop = (BOT - TOP) / k;
  ctx.save(); ctx.beginPath(); ctx.rect(0, 0, w, h); ctx.clip();
  ctx.fillStyle = PANEL; ctx.beginPath(); ctx.moveTo(X(0), Y(0)); ctx.lineTo(X(tTop * 1.2), Y(tTop * 1.2)); ctx.lineTo(X(-tTop * 1.2), Y(tTop * 1.2)); ctx.closePath(); ctx.fill();
  line(ctx, X(0), Y(0), X(tTop * 1.2), Y(tTop * 1.2), DEMO.light.mark, 1, [4, 4]);
  line(ctx, X(0), BOT, X(0), TOP, DEMO.a.mark, 2);
  line(ctx, X(d), BOT, X(d), TOP, DEMO.a.mark, 1, [2, 4]);
  const N = 60, n = Math.round(N * p);
  ctx.strokeStyle = DEMO.b.mark; ctx.lineWidth = 2.5; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const [x, tt] = shipAt(tau * i / N); i ? ctx.lineTo(X(x), Y(tt)) : ctx.moveTo(X(x), Y(tt)); }
  ctx.stroke();
  for (let s = 0.5; s < tau * p; s += 0.5) { const [x, tt] = shipAt(s); dot(ctx, X(x), Y(tt), 2, DEMO.b.text); }
  const [hx, ht] = shipAt(tau * p);
  dot(ctx, X(hx), Y(ht), 3.5, DEMO.b.text);
  if (ht >= d) dot(ctx, X(d), Y(d), 3, DEMO.light.text);
  ctx.restore();
}

// 11 No signalling: Bob's and Alice's up/down bars settle to half and half
// while the measured correlation walks the quantum cosine.
function hist(ctx, x0, y0, bw, bh, up, ent) {
  ctx.strokeStyle = GRID; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(x0, y0, bw, bh, 6); ctx.stroke();
  const base = y0 + bh - 10, full = bh - 22, barW = bw * 0.26, gap = bw * 0.12;
  const xa = x0 + bw / 2 - barW - gap / 2, xb = x0 + bw / 2 + gap / 2;
  line(ctx, x0 + 6, base - full / 2, x0 + bw - 6, base - full / 2, GRID, 1, [2, 3]);
  ctx.fillStyle = ent.mark;
  ctx.fillRect(xa, base - full * up, barW, full * up);
  ctx.fillRect(xb, base - full * (1 - up), barW, full * (1 - up));
  line(ctx, x0 + 6, base, x0 + bw - 6, base, GRID, 1);
}
function noSignalling(ctx, w, h, t) {
  const tc = t % 9;
  const settle = 0.42 * Math.exp(-0.5 * tc);
  const upB = 0.5 + settle * Math.cos(4.1 * tc + 0.6), upA = 0.5 + settle * Math.cos(3.3 * tc + 2.4);
  const y0 = 8, bh = h - 16, bw = w * 0.24;
  hist(ctx, 8, y0, bw, bh, upB, DEMO.b);
  hist(ctx, 8 + bw + 8, y0, bw, bh, upA, DEMO.a);
  const gx0 = 8 + 2 * bw + 28, gx1 = w - 12, gy0 = y0 + 8, gy1 = y0 + bh - 8;
  const X = th => gx0 + (gx1 - gx0) * th / 180, Y = E => gy0 + (gy1 - gy0) * (1 - E) / 2;
  for (const E of [1, 0, -1]) line(ctx, gx0, Y(E), gx1, Y(E), GRID, 1);
  for (const th of [0, 90, 180]) line(ctx, X(th), gy0, X(th), gy1, GRID, 1);
  line(ctx, X(0), Y(-1), X(180), Y(1), MUTED, 1, [3, 4]);                    // classical straight line
  ctx.strokeStyle = DEMO.reply.mark; ctx.lineWidth = 2; ctx.beginPath();
  for (let th = 0; th <= 180; th += 6) { const x = X(th), y = Y(-Math.cos(th * Math.PI / 180)); th ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
  ctx.stroke();
  const th = 90 + 88 * Math.sin(t * 0.4), E = -Math.cos(th * Math.PI / 180), se = 0.05 + 0.3 * Math.exp(-0.5 * tc);
  line(ctx, X(th), gy0, X(th), gy1, GRID, 1, [2, 3]);
  line(ctx, X(th), Y(E + se), X(th), Y(E - se), DEMO.reply.text, 1.5);
  dot(ctx, X(th), Y(E), 3.5, DEMO.reply.text);
  ctx.strokeStyle = BOARD; ctx.lineWidth = 1; ctx.stroke();
}

// ---- the loop ------------------------------------------------------------
const TEASERS = { antitelephone, bubble, wormhole, 'pick-a-drive': pickADrive, rocket, 'no-signalling': noSignalling };
const items = [];
const byCanvas = new Map();
for (const cv of document.querySelectorAll('canvas.teaser[data-teaser]')) {
  const draw = TEASERS[cv.dataset.teaser]; if (!draw) continue;
  const it = { cv, draw, ctx: null, w: 0, h: 0, visible: true };
  size(it); items.push(it); byCanvas.set(cv, it);
}
function size(it) {
  if (it.ctx && it.cv.clientWidth === it.w && it.cv.clientHeight === it.h) return;
  const { ctx, w, h } = fit(it.cv); it.ctx = ctx; it.w = w; it.h = h;
}
function paint(it, t) {
  const { ctx, w, h } = it;
  if (!w || !h) return;
  ctx.fillStyle = BOARD; ctx.fillRect(0, 0, w, h);
  ctx.save(); it.draw(ctx, w, h, t); ctx.restore();
}

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
// Read from the console as TALARIA_TEASERS; step(t) paints one frame by hand.
const stats = { last: 0, avg: 0, frames: 0, step: t => { for (const it of items) paint(it, t); } };
window.TALARIA_TEASERS = stats;

// The loop runs only while all three hold: the reader wants motion (on by
// default, off under prefers-reduced-motion until they press Play), the tab
// is visible and at least one teaser is on screen. The clock is the loop's
// own, so a pause resumes where it stopped rather than jumping ahead.
const STILL_T = 2.4;                 // the frame shown when nothing moves
let wanted = !reduced.matches;
let t = STILL_T, last = null, raf = 0;
const anyVisible = () => items.some(it => it.visible);
function frame(now) {
  raf = 0;
  if (last !== null) t += Math.min(0.05, (now - last) / 1000);
  last = now;
  const a = performance.now();
  for (const it of items) if (it.visible) paint(it, t);
  stats.last = performance.now() - a; stats.frames++;
  stats.avg += (stats.last - stats.avg) / Math.min(stats.frames, 120);
  update();
}
function update() {
  const run = wanted && !document.hidden && anyVisible();
  if (run && !raf) raf = requestAnimationFrame(frame);
  if (!run && raf) { cancelAnimationFrame(raf); raf = 0; }
  if (!run) last = null;
}
function still() { for (const it of items) paint(it, t); }   // one static frame each

// One Play/Pause button for all six previews (WCAG 2.2.2 and TAXIS R12).
const btn = document.getElementById('teaser-play');
function syncButton() {
  if (!btn) return;
  btn.textContent = wanted ? 'Pause previews' : 'Play previews';
  btn.setAttribute('aria-pressed', String(wanted));
}
if (btn) btn.addEventListener('click', () => { wanted = !wanted; syncButton(); update(); });

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => {
    for (const e of es) { const it = byCanvas.get(e.target); if (it) it.visible = e.isIntersecting; }
    update();
  });
  for (const it of items) io.observe(it.cv);
}
document.addEventListener('visibilitychange', update);
reduced.addEventListener('change', () => { wanted = !reduced.matches; syncButton(); update(); });
let resizeRaf = 0;
window.addEventListener('resize', () => {
  if (resizeRaf) return;
  resizeRaf = requestAnimationFrame(() => { resizeRaf = 0; for (const it of items) size(it); if (!raf) still(); });
});
syncButton();
still(); update();  // always paint one frame so no card is ever blank
