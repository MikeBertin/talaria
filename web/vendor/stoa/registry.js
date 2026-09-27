// The linkage engine. One entity, one colour, everywhere.
// Any DOM node tagged data-ent="q" (or whatever keys your palette uses)
// joins the web: hovering it sets data-hot on <html>, CSS lights every
// sibling tag up, and canvases subscribed via onHot() redraw with the same
// entity glowing.

let listeners = [];
let current = null;

export function hot() { return current; }

export function setHot(ent) {
  if (ent === current) return;
  current = ent || null;
  const root = document.documentElement;
  if (current) root.dataset.hot = current;
  else delete root.dataset.hot;
  for (const fn of listeners) fn(current);
}

export function onHot(fn) { listeners.push(fn); }

// Clear the hot entity only if it is still `ent`, so leaving or blurring one
// node never switches off an entity something else has since lit.
function release(ent) { if (current === ent) setHot(null); }

// Why a tagged node wants its entity lit. A node stays lit while any one of
// these holds: the pointer is over it, a press that started on it has not
// been released yet (so dragging a slider past its ends keeps it lit) or it
// has keyboard focus. Pure: (state, event type) -> next state.
export const LINK_IDLE = Object.freeze({ hover: false, held: false, focus: false });

export function linkStep(s, type) {
  switch (type) {
    case 'enter': return { ...s, hover: true };
    case 'leave': return { ...s, hover: false };
    case 'down': return { ...s, held: true };
    case 'up': return { ...s, held: false };
    case 'focus': return { ...s, focus: true };
    case 'blur': return { ...s, focus: false };
    default: return s;
  }
}

export const linkWants = s => !!(s.hover || s.held || s.focus);

function focusVisible(el) {
  try { return el.matches(':focus-visible'); } catch { return true; }
}

export function wire(scope = document) {
  for (const el of scope.querySelectorAll('[data-ent]')) {
    if (el.dataset.wired) continue;
    el.dataset.wired = '1';
    let s = LINK_IDLE;
    const go = type => {
      const was = linkWants(s);
      s = linkStep(s, type);
      const now = linkWants(s);
      if (now && (!was || type === 'enter' || type === 'focus')) setHot(el.dataset.ent);
      else if (!now && was) release(el.dataset.ent);
    };
    el.addEventListener('mouseenter', () => go('enter'));
    el.addEventListener('mouseleave', () => go('leave'));
    el.addEventListener('pointerdown', () => {
      go('down');
      addEventListener('pointerup', () => go('up'), { once: true });
      addEventListener('pointercancel', () => go('up'), { once: true });
    });
    // Keyboard focus lights the entity like hover does (R14). A mouse click
    // that focuses a button is already covered by hover, so only a visible
    // focus ring counts; otherwise a clicked node would stay lit until blur.
    el.addEventListener('focus', () => { if (focusVisible(el)) go('focus'); });
    el.addEventListener('blur', () => go('blur'));
  }
}

// ---------------------------------------------------------------------------
// Colours
//
// A colours map is { key: colour }. Each value may be a plain colour string
// (the original shape) or an entity object in the palette shape:
//   { colour, emphasis?, name?, note? }  or  { mark, text, name, ladder: { C, A } }
// colourOf/emphasisOf pull the default (C) and emphasis (A) tints out of
// either shape.

export function colourOf(v) {
  if (v == null) return null;
  if (typeof v === 'string') return v;
  return v.colour ?? v.color ?? v.mark ?? v.ladder?.C ?? null;
}

export function emphasisOf(v) {
  if (v == null || typeof v === 'string') return null;
  return v.emphasis ?? v.ladder?.A ?? null;
}

// Emphasis timing, shared by the CSS pulse and canvases that want to match
// it. Same curve as motion.js thereAndBack and the same length as FEEDBACK
// (tests pin both), inlined so registry.js stays a single copy-in file.
export const EMPHASIS_MS = 400;
export const EMPHASIS_SCALE = 1.08;

const smooth01 = t => { t = t < 0 ? 0 : t > 1 ? 1 : t; return t * t * t * (t * (6 * t - 15) + 10); };

// How far into the out-and-back pulse a canvas should be, `ms` after the
// entity became hot: k runs 0 -> 1 -> 0 (mix k of the way from the C tint to
// the A tint) and scale runs 1 -> peak -> 1. Outside the pulse: { k: 0, scale: 1 }.
export function emphasisAt(ms, { duration = EMPHASIS_MS, scale = EMPHASIS_SCALE } = {}) {
  if (!(ms > 0) || !(ms < duration)) return { k: 0, scale: 1 };
  const t = ms / duration;
  const k = smooth01(t < 0.5 ? 2 * t : 2 * (1 - t));
  return { k, scale: 1 + (scale - 1) * k };
}

