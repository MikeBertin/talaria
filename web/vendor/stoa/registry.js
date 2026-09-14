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

export function wire(scope = document) {
  for (const el of scope.querySelectorAll('[data-ent]')) {
    if (el.dataset.wired) continue;
    el.dataset.wired = '1';
    el.addEventListener('mouseenter', () => setHot(el.dataset.ent));
    el.addEventListener('mouseleave', () => setHot(null));
  }
}

// Builds the CSS that colours every [data-ent] tag and runs the glow-and-dim
// hover effect, from a { key: colour } map. Pure string in, string out, so
// the rules stay in lockstep with the palette instead of being hand-copied.
export function linkageCSS(colours, { dim = 0.35, glowPx = 6 } = {}) {
  const keys = Object.keys(colours);
  const tint = keys.map(k =>
    `[data-ent="${k}"] { color: ${colours[k]}; }`).join('\n');
  const lit = keys.map(k =>
    `html[data-hot="${k}"] [data-ent="${k}"]`).join(',\n');
  return `[data-ent] { cursor: default; transition: filter 120ms, opacity 120ms; }
${tint}
html[data-hot] [data-ent] { opacity: ${dim}; }
${lit} {
  opacity: 1;
  filter: drop-shadow(0 0 ${glowPx}px currentColor);
}`;
}

// Convenience: mint the CSS and append it to <head>.
export function injectLinkage(colours, opts) {
  const style = document.createElement('style');
  style.textContent = linkageCSS(colours, opts);
  document.head.appendChild(style);
  return style;
}
