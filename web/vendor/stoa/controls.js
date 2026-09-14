// Control bindings for demo panels. The superset of the slider binder that
// existed, slightly differently, in every bench.

// Wires a range input to a live readout and a state write.
//   bindSlider('kp', { out: 'kpOut', scale: 0.01, fmt: v => v.toFixed(2),
//                      set: v => { S.kp = v; }, after: redraw })
// `input` and `out` accept an element or an id. `out` may be an <output>,
// a span or anything with textContent. Returns the current value getter and
// fires once at bind time so the readout starts correct.
export function bindSlider(input, { out = null, scale = 1, fmt = String, set = null, after = null } = {}) {
  const el = typeof input === 'string' ? document.getElementById(input) : input;
  const outEl = typeof out === 'string' ? document.getElementById(out) : out;
  const read = () => el.value * scale;
  const sync = () => {
    const v = read();
    if (set) set(v);
    if (outEl) outEl.textContent = fmt(v);
    if (after) after(v);
  };
  el.addEventListener('input', sync);
  sync();
  return read;
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
