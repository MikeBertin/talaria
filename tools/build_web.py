#!/usr/bin/env python3
"""Build the static site data from the catalogue.

  web/data/talaria.js      window.TALARIA: register, dossiers, lineage, verdicts
  web/pages/<kind>/<slug>.html   every markdown page rendered into the site shell

Hand-rolled markdown: headings, paragraphs, bullet and numbered lists, tables,
blockquotes, fenced code, inline code, bold, italic, links (.md rewritten to
the site), horizontal rules. LaTeX is passed through untouched for KaTeX's
auto-render on the page. Run after any content change, before serving.
"""
import csv
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WEB = ROOT / "web"
KINDS = {
    "constraints": ROOT / "constraints",
    "physics": ROOT / "theories" / "physics",
    "fiction": ROOT / "theories" / "fiction",
    "lineage": ROOT / "lineage",
}
APPARATUS = {"README.md", "TEMPLATE.md", "INDEX.md", "CATALOGUE.md"}
ROW = re.compile(r"^\|\s*([A-Z]{3}-\d+)\s*\|\s*([A-Z/]+)\s*\|(.*)\|\s*$")
META = {
    "loophole": re.compile(r"\*\*Loophole:\*\*\s*(L\d)"),
    "standing": re.compile(r"\*\*Standing:\*\*\s*(K\d)"),
    "bill": re.compile(r"\*\*Bill:\*\*\s*([^·\n]+)"),
    "notability": re.compile(r"\*\*Notability:\*\*\s*(N\d)"),
    "coherence": re.compile(r"\*\*Coherence:\*\*\s*(F\d)"),
    "causality": re.compile(r"\*\*Causality:\*\*\s*(C-[a-z]+)"),
    "family": re.compile(r"\*\*Family:\*\*\s*([A-Z]{3})"),
    "span": re.compile(r"\*\*Span:\*\*\s*([^·\n]+)"),
    "reviewed": re.compile(r"\*\*Last reviewed:\*\*\s*(\d{4}-\d{2}-\d{2})"),
}


# ---------------------------------------------------------------- markdown
def inline(s):
    # protect inline math and code from the other rules
    holds = []
    def hold(m):
        holds.append(m.group(0)); return f"\x00{len(holds)-1}\x00"
    s = re.sub(r"\$\$.+?\$\$|\$[^$\n]+\$", hold, s)
    s = re.sub(r"`[^`]+`", hold, s)
    s = html.escape(s, quote=False)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    def link(m):
        text, href = m.group(1), m.group(2)
        href = rewrite(href)
        return f'<a href="{href}">{text}</a>'
    s = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", link, s)
    def unhold(m):
        v = holds[int(m.group(1))]
        if v.startswith("`"):
            return f"<code>{html.escape(v[1:-1], quote=False)}</code>"
        return html.escape(v, quote=False)
    return re.sub(r"\x00(\d+)\x00", unhold, s)


def rewrite(href):
    """Rewrite repo-relative .md links to site pages."""
    if href.startswith(("http://", "https://", "#", "mailto:")):
        return href
    m = re.match(r"^(?:\.\./)*(?:(constraints|lineage)|theories/(physics|fiction)|(physics|fiction))/([a-z0-9-]+)\.md(#.*)?$", href)
    if m:
        kind = m.group(1) or m.group(2) or m.group(3)
        return f"../{kind}/{m.group(4)}.html{m.group(5) or ''}"
    m = re.match(r"^([a-z0-9-]+)\.md(#.*)?$", href)
    if m:
        return f"{m.group(1)}.html{m.group(2) or ''}"
    if href.endswith("README.md") or href.endswith("GRADING.md") or href.endswith("REGISTER.md") or href.endswith("CATALOGUE.md") or href.endswith("TEMPLATE.md") or href.endswith("INDEX.md") or href.endswith("ROADMAP.md"):
        return "https://github.com/mikebertin/talaria/blob/main/" + re.sub(r"^(\.\./)+", "", href)
    return href


def md_to_html(text):
    lines = text.splitlines()
    out, i = [], 0
    para = []
    def flush():
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>"); para.clear()
    while i < len(lines):
        ln = lines[i]
        s = ln.strip()
        if s.startswith("```"):
            flush(); j = i + 1; buf = []
            while j < len(lines) and not lines[j].strip().startswith("```"):
                buf.append(lines[j]); j += 1
            out.append("<pre><code>" + html.escape("\n".join(buf)) + "</code></pre>"); i = j + 1; continue
        if s.startswith("$$") and s.endswith("$$") and len(s) > 4:
            flush(); out.append(f"<div class='math'>{html.escape(s, quote=False)}</div>"); i += 1; continue
        if s.startswith("$$"):
            flush(); j = i + 1; buf = [s]
            while j < len(lines) and "$$" not in lines[j]:
                buf.append(lines[j]); j += 1
            if j < len(lines): buf.append(lines[j].strip())
            out.append("<div class='math'>" + html.escape("\n".join(buf), quote=False) + "</div>"); i = j + 1; continue
        m = re.match(r"^(#{1,4})\s+(.*)$", s)
        if m:
            flush(); lvl = len(m.group(1)); out.append(f"<h{lvl}>{inline(m.group(2))}</h{lvl}>"); i += 1; continue
        if s in ("---", "***"):
            flush(); out.append("<hr>"); i += 1; continue
        if s.startswith("|"):
            flush(); rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                rows.append(lines[i].strip()); i += 1
            cells = [[c.strip() for c in r.strip("|").split("|")] for r in rows]
            if len(cells) >= 2 and all(re.match(r"^:?-+:?$", c) for c in cells[1]):
                head, body = cells[0], cells[2:]
            else:
                head, body = None, cells
            t = ["<div class='tablewrap'><table>"]
            if head:
                t.append("<thead><tr>" + "".join(f"<th>{inline(c)}</th>" for c in head) + "</tr></thead>")
            t.append("<tbody>" + "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in body) + "</tbody></table></div>")
            out.append("".join(t)); continue
        if s.startswith(">"):
            flush(); buf = []
            while i < len(lines) and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip()[1:].strip()); i += 1
            out.append("<blockquote><p>" + inline(" ".join(buf)) + "</p></blockquote>"); continue
        m = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", ln)
        if m:
            flush(); ordered = m.group(2)[0].isdigit(); items = []
            while i < len(lines):
                m2 = re.match(r"^(\s*)([-*]|\d+\.)\s+(.*)$", lines[i])
                if m2:
                    items.append(m2.group(3)); i += 1
                elif lines[i].startswith("  ") and lines[i].strip() and items:
                    items[-1] += " " + lines[i].strip(); i += 1
                else:
                    break
            tag = "ol" if ordered else "ul"
            out.append(f"<{tag}>" + "".join(f"<li>{inline(it)}</li>" for it in items) + f"</{tag}>"); continue
        if not s:
            flush(); i += 1; continue
        para.append(s); i += 1
    flush()
    return "\n".join(out)


