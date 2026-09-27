// Hand-rolled equation markup. No KaTeX: the equations in these benches are
// simple and rolling our own gives every symbol a data-ent tag the linkage
// registry can see.

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
function attr(s) { return esc(String(s)).replace(/"/g, '&quot;'); }

// Inline helpers, each returns an HTML string.
// opts.bold thickens the glyph; opts.key sets data-key, an explicit match
// key for morph.js (two symbols with the same key pair up across a step).
export const sym = (ent, txt, opts = {}) => {
  const bold = opts.bold ? ' eq-bold' : '';
  const key = opts.key != null ? ` data-key="${attr(opts.key)}"` : '';
  return `<span class="eq-sym${bold}" data-ent="${ent}"${key}>${esc(txt)}</span>`;
};
export const op = txt => `<span class="eq-op">${esc(txt)}</span>`;
export const txt = t => `<span class="eq-txt">${esc(t)}</span>`;
export const sup = t => `<sup class="eq-sup">${esc(t)}</sup>`;
export const sub = t => `<sub class="eq-sub">${esc(t)}</sub>`;
export const frac = (top, bottom) =>
  `<span class="eq-frac"><span class="eq-top">${top}</span><span class="eq-bottom">${bottom}</span></span>`;
export const sqrt = inner => `<span class="eq-sqrt"><span class="eq-rad">&radic;</span><span class="eq-sqrt-arg">${inner}</span></span>`;
export const paren = inner => `<span class="eq-paren">(</span>${inner}<span class="eq-paren">)</span>`;
export const fn = (name, ent) => ent
  ? `<span class="eq-fn" data-ent="${ent}">${esc(name)}</span>`
  : `<span class="eq-fn">${esc(name)}</span>`;

// Mounts an equation block into `el` from a list of HTML fragments.
export function mount(el, fragments, caption = '') {
  el.classList.add('eq');
  el.innerHTML = `<span class="eq-body">${fragments.join('')}</span>` +
    (caption ? `<span class="eq-caption">${caption}</span>` : '');
}

// ---------------------------------------------------------------------------
// Live values (TAXIS X3)
//
// A symbol can show its current value in a small label under it (or above
// it, inside a numerator). The label is absolutely positioned, so the
// equation's layout never moves. It shows on hover, or for every symbol when
// the container has the class eq-numbers (see showNumbers).
//
//   setValues(el, { lambda: 532e-9, L: 1.2 }, { format: { lambda: 'm', L: 'm' } });
//   slider.oninput = () => setValues(el, { lambda: slider.value * 1e-9 });
//
// Updates are cheap: labels are cached per entity and only their text
// changes. If the equation is re-mounted (or morphed), the next call, or
// refreshValues(el), rebuilds the labels on the new markup.

const SI = { '-15': 'f', '-12': 'p', '-9': 'n', '-6': 'µ', '-3': 'm', '0': '', '3': 'k', '6': 'M', '9': 'G', '12': 'T' };
const SUPERS = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const MINUS = '−';

// toPrecision without the trailing zeros ("1.20" -> "1.2", "500." -> "500").
function trimmed(x, digits) {
  let s = x.toPrecision(digits);
  if (s.includes('e')) s = String(Number(s));
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s;
}

// Formats a number for a value label.
//   mode 'si'    (default when a unit is given): SI prefix on the unit, 532e-9 m -> "532 nm"
//   mode 'plain' plain decimal to `digits` significant figures, powers of ten
//                (5.32×10⁻⁷) outside 1e-3 to 1e6
// Negative numbers get a true minus sign. Units follow after a space.
export function formatValue(v, { unit = '', mode = unit ? 'si' : 'plain', digits = 3 } = {}) {
  if (typeof v !== 'number' || Number.isNaN(v)) return String(v);
  const tail = unit ? ' ' + unit : '';
  const sign = v < 0 ? MINUS : '';
  const a = Math.abs(v);
  if (!Number.isFinite(a)) return sign + '∞' + tail;
  if (a === 0) return '0' + tail;
  if (mode === 'si') {
    let e = Math.floor(Math.log10(a) / 3) * 3;
    if (e < -15 || e > 12) return formatValue(v, { unit, mode: 'plain', digits });
    let m = Number((a / 10 ** e).toPrecision(digits));
    if (m >= 1000) {
      if (e >= 12) return formatValue(v, { unit, mode: 'plain', digits });
      e += 3; m = Number((a / 10 ** e).toPrecision(digits));
    }
    const prefix = SI[String(e)];
    return sign + trimmed(m, digits) + (unit ? ' ' + prefix + unit : prefix);
  }
  let e = Math.floor(Math.log10(a));
  let m = Number((a / 10 ** e).toPrecision(digits));
  if (m >= 10) { e += 1; m /= 10; }
  if (e >= -3 && e < 6) return sign + trimmed(Number(a.toPrecision(digits)), digits) + tail;
  const pow = String(e).split('').map(c => SUPERS[c]).join('');
  return sign + trimmed(m, digits) + '×10' + pow + tail;
}

// The label text for one entity under the container's format options.
// format may be a function (v, ent) -> string, or a per-entity map whose
// entries are a unit string, a function or { unit, mode, digits }.
export function valueText(v, ent, { format = null, mode, digits = 3 } = {}) {
  if (typeof format === 'function') return String(format(v, ent));
  const f = format && Object.prototype.hasOwnProperty.call(format, ent) ? format[ent] : null;
  if (typeof f === 'function') return String(f(v, ent));
  const o = typeof f === 'string' ? { unit: f } : (f || {});
  const opts = { digits, ...o };
  if (mode && !o.mode) opts.mode = mode;
  return formatValue(v, opts);
}

const VALUES = new WeakMap();

function mergeOpts(prev, next) {
  if (!next) return prev;
  const out = { ...prev, ...next };
  const a = prev.format, b = next.format;
  if (a && b && typeof a === 'object' && typeof b === 'object') out.format = { ...a, ...b };
  return out;
}

export function setValues(container, values = {}, opts = null) {
  let st = VALUES.get(container);
  if (!st) { st = { values: {}, opts: {}, body: null, labels: new Map(), shown: new Map() }; VALUES.set(container, st); }
  Object.assign(st.values, values);
  const optsChanged = !!opts;
  st.opts = mergeOpts(st.opts, opts);
  applyValues(container, st, optsChanged ? null : Object.keys(values));
}

// Re-applies stored values after the markup changed (mount, morph).
export function refreshValues(container) {
  const st = VALUES.get(container);
  if (st) applyValues(container, st, null);
}

export function getValues(container) {
  const st = VALUES.get(container);
  return st ? { ...st.values } : {};
}

export function showNumbers(container, on = true) {
  container.classList.toggle('eq-numbers', !!on);
}

function applyValues(container, st, only) {
  const body = container.querySelector('.eq-body');
  if (!body) return;
  if (body !== st.body || !body.isConnected) {
    st.body = body; st.labels = new Map(); st.shown = new Map(); only = null;
  }
  const want = Object.keys(st.values).filter(k => !st.labels.has(k));
  if (want.length) {
    for (const el of body.querySelectorAll('[data-ent]')) {
      const k = el.dataset.ent;
      if (!want.includes(k)) continue;
      let lab = el.querySelector(':scope > .eq-val');
      if (!lab) {
        lab = document.createElement('span');
        lab.className = 'eq-val';
        lab.setAttribute('aria-hidden', 'true');
        el.appendChild(lab);
      }
      el.classList.add('eq-has-val');
      if (!st.labels.has(k)) st.labels.set(k, []);
      st.labels.get(k).push(lab);
    }
  }
  for (const k of only || Object.keys(st.values)) {
    const labs = st.labels.get(k);
    if (!labs) continue;
    const text = valueText(st.values[k], k, st.opts);
    if (st.shown.get(k) === text) continue;
    st.shown.set(k, text);
    for (const lab of labs) lab.textContent = text;
  }
}
