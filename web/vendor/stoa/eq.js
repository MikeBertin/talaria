// Hand-rolled equation markup. No KaTeX: the equations in these benches are
// simple and rolling our own gives every symbol a data-ent tag the linkage
// registry can see.

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

// Inline helpers, each returns an HTML string.
export const sym = (ent, txt, opts = {}) => {
  const bold = opts.bold ? ' eq-bold' : '';
  return `<span class="eq-sym${bold}" data-ent="${ent}">${esc(txt)}</span>`;
};
export const op = txt => `<span class="eq-op">${esc(txt)}</span>`;
export const txt = t => `<span class="eq-txt">${esc(t)}</span>`;
export const sup = t => `<sup class="eq-sup">${esc(t)}</sup>`;
export const sub = t => `<sub class="eq-sub">${esc(t)}</sub>`;
export const frac = (top, bottom) =>
  `<span class="eq-frac"><span class="eq-top">${top}</span><span class="eq-bottom">${bottom}</span></span>`;
export const sqrt = inner => `<span class="eq-sqrt">&radic;<span class="eq-sqrt-arg">${inner}</span></span>`;
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
