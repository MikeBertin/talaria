#!/usr/bin/env python3
"""Add lineage back-links to the dossiers a lineage page links to.

For every page in lineage/, find the dossiers it links (theories/physics or
theories/fiction) and make sure each of those dossiers carries one line at
the end of its "## Origin and lineage" section:

    Lineage: [Title](../../lineage/slug.md).

Idempotent: existing back-link lines are replaced, never duplicated.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LINK = re.compile(r"\]\(\.\./theories/(physics|fiction)/([a-z0-9-]+)\.md\)")
LINE_RE = re.compile(r"^Lineage: .*$", re.M)


def title_of(p):
    m = re.search(r"^# (.+)$", p.read_text(encoding="utf-8"), re.M)
    return m.group(1).strip() if m else p.stem


def main():
    targets = {}  # dossier path -> list of (title, slug)
    for page in sorted((ROOT / "lineage").glob("*.md")):
        if page.name in ("README.md", "TEMPLATE.md"):
            continue
        for kind, slug in set(LINK.findall(page.read_text(encoding="utf-8"))):
            d = ROOT / "theories" / kind / f"{slug}.md"
            if d.exists():
                targets.setdefault(d, []).append((title_of(page), page.stem))
    n = 0
    for d, pages in targets.items():
        text = d.read_text(encoding="utf-8")
        line = "Lineage: " + "; ".join(
            f"[{t}](../../lineage/{s}.md)" for t, s in sorted(pages, key=lambda x: x[1])) + "."
        if LINE_RE.search(text):
            new = LINE_RE.sub(lambda _: line, text, count=1)
        else:
            m = re.search(r"^## Origin and lineage\n(.*?)(?=^## )", text, re.M | re.S)
            if not m:
                print(f"no Origin and lineage section: {d.relative_to(ROOT)}")
                continue
            body = m.group(1).rstrip("\n")
            new = text[:m.start(1)] + body + "\n\n" + line + "\n\n" + text[m.end(1):]
        if new != text:
            d.write_text(new, encoding="utf-8")
            n += 1
    print(f"backlinks: {len(targets)} dossiers referenced, {n} updated")


if __name__ == "__main__":
    main()
