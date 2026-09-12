# Kaluza-Klein and the hyperspace reading (Kaluza 1921, Klein 1926, ADD 1998, Randall-Sundrum 1999)

*Extra dimensions in physics are compact, warped or both, share the light cone of ordinary space and turn motion "in the fifth dimension" into mass; nothing in them is a separate space with its own rules.*

**Kind:** physics · **Loophole:** L4 · **Standing:** K4 · **Bill:** B-new · **Last reviewed:** 2026-09-12

## The claim

This is a negative dossier, so two claims need stating and keeping apart.

The physics claim, in its strongest form, is that spacetime may have more than four dimensions and that this explains things four dimensions cannot. Kaluza showed in 1921 that five-dimensional general relativity in vacuum, with nothing depending on the fifth coordinate, contains four-dimensional gravity and Maxwell's electromagnetism together. Klein showed in 1926 that if the fifth dimension is a circle of Planck-scale circumference, momentum around it is quantised and appears as electric charge, which is why nobody has seen the extra dimension. Arkani-Hamed, Dimopoulos and Dvali (ADD) argued in 1998 that the weakness of gravity "on distances $\gtrsim 1$ mm is due to the existence of $n \ge 2$ new compact spatial dimensions large compared to the weak scale", with the Standard Model "localized to a 4-dimensional manifold of weak scale 'thickness' in the extra dimensions" (ADD 1998, abstract). Randall and Sundrum showed in 1999 that a single warped extra dimension, "a slice of $\mathrm{AdS}_5$ spacetime", generates the weak scale from the Planck scale "through an exponential hierarchy" (Randall and Sundrum 1999, abstract). These are exact solutions of the higher-dimensional Einstein equations and are graded as such.

The hyperspace claim is what fiction needs and is the thing this dossier scores: a second space, reachable at will from any point in ours, with its own metric in which the distance between two stars is shorter or the speed of light higher, from which a ship can return to a chosen point in ours, and which carries its own clock so that no message goes to the past. The finding is that the physics of extra dimensions provides none of these. It provides the same manifold with more directions, the same light cone, matter that cannot leave the brane and, where the brane is bent, a graviton shortcut of one part in $10^{58}$, which has [its own dossier](brane-bulk-shortcuts.md).

## Origin and lineage

Kaluza, Sitzungsber. Preuss. Akad. Wiss. Berlin, 966 (1921), was presented to the Academy by Einstein, who had held the manuscript since 1919; Klein, Z. Phys. 37, 895 (1926), added the compactification and the quantum reading. Overduin and Wesson's Phys. Rep. 283, 303 (1997) review separates three descendants, compactified, projective and non-compactified, and is the S2 source for the classical theory here. String theory's requirement of ten or eleven dimensions revived compactification in the 1980s; Hořava and Witten's 1996 domain walls gave the brane picture; ADD and Randall-Sundrum made large and warped dimensions phenomenology. Sub-millimetre tests of the inverse-square law (the Eöt-Wash torsion pendulum, 2020) and collider searches are the experimental side. In fiction "hyperspace" predates all of this (John Campbell, 1931) and never meant a compact dimension; the catalogue lists the Star Wars hyperdrive, Babylon 5's hyperspace and their relatives under L4, and the register entry that governs them is [MAN-1](../../constraints/man-1.md).

## The mechanism

**Kaluza's reduction.** Write the five-dimensional metric in terms of a four-dimensional metric $g_{\mu\nu}$, a vector $A_\mu$ and a scalar $\phi$:

$$\hat g_{AB} = \begin{pmatrix} g_{\mu\nu} + \phi^2 A_\mu A_\nu & \phi^2 A_\mu \\ \phi^2 A_\nu & \phi^2 \end{pmatrix},$$

and impose the cylinder condition $\partial_5 = 0$. The five-dimensional vacuum equations $\hat R_{AB} = 0$ then split into the four-dimensional Einstein equations with an electromagnetic stress-energy source, Maxwell's equations and a wave equation for $\phi$; Kaluza set $\phi$ constant, which is consistent only if $F_{\mu\nu}F^{\mu\nu} = 0$, and later treatments keep it dynamical **[HIGH] S2** (Overduin and Wesson 1997, §3). Five-dimensional geodesics project onto four-dimensional worldlines with the Lorentz force, the charge-to-mass ratio being the fifth component of the five-velocity.

