# The matrices

Generated. Never hand-edited. `tools/build_matrix.py` (M4) parses the
`## Constraint scoring` table of every dossier and writes:

- `physics.csv`: proposals × register entries, physics verdicts, plus the
  metadata columns (loophole, standing, bill).
- `fiction.csv`: works × register entries, fiction verdicts, plus loophole,
  notability, coherence and causality.
- `MATRIX.md`: the derived views. Bill by loophole. Coherence by loophole.
  Which constraints fiction engages most and least. The join: for each
  loophole class, the physics proposals and the fictional drives side by side,
  with what the physics says the fiction would cost.

If a cell looks wrong, fix the dossier and rebuild.
