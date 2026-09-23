// TALARIA site search. No libraries, no server: the index is data/search.json,
// built by tools/build_search.py and fetched on the first keystroke.
//
//   import { mountSearch } from './search.js';
//   mountSearch(document.getElementById('q'), document.getElementById('q-results'), { base: '' });
//
// base is the path from the page to the web root, '' on the hub and the atlas,
// '../' from a demo, '../../' from a rendered page.

const LIMIT = 12;
const KIND_LABEL = { physics: 'physics', fiction: 'fiction', constraint: 'register', lineage: 'lineage', demo: 'demo', page: 'page' };

function norm(s) {
  return ' ' + String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim() + ' ';
}

function words(q) {
  return norm(q).trim().split(' ').filter(Boolean);
}

// A word matches a field when it starts some token there (prefix match).
function hit(field, w) { return field.includes(' ' + w); }

function score(rec, ws, phrase) {
  let s = 0;
  for (const w of ws) {
    let here = 0;
    if (hit(rec._t, w)) here += 10;
    if (hit(rec._h, w)) here += 4;
    if (hit(rec._x, w)) here += 1;
    if (!here) return 0;
    s += here;
  }
  if (ws.length > 1) {
    if (rec._t.includes(phrase)) s += 20;
    else if (rec._h.includes(phrase)) s += 8;
    else if (rec._x.includes(phrase)) s += 2;
  }
  // an exact whole-word hit on the title beats a prefix hit
  for (const w of ws) if (rec._t.includes(' ' + w + ' ')) s += 3;
  return s;
}

export function rank(records, query) {
  const ws = words(query);
  if (!ws.length) return [];
  const phrase = ' ' + ws.join(' ');
  const out = [];
  for (const r of records) {
    const s = score(r, ws, phrase);
    if (s > 0) out.push([s, r]);
  }
  out.sort((a, b) => b[0] - a[0] || a[1].title.localeCompare(b[1].title));
  return out.slice(0, LIMIT).map(([, r]) => r);
}

export function prepare(records) {
  for (const r of records) {
    r._t = norm(r.title);
    r._h = norm(r.hook);
    r._x = norm(r.text);
  }
  return records;
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

export function mountSearch(inputEl, resultsEl, opts = {}) {
  resultsEl.classList.add('search-results');
  const base = opts.base || '';
  let data = null, loading = null, items = [], active = -1;
  resultsEl.hidden = true;
  resultsEl.classList.add('search-results');
  inputEl.setAttribute('autocomplete', 'off');
  inputEl.setAttribute('aria-autocomplete', 'list');

  function load() {
    if (data) return Promise.resolve(data);
    if (!loading) {
      loading = fetch(base + 'data/search.json').then(r => r.json()).then(j => (data = prepare(j)));
    }
    return loading;
  }

  function clear() {
    items = []; active = -1;
    resultsEl.innerHTML = '';
    resultsEl.hidden = true;
  }

  function render(query) {
    items = rank(data, query);
    active = -1;
    if (!query.trim()) { clear(); return; }
    if (!items.length) {
      resultsEl.innerHTML = '<li class="search-empty">Nothing matches. Try a title, a loophole word or a register code.</li>';
      resultsEl.hidden = false;
      return;
    }
    resultsEl.innerHTML = items.map((r, i) => {
      const chipCls = 'chip' + (r.loophole ? ' ' + r.loophole : '');
      const chipTxt = r.loophole ? r.loophole + ' · ' + KIND_LABEL[r.kind] : KIND_LABEL[r.kind] || r.kind;
      return `<li data-i="${i}"><a href="${esc(base + r.url)}"><span class="${chipCls}">${esc(chipTxt)}</span><span class="t">${esc(r.title)}</span>${r.hook ? `<span class="hook">${esc(r.hook)}</span>` : ''}</a></li>`;
    }).join('');
    resultsEl.hidden = false;
  }

  function setActive(i) {
    const lis = resultsEl.querySelectorAll('li[data-i]');
    if (!lis.length) return;
    active = (i + lis.length) % lis.length;
    lis.forEach((li, k) => li.classList.toggle('active', k === active));
    lis[active].scrollIntoView({ block: 'nearest' });
  }

  inputEl.addEventListener('input', () => {
    const q = inputEl.value;
    if (!q.trim()) { clear(); return; }
    load().then(() => { if (inputEl.value === q) render(q); });
  });

  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Escape') { inputEl.value = ''; clear(); return; }
    if (resultsEl.hidden) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
    else if (e.key === 'Enter') {
      const pick = items[active >= 0 ? active : 0];
      if (pick) { e.preventDefault(); location.href = base + pick.url; }
    }
  });

  inputEl.addEventListener('focus', () => { if (items.length && inputEl.value.trim()) resultsEl.hidden = false; });
  document.addEventListener('click', e => {
    if (!resultsEl.contains(e.target) && e.target !== inputEl) resultsEl.hidden = true;
  });
  resultsEl.addEventListener('mousemove', e => {
    const li = e.target.closest('li[data-i]');
    if (li) setActive(+li.dataset.i);
  });

  return { clear, load };
}
