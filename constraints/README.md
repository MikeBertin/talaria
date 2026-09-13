# The constraint register

One table, [REGISTER.md](REGISTER.md), and one page per entry. An entry is a
published result that puts a price on faster-than-light travel or signalling:
a theorem, an inequality, an instability, a hazard or a no-go argument. Each
carries an id by family, a one-line statement, what it forbids or costs, the
known escape hatches, and the citation.

Families:

| Family | Concern |
|---|---|
| **CAU** | Causality: signals to the past, chronology protection, the preferred-frame escape |
| **ENE** | Energy: the energy conditions, the theorems that superluminal travel violates them, the quantum bounds on borrowing |
| **CON** | Control: horizons, steering, the bootstrap problem, pre-built routes |
| **STA** | Stability: semiclassical instability of bubbles, throats and chronology horizons |
| **HAZ** | Hazards to crew and destination |
| **LOR** | Kinematics: what special relativity and wave propagation actually forbid, and the tachyon and tunnelling claims |
| **WRP** | The warp drive class: what a warp drive is, the shell classification and the dated state of the positive-energy argument |
| **MAN** | Leaving the manifold: what extra dimensions do and do not permit |

Verification marks in the citation column: **⚠ v1** means written from
working knowledge in M0 and not yet checked against the paper. **✓** means
the reference and the stated result were verified in M1. The matrix does not
build on an unverified entry.

**What is not on the register, by decision.** Conservation of momentum. The two reactionless-thruster dossiers in the L6 bin (the EM drive and the Mach-effect thruster) fail on it, and say so in their own text, but it is not a faster-than-light constraint and would bite nothing else in the catalogue. The register stays the price list for one thing. Decided 2026-09-13.

Scoring vocabulary is in [GRADING.md](../GRADING.md). Every dossier scores
every entry here; the tables in the dossiers are the only source the matrix
reads.

## Page schema

One page per entry, filename the id in lower case (`cau-1.md`). H1 is the id
and a short statement of the result, the italic hook is what it forbids in one
line, and the metadata line carries `**Kind:** constraint`, `**Family:**` and
`**Last reviewed:**`. Sections in order: The result, What it forbids or costs,
Escape hatches, Who it bites (one line per dossier that scores against it,
added as dossiers are written), Sources. `tools/seed_constraints.py` writes a
skeleton for any id that has no page; the prose is then rewritten by hand.
