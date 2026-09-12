# ER = EPR (Maldacena and Susskind 2013)

*The conjecture that every entangled pair is joined by an Einstein–Rosen bridge, and why that bridge carries no messages.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K3 · **Bill:** B-none · **Last reviewed:** 2026-09-12

## The claim

Maldacena and Susskind, "Cool horizons for entangled black holes", Fortsch. Phys. 61, 781 (2013), start from a fact and make a conjecture. The fact: the eternal black hole in anti-de Sitter space, whose two exterior regions are joined by an [Einstein–Rosen bridge](einstein-rosen-bridge-1935.md), is the gravity dual of the thermofield double state, a particular maximally entangled state of two copies of the boundary theory. "These solutions can be interpreted as maximally entangled states of two black holes that form a complex EPR pair" **[HIGH] S1**. The conjecture: "We suggest that similar bridges might be present for more general entangled states" **[HIGH] S1**, and in the body of the paper the authors "take the radical position that in a theory of quantum gravity they are inseparably linked, even for systems consisting of no more than a pair of entangled particles" **[HIGH] S1** (§3). Einstein–Rosen bridges and Einstein–Podolsky–Rosen correlations are the same thing seen from two sides: ER = EPR.

The paper is written against the firewall paradox of Almheiri, Marolf, Polchinski and Sully. Two distant black holes joined by a bridge are an existence proof of a black hole maximally entangled with a distant system that nevertheless has a smooth horizon, and the authors use that to argue the interior of an old black hole is built out of its entanglement with its own Hawking radiation. That is the claim's real content.

For this catalogue the relevant part of the claim is its self-imposed limit, which the authors state before anything else. Locality means "the impossibility of sending signals faster than the speed of light", and "It has long been understood that these two effects do not give rise to real violations of locality. One cannot use EPR correlations to send information faster than the speed of light. Similarly, Einstein Rosen bridges do not allow us to send a signal from one asymptotic region to the other" **[HIGH] S1** (§1). The identification of entanglement with geometry is offered precisely because both halves are known not to signal. The catalogue files it under L3 because its object is a wormhole, with the note that it is L5-adjacent: it is the physicist's version of the entanglement radio, and it is the version that says the radio is silent.

## Origin and lineage

The 1935 [Einstein–Rosen bridge](einstein-rosen-bridge-1935.md) and the 1935 EPR paper are the two ancestors, published a few weeks apart by overlapping authors, which the title of the conjecture trades on. The identification of the eternal AdS black hole with the thermofield double is Maldacena (2003); the idea that entanglement builds spacetime is Van Raamsdonk (2010), via the Ryu–Takayanagi formula. The no-signalling half rests on the no-communication theorem ([CAU-5](../../constraints/cau-5.md)) on the quantum side and on topological censorship and the averaged null energy condition ([ENE-2](../../constraints/ene-2.md)) on the gravity side. [Gao, Jafferis and Wall 2017](gao-jafferis-wall-2017.md) made the bridge traversable with a boundary coupling and read the result as quantum teleportation through the ER = EPR bridge, which is the conjecture's most concrete offspring; [Maldacena, Milekhin and Popov 2018](maldacena-milekhin-popov-2018.md) describe their four-dimensional wormhole as a pair of entangled black holes. Susskind developed the conjecture in a series of papers (2014, 2016); Bao, Pollack and Remmen (2015) examined its consistency with the unobservability of entanglement **[HIGH] S2**. The L5 sibling in the catalogue, [entanglement signalling](entanglement-signalling.md), is where the ansible proposals themselves are scored.

## The mechanism

**The thermofield double.** Two copies of a quantum system with Hamiltonian $H$ and energy eigenstates $|n\rangle$, at inverse temperature $\beta$, in the state

$$|\Psi\rangle = \sum_n e^{-\beta E_n / 2}\, |n\rangle_L \otimes |n\rangle_R ,$$

have each side in the thermal density matrix at temperature $1/\beta$ and are entangled with entanglement entropy equal to the thermal entropy **[HIGH] S1** (§2.1, eq. 2.1). For a holographic theory whose thermal state is a black hole, this state is dual to the eternal AdS–Schwarzschild black hole, with the two copies as the two asymptotic regions and the entanglement "represented by identifying the bifurcate horizons" and filling in the interior **[HIGH] S1** (§2.1). The entanglement entropy of one side is the Bekenstein–Hawking entropy of one black hole; the authors call this maximal entanglement. The state is invariant under $H_R - H_L$, the boost symmetry of the bridge, and evolves under $H_R + H_L$, which makes the bridge longer with time (§2.7).

