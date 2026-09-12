#!/usr/bin/env python3
"""Seed one page per register entry from constraints/REGISTER.md.

Creates constraints/<id-lowercase>.md for any id that has no page yet, with
the schema the checker expects (H1, italic hook, Kind/Family/Last reviewed
line, sections, Sources last). Existing pages are never overwritten: the
seeded skeleton is a starting point that gets rewritten by hand.

Usage: python3 tools/seed_constraints.py [--force-list]
"""
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
REG = ROOT / "constraints" / "REGISTER.md"
ROW = re.compile(r"^\|\s*\[?([A-Z]{3}-\d+)\]?(?:\([^)]*\))?\s*\|(.*)\|\s*$")

FAMILY_NAMES = {}
for line in REG.read_text(encoding="utf-8").splitlines():
    m = re.match(r"^## ([A-Z]{3}): (.+)$", line)
    if m:
        FAMILY_NAMES[m.group(1)] = m.group(2).strip()


def rows():
    for line in REG.read_text(encoding="utf-8").splitlines():
        m = ROW.match(line)
        if not m or m.group(1) == "ID":
            continue
        cells = [c.strip() for c in m.group(2).split("|")]
        if len(cells) != 4:
            print(f"skip {m.group(1)}: {len(cells)} cells", file=sys.stderr)
            continue
        yield m.group(1), cells


def first_sentence(s):
    s = s.split(". ")[0].rstrip(".")
    return s if len(s) < 140 else s[:137].rsplit(" ", 1)[0] + "…"


def page(cid, result, forbids, escapes, cite):
    fam = cid.split("-")[0]
    today = date.today().isoformat()
    return f"""# {cid}: {first_sentence(result)}

*{first_sentence(forbids)}.*

**Kind:** constraint · **Family:** {fam} ({FAMILY_NAMES.get(fam, fam)}) · **Last reviewed:** {today}

## The result

{result}

## What it forbids or costs

{forbids}

## Escape hatches

{escapes}

## Who it bites

Filled in as dossiers are scored. Each line links a dossier and gives its
verdict against this entry.

## Sources

- {cite}
"""


def main():
    made = []
    for cid, (result, forbids, escapes, cite) in rows():
        path = ROOT / "constraints" / f"{cid.lower()}.md"
        if path.exists():
            continue
        path.write_text(page(cid, result, forbids, escapes, cite), encoding="utf-8")
        made.append(path.name)
    print(f"seeded {len(made)} pages: {', '.join(made) or 'none'}")


if __name__ == "__main__":
    main()
