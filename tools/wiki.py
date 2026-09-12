#!/usr/bin/env python3
"""TALARIA catalogue tooling.

Builds INDEX.md (generated, never hand-edited) and runs structural health
checks over the content tree:

  1. broken links    every relative .md link must resolve (error)
  2. page schema     every content page opens with an H1, an italic one-line
                       hook and a metadata line carrying **Kind:** matching
                       its directory and **Last reviewed:**; closes on
                       "## Sources"; dossiers carry "## Constraint scoring"
                       with every register id exactly once, verdicts from the
                       right vocabulary, and a note on every row (error)
  3. grade vocabulary : Loophole L1-L6, Standing K0-K4, Bill B-*, Notability
                       N1-N3, Coherence F0-F4, Causality C-*, confidence
                       [HIGH]/[MED]/[LOW], source tiers S1-S5 (error)
  4. register ids    every CAU-/ENE-/... id used anywhere must exist in
                       constraints/REGISTER.md (error)
  5. orphan pages    no inbound link from any other page (warning)
  6. stale pages     **Last reviewed:** older than STALE_DAYS (warning)
  7. link candidates : a page's title appears in another page's prose with no
                       link (report only; linking is editorial)
  8. census          pages per section, loophole and verdict spread

Usage:
    python3 tools/wiki.py            # rebuild INDEX.md, then run checks
    python3 tools/wiki.py --check    # checks only, no write; exit 1 on errors
"""

import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "INDEX.md"
REGISTER = ROOT / "constraints" / "REGISTER.md"

# (label, directory relative to ROOT, required **Kind:**)
SECTIONS = [
    ("Constraints", "constraints", "constraint"),
    ("Physics proposals", "theories/physics", "physics"),
    ("Fictional drives", "theories/fiction", "fiction"),
    ("Lineage", "lineage", "lineage"),
]
APPARATUS = {"README.md", "TEMPLATE.md", "CATALOGUE.md", "REGISTER.md", "INDEX.md"}
STALE_DAYS = 180

LINK_RE = re.compile(r"\]\(([^)#\s]+\.md)(?:#[^)]*)?\)")
CODE_RE = re.compile(r"```.*?```|`[^`]*`", re.S)
KIND_RE = re.compile(r"\*\*Kind:\*\*\s*([a-z]+)")
REVIEWED_RE = re.compile(r"\*\*Last reviewed:\*\*\s*(\d{4})-(\d{2})-(\d{2})")
META_RE = {
    "Loophole": re.compile(r"\*\*Loophole:\*\*\s*(L\d)"),
    "Standing": re.compile(r"\*\*Standing:\*\*\s*(K\d)"),
    "Bill": re.compile(r"\*\*Bill:\*\*\s*([^·\n]+)"),
    "Notability": re.compile(r"\*\*Notability:\*\*\s*(N\d)"),
    "Coherence": re.compile(r"\*\*Coherence:\*\*\s*(F\d)"),
    "Causality": re.compile(r"\*\*Causality:\*\*\s*(C-[a-z]+)"),
    "Family": re.compile(r"\*\*Family:\*\*\s*([A-Z]{3})"),
}
REQUIRED_META = {
    "physics": ["Loophole", "Standing", "Bill"],
    "fiction": ["Loophole", "Notability", "Coherence", "Causality"],
    "constraint": ["Family"],
    "lineage": [],
}
VALID = {
    "Loophole": {f"L{n}" for n in range(1, 7)},
    "Standing": {f"K{n}" for n in range(5)},
    "Bill": {"B-neg", "B-mass", "B-new", "B-boot", "B-caus", "B-none"},
    "Notability": {"N1", "N2", "N3"},
    "Coherence": {f"F{n}" for n in range(5)},
    "Causality": {"C-owns", "C-dodges", "C-silent"},
    "Family": {"CAU", "ENE", "CON", "STA", "HAZ", "LOR", "WRP", "MAN"},
}
VERDICTS = {
    "physics": {"SATISFIES", "VIOLATES", "DODGES", "SILENT", "N/A"},
    "fiction": {"ENGAGES", "RULE", "SILENT", "N/A"},
}
CONF_RE = re.compile(r"\[([A-Z]{2,6})\]")
VALID_CONF = {"HIGH", "MED", "LOW"}
TIER_RE = re.compile(r"\bS([0-9])\b")
VALID_TIERS = {"1", "2", "3", "4", "5"}
ID_RE = re.compile(r"\b(CAU|ENE|CON|STA|HAZ|LOR|WRP|MAN)-(\d+)\b")
ROW_RE = re.compile(r"^\|\s*([A-Z]{3}-\d+)\s*\|\s*([A-Z/]+)\s*\|(.*)\|\s*$")


