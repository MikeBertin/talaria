#!/usr/bin/env python3
"""Build the site search index.

  web/data/search.json   one record per page: url, kind, title, hook, loophole, text

Markdown pages (constraints, physics, fiction, lineage) are rendered with the
same converter the site uses, then flattened to plain lowercase prose with the
scoring table removed. The demos, the atlas, the timeline, the cards gallery
and the method pages are read from their HTML: the hero, the notice cards and
the prose sections. Text is capped so the whole file stays well under 400 KB.
Run after build_web.py, before serving.
"""
import html
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "tools"))
from build_web import md_to_html, title_hook, KINDS, APPARATUS, META  # noqa: E402

WEB = ROOT / "web"
OUT = WEB / "data" / "search.json"
CAP = 1500
KIND_NAME = {"constraints": "constraint", "physics": "physics", "fiction": "fiction", "lineage": "lineage"}
HTML_PAGES = [
    ("demos/antitelephone.html", "demo"),
    ("demos/alcubierre-bubble.html", "demo"),
    ("demos/wormhole.html", "demo"),
    ("demos/pick-a-drive.html", "demo"),
    ("demos/rocket.html", "demo"),
    ("demos/no-signalling.html", "demo"),
    ("atlas.html", "page"),
    ("timeline.html", "page"),
    ("cards/index.html", "page"),
    ("pages/about/grading.html", "page"),
    ("pages/about/register.html", "page"),
    ("pages/about/readme.html", "page"),
]
SCORE_TABLE = re.compile(r"<div class='tablewrap'><table>(?:(?!</table>).)*?<td>[A-Z]{3}-\d+</td>.*?</table></div>", re.S)
TAG = re.compile(r"<[^>]+>")
CONF = re.compile(r"\[(?:HIGH|MED|LOW)\]\s*S\d")


def flatten(fragment):
    """HTML fragment to one line of lowercase prose."""
    s = re.sub(r"<(script|style)\b.*?</\1>", " ", fragment, flags=re.S)
    s = re.sub(r"</(p|li|h\d|td|th|tr|div|section|blockquote)>", " ", s)
    s = TAG.sub("", s)
    s = html.unescape(s)
    s = CONF.sub("", s)
    s = re.sub(r"\s+", " ", s).strip().lower()
    return s


def cap(s):
    if len(s) <= CAP:
        return s
    cut = s[:CAP]
    return cut[: cut.rfind(" ")] if " " in cut else cut


def md_record(kind, path):
    text = path.read_text(encoding="utf-8")
    title, hook = title_hook(text, path.stem)
    body = md_to_html(text)
    body = SCORE_TABLE.sub(" ", body)
    body = re.sub(r"<h1>.*?</h1>", " ", body, count=1, flags=re.S)
    body = re.sub(r"<p><em>.*?</em></p>", " ", body, count=1, flags=re.S)
    body = re.sub(r"<p><strong>Kind:</strong>.*?</p>", " ", body, count=1, flags=re.S)
    rec = {"url": f"pages/{kind}/{path.stem}.html", "kind": KIND_NAME[kind], "title": title, "hook": hook}
    if kind in ("physics", "fiction"):
        m = META["loophole"].search(text)
        if m:
            rec["loophole"] = m.group(1)
    rec["text"] = cap(flatten(body))
    return rec


def html_record(rel, kind):
    doc = (WEB / rel).read_text(encoding="utf-8")
    doc = re.sub(r"<(script|style)\b.*?</\1>", " ", doc, flags=re.S)
    m = re.search(r"<h1[^>]*>(.*?)</h1>", doc, re.S)
    title = re.sub(r"\s+", " ", html.unescape(TAG.sub("", m.group(1))).strip()) if m else rel
    hook = ""
    m = re.search(r"<p class=\"sub\">(.*?)</p>", doc, re.S)
    if m:
        hook = html.unescape(TAG.sub("", m.group(1))).strip()
    else:
        m = re.search(r"<h1>.*?</h1>\s*<p>(.*?)</p>", doc, re.S)
        if m:
            first = html.unescape(TAG.sub("", m.group(1))).strip()
            hook = re.match(r".*?[.!?](?=\s|$)", first, re.S).group(0) if re.search(r"[.!?](?=\s|$)", first) else first
    hook = re.sub(r"\s+", " ", hook)
    parts = []
    parts += re.findall(r"<header class=\"hero\">(.*?)</header>", doc, re.S)
    parts += re.findall(r"<section class=\"(?:notice|prose)\">(.*?)</section>", doc, re.S)
    parts += re.findall(r"<p class=\"(?:prose|rchint)\"[^>]*>(.*?)</p>", doc, re.S)
    parts += re.findall(r"<main class=\"doc\">(.*?)</main>", doc, re.S)
    body = " ".join(parts)
    body = SCORE_TABLE.sub(" ", body)
    return {"url": rel, "kind": kind, "title": title, "hook": hook, "text": cap(flatten(body))}


def build():
    records = []
    for kind, d in KINDS.items():
        for p in sorted(d.glob("*.md")):
            if p.name in APPARATUS:
                continue
            records.append(md_record(kind, p))
    for rel, kind in HTML_PAGES:
        if (WEB / rel).exists():
            records.append(html_record(rel, kind))
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(json.dumps(records, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"search: {len(records)} records, {OUT.stat().st_size / 1024:.0f} KB -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    build()
