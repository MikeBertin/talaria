// Chapter tabs with hash routing, prev/next navigation and optional
// per-chapter full-source panels.
//
// Markup contract: a sticky <nav class="tabs"> holding <a href="#ch1"
// data-tab="ch1"> links, and one <section class="chapter" id="ch1"> per
// chapter inside <main>. Call initChapters(['ch1', 'ch2', ...]).

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

// A collapsible panel that fetches and shows the real files behind a demo.
// files: paths relative to the page. shared: appended after, deduplicated.
export function sourcePanel(files, {
  shared = [],
  summary = 'full source: the code actually running this chapter',
} = {}) {
  const details = document.createElement('details');
  details.className = 'source';
  const all = [...files, ...shared.filter(f => !files.includes(f))];
  details.innerHTML =
    `<summary>${esc(summary)}</summary>` +
    `<div class="src-files">${all.map((f, i) =>
      `<button data-file="${f}" class="${i === 0 ? 'active' : ''}">${esc(f)}</button>`).join('')}</div>` +
    `<pre class="src-view">…</pre>`;
  const view = details.querySelector('.src-view');
  async function show(file, btn) {
    details.querySelectorAll('.src-files button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    view.textContent = 'loading…';
    try { view.textContent = await (await fetch(file)).text(); }
    catch { view.textContent = `could not load ${file}`; }
  }
  details.querySelectorAll('.src-files button').forEach(b =>
    b.addEventListener('click', () => show(b.dataset.file, b)));
  details.addEventListener('toggle', () => {
    if (details.open && view.textContent === '…')
      show(all[0], details.querySelector('.src-files button'));
  });
  return details;
}

// Wires the tab bar, hash routing and prev/next links between chapters.
// sources: optional { chapterId: [files] } map; when given, each chapter
// gets a sourcePanel appended. sharedSources is passed through to each panel.
export function initChapters(ids, { sources = null, sharedSources = [] } = {}) {
  const titles = Object.fromEntries(ids.map(id =>
    [id, document.querySelector(`#${id} h2`)?.textContent ?? id]));

  for (const id of ids) {
    const section = document.getElementById(id);
    if (sources && sources[id])
      section.appendChild(sourcePanel(sources[id], { shared: sharedSources }));
    const n = ids.indexOf(id);
    const nav = document.createElement('div');
    nav.className = 'chapter-nav';
    const prev = n > 0 ? ids[n - 1] : null;
    const next = n < ids.length - 1 ? ids[n + 1] : null;
    nav.innerHTML =
      (prev ? `<a href="#${prev}">← ${esc(titles[prev])}</a>` : '<span></span>') +
      (next ? `<a href="#${next}">${esc(titles[next])} →</a>` : '<span></span>');
    section.appendChild(nav);
  }

  function activate(id) {
    if (!ids.includes(id)) id = ids[0];
    for (const cid of ids)
      document.getElementById(cid).classList.toggle('active', cid === id);
    document.querySelectorAll('.tabs a').forEach(a =>
      a.classList.toggle('active', a.dataset.tab === id));
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', () => activate(location.hash.slice(1)));
  activate(location.hash.slice(1) || ids[0]);
  return activate;
}