**Klein's circle.** Take $x^5 \sim x^5 + 2\pi R$ and expand any field in Fourier modes, $\Phi(x, x^5) = \sum_n \Phi_n(x)\,e^{i n x^5/R}$. The four-dimensional equation for $\Phi_n$ is that of a particle of mass $m_n = |n|/R$ and, through the Kaluza coupling, of charge proportional to $n\sqrt{16\pi G}/R$; setting the unit charge to $e$ fixes $R$ at a few tens of Planck lengths, about $10^{-33}$ m **[HIGH] S2** (Overduin and Wesson 1997, §4; the numerical factor depends on normalisation conventions). This is the Kaluza-Klein tower, and it is the whole answer to "what happens if you move in the fifth dimension": momentum around the circle is not travel, it is mass and charge. The zero mode is the massless four-dimensional field; the first excited mode is a copy of it weighing $1/R$, which is the Planck mass for Klein's circle and of order a TeV or more for the extra dimensions collider searches look for.

**ADD.** With $n$ flat compact dimensions of common radius $R$ and a fundamental scale $M_*$, Gauss's law in $4 + n$ dimensions gives the observed Planck mass as

$$M_{\rm Pl}^2 \sim M_*^{n + 2} R^n ,$$

so that for $M_* \sim 1$ TeV, $n = 2$ gives $R$ of order a millimetre and the inverse-square law should fail below that, "the transition from $1/r^2 \to 1/r^4$" **[HIGH] S1** (ADD 1998). Standard Model fields are confined to a four-dimensional wall by construction; only gravity samples the bulk. The Eöt-Wash torsion-pendulum test finds the inverse-square law holding down to a separation of 52 μm **[HIGH] S1** (Lee et al., Phys. Rev. Lett. 124, 101101 (2020)), which excludes the $n = 2$ millimetre scenario and pushes $M_*$ up.

**Randall-Sundrum.** One extra dimension, coordinate $\phi \in [-\pi, \pi]$ with the orbifold identification, two three-branes at $\phi = 0$ and $\phi = \pi$, and the warped metric

$$ds^2 = e^{-2kr_c|\phi|}\,\eta_{\mu\nu}dx^\mu dx^\nu + r_c^2\,d\phi^2 ,$$

a slice of five-dimensional anti-de Sitter space with curvature $k$ of order the Planck scale. Mass parameters on the visible brane at $\phi = \pi$ are multiplied by $e^{-kr_c\pi}$, so $kr_c \approx 12$ turns Planck-scale input into TeV-scale output, and the Kaluza-Klein gravitons are "fundamental spin-2 excitations with mass of weak scale order, which are coupled with weak scale as opposed to gravitational strength" **[HIGH] S1** (Randall and Sundrum 1999). The second Randall-Sundrum model removes the far brane and lets the fifth dimension be infinite, with four-dimensional gravity recovered on the brane from the bound zero mode. In both, the induced metric on the brane is flat Minkowski space: the brane's light cone is the bulk's light cone restricted to the brane. In the two-brane model the visible brane carries negative tension, which violates the weak energy condition on that brane **[HIGH] S2** (this is standard; the negative tension is required by the junction conditions for the warp factor to fall toward the visible brane).

**What the hyperspace reading needs, and what each framework gives.**