# ---------------------------------------------------------------- pages
SHELL = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} · TALARIA</title>
<link rel="stylesheet" href="../../vendor/stoa/theme.css">
<link rel="stylesheet" href="../../site.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
<link rel="icon" href="../../favicon.svg">
</head><body class="page">
<nav class="top"><a href="../../index.html">TALARIA</a><span>/</span><a href="../../atlas.html">atlas</a><span>/</span><span class="kind">{kind}</span></nav>
<main class="doc">
{body}
</main>
<footer>TALARIA · every faster-than-light scheme, real or invented, scored against the physics that says you can't · <a href="https://github.com/mikebertin/talaria">source</a></footer>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js" onload="renderMathInElement(document.body,{{delimiters:[{{left:'$$',right:'$$',display:true}},{{left:'$',right:'$',display:false}}],throwOnError:false}})"></script>
</body></html>
"""


def title_hook(text, stem):
    title, hook = stem, ""
    ls = text.splitlines()
    for i, l in enumerate(ls):
        if l.startswith("# "):
            title = l[2:].strip()
            for later in ls[i + 1:]:
                t = later.strip()
                if not t: continue
                if t.startswith("*") and not t.startswith("**"):
                    hook = t.strip("* ")
                break
            break
    return title, hook


def build():
    data = {"register": [], "physics": [], "fiction": [], "lineage": [], "families": {}}
    # register table
    reg = (ROOT / "constraints" / "REGISTER.md").read_text(encoding="utf-8")
    fam = None
    for line in reg.splitlines():
        m = re.match(r"^## ([A-Z]{3}): (.+)$", line)
        if m: fam = m.group(1); data["families"][fam] = m.group(2).strip(); continue
        m = re.match(r"^\|\s*\[?([A-Z]{3}-\d+)\]?(?:\([^)]*\))?\s*\|(.*)\|\s*$", line)
        if m and m.group(1) != "ID":
            cells = [c.strip() for c in m.group(2).split("|")]
            if len(cells) == 4:
                page = ROOT / "constraints" / f"{m.group(1).lower()}.md"
                title = title_hook(page.read_text(encoding="utf-8"), m.group(1))[0] if page.exists() else m.group(1)
                data["register"].append({"id": m.group(1), "family": fam, "title": title,
                                         "result": cells[0], "forbids": cells[1], "escapes": cells[2], "cite": cells[3]})
    # pages
    n = 0
    for kind, d in KINDS.items():
        outdir = WEB / "pages" / kind; outdir.mkdir(parents=True, exist_ok=True)
        for p in sorted(d.glob("*.md")):
            if p.name in APPARATUS: continue
            text = p.read_text(encoding="utf-8")
            title, hook = title_hook(text, p.stem)
            body = md_to_html(text)
            (outdir / f"{p.stem}.html").write_text(SHELL.format(title=html.escape(title), kind=kind, body=body), encoding="utf-8")
            n += 1
            meta = {k: (r.search(text).group(1).strip() if r.search(text) else "") for k, r in META.items()}
            entry = {"slug": p.stem, "title": title, "hook": hook, "reviewed": meta["reviewed"]}
            if kind in ("physics", "fiction"):
                entry.update({"loophole": meta["loophole"]})
                if kind == "physics": entry.update({"standing": meta["standing"], "bill": [b.strip() for b in meta["bill"].split(",") if b.strip()]})
                else: entry.update({"notability": meta["notability"], "coherence": meta["coherence"], "causality": meta["causality"]})
                verdicts, notes = {}, {}
                for line in text.splitlines():
                    m = ROW.match(line)
                    if m: verdicts[m.group(1)] = m.group(2); notes[m.group(1)] = m.group(3).strip()
                entry["verdicts"] = verdicts; entry["notes"] = notes
                data[kind].append(entry)
            elif kind == "lineage":
                entry["span"] = meta["span"]; data["lineage"].append(entry)
    (WEB / "data").mkdir(exist_ok=True)
    (WEB / "data" / "talaria.js").write_text("window.TALARIA = " + json.dumps(data, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"web: {n} pages, {len(data['register'])} register entries, {len(data['physics'])} physics, {len(data['fiction'])} fiction, {len(data['lineage'])} lineage")


if __name__ == "__main__":
    build()
