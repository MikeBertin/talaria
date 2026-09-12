#!/usr/bin/env python3
"""Prose rules over every tracked markdown and html file.

  - em dashes anywhere (error)
  - the banned words "ledger" and "load-bearing" (error)
  - Oxford comma heuristic: ", and " or ", or " preceded by a list of two or
    more comma-separated short items (warning; judgement call)

Exit 1 on errors. STATUS.md, HANDOVER.md and log.md are gitignored and skipped.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP = {"STATUS.md", "HANDOVER.md", "log.md", "INDEX.md"}
OXFORD = re.compile(r"(?:\b\w[\w' ]{0,25}, ){2,}\w[\w' ]{0,25}, (?:and|or) ")
BANNED = re.compile(r"\bledger\b|\bload-bearing\b", re.I)

errors, warns = [], []
for p in sorted(list(ROOT.rglob("*.md")) + list(ROOT.rglob("*.html"))):
    if p.name in SKIP or ".git" in p.parts or "node_modules" in p.parts:
        continue
    rel = p.relative_to(ROOT)
    for i, line in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
        if "—" in line:
            errors.append(f"{rel}:{i}: em dash")
        if BANNED.search(line) and not (p.name == "CLAUDE.md" or p.name == "check_prose.py"):
            errors.append(f"{rel}:{i}: banned word")
        if OXFORD.search(line) and not line.startswith("|"):
            warns.append(f"{rel}:{i}: possible Oxford comma")
for e in errors:
    print("ERROR  ", e)
for w in warns:
    print("warn   ", w)
print(f"prose: {len(errors)} errors, {len(warns)} warnings")
sys.exit(1 if errors else 0)