1. *A separate space.* Fiction's hyperspace is somewhere else. Kaluza-Klein, ADD and Randall-Sundrum have one manifold with extra directions; a bulk point is a point of the same spacetime with a fifth coordinate. There is nowhere to go that is not here.
2. *Its own light speed or shorter distances.* The bulk metric is Lorentzian with a single causal structure and the brane's induced metric is a restriction of it. In the warped case the bulk distance between two brane points can be shorter than the brane distance ([the shortcut](brane-bulk-shortcuts.md)), by an amount proportional to $(\ell H)^2 \sim 10^{-58}$ today, and only for fields that can leave the brane.
3. *Entry at will.* Standard Model fields in ADD and Randall-Sundrum are confined to the brane; there is no mechanism in these frameworks by which a proton leaves it, and in Klein's compact case "leaving" the four-dimensional world means exciting a Kaluza-Klein mode, which costs energy $1/R$ per quantum, of order the Planck mass for the original theory and at least a TeV for the large-dimension versions, and produces a heavy particle here, not a ship elsewhere.
4. *Return to a chosen point.* A Kaluza-Klein excitation decays back to the zero mode where it is; a bulk graviton follows a bulk geodesic that returns to the brane where the geometry sends it. No framework has a steering term.
5. *Its own clock.* Fiction gives hyperspace a clock so that jumps do not become messages to the past (C-dodges in the fiction grading). The bulk has no separate time; it has the one time of the five-dimensional metric, and a signal that beat brane light would carry [CAU-1](../../constraints/cau-1.md)'s consequences on the brane unless the bulk geometry picks a frame, which in the cosmological case it does and in general it need not.

The frameworks are K4 because the reduction and the warped solution are exact. The hyperspace reading is not a physics proposal at all; it is a picture that borrows the vocabulary of extra dimensions and none of the mathematics, and the register's verdict is that it "has no counterpart in physics".

## What it costs

**B-new.** For the physics: one or more extra spatial dimensions, compact or warped, which are not in general relativity in four dimensions or in the Standard Model, and which experiment has not found (the inverse-square law holds to 52 μm; no Kaluza-Klein graviton has appeared at the LHC). For the hyperspace reading: a second space with a different metric, its own light speed, entry and exit for ordinary matter and its own time, none of which any extra-dimensional framework contains. The register's own phrase is the bill: no counterpart in physics.

No negative energy, no infrastructure, no causality bill is charged to the frameworks themselves, because none of them proposes to move anything faster than light; the two-brane Randall-Sundrum model's negative-tension brane is noted under ENE-1 but is not a bill for FTL.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | The brane's induced light cone is a restriction of the bulk's; no field confined to the brane can outrun brane light, and the frameworks propose no signal that does. |
| CAU-2 | SATISFIES | The compactified and warped solutions have ordinary global causal structure with no closed timelike curves. |
| CAU-3 | N/A | No wormhole mouth or bubble is proposed. |
| CAU-4 | N/A | With nothing superluminal there is no FTL sector for which a frame must be picked; the hyperspace reading's "own clock" would be a CAU-4 frame, and no framework supplies one. |
| CAU-5 | N/A | No entanglement. |
| ENE-1 | SATISFIES | Kaluza-Klein vacuum, ADD's flat torus and the single-brane Randall-Sundrum model obey the energy conditions (anti-de Sitter saturates the NEC); the two-brane model's visible brane has negative tension and violates the WEC there, which is a cost of the hierarchy mechanism rather than of any FTL claim. |
| ENE-2 | N/A | No superluminal travel is proposed in any of these frameworks, so the theorems are not invoked; the bulk shortcut that does invoke them is scored in its own dossier. |
| ENE-3 | N/A | No negative energy density is requested. |
| ENE-4 | N/A | No bubble. |
| ENE-5 | N/A | Not a warp metric. |
| ENE-6 | N/A | No Casimir bill. |
| ENE-7 | N/A | None of the frameworks surveyed proposes a shortcut; a compact fifth dimension does not join distant points of our space, and the one bulk route that does is scored in the brane-bulk dossier. No handle, so nothing for the theorem to bear on. |
| CON-1 | N/A | Nothing to pilot; the frameworks describe the vacuum, not a vehicle. |
| CON-2 | N/A | No route is laid because no route is proposed. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No bubble horizon. |
| STA-2 | N/A | No throat; a compact dimension is not a wormhole. |
| STA-3 | N/A | No chronology horizon. |
| HAZ-1 | N/A | No bubble wall. |
| HAZ-2 | N/A | No horizon flux. |
| HAZ-3 | N/A | No throat tides. |
| LOR-1 | SATISFIES | Motion in the compact dimension is not a velocity but a mass: a particle with momentum $n/R$ around Klein's circle is a four-dimensional particle of mass $n/R$ obeying ordinary kinematics, and nothing is accelerated to $c$. |
| LOR-2 | N/A | No tachyons; every Kaluza-Klein mode has $m_n^2 = n^2/R^2 \ge 0$. |
| LOR-3 | SATISFIES | Bulk and brane fields have hyperbolic equations with the bulk light cone as characteristic; front velocities are $c$. |
| LOR-4 | N/A | Neither the Scharnhorst calculation nor OPERA bears on a compactification. |
| WRP-1 | N/A | Not a warp drive and not claimed to be. |
| WRP-2 | N/A | No shell. |
| WRP-3 | N/A | No positive-energy warp claim. |
| MAN-1 | SATISFIES | This is the entry's first half stated exactly: extra dimensions where they appear are compact or warped, Standard Model fields are localised, and "hyperspace" as a separate space with laxer rules has no counterpart; the frameworks are what the entry describes and the hyperspace reading is what it excludes. |