def register_ids():
    ids = []
    for line in REGISTER.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^\|\s*\[?([A-Z]{3}-\d+)\]?(?:\([^)]*\))?\s*\|", line)
        if m:
            ids.append(m.group(1))
    return ids


def pages():
    for _, d, _ in SECTIONS:
        for p in sorted((ROOT / d).rglob("*.md")):
            yield p


def section_of(path):
    rel = path.relative_to(ROOT).as_posix()
    for _, d, kind in SECTIONS:
        if rel.startswith(d + "/"):
            return d, kind
    return None, None


def title_and_hook(path):
    title, hook = path.stem, ""
    lines = path.read_text(encoding="utf-8").splitlines()
    for i, line in enumerate(lines):
        if line.startswith("# "):
            title = line[2:].strip()
            for later in lines[i + 1:]:
                s = later.strip()
                if not s:
                    continue
                if s.startswith("*") and not s.startswith("**"):
                    hook = s.strip("* ").rstrip(".")
                break
            break
    if len(hook) > 110:
        hook = hook[:107].rsplit(" ", 1)[0] + "…"
    return title, hook


def build_index(all_pages):
    out = [
        "# TALARIA index",
        "",
        "*Generated by `tools/wiki.py`, never edit by hand. One line per page.*",
        "",
        "The hand-written worklist is [theories/CATALOGUE.md](theories/CATALOGUE.md);",
        "the register is [constraints/REGISTER.md](constraints/REGISTER.md).",
        "",
    ]
    for label, d, _ in SECTIONS:
        members = [p for p in all_pages if section_of(p)[0] == d
                   and p.name not in APPARATUS]
        if not members:
            continue
        out += [f"## {label}", ""]
        for p in sorted(members, key=lambda q: str(q).lower()):
            rel = p.relative_to(ROOT).as_posix()
            title, hook = title_and_hook(p)
            line = f"- [{title}]({rel})"
            if hook:
                line += f": {hook}"
            out.append(line)
        out.append("")
    return "\n".join(out) + "\n"


def check_schema(p, text, kind, reg_ids, errors):
    rel = p.relative_to(ROOT)
    nonblank = [l for l in text.splitlines() if l.strip()]
    if not nonblank or not nonblank[0].startswith("# "):
        errors.append(f"schema: {rel} does not open with an H1 title")
        return
    if len(nonblank) < 2 or not (
            nonblank[1].startswith("*") and not nonblank[1].startswith("**")):
        errors.append(f"schema: {rel} has no italic one-line hook under its title")

    m = KIND_RE.search(text)
    if not m:
        errors.append(f"schema: {rel} has no '**Kind:**' metadata")
    elif m.group(1) != kind:
        errors.append(f"schema: {rel} declares Kind '{m.group(1)}' but its "
                      f"directory takes '{kind}'")
    if not REVIEWED_RE.search(text):
        errors.append(f"schema: {rel} has no '**Last reviewed:** YYYY-MM-DD'")

    for field in REQUIRED_META.get(kind, []):
        fm = META_RE[field].search(text)
        if not fm:
            errors.append(f"schema: {rel} has no '**{field}:**' mark")
            continue
        vals = [v.strip() for v in fm.group(1).split(",")] \
            if field == "Bill" else [fm.group(1)]
        bad = [v for v in vals if v not in VALID[field]]
        if bad:
            errors.append(f"grades: {rel} {field} '{', '.join(bad)}' not in "
                          f"GRADING.md")

    heads = re.findall(r"^## +(.+?)\s*$", text, re.M)
    if not heads or heads[-1].lower() != "sources":
        errors.append(f"schema: {rel} does not end on a '## Sources' section")

    if kind in ("physics", "fiction"):
        if "constraint scoring" not in [h.lower() for h in heads]:
            errors.append(f"schema: {rel} has no '## Constraint scoring' section")
        seen = {}
        for line in text.splitlines():
            rm = ROW_RE.match(line)
            if not rm:
                continue
            cid, verdict, note = rm.group(1), rm.group(2), rm.group(3).strip()
            seen[cid] = seen.get(cid, 0) + 1
            if verdict not in VERDICTS[kind]:
                errors.append(f"scoring: {rel} row {cid} verdict '{verdict}' "
                              f"not in the {kind} vocabulary")
            if not note and p.name != "TEMPLATE.md":
                errors.append(f"scoring: {rel} row {cid} has a verdict and "
                              f"no note")
        missing = [i for i in reg_ids if i not in seen]
        dupes = [i for i, n in seen.items() if n > 1]
        unknown = [i for i in seen if i not in reg_ids]
        if missing:
            errors.append(f"scoring: {rel} misses register rows: "
                          f"{', '.join(missing)}")
        if dupes:
            errors.append(f"scoring: {rel} scores twice: {', '.join(dupes)}")
        if unknown:
            errors.append(f"scoring: {rel} scores unknown ids: "
                          f"{', '.join(unknown)}")

    bad_conf = sorted(set(CONF_RE.findall(text)) - VALID_CONF)
    if bad_conf:
        errors.append(f"grades: {rel} uses confidence marks not in GRADING.md: "
                      f"{', '.join('[' + c + ']' for c in bad_conf)}")
    bad_tiers = sorted(set(TIER_RE.findall(text)) - VALID_TIERS)
    if bad_tiers:
        errors.append(f"grades: {rel} uses source tiers outside S1-S5: "
                      f"{', '.join('S' + t for t in bad_tiers)}")
    for fam, num in ID_RE.findall(text):
        if f"{fam}-{num}" not in reg_ids:
            errors.append(f"register: {rel} cites {fam}-{num}, not in "
                          f"REGISTER.md")