// Builds the CSS that colours every [data-ent] tag and runs the glow-and-dim
// hover effect, from a { key: colour } map. Pure string in, string out, so
// the rules stay in lockstep with the palette instead of being hand-copied.
//
// Every entity also gets --ent-colour (its default tint) and --ent-emph (its
// emphasis tint, or the default when none is known) for other parts to read.
//
// emphasis (opt-in, off by default): when an entity becomes hot, its tags do
// a brief out-and-back pulse: scale up to `emphasisScale` and brighten to the
// emphasis tint, then back to rest within `emphasisMs`. Pass `true` to take
// the A tints from entity objects, or a { key: colour } map of A tints. With
// reduced motion the scale is dropped and the tag simply holds its emphasis
// tint while hot.
export function linkageCSS(colours, {
  dim = 0.35, glowPx = 6,
  emphasis = false, emphasisMs = EMPHASIS_MS, emphasisScale = EMPHASIS_SCALE,
} = {}) {
  const keys = Object.keys(colours);
  const base = Object.fromEntries(keys.map(k => [k, colourOf(colours[k])]));
  const emph = Object.fromEntries(keys.map(k => [k,
    (emphasis && typeof emphasis === 'object' ? emphasis[k] : null) ??
    emphasisOf(colours[k]) ?? base[k]]));
  const tint = keys.map(k =>
    `[data-ent="${k}"] { color: ${base[k]}; }`).join('\n');
  const vars = keys.map(k =>
    `[data-ent="${k}"] { --ent-colour: ${base[k]}; --ent-emph: ${emph[k]}; }`).join('\n');
  const lit = keys.map(k =>
    `html[data-hot="${k}"] [data-ent="${k}"]`).join(',\n');
  let css = `[data-ent] { cursor: default; transition: filter 120ms, opacity 120ms; }
${tint}
${vars}
html[data-hot] [data-ent] { opacity: ${dim}; }
${lit} {
  opacity: 1;
  filter: drop-shadow(0 0 ${glowPx}px currentColor);
}`;
  if (emphasis) css += '\n' + emphasisCSS(lit, { ms: emphasisMs, scale: emphasisScale });
  return css;
}

// The pulse. `scale` (the individual transform property) composes with any
// transform a node already has, including an SVG transform attribute, so it
// cannot knock a node out of place. Scale does nothing to plain inline boxes,
// so short inline tags become inline-block (low specificity through :where,
// easy to override). data-emph="tint" keeps the colour pulse without the
// scale (long phrases that must wrap, form controls); data-emph="off" skips
// the pulse entirely.
function emphasisCSS(lit, { ms, scale }) {
  const ease = 'cubic-bezier(0.65, 0, 0.35, 1)';
  const pulse = lit.split(',\n').map(s => `${s}:not([data-emph])`).join(',\n');
  const tintOnly = lit.split(',\n').map(s =>
    `${s}:is([data-emph="tint"], input, select, textarea, canvas)`).join(',\n');
  const hold = lit.split(',\n').map(s => `${s}:not([data-emph="off"])`).join(',\n');
  return `@keyframes stoa-ent-pulse { 50% { scale: ${scale}; color: var(--ent-emph, currentColor); } }
@keyframes stoa-ent-tint { 50% { color: var(--ent-emph, currentColor); } }
:where(span, var, i, b, em, strong, code, abbr, a, kbd, sub, sup)[data-ent]:not([data-emph]) { display: inline-block; }
svg [data-ent] { transform-box: fill-box; transform-origin: center; }
@media (prefers-reduced-motion: no-preference) {
${pulse} {
  animation: stoa-ent-pulse ${ms}ms ${ease};
}
${tintOnly} {
  animation: stoa-ent-tint ${ms}ms ${ease};
}
}
@media (prefers-reduced-motion: reduce) {
${hold} {
  animation: none;
  color: var(--ent-emph, currentColor);
}
}`;
}

// Convenience: mint the CSS and append it to <head>.
export function injectLinkage(colours, opts) {
  const style = document.createElement('style');
  style.textContent = linkageCSS(colours, opts);
  document.head.appendChild(style);
  return style;
}
