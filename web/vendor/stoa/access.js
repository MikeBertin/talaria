// Accessibility helpers for canvas demos.
//
//   hitTest(x, y, items, { minRadius })  forgiving pointer targets (pure)
//   describe(canvas, label)              text alternative for the canvas
//   liveReadout(el, { throttleMs })      polite screen-reader readout
//   createThrottle(write, ms, clock)     the pure throttle behind liveReadout
//
// A canvas is opaque to screen readers, and small drag handles are hard to
// grab on a phone. WCAG 2.2 wants a 24px minimum target (2.5.8) and good
// practice is 44px; the default minRadius of 20 gives a 40px circle.

// Nearest item under the point, or null.
//
// Items are either circles { x, y, r } (r optional, defaults to 0) or carry
// a shape callback: { shape: (x, y) => boolean | number } or a bare
// function. A callback returns true or a distance (0 inside, bigger means
// further off) for a hit, and false, null or Infinity for a miss.
//
// Circles hit within max(r, minRadius) of the centre, so every target is at
// least 2 * minRadius across. A shape item that also has x and y gets the
// same minRadius circle around that point as a fallback. Ties go to the
// later item, since later items are drawn on top.
export function hitTest(x, y, items, { minRadius = 20 } = {}) {
  let best = null, bestD = Infinity;
  for (const it of items) {
    if (!it) continue;
    const d = itemDistance(x, y, it, minRadius);
    if (d <= bestD && d !== Infinity) { best = it; bestD = d; }
  }
  return best;
}

function itemDistance(x, y, it, minRadius) {
  const fn = typeof it === 'function' ? it : it.shape;
  let d = Infinity;
  if (fn) {
    const v = fn(x, y);
    if (v === true) d = 0;
    else if (typeof v === 'number' && Number.isFinite(v)) d = Math.max(0, v);
  }
  if (typeof it.x === 'number' && typeof it.y === 'number') {
    const c = Math.hypot(x - it.x, y - it.y);
    const reach = fn ? minRadius : Math.max(it.r || 0, minRadius);
    if (c <= reach) d = Math.min(d, c);
  }
  return d;
}

// Gives the canvas a text alternative. Call again whenever what it shows
// changes in a way the label should mention.
export function describe(canvas, label) {
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', label);
  return canvas;
}

// Throttle that always delivers the last value. The first call writes at
// once; calls inside the window are held and the newest one is written
// when the window ends. Values equal to the last written one are skipped
// so a screen reader does not repeat itself. `clock` is injectable for
// tests: { now, setTimeout, clearTimeout }.
export function createThrottle(write, ms, clock = globalThis) {
  const now = () => (clock.now ? clock.now() : Date.now());
  let last = -Infinity, written, pending, has = false, timer = null;
  function flush() {
    timer = null;
    if (!has) return;
    has = false;
    last = now();
    if (pending !== written) { written = pending; write(pending); }
  }
  function update(v) {
    pending = v; has = true;
    const wait = last + ms - now();
    if (wait <= 0 && timer === null) flush();
    else if (timer === null) timer = clock.setTimeout(flush, Math.max(0, wait));
  }
  update.flush = () => { if (timer !== null) clock.clearTimeout(timer); flush(); };
  return update;
}

const HIDDEN = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;'
  + 'overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap;border:0';

// Polite live region for the key state of a canvas, such as
// "Wave amplitude 0.4, 3 nodes". Pass an element (or its id) to use a
// visible readout you already have, or null to get a visually hidden one
// appended to the body. Returns update(text); update.el is the element and
// update.flush() writes any held value now.
export function liveReadout(el = null, { throttleMs = 250, hidden = null } = {}) {
  let node = typeof el === 'string' ? document.getElementById(el) : el;
  const created = !node;
  if (created) {
    node = document.createElement('div');
    document.body.appendChild(node);
  }
  if (hidden ?? created) node.style.cssText += ';' + HIDDEN;
  node.setAttribute('aria-live', 'polite');
  node.setAttribute('aria-atomic', 'true');
  const update = createThrottle((t) => { node.textContent = t; }, throttleMs);
  update.el = node;
  return update;
}