def check(all_pages):
    errors, warnings = [], []
    reg_ids = register_ids()
    if not reg_ids:
        errors.append("register: no ids parsed from constraints/REGISTER.md")
    texts = {p: p.read_text(encoding="utf-8") for p in all_pages}
    content = [p for p in all_pages if p.name not in APPARATUS]

    # 1. broken links (all pages, apparatus included)
    inbound = {p: 0 for p in all_pages}
    linked = {p: set() for p in all_pages}
    for p, text in texts.items():
        for m in LINK_RE.finditer(CODE_RE.sub("", text)):
            target = (p.parent / m.group(1)).resolve()
            if not target.exists():
                errors.append(f"broken link in {p.relative_to(ROOT)}: "
                              f"{m.group(1)}")
            elif target in inbound:
                inbound[target] += 1
                linked[p].add(target)
    # root docs also count as link sources for orphan purposes
    for extra in ("README.md", "GRADING.md", "ROADMAP.md", "CLAUDE.md"):
        ep = ROOT / extra
        if ep.exists():
            for m in LINK_RE.finditer(CODE_RE.sub("", ep.read_text())):
                target = (ep.parent / m.group(1)).resolve()
                if not target.exists():
                    errors.append(f"broken link in {extra}: {m.group(1)}")
                elif target in inbound:
                    inbound[target] += 1

    # 2-4. schema, vocabulary, register ids
    for p in content:
        check_schema(p, texts[p], section_of(p)[1], reg_ids, errors)

    # 5. orphans
    for p in sorted(content):
        if inbound[p] == 0:
            warnings.append(f"orphan (no inbound links): {p.relative_to(ROOT)}")

    # 6. staleness
    today = date.today()
    for p in sorted(content):
        m = REVIEWED_RE.search(texts[p])
        if not m:
            continue
        age = (today - date(*(int(g) for g in m.groups()))).days
        if age > STALE_DAYS:
            warnings.append(f"stale ({age} days): {p.relative_to(ROOT)}")

    # 7. link candidates
    titles = {}
    for p in content:
        t = title_and_hook(p)[0].lower()
        t = re.sub(r"^the ", "", t)
        t = re.sub(r"\s*[(].*$", "", t).strip()
        if len(t) >= 8:
            titles[p] = t
    candidates = []
    for p in content:
        low = "\n".join(l for l in texts[p].splitlines()
                        if not l.startswith("#")).lower()
        hits = [f"'{t}' → {q.relative_to(ROOT)}" for q, t in titles.items()
                if q != p and t in low and q not in linked[p]]
        if hits:
            candidates.append(f"{p.relative_to(ROOT)}: " + "; ".join(hits[:5]))

    # 8. census
    per = {}
    loops = {}
    for p in content:
        d = section_of(p)[0]
        per[d] = per.get(d, 0) + 1
        lm = META_RE["Loophole"].search(texts[p])
        if lm:
            loops[lm.group(1)] = loops.get(lm.group(1), 0) + 1
    shape = ", ".join(f"{k} {v}" for k, v in sorted(per.items()))
    spread = ", ".join(f"{k}×{loops[k]}" for k in sorted(loops))
    print(f"register: {len(reg_ids)} entries   pages: {len(content)} content "
          f"+ {len(all_pages) - len(content)} apparatus   ({shape or 'none'})")
    print(f"loophole spread: {spread or 'none'}")
    for e in errors:
        print(f"ERROR   {e}")
    for w in warnings:
        print(f"warn    {w}")
    if candidates:
        print("\nlink candidates (editorial, add by hand where apt):")
        for c in candidates:
            print(f"  {c}")
    return not errors


def main():
    all_pages = list(pages())
    if "--check" not in sys.argv:
        INDEX.write_text(build_index(all_pages), encoding="utf-8")
        print(f"wrote {INDEX.relative_to(ROOT)}")
    ok = check(all_pages)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
