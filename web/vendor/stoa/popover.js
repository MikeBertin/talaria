// Hover/tap-to-explain popovers. The page passes a dictionary of
// { key: { title, html } }; elements marked <span class="x" data-pop="key">
// get hover-to-peek, click-to-pin behaviour (Esc or click-away unpins).
// Keyboard accessible: tab to focus peeks, Enter or Space pins.

export function initPopovers(POP, { selector = '.x', scope = document } = {}) {
  const pop = document.createElement('div');
  pop.id = 'pop';
  pop.setAttribute('role', 'tooltip');
  document.body.appendChild(pop);
  let pinned = null;

  function show(el) {
    const d = POP[el.dataset.pop];
    if (!d) return;
    pop.innerHTML = '<h4>' + d.title + '</h4>' + d.html;
    pop.classList.add('show');
    const r = el.getBoundingClientRect(), p = pop.getBoundingClientRect(), m = 10;
    const left = Math.max(m, Math.min(r.left + r.width / 2 - p.width / 2, innerWidth - p.width - m));
    let top = r.top - p.height - 10;
    if (top < m) top = r.bottom + 10;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }
  function hide() { pop.classList.remove('show'); }

  scope.querySelectorAll(selector).forEach((el) => {
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.addEventListener('mouseenter', () => { if (!pinned) show(el); });
    el.addEventListener('mouseleave', () => { if (!pinned) hide(); });
    el.addEventListener('focus', () => { if (!pinned) show(el); });
    el.addEventListener('blur', () => { if (!pinned) hide(); });
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (pinned === el) { pinned = null; hide(); } else { pinned = el; show(el); }
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
  pop.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => { if (pinned) { pinned = null; hide(); } });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && pinned) { pinned = null; hide(); } });
  addEventListener('scroll', () => { if (pinned) show(pinned); }, true);
}