## Status of the argument

- 1921 to 1926: Kaluza's unification and Klein's compactification; Einstein returned to the idea repeatedly through the 1940s.
- 1980s: string theory's ten dimensions and Calabi-Yau compactification make small extra dimensions the default expectation; Overduin and Wesson's 1997 review covers the classical theory and its non-compactified cousins.
- 1998: ADD propose millimetre-scale dimensions and a TeV fundamental scale; Antoniadis, Arkani-Hamed, Dimopoulos and Dvali embed it in string theory.
- 1999: Randall and Sundrum's warped hierarchy (RS1) and infinite fifth dimension (RS2).
- 2000 to 2001: the brane-bulk shortcut papers (Chung and Freese, Ishihara, Caldwell and Langlois) establish that the only FTL-looking effect in these frameworks is a graviton shortcut of negligible size; see the sibling dossier.
- 2020: Eöt-Wash finds the inverse-square law intact to 52 μm; LHC searches through Run 2 find no Kaluza-Klein gravitons or missing-energy signature of large dimensions at the TeV scale.
- No peer-reviewed paper proposes extra dimensions as a vehicle for matter faster than light, and no framework in the literature contains the elements the hyperspace reading needs, as of 2026-09-12.

## Sources

- Kaluza, "Zum Unitätsproblem der Physik", Sitzungsber. Preuss. Akad. Wiss. Berlin (Math. Phys.) 966 (1921). S1 (via the ADS record; English translation in Lee (ed.), *Unified Field Theories of More Than 4 Dimensions*, World Scientific 1983).
- Klein, "Quantentheorie und fünfdimensionale Relativitätstheorie", Z. Phys. 37, 895 (1926). S1 (as above).
- Overduin and Wesson, "Kaluza-Klein gravity", Phys. Rep. 283, 303 (1997), arXiv:gr-qc/9805018. S2. Used for the reduction and the compactification radius.
- Arkani-Hamed, Dimopoulos and Dvali, "The hierarchy problem and new dimensions at a millimeter", Phys. Lett. B 429, 263 (1998), arXiv:hep-ph/9803315. S1. Abstract read.
- Randall and Sundrum, "A large mass hierarchy from a small extra dimension", Phys. Rev. Lett. 83, 3370 (1999), arXiv:hep-ph/9905221. S1. Abstract read; metric from the paper's eq. 8.
- Randall and Sundrum, "An alternative to compactification", Phys. Rev. Lett. 83, 4690 (1999), arXiv:hep-th/9906064. S1 (RS2, as cited by Ishihara).
- Lee, Adelberger, Cook, Fleischer and Heckel, "New test of the gravitational $1/r^2$ law at separations down to 52 μm", Phys. Rev. Lett. 124, 101101 (2020). S1.
- Chung and Freese, Phys. Rev. D 62, 063513 (2000); Ishihara, Phys. Rev. Lett. 86, 381 (2001); Caldwell and Langlois, Phys. Lett. B 511, 129 (2001). S1. See the brane-bulk shortcut dossier for full references.
