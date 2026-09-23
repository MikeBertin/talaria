#!/usr/bin/env python3
"""Build web/data/timeline.json: every register entry, physics proposal and
fictional drive placed at its defining year, plus the lineage links.

  items: {kind: register|physics|fiction, id (register) or slug, title,
          short, year, loophole (null for register), line, url}
  links: {from, to, year, lineage, note, grade}

Years. Register: the earliest parenthesised year in the row's citation cell.
Physics: the first year in the title where there is one, else the earliest
parenthesised year in the Sources section. Fiction: the first parenthesised
year in the title, else the parenthesised year on the CATALOGUE.md line. A
small override table catches what those rules get wrong; every override is
listed in OVERRIDES with the reason. Links are curated by hand from the
tables in lineage/*.md, because those tables name people, words and episodes
rather than dossiers, and the script refuses any link whose ends do not
exist. Run from anywhere: python3 tools/timeline.py
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "web" / "data" / "timeline.json"
YEAR = re.compile(r"(?<!\d)(1[89]\d\d|20\d\d)(?!\d)")
PAREN_YEAR = re.compile(r"\(([^()]*?)(?<!\d)(1[89]\d\d|20\d\d)(?!\d)")
SPAN = (1900, 2026)

# slug -> (year, why). Checked by eye against the dossier on 2026-09-23.
OVERRIDES = {
    # register
    "ENE-5": (2022, "the row cites Alcubierre and Lobo's 2017 lecture notes as a secondary proof; the result is Santiago, Schuster and Visser 2022"),
    "WRP-3": (2026, "absence as a finding, dated September 2026; the earliest citation in the row is a 2013 conformal-gravity paper"),
    # physics
    "eagleworks-warp-field-interferometer": (2013, "no year in the title; the earliest source is Alcubierre 1994, the programme is White's 2013 Warp Field Mechanics 101"),
    "hartman-effect-and-nimtz": (1962, "no year in the title; the earliest source is Brillouin 1960, the effect is Hartman 1962"),
    "mach-effect-thruster": (1990, "no year in the title; the earliest source is a 1953 Mach's-principle paper, Woodward's proposal is 1990"),
    "scharnhorst-effect": (1990, "no year in the title; the earliest source is Casimir 1948, the effect is Scharnhorst 1990"),
    "gain-assisted-superluminal-light": (2000, "no year in the title; the earliest source is Brillouin 1960, the experiment is Wang, Kuzmich and Dogariu 2000"),
    "retrocausal-signalling-proposals": (2014, "no year in the title; the earliest source is Cramer's 1986 transactional interpretation, the signalling proposal is Cramer and Herbert 2014"),
    "warp-drives-in-modified-gravity": (2013, "no year in the title; the earliest source is Flanagan 2006 on Weyl gravity, the first warp result is Varieschi and Burstein 2013"),
    # fiction
    "cordwainer-smith-planoforming": (1955, "the catalogue line says 1950s to 60s; the drive is defined in The Game of Rat and Dragon, 1955"),
    "star-citizen-jump-points": (2012, "no year in the title or catalogue line; crowdfunded and defined from 2012"),
    "star-trek-subspace-radio": (1966, "no year in the title or catalogue line; subspace radio is in the original series from its first weeks"),
    "star-trek-transwarp-and-slipstream": (1984, "no year in the title or catalogue line; transwarp first appears in Star Trek III, 1984"),
    "stargate-hyperdrive": (1998, "no year in the title or catalogue line; the first hyperdrive ship on screen is in Within the Serpent's Grasp, 1998"),
}

# Label on the strip. Register entries use their id. A dossier missing here
# falls back to the title before its colon, with a warning.
SHORT = {
    "alcubierre-1994": "Alcubierre 1994", "bobrick-martire-2021": "Bobrick and Martire 2021",
    "brane-bulk-shortcuts": "Brane-bulk shortcuts", "eagleworks-warp-field-interferometer": "Eagleworks interferometer",
    "einstein-rosen-bridge-1935": "Einstein-Rosen bridge", "em-drive": "EM drive",
    "entanglement-signalling": "Entanglement signalling", "er-equals-epr": "ER = EPR",
    "everett-roman-superluminal-subway": "Everett and Roman 1997", "fell-heisenberg-2021": "Fell and Heisenberg 2021",
    "fuchs-constant-velocity-2024": "Fuchs et al. 2024", "gain-assisted-superluminal-light": "Gain-assisted light",
    "gao-jafferis-wall-2017": "Gao, Jafferis and Wall", "gott-cosmic-string-time-machine": "Gott's cosmic strings",
    "hartman-effect-and-nimtz": "Hartman effect", "heim-theory": "Heim theory",
    "kaluza-klein-hyperspace": "Kaluza-Klein", "kerr-interior-passage": "Kerr interior",
    "krasnikov-tube": "Krasnikov tube", "lentz-solitons-2021": "Lentz 2021",
    "lorentz-violating-frameworks": "Lorentz violation", "mach-effect-thruster": "Mach effect thruster",
    "maldacena-milekhin-popov-2018": "Maldacena, Milekhin and Popov", "meta-relativity-sudarshan-1962": "Meta relativity",
    "morris-thorne-1988": "Morris and Thorne 1988", "morris-thorne-yurtsever-time-machine": "Wormhole time machine",
    "natario-2002": "Natário 2002", "opera-neutrinos-2011": "OPERA neutrinos",
    "relativistic-rocket": "Relativistic rocket", "retrocausal-signalling-proposals": "Retrocausal signalling",
    "scharnhorst-effect": "Scharnhorst effect", "tachyons-feinberg-1967": "Feinberg's tachyons",
    "van-den-broeck-1999": "Van Den Broeck 1999", "visser-thin-shell-1989": "Visser 1989",
    "warp-drives-in-modified-gravity": "Modified-gravity warp", "wheeler-geons-and-foam": "Wheeler's wormholes",
    "white-casimir-nano-bubble-2021": "White 2021",
    "2001-star-gate": "2001", "alderson-drive": "Alderson drive", "alien-nostromo-hypersleep": "Alien",
    "andromeda-slipstream": "Andromeda", "aurora-generation-ship": "Aurora", "avatar-venture-star": "Avatar",
    "babylon-5-hyperspace": "Babylon 5", "battlestar-galactica-ftl-jump": "Battlestar Galactica",
    "commonwealth-cst-wormholes": "Commonwealth", "contact-sagan-machine": "Contact",
    "cordwainer-smith-planoforming": "Planoforming", "cowboy-bebop-astral-gates": "Cowboy Bebop",
    "culture-hyperspace-grid": "The Culture", "doctor-who-tardis": "Doctor Who", "dune-holtzman-fold-space": "Dune",
    "elite-dangerous-frame-shift-drive": "Elite Dangerous", "ender-philotic-ansible": "Ender's Game",
    "eve-online-warp-drive": "EVE Online", "event-horizon-gravity-drive": "Event Horizon",
    "expanse-ring-gates": "The Expanse", "farscape-wormholes": "Farscape", "firefly-serenity": "Firefly",
    "flight-of-the-navigator": "Flight of the Navigator", "forever-war-collapsars": "The Forever War",
    "foundation-hyperspace-jumps": "Foundation", "ftl-the-game": "FTL", "futurama-planet-express-drive": "Futurama",
    "guardians-jump-points": "Guardians Vol. 2", "halo-slipspace": "Halo",
    "hitchhikers-improbability-drive": "Hitchhiker's Guide", "homeworld-hyperspace-cores": "Homeworld",
    "honorverse-hyperspace": "Honorverse", "hyperion-farcasters": "Hyperion", "interstellar-wormhole": "Interstellar",
    "known-space-hyperdrive": "Known Space", "le-guin-ansible": "Le Guin's ansible",
    "lensman-inertialess-drive": "Lensman", "macross-fold-drive": "Macross",
    "mass-effect-element-zero": "Mass Effect: eezo", "mass-effect-relays": "Mass Effect: relays",
    "no-mans-sky-hyperdrive": "No Man's Sky", "outer-wilds-warp-cores": "Outer Wilds",
    "passengers-hibernation": "Passengers", "revelation-space-lighthuggers": "Revelation Space",
    "skylark-of-space": "Skylark of Space", "spaceballs-ludicrous-speed": "Spaceballs",
    "star-citizen-jump-points": "Star Citizen", "star-trek-subspace-radio": "Star Trek: subspace radio",
    "star-trek-transwarp-and-slipstream": "Star Trek: transwarp", "star-trek-warp-drive": "Star Trek: warp drive",
    "star-wars-hyperspace": "Star Wars", "starfield-grav-drive": "Starfield",
    "stargate-gate-network": "Stargate: the gates", "stargate-hyperdrive": "Stargate: hyperdrive",
    "starman-jones-congruencies": "Starman Jones", "stellaris-three-modes": "Stellaris", "tau-zero-ramjet": "Tau Zero",
    "the-orville-quantum-drive": "The Orville", "thor-bifrost": "Thor",
    "three-body-curvature-propulsion": "Death's End", "time-for-the-stars-telepathy": "Time for the Stars",
    "timescape-tachyon-message": "Timescape", "vinge-zones-of-thought": "Zones of Thought",
    "warhammer-40k-the-warp": "Warhammer 40,000", "wing-commander-jump-points": "Wing Commander",
    "word-hyperspace-campbell-1931": "Islands of Space", "xenocide-outside": "Xenocide",
    "yamato-wave-motion-warp": "Yamato",
}

# Curated from the link tables in lineage/*.md. Grade is the table's own
# confidence; LOW links are drawn dashed on the page.
LINKS = [
    # sagan-thorne-contact-interstellar
    ("contact-sagan-machine", "morris-thorne-1988", 1985, "sagan-thorne-contact-interstellar", "Sagan sends Thorne a draft of Contact and asks for a legal wormhole", "HIGH"),
    ("morris-thorne-1988", "morris-thorne-yurtsever-time-machine", 1988, "sagan-thorne-contact-interstellar", "the traversable wormhole becomes a time machine within months", "MED"),
    ("morris-thorne-1988", "interstellar-wormhole", 2014, "sagan-thorne-contact-interstellar", "Interstellar's wormhole is a Morris and Thorne throat with a chosen shape function", "HIGH"),
    # star-trek-alcubierre-outward
    ("star-trek-warp-drive", "alcubierre-1994", 1994, "star-trek-alcubierre-outward", "the abstract calls the metric reminiscent of the warp drive of science fiction", "HIGH"),
    ("alcubierre-1994", "elite-dangerous-frame-shift-drive", 2014, "star-trek-alcubierre-outward", "supercruise moves space rather than the ship; a community wiki links it, Frontier never has", "LOW"),
    ("alcubierre-1994", "the-orville-quantum-drive", 2017, "star-trek-alcubierre-outward", "the science consultant says the writers are using Alcubierre's theory", "HIGH"),
    ("alcubierre-1994", "star-citizen-jump-points", 2019, "star-trek-alcubierre-outward", "a developer post describes the quantum drive as a warp bubble inspired by Alcubierre", "MED"),
    # tolman-benford-timescape
    ("tachyons-feinberg-1967", "CAU-1", 1970, "tolman-benford-timescape", "Benford, Book and Newcomb name the antitelephone; Feinberg is their reference 2", "HIGH"),
    ("CAU-1", "timescape-tachyon-message", 1980, "tolman-benford-timescape", "the co-author turns his own antitelephone paper into a novel", "HIGH"),
    ("tachyons-feinberg-1967", "timescape-tachyon-message", 1980, "tolman-benford-timescape", "part of the novel is set at Columbia because of Feinberg", "HIGH"),
    # le-guin-ansible-outward
    ("le-guin-ansible", "ender-philotic-ansible", 1977, "le-guin-ansible-outward", "Card borrows the word by name and adds his own mechanism", "HIGH"),
    ("ender-philotic-ansible", "xenocide-outside", 1991, "le-guin-ansible-outward", "the philotic ansible is extended into a starship", "HIGH"),
    ("le-guin-ansible", "vinge-zones-of-thought", 1988, "le-guin-ansible-outward", "It's an ansible, in The Blabber, the novella that opened the Zones", "HIGH"),
    ("le-guin-ansible", "entanglement-signalling", 1978, "le-guin-ansible-outward", "the ansible becomes the generic word for the entanglement radio the no-communication theorem closes", "HIGH"),
    # hyperspace-the-word
    ("word-hyperspace-campbell-1931", "lensman-inertialess-drive", 1939, "hyperspace-the-word", "Gray Lensman uses the word in Campbell's Astounding", "HIGH"),
    ("word-hyperspace-campbell-1931", "foundation-hyperspace-jumps", 1942, "hyperspace-the-word", "the Foundation stories were written for Campbell's Astounding; the Jump through hyperspace", "HIGH"),
    ("word-hyperspace-campbell-1931", "star-wars-hyperspace", 1977, "hyperspace-the-word", "the jump to hyperspace takes a forty-six-year-old genre word and makes it the one everybody knows", "HIGH"),
    ("word-hyperspace-campbell-1931", "star-trek-warp-drive", 1966, "hyperspace-the-word", "the word warp is older than the show; it goes back to Islands of Space", "MED"),
    ("kaluza-klein-hyperspace", "word-hyperspace-campbell-1931", 1931, "hyperspace-the-word", "the same word, borrowed from 1852 mathematics; the physics keeps the old sense and the fiction invents a new one", "HIGH"),
    # feinberg-tachyon-outward
    ("meta-relativity-sudarshan-1962", "tachyons-feinberg-1967", 1967, "feinberg-tachyon-outward", "Feinberg's first footnote; the reinterpretation principle is inherited", "HIGH"),
    ("tachyons-feinberg-1967", "star-trek-subspace-radio", 1990, "feinberg-tachyon-outward", "a field of energetic tachyons in Deja Q; the name travels, the theory stays home", "HIGH"),
    ("tachyons-feinberg-1967", "yamato-wave-motion-warp", 1974, "feinberg-tachyon-outward", "fan wikis say the wave motion engine runs on tachyons; no 1974 script line found", "LOW"),
    # morris-thorne-gate-fiction
    ("morris-thorne-1988", "stargate-gate-network", 1997, "morris-thorne-gate-fiction", "SG-1 talks in the paper's vocabulary: stable wormhole, event horizon", "MED"),
    ("wheeler-geons-and-foam", "farscape-wormholes", 1999, "morris-thorne-gate-fiction", "Wheeler's word, not any paper: I must have come here through a wormhole", "MED"),
    ("morris-thorne-yurtsever-time-machine", "farscape-wormholes", 2002, "morris-thorne-gate-fiction", "a character called Einstein explains that wormholes join times as well as places", "LOW"),
    ("einstein-rosen-bridge-1935", "thor-bifrost", 2011, "morris-thorne-gate-fiction", "Sean Carroll offers Einstein-Rosen bridge because wormhole sounded too Nineties", "HIGH"),
    # the-paper-fold
    ("einstein-rosen-bridge-1935", "morris-thorne-1988", 1988, "the-paper-fold", "the embedding diagram of a throat becomes a tool for teaching general relativity", "HIGH"),
    ("event-horizon-gravity-drive", "interstellar-wormhole", 2014, "the-paper-fold", "the same folded sheet and pen; noticed by audiences, never confirmed by the filmmakers", "LOW"),
    # physicists-in-the-writers-room
    ("relativistic-rocket", "avatar-venture-star", 2009, "physicists-in-the-writers-room", "Pellegrino's Valkyrie antimatter rocket, a relativistic rocket design, animated as the Venture Star", "MED"),
]


def read(p):
    return p.read_text(encoding="utf-8")


def hook(md):
    for line in md.splitlines()[1:]:
        s = line.strip()
        if s.startswith("*") and s.endswith("*") and not s.startswith("**"):
            return s.strip("*").strip()
    return ""


def title(md):
    return md.splitlines()[0].lstrip("# ").strip()


def section(md, name):
    m = re.search(rf"^## {re.escape(name)}\s*$(.*?)(?=^## |\Z)", md, re.M | re.S)
    return m.group(1) if m else ""


def loophole(md):
    m = re.search(r"\*\*Loophole:\*\*\s*(L\d)", md)
    return m.group(1) if m else None


def short_title(slug, t):
    if slug in SHORT:
        return SHORT[slug]
    print(f"warning: no SHORT label for {slug}, using the title", file=sys.stderr)
    return re.sub(r"\s*\([^)]*\)\s*$", "", t.split(":")[0]).strip()


def one_line(s, n=170):
    s = re.sub(r"\*\*\[[A-Z]+\]\s*S\d\*\*", "", s)
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)
    s = s.replace("*", "").strip()
    if len(s) > n:
        s = s[: n - 1].rsplit(" ", 1)[0].rstrip(",;:") + "…"
    return s


def catalogue_years():
    out = {}
    for line in read(ROOT / "theories" / "CATALOGUE.md").splitlines():
        m = re.match(r"^\|\s*([a-z0-9-]+)\s*\|\s*(.*?)\s*\|", line)
        if not m:
            continue
        py = PAREN_YEAR.search(m.group(2))
        if py:
            out[m.group(1)] = int(py.group(2))
    return out


def register_items():
    items = []
    for line in read(ROOT / "constraints" / "REGISTER.md").splitlines():
        m = re.match(r"^\|\s*\[([A-Z]{3}-\d+)\]\([^)]*\)\s*\|(.*)\|\s*$", line)
        if not m:
            continue
        rid = m.group(1)
        cells = [c.strip() for c in m.group(2).split("|")]
        result, forbids, cite = cells[0], cells[1], cells[-1]
        years = [int(y[1]) for y in PAREN_YEAR.findall(cite)]
        year = min(years) if years else None
        page = read(ROOT / "constraints" / f"{rid.lower()}.md")
        t = title(page)
        t = re.sub(rf"^{rid}:\s*", "", t)
        items.append({
            "kind": "register", "id": rid, "title": t, "short": rid, "year": year,
            "loophole": None, "line": one_line(forbids),
            "url": f"pages/constraints/{rid.lower()}.html",
        })
    return items


def dossier_items(kind, cat):
    items = []
    d = ROOT / "theories" / kind
    for p in sorted(d.glob("*.md")):
        if p.name == "TEMPLATE.md":
            continue
        md = read(p)
        slug = p.stem
        t = title(md)
        year = None
        if kind == "physics":
            m = YEAR.search(t)
            if m:
                year = int(m.group(1))
            else:
                ys = [int(y[1]) for y in PAREN_YEAR.findall(section(md, "Sources"))]
                year = min(ys) if ys else None
        else:
            m = PAREN_YEAR.search(t)
            year = int(m.group(2)) if m else cat.get(slug)
        items.append({
            "kind": kind, "slug": slug, "title": t, "short": short_title(slug, t),
            "year": year, "loophole": loophole(md), "line": one_line(hook(md)),
            "url": f"pages/{kind}/{slug}.html",
        })
    return items


def main():
    cat = catalogue_years()
    items = register_items() + dossier_items("physics", cat) + dossier_items("fiction", cat)
    errors = []
    for it in items:
        key = it.get("id") or it["slug"]
        if key in OVERRIDES:
            it["year"] = OVERRIDES[key][0]
        if it["year"] is None:
            errors.append(f"no year for {key}")
        elif not (SPAN[0] <= it["year"] <= SPAN[1]):
            errors.append(f"{key} is at {it['year']}, outside {SPAN}")
        if not it["loophole"] and it["kind"] != "register":
            errors.append(f"no loophole for {key}")
    keys = {it.get("id") or it["slug"] for it in items}
    for k in OVERRIDES:
        if k not in keys:
            errors.append(f"override for unknown item {k}")
    for k in SHORT:
        if k not in keys:
            errors.append(f"SHORT label for unknown item {k}")
    lineages = {p.stem for p in (ROOT / "lineage").glob("*.md")} - {"README", "TEMPLATE"}
    links, seen = [], set()
    for a, b, y, lin, note, grade in LINKS:
        for end in (a, b):
            if end not in keys:
                errors.append(f"link end {end} does not exist")
        if lin not in lineages:
            errors.append(f"unknown lineage {lin}")
        if (a, b) in seen or (b, a) in seen:
            errors.append(f"duplicate link {a} {b}")
        seen.add((a, b))
        links.append({"from": a, "to": b, "year": y, "lineage": lin, "note": note, "grade": grade})
    if errors:
        print("\n".join(errors), file=sys.stderr)
        sys.exit(1)
    items.sort(key=lambda i: (i["year"], i["kind"], i.get("id") or i["slug"]))
    lin_titles = {p.stem: title(read(p)) for p in (ROOT / "lineage").glob("*.md") if p.stem in lineages}
    out = {"span": list(SPAN), "items": items, "links": links, "lineages": lin_titles,
           "overrides": {k: {"year": v[0], "why": v[1]} for k, v in OVERRIDES.items()}}
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    n = {k: sum(1 for i in items if i["kind"] == k) for k in ("register", "physics", "fiction")}
    print(f"wrote {OUT.relative_to(ROOT)}: {n['register']} register, {n['physics']} physics, {n['fiction']} fiction, {len(links)} links, {len(OVERRIDES)} overrides")
    for it in items:
        print(f"  {it['year']}  {it['kind']:8s} {it.get('id') or it['slug']}")


if __name__ == "__main__":
    main()