**No signals.** "A look at any Penrose diagram of a two-sided black hole easily shows that no signal can propagate through the wormhole from one exterior region to the other" **[HIGH] S1** (§3.1). Alice at the far black hole and Bob at the near one "are not in causal contact and information cannot be transmitted across the bridge. This can easily seen from the Penrose diagram, and is consistent with the fact that entanglement does not imply non-local signal propagation" **[HIGH] S1** (§2.3). Alice may send a message into her black hole and Bob may receive it, but only by jumping into his: the two can meet inside, behind both horizons, and neither can report back **[HIGH] S1** (§2.2, Fig. 10). On the quantum side, "It is easy to prove that no local operation on one member of a entangled pair can influence the other, before a classical signal can propagate between them" **[HIGH] S1** (§3.1). The paper makes non-traversability a condition of the conjecture: the integrated null energy condition forbids traversal classically, quantum violations are small, and "We will assume that wormholes remain un-traversable in the quantum theory. If this were not true, the ER=EPR connection would be wrong" **[HIGH] S1** (§1, footnote 1).

**No creation by local operations.** Entanglement cannot be created or increased by local operations and classical communication, so if bridges are entanglement, bridges cannot be created by local operations either. "Given two distant black holes with no Einstein-Rosen bridge, there does not seem to be any way to create a bridge between them without preexisting bridges. However, it is possible to create a neighboring black hole pair connected by an Einstein-Rosen bridge, and then separate the pair" **[HIGH] S1** (§3.2). Pair creation of charged black holes in a magnetic field (Garfinkle and Strominger) produces exactly the entangled state, which the paper takes as evidence **[HIGH] S1** (§2.4, App. A).

**Different bridges for different states.** Acting with a unitary on one side changes the state without changing the entanglement entropy, and the bridge changes accordingly: the interior is not determined by the entanglement entropy alone but by the state **[HIGH] S1** (§2.5). For less than maximal entanglement the bridge has a narrower neck, its minimal cut area being the entanglement entropy by Ryu–Takayanagi **[HIGH] S1** (§2.6). For a generic entangled state of many qubits the authors expect no classical geometry at all, a "very quantum" bridge, and they say so: "It is likely that no simple four-dimensional classical geometry exists for most of them" **[HIGH] S1** (§3.5).

**The firewall argument.** A black hole maximally entangled with a distant system can have a smooth horizon (the eternal black hole is the example), so entanglement with the radiation need not produce a firewall; if the radiation is collected and collapsed into a second black hole by a quantum computer, the pair is in the bridged state, and the interior of the first hole is the bridge **[HIGH] S1** (§1, §4). What Alice can do to Bob's interior by acting on her share is bounded by the same rule: she can send things in, but Bob learns of them only by jumping in.

There is no headline number. The content of the conjecture is an identification, and the content relevant here is a theorem: the bridge that represents entanglement is a bridge nothing crosses.

## What it costs

Nothing, and the bill is **B-none**: no negative energy, no new fields, no pre-laid route, no closed timelike curves. The conjecture uses only quantum mechanics and general relativity as they stand and asserts nothing faster than light. Its cost is intellectual: it asks for a quantum gravity in which spacetime connectivity is entanglement, and that theory does not yet exist for anything but the holographic examples.

The reason the bill is empty is that the conjecture's authors chose to make it so. A traversable bridge would break the identification, because entanglement cannot carry signals. The [Gao–Jafferis–Wall](gao-jafferis-wall-2017.md) wormhole is the case where a bridge does become traversable, and it does so only under a coupling that is itself a classical channel, which is what teleportation needs; so the offspring confirms the parent's limit.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | No signal crosses the bridge and no local operation on one half of an entangled pair affects the other; there is no faster-than-light signal to reverse in any frame. |
| CAU-2 | SATISFIES | The eternal black hole contains no closed timelike curves and the conjecture creates none; chronology protection has nothing to act on. |
| CAU-3 | SATISFIES | The conversion needs a wormhole that can be maintained and crossed; the bridge is non-traversable by assumption, and if it were traversable the conjecture would be wrong by its own statement. |
| CAU-4 | N/A | No faster-than-light sector exists for which a preferred frame would need to be picked. |
| CAU-5 | SATISFIES | The paper invokes the no-communication theorem directly ("no local operation on one member of a entangled pair can influence the other") and builds the identification on it; the bridge is the geometric face of a correlation that carries no information. |
| ENE-1 | SATISFIES | The eternal black hole is a vacuum solution; the conjecture assumes the integrated null energy condition holds well enough to keep the bridge closed. |
| ENE-2 | SATISFIES | No time advance is claimed or possible; the paper cites the non-traversability theorems as its own premise. |
| ENE-3 | N/A | No negative energy is invoked; the paper's only remark is that quantum violations are too small to open the bridge. |
| ENE-4 | N/A | The pocket geometry is a warp-bubble device with no counterpart. |
| ENE-5 | N/A | Not a Natário-class warp metric. |
| ENE-6 | N/A | No negative energy is required, so the Casimir floor is not a comparison. |
| ENE-7 | SATISFIES | The conjecture takes non-traversability as its own premise: Maldacena and Susskind assume the bridge stays closed in the quantum theory and say the identification would be wrong otherwise. The setting is anti-de Sitter rather than asymptotically flat, so the theorem applies in its holographic form, and the outcome is the same: no signal from one exterior to the other, so nothing beats the outside route. |
| CON-1 | N/A | No bubble wall; the black-hole horizons are scored under causality. |
| CON-2 | SATISFIES | Bridges cannot be created by local operations and classical communication; a bridged pair must be created together and separated at sublight speed, which is the wormhole form of CON-2's rule that the route is laid in advance. |
| CON-3 | N/A | No Krasnikov-type pre-laid metric. |
| STA-1 | N/A | No superluminal bubble wall. |
| STA-2 | SATISFIES | The bridge contains no exotic matter and, as STA-2 predicts, is not traversable; the conjecture depends on this remaining true. |
| STA-3 | N/A | No chronology horizon forms because no time machine can be built from a non-traversable bridge. |
| HAZ-1 | N/A | No superluminal bubble sweeps up particles. |
| HAZ-2 | N/A | No bubble-wall Hawking bath; the paper's concern with the horizon is the opposite one, that it stays smooth. |
| HAZ-3 | N/A | The tidal bound prices a traversable throat; the bridge is not traversable, so there is nothing to price. |
| LOR-1 | SATISFIES | Nothing is accelerated to $c$; Alice and Bob move on timelike world lines and meet, if at all, inside the horizons. |
| LOR-2 | N/A | No tachyonic matter. |
| LOR-3 | N/A | No group- or phase-velocity claim. |
| LOR-4 | N/A | No Scharnhorst-type effect. |
| WRP-1 | N/A | Not a warp drive. |
| WRP-2 | N/A | The shell classification does not apply. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a wormhole. |
| MAN-1 | N/A | The AdS bulk is the holographic dimension of the boundary theory, not a hyperspace; and for generic entangled states the paper expects no classical geometry at all. |

