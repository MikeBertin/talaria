# TALARIA roadmap

Decisions locked 2026-09-12: codename TALARIA; public from day one; FTL
communication in scope; "not FTL" control group in scope; fiction capped at
roughly sixty works; maths carried in the dossiers; two matrices joined on
loophole class; port 8191.

## M0: Foundation ✅ (2026-09-12)
- Repo skeleton, schema contract (CLAUDE.md), grading scheme, constraint
  register v1 (draft citations), two dossier templates, seed catalogue of
  roughly 35 physics and 65 fiction entries, health checker, registry entry.

## M1: Register hardening
- Verify every register entry against the paper: journal reference, arXiv
  id, and that the stated result is what the paper shows. Mark ✓ per entry.
- Split contested entries where the literature disagrees (the positive-energy
  warp argument is at least three entries).
- Pull the headline numbers into the register with their derivations:
  Pfenning and Ford's energy bound, Van Den Broeck's reduction, the Morris and
  Thorne tidal limit.
- Write one page per register entry in `constraints/`.

## M2: Physics dossiers
- One dossier per catalogue entry, L2 first (Alcubierre, Natário, Van Den
  Broeck, Krasnikov, Lentz, Fell and Heisenberg, Bobrick and Martire, Fuchs et
  al., White), then L3 wormholes, then L1, L5, L4, L6.
- Every dossier steelmanned before scoring; every scoring row noted.

## M3: Fiction dossiers
- N1 works first, then N2, then N3. Primary material read or watched where
  the drive is defined; S3 sources cited as S3.

## M4: The two matrices
- `tools/build_matrix.py` parses every dossier's scoring table into
  `matrix/physics.csv` and `matrix/fiction.csv`, plus `matrix/MATRIX.md` with
  the derived views: bill by loophole, coherence by loophole, the join.

## M5: Lineage
- One page per line of descent: Sagan to Thorne to Contact and Interstellar;
  Star Trek to Alcubierre to Elite and the Orville; Tolman to Benford's
  antitelephone to Timescape; Le Guin's ansible outward; the word "hyperspace"
  from Campbell to everyone.

## M6: The site
- STOA vendored, palette minted per the palette README, atlas of the
  catalogue with both matrices filterable.
- Demos in priority order: the antitelephone spacetime diagram; the Alcubierre
  bubble with its energy shells and bill; the wormhole embedding diagram and
  time-machine conversion; pick-a-drive-pick-a-frame; the relativistic rocket
  calculator; the entanglement no-signalling demo.

## M7: Ship
- README polish, OG image, capture. GitHub and Pages only on Mike's explicit
  confirmation.
