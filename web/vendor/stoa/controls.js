// Control bindings for demo panels. The superset of the slider binder that
// existed, slightly differently, in every bench.

// Wires a range input to a live readout and a state write.
//   bindSlider('kp', { out: 'kpOut', scale: 0.01, fmt: v => v.toFixed(2),
//                      set: v => { S.kp = v; }, after: redraw })
// `input` and `out` accept an element or an id. `out` may be an <output>,
// a span or anything with textContent. Returns the current value getter and
// fires once at bind time so the readout starts correct.
//
// For screen readers, pass `valueText: v => v.toFixed(1) + ' metres per
// second'` or `unit: 'metres per second'` (which reads fmt(v) + ' ' + unit).
// Either sets aria-valuetext and keeps it current on every input. The input
// stays a native range, so arrow keys, Page Up/Down and Home/End still work.
//
// Entity sliders (TAXIS R1): pass `ent: 'q'` and the slider joins the
// linkage registry. It gets data-ent and the .ent-range class, so its thumb
// and filled track take the entity's colour (from registry's linkageCSS, or
// from `colour` if you pass one) and, once registry wire() has run, hovering,
// dragging or keyboard-focusing it lights that entity everywhere. A range
// already tagged data-ent in the markup is treated the same way.
export function bindSlider(input, {
  out = null, scale = 1, fmt = String, set = null, after = null,
  valueText = null, unit = null, ent = null, colour = null,
} = {}) {
  const el = typeof input === 'string' ? document.getElementById(input) : input;
  const outEl = typeof out === 'string' ? document.getElementById(out) : out;
  if (ent) el.dataset.ent = ent;
  const entity = !!(ent || el.dataset.ent || el.classList.contains('ent-range'));
  if (entity) el.classList.add('ent-range');
  if (colour) el.style.setProperty('--ent-colour', colour);
  const read = () => el.value * scale;
  const sync = () => {
    const v = read();
    if (entity) el.style.setProperty('--ent-track',
      trackGradient(fillFraction(el.value, el.min, el.max)));
    if (set) set(v);
    if (outEl) outEl.textContent = fmt(v);
    const vt = ariaValueText(v, { valueText, unit, fmt });
    if (vt !== null) el.setAttribute('aria-valuetext', vt);
    if (after) after(v);
  };
  el.addEventListener('input', sync);
  sync();
  return read;
}

// The spoken value for a slider, or null to leave the native one alone.
export function ariaValueText(v, { valueText = null, unit = null, fmt = String } = {}) {
  if (typeof valueText === 'function') return String(valueText(v));
  if (unit) return `${fmt(v)} ${unit}`;
  return null;
}

// How far along its track a range input sits, 0 to 1. Empty min and max
// fall back to the native defaults (0 and 100); a reversed or empty span
// reads as 0.
export function fillFraction(value, min = 0, max = 100) {
  const lo = min === '' || min == null ? 0 : Number(min);
  const hi = max === '' || max == null ? 100 : Number(max);
  const v = Number(value);
  if (!(hi > lo) || !Number.isFinite(v)) return 0;
  const f = (v - lo) / (hi - lo);
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

// The filled-track background for an entity slider at fraction f. The stop
// sits under the thumb's centre, which travels from half a thumb in from the
// left end to half a thumb in from the right, so fill and thumb never part.
// Colours default to CSS the sheet understands: currentColor is the entity
// colour (and follows the emphasis pulse), --ent-rest the unfilled track.
export function trackGradient(f, {
  fill = 'currentColor', rest = 'var(--ent-rest, #34344a)', thumb = 'var(--ent-thumb, 18px)',
} = {}) {
  const k = Math.round(Math.min(1, Math.max(0, Number(f) || 0)) * 10000) / 10000;
  const at = `calc(${thumb} / 2 + (100% - ${thumb}) * ${k})`;
  return `linear-gradient(to right, ${fill} ${at}, ${rest} ${at})`;
}

// Segmented button group. Buttons inside `group` (element or id) carry a
// data-* payload; clicking one marks it active (class + aria-pressed) and
// calls fn with its dataset. The initially .active button, if any, fires once.
export function seg(group, fn, { activeClass = 'active' } = {}) {
  const g = typeof group === 'string' ? document.getElementById(group) : group;
  const buttons = [...g.querySelectorAll('button')];
  const pick = (btn, fire = true) => {
    for (const b of buttons) {
      b.classList.toggle(activeClass, b === btn);
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    }
    if (fire) fn(btn.dataset, btn);
  };
  for (const b of buttons) b.addEventListener('click', () => pick(b));
  const start = g.querySelector('button.' + activeClass);
  if (start) pick(start);
  return pick;
}

// Play/pause toggle around a callback loop. Returns { playing, toggle, stop }.
//   const t = playToggle('play', { labels: ['▶ Play', '⏸ Pause'], onChange: p => {} })
export function playToggle(button, { labels = ['Play', 'Pause'], onChange = null } = {}) {
  const el = typeof button === 'string' ? document.getElementById(button) : button;
  const state = { playing: false };
  const apply = () => {
    el.textContent = labels[state.playing ? 1 : 0];
    if (onChange) onChange(state.playing);
  };
  state.toggle = () => { state.playing = !state.playing; apply(); };
  state.stop = () => { if (state.playing) { state.playing = false; apply(); } };
  el.addEventListener('click', state.toggle);
  el.textContent = labels[0];
  return state;
}
