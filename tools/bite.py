#!/usr/bin/env python3
"""Regenerate the "## Who it bites" section of every constraint page from the
scoring tables in the dossiers. Deterministic; run after any dossier changes.

A constraint page lists every dossier whose verdict on it is anything other
than N/A, grouped by verdict, physics first then fiction.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ROW = re.compile(r"^\|\s*([A-Z]{3}-\d+)\s*\|\s*([A-Z/]+)\s*\|(.*)\|\s*$")
ORDER = ["VIOLATES", "DODGES", "SATISFIES", "SILENT", "ENGAGES", "RULE"]


def title_of(text, stem):
    m = re.search(r"^# (.+)$", text, re.M)
    return m.group(1).strip() if m else stem


def main():
    hits = {}  # cid -> list of (kind, verdict, title, relpath, note)
    for kind in ("physics", "fiction"):
        for p in sorted((ROOT / "theories" / kind).glob("*.md")):
            if p.name in ("TEMPLATE.md", "README.md"):
                continue
            text = p.read_text(encoding="utf-8")
            title = title_of(text, p.stem)
            for line in text.splitlines():
                m = ROW.match(line)
                if not m or m.group(2) == "N/A":
                    continue
                hits.setdefault(m.group(1), []).append(
                    (kind, m.group(2), title, f"../theories/{kind}/{p.name}",
                     m.group(3).strip()))
    n = 0
    for page in sorted((ROOT / "constraints").glob("*-[0-9]*.md")):
        cid = page.stem.upper()
        text = page.read_text(encoding="utf-8")
        rows = hits.get(cid, [])
        lines = ["## Who it bites", ""]
        if not rows:
            lines.append("No dossier has scored against this entry yet.")
        else:
            for kind, label in (("physics", "Physics proposals"),
                                ("fiction", "Fictional drives")):
                sub = [r for r in rows if r[0] == kind]
                if not sub:
                    continue
                lines += [f"**{label}**", ""]
                for v in ORDER:
                    for _, verdict, title, rel, note in sorted(
                            sub, key=lambda r: r[2].lower()):
                        if verdict != v:
                            continue
                        entry = f"- {verdict}: [{title}]({rel})"
                        if note:
                            entry += f". {note}"
                        lines.append(entry)
                lines.append("")
        body = "\n".join(lines).rstrip() + "\n\n"
        new = re.sub(r"## Who it bites\n.*?(?=## Sources)", lambda _: body, text, flags=re.S)
        if new != text:
            page.write_text(new, encoding="utf-8")
            n += 1
    print(f"who-it-bites: {len(hits)} constraints referenced, {n} pages updated")


if __name__ == "__main__":
    main()