## Status of the argument

2013: the paper appears and becomes one of the most cited in quantum gravity, about 1600 citations on INSPIRE as of 2026-09-12 **[HIGH] S2**. It is a conjecture in the paper's own words, and it has not been proven or refuted; that is why the standing is K3 rather than K4, with the general form of the conjecture, bridges for arbitrary entangled particles, closer to K2 since it has no consensus mathematics beyond the holographic cases.

2014–2016: Susskind extends the conjecture to GHZ states and multiple black holes and argues it is consistent with the postulates of quantum mechanics (Fortsch. Phys. 64, 72, 2016), and discusses teleportation in its light (Fortsch. Phys. 64, 551, 2016) **[HIGH] S2**.

2015: Bao, Pollack and Remmen examine whether the presence of a wormhole could let an observer detect entanglement, which quantum mechanics forbids, and find the correspondence can be made consistent **[HIGH] S2** (abstract).

2017: Gao, Jafferis and Wall make the AdS bridge traversable with a two-boundary coupling and interpret the result as teleportation through the ER = EPR bridge, which is the first dynamical test of the identification; the traversal needs the coupling, a classical channel, and transmits nothing without it **[HIGH] S1**.

2018 onward: Maldacena, Milekhin and Popov describe their four-dimensional traversable wormhole as a pair of entangled black holes; the coupled-SYK models of Maldacena and Qi give the conjecture a solvable quantum-mechanical setting **[HIGH] S2**.

2022–2023: the Nature "wormhole on a quantum processor" experiment and the comment disputing it are scored on the [Gao–Jafferis–Wall](gao-jafferis-wall-2017.md) page **[MED] S1**.

No peer-reviewed paper claims that the ER = EPR bridge permits signalling as of 2026-09-12, and the conjecture's authors have written that any such signalling would falsify it. As an FTL proposal, the finding is absence.

## Sources

- **S1** Maldacena, J. and Susskind, L., "Cool horizons for entangled black holes", Fortsch. Phys. 61, 781–811 (2013), arXiv:1306.0533. doi:10.1002/prop.201300020. Read in full.
- **S1** Gao, P., Jafferis, D. L. and Wall, A. C., "Traversable Wormholes via a Double Trace Deformation", JHEP 12 (2017) 151, arXiv:1608.05687. Read in full.
- **S2** Susskind, L., "ER=EPR, GHZ, and the consistency of quantum measurements", Fortsch. Phys. 64, 72 (2016), arXiv:1412.8483. Abstract verified via INSPIRE.
- **S2** Susskind, L., "Copenhagen vs Everett, Teleportation, and ER=EPR", Fortsch. Phys. 64, 551 (2016), arXiv:1604.02589. Abstract verified via INSPIRE.
- **S2** Bao, N., Pollack, J. and Remmen, G. N., "Wormhole and entanglement (non-)detection in the ER=EPR correspondence", JHEP 11 (2015) 126, arXiv:1509.05426. Abstract verified via INSPIRE.
- **S2** Maldacena, J., Milekhin, A. and Popov, F., Class. Quantum Grav. 40, 155016 (2023), arXiv:1807.04726. Read in full.
- **S2** Maldacena, J., "Eternal black holes in anti-de Sitter", JHEP 04 (2003) 021, arXiv:hep-th/0106112. The thermofield-double identification; record via the paper's reference list.
- **S2** Peres, A. and Terno, D. R., "Quantum information and relativity theory", Rev. Mod. Phys. 76, 93 (2004), arXiv:quant-ph/0212023, §II.E. The no-communication theorem as carried in the register.
