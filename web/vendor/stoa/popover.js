// Hover/tap-to-explain popovers. The page passes a dictionary of
// { key: { title, html } }; elements marked <span class="x" data-pop="key">
// get hover-to-peek, click-to-pin behaviour (Esc or click-away unpins).
// Keyboard accessible: tab to focus peeks, Enter or Space pins.
//
// Meets WCAG 2.2 SC 1.4.13 (content on hover or focus):
//   dismissible  Esc closes a peeking or pinned popover and leaves focus alone
//   hoverable    a short grace delay lets the pointer cross from the trigger
//                onto the popover, and hovering the popover keeps it open
//   persistent   it stays while its trigger is hovered or focused, while the
//                popover is hovered, or while pinned
//
// The open/close rules live in step(), a pure function with no DOM, so they
// can be tested in node. initPopovers() is the thin DOM layer around it.

// State: which trigger owns the open popover, whether it is pinned, and
// what the pointer and focus are doing right now.
export const INITIAL = Object.freeze({
  active: null, pinned: false, hover: null, overPop: false, focus: null,
});

const closed = (s) => ({ ...s, active: null, pinned: false, overPop: false });

// One event in, next state out. `el` is the trigger the event is about.
// Events: enter, leave, focus, blur, popenter, popleave, grace (the delay
// after a leave or blur ran out), activate (click, Enter or Space),
// escape, outside (a click anywhere else).
export function step(s, ev, el = null) {
  switch (ev) {
    case 'enter':
      return { ...s, hover: el, active: s.pinned ? s.active : el };
    case 'leave':
      return { ...s, hover: s.hover === el ? null : s.hover };
    case 'focus':
      return { ...s, focus: el, active: s.pinned ? s.active : el };
    case 'blur':
      return { ...s, focus: s.focus === el ? null : s.focus };
    case 'popenter':
      return s.active ? { ...s, overPop: true } : s;
    case 'popleave':
      return { ...s, overPop: false };
    case 'grace': {
      if (s.pinned || s.active === null) return s;
      if (s.hover === s.active || s.focus === s.active || s.overPop) return s;
      return closed(s);
    }
    case 'activate':
      if (s.pinned && s.active === el) return closed(s);
      return { ...s, pinned: true, active: el };
    case 'escape':
      return s.active === null ? s : closed(s);
    case 'outside':
      return s.pinned ? closed(s) : s;
    default:
      return s;
  }
}

// Space-separated id lists (aria-describedby) without clobbering ids that
// were already there.
export function addIdRef(list, id) {
  const ids = (list || '').split(/\s+/).filter(Boolean);
  if (!ids.includes(id)) ids.push(id);
  return ids.join(' ');
}
export function removeIdRef(list, id) {
  return (list || '').split(/\s+/).filter((t) => t && t !== id).join(' ');
}

export function initPopovers(POP, {
  selector = '.x', scope = document, graceMs = 200, onChange = null,
} = {}) {
  const pop = document.createElement('div');
  pop.id = 'pop';
  pop.setAttribute('role', 'tooltip');
  document.body.appendChild(pop);
  let s = INITIAL;
  let timer = 0;

  function place(el) {
    const r = el.getBoundingClientRect(), p = pop.getBoundingClientRect(), m = 10;
    const left = Math.max(m, Math.min(r.left + r.width / 2 - p.width / 2, innerWidth - p.width - m));
    let top = r.top - p.height - 10;
    if (top < m) top = r.bottom + 10;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  function setDescribed(el, on) {
    const next = on ? addIdRef(el.getAttribute('aria-describedby'), pop.id)
                    : removeIdRef(el.getAttribute('aria-describedby'), pop.id);
    if (next) el.setAttribute('aria-describedby', next);
    else el.removeAttribute('aria-describedby');
  }

  function apply(prev) {
    if (prev.active && prev.active !== s.active) {
      setDescribed(prev.active, false);
      prev.active.setAttribute('aria-expanded', 'false');
    }
    if (s.active && s.active !== prev.active) {
      const d = POP[s.active.dataset.pop];
      if (!d) { s = closed(s); return apply(prev); }
      pop.innerHTML = '<h4>' + d.title + '</h4>' + d.html;
      pop.classList.add('show');
      setDescribed(s.active, true);
      place(s.active);
    }
    if (!s.active) pop.classList.remove('show');
    if (s.active) s.active.setAttribute('aria-expanded', s.pinned ? 'true' : 'false');
    pop.classList.toggle('pinned', !!(s.active && s.pinned));
    pop.dataset.state = !s.active ? 'closed' : s.pinned ? 'pinned' : 'peek';
    if (onChange && (prev.active !== s.active || prev.pinned !== s.pinned)) {
      onChange({ open: !!s.active, pinned: s.pinned, trigger: s.active });
    }
  }

  function send(ev, el) {
    const prev = s;
    s = step(s, ev, el);
    if (s !== prev) apply(prev);
    return prev.active !== s.active || prev.pinned !== s.pinned;
  }

  function later() {
    clearTimeout(timer);
    timer = setTimeout(() => send('grace'), graceMs);
  }

  scope.querySelectorAll(selector).forEach((el) => {
    el.tabIndex = 0;
    el.setAttribute('role', 'button');
    el.setAttribute('aria-expanded', 'false');
    el.addEventListener('mouseenter', () => send('enter', el));
    el.addEventListener('mouseleave', () => { send('leave', el); later(); });
    el.addEventListener('focus', () => send('focus', el));
    el.addEventListener('blur', () => { send('blur', el); later(); });
    el.addEventListener('click', (e) => { e.stopPropagation(); send('activate', el); });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); el.click(); }
    });
  });
  pop.addEventListener('mouseenter', () => send('popenter'));
  pop.addEventListener('mouseleave', () => { send('popleave'); later(); });
  pop.addEventListener('click', (e) => e.stopPropagation());
  document.addEventListener('click', () => send('outside'));
  // Esc never moves focus; it only closes.
  addEventListener('keydown', (e) => { if (e.key === 'Escape') send('escape'); });
  addEventListener('scroll', () => { if (s.active) place(s.active); }, true);

  return {
    el: pop,
    close: () => send('escape'),
    get state() { return { open: !!s.active, pinned: s.pinned, trigger: s.active }; },
  };
}
