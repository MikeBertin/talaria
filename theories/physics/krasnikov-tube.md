# Krasnikov 1998: the tube laid on the way out

*A metric laid along the outbound flight makes the return arbitrarily short by the home clock, for negative energy.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K3 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

Suppose [tachyons](tachyons-feinberg-1967.md) are forbidden and, more strongly, that nothing a traveller does can change the geometry of spacetime outside the causal future of the moment he decides to act: Krasnikov calls this "utter causality". Then, in a globally hyperbolic universe, no spaceship can reach a distant star sooner than a beam of test particles launched at the same moment would. The first flight cannot be hastened, whatever the pilot does to the metric. That is the paper's theorem, and it is what kills the [Alcubierre](alcubierre-1994.md) bubble as a vehicle you create around yourself: the world line of the leading edge of the bubble matter is spacelike whenever the bubble is superluminal, so making the metric ahead of you needs tachyonic matter or devices placed along the route beforehand.

The positive claim is that the round trip is different. Everything between the outbound arrival and the return lies in the causal future of the departure, so nothing forbids the traveller from modifying the metric along his outbound path in a way that makes the return arbitrarily short by the home clock. Krasnikov exhibits a two-dimensional metric that does this: flat outside a strip along the outbound world line, flat inside it too, but with the light cones inside opened so far that a homeward-bound traveller moves toward decreasing coordinate $t$ while remaining future-directed. An astronaut leaves Earth in 2000, reaches Deneb in 3600 by Earth's clocks after a near-lightspeed flight of short proper time, and returns in 2002. The tube stays where he laid it; a regular service can run along it thereafter, and only the very first flight is slow.

What the paper does not claim is that any of this is cheap or safe. Krasnikov states that vehicles of this kind are "square roots" of time machines, that creating them requires violating the weak energy condition, and that the quantum inequalities as applied by Everett and Roman put the price at $10^{32}$ galactic masses. His response is not to dispute the bill but to argue that the flat-space form of the inequalities may fail in exactly the spacetimes one would want, near an almost-formed time machine, so the search should be for geometries where that assumption breaks.

## Origin and lineage

S. V. Krasnikov, Central Astronomical Observatory at Pulkovo, "Hyperfast interstellar travel in general relativity", Phys. Rev. D 57, 4760 (1998), arXiv:gr-qc/9511068 (first posted November 1995, v6 March 1998) **[HIGH] S1**. It answers Alcubierre 1994, with a theorem rather than a calculation, and it is the origin of the bootstrap problem on the register ([CON-2](../../constraints/con-2.md)) and of the observation that the wall matter is tachyonic ([CON-1](../../constraints/con-1.md)). Everett and Roman generalised the two-dimensional metric to a four-dimensional tube, computed its stress-energy and built a time machine from two of them ([Everett and Roman 1997](everett-roman-superluminal-subway.md), [CON-3](../../constraints/con-3.md)); their paper appeared before Krasnikov's, because his preprint had been circulating since 1995. Coule (1998) reached the same bootstrap conclusion for the Alcubierre bubble independently. Krasnikov returned to the energy question in 2003 to argue the quantum inequalities do not forbid shortcuts of this class. The idea of a pre-laid route is the physics counterpart of fiction's fixed lanes and gates; no lineage page exists yet.

## The mechanism

Units $G = c = 1$; two spacetime dimensions unless stated. **The theorem.** Two spacetimes $M_1$, $M_2$ "diverge by" an event $S$ if there are open sets $N_i \subset M_i$ and an isometry $\varphi\colon N_1 \to N_2$ such that $I^-(S_2) = \varphi(I^-(S_1))$ and every boundary point of $N_j$ that has a counterpart under the isometry lies, or has its counterpart lying, in $J^+(S_1)\cup J^+(S_2)$. In words: the two worlds are the same except where the difference can be traced to the causal future of $S$. This is the formal content of utter causality; Krasnikov is explicit that it is a postulate, adopted because in the absence of tachyons "it is hard to conceive of a mechanism violating it" **[HIGH] S1**. With $E_i$, $D_i$ the world lines of Earth and Deneb, $F_i = \mathrm{Bd}\,J^+(S_i)\cap D_i$ is the earliest arrival at Deneb and $R_i = \mathrm{Bd}\,J^+(F_i)\cap E_i$ the earliest return. **Proposition 1**: if $M_1$, $M_2$ are globally hyperbolic and diverge by $S$, then $F_1 \star F_2$, that is, the earliest arrival is the same event in both worlds. The proof, in the appendix, is by three lemmas on the boundaries of the unchanged regions; Krasnikov calls it "seemingly self-evident" but "quite tedious" **[HIGH] S1**.

**Applied to Alcubierre (Example 4).** With the metric $ds^2 = -dt^2 + [dx - v_s f(r_s)\,dt]^2$, the curve $\lambda_+ = (t, x_s(t) + R)$ separating the flat and curved regions is spacelike exactly when $v_s > 1$. Alcubierre's equation (19) says the space just inside $\lambda_+$ carries matter ($G^{00} \neq 0$), so $\lambda_+$ is the world line of the leading edge of that matter: "to achieve $T < D$ the astronaut has to use tachyons" **[HIGH] S1**. Without tachyons the same effect needs devices placed along the way in advance and programmed to act at preassigned moments; taking the moment $P$ when the placing began as the diverging event, Proposition 1 shows that "though a regular spaceship service perhaps can be set up by this means, it does not help to outdistance the test particles from $M_1$ in the first flight" **[HIGH] S1**.

**The tube (Example 5).** The return is different because the segment from $F$ to $R$ lies in $J^+(S)$. Krasnikov's metric is

$$ds^2 = -(dt - dx)\bigl(dt + k(t,x)\,dx\bigr), \qquad k \equiv 1 - (2 - \delta)\,\theta_\varepsilon(t - x)\bigl[\theta_\varepsilon(x) - \theta_\varepsilon(x + \varepsilon - D)\bigr],$$

where $\theta_\varepsilon$ is a smooth monotone function equal to 0 for $\xi < 0$ and 1 for $\xi > \varepsilon$, and $\delta$ and $\varepsilon < D$ are small positive parameters **[HIGH] S1**. Three regions. Outside ($x < 0$, $x > D$ or $x > t$): $k = 1$, the metric is Minkowski, future light cones generated by $r_O = \partial_t + \partial_x$ and $l_O = \partial_t - \partial_x$. A transition strip of width of order $\varepsilon$ along $x \approx t$ and at the two ends, where spacetime is curved. Inside ($x < t - \varepsilon$, $\varepsilon < x < D - \varepsilon$): $k = \delta - 1$, again flat, but with light cones generated by $r_I = \partial_t + \partial_x$ and $l_I = -(1 - \delta)\,\partial_t - \partial_x$. The vector $l_I$ is almost antiparallel to $r_I$: a photon moving left from $F$ reaches $x = 0$ almost at $S$. The factor $\theta_\varepsilon(t - x)$ enforces utter causality, since the ship cannot modify the metric at $x$ before $t = x$. The story: a near-lightspeed outbound flight of proper time $\Delta\tau_a \ll 1600$ yr, arrival at Deneb in 3600 by Earth's clocks whatever the manipulations en route, then on the return "he finds that the metric has changed and he moves 'backward in time', that is, $t$ decreases as he approaches the Earth (though his trajectory, of course, is future-directed). As a result, he returns to the Earth in 2002" **[HIGH] S1**.

**The headline numbers**, from Everett and Roman's analysis of this metric: the return takes coordinate time $\Delta t_r = D(\delta - 1)$, so the ship is home at $t_E = D\delta$, positive but as small as $\delta$ allows; for $\delta < 1$ there is a causal return velocity for which the trip is instantaneous by outside clocks; and $t_E > 0$ means one tube is not a time machine **[HIGH] S1**. The four-dimensional bill is in the sibling dossier: walls no thicker than about $10^4$ Planck lengths, and a negative energy of order $-10^{18}$ galactic masses for a tube one metre long and one metre wide, $-10^{32}$ galactic masses to the nearest star **[HIGH] S1**.

**The wormhole variant (Example 6)** takes one mouth of a [wormhole](morris-thorne-1988.md) along on the outbound trip; the throat stays short and the traveller returns through it within $\Delta\tau_E \approx \Delta\tau_a$ of departure. Because the mouth only moves away from Earth, "causality is preserved" **[HIGH] S1**.

**The discussion.** In every example the pilot turns an initially spacelike (or past-directed) curve into a future-directed one. Do it to two spacelike curves in turn, $AC_1B$ and then $BC_2A$ in the untouched region, and $AC_1BC_2A$ is a closed timelike curve: these vehicles are "square roots" of time machines, and Krasnikov proposes the name "space machine" **[HIGH] S1**. Type 1 space machines, which lead to time machines with compactly generated Cauchy horizons (Examples 4 to 6), require violation of the weak energy condition by Hawking's 1992 theorem, and the quantum inequalities price the four-dimensional tube at $10^{32}\,M_{\mathrm{galaxy}}$ of negative energy, with thermodynamics suggesting comparable amounts of ordinary energy, "which makes the creation unlikely". His proposed way out is that the inequality used assumes spacetime is approximately Minkowski over the sampling time, and near the Cauchy horizon of an almost-formed wormhole time machine (Misner space with a conformal-vacuum scalar field is the example) the sampled energy density tends to $-\infty$, so "we need not actually create a time machine to violate the QI. It would suffice to 'almost create' it" **[HIGH] S1**. Type 2, noncompact space machines (the singularity-free "hyper-jump" of Example 3), need no energy condition violation but require a non-globally-hyperbolic evolution nobody knows how to force.

## What it costs

**B-neg.** Krasnikov states that creating a space machine of the tube type requires violating the weak energy condition, by Hawking's theorem on compactly generated Cauchy horizons, and Everett and Roman show it explicitly for the four-dimensional tube ([ENE-1](../../constraints/ene-1.md), [ENE-2](../../constraints/ene-2.md)).

**B-mass.** The quantum-inequality bill he quotes from Everett and Roman is $10^{32}$ galactic masses of negative energy for a tube to Deneb, with a comparable ordinary-energy cost implied by thermodynamics ([ENE-3](../../constraints/ene-3.md)). His 2003 argument against the inequalities is a dispute about the criterion, not a smaller number.

**B-boot.** This is the mark the proposal owns rather than suffers. The tube must be laid along the route at sublight speed; the theorem says nothing can make the first flight faster; the whole design accepts that warp travel is infrastructure ([CON-2](../../constraints/con-2.md), [CON-3](../../constraints/con-3.md)).

**B-caus.** By the author's own account the tube is the square root of a time machine; two tubes give closed timelike curves ([CAU-3](../../constraints/cau-3.md)). A single tube preserves causality only because it works in one direction between fixed endpoints.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | A single tube gives effective superluminal travel only in one direction along one fixed route and returns the traveller at $t_E = D\delta > 0$, never before departure; CAU-1 lists FTL that works only in one direction or between fixed endpoints as an escape hatch, and this is the cleanest instance of it in the literature. The hatch closes as soon as there are two tubes. |
| CAU-2 | SILENT | Krasnikov cites Hawking 1992 for the energy condition consequence of compactly generated Cauchy horizons but does not adjudicate whether chronology protection forbids the two-tube machine; the question is open. |
| CAU-3 | VIOLATES | The paper says the vehicles are square roots of time machines and describes the two-curve construction that closes a timelike loop; Everett and Roman carry it out with two non-overlapping tubes. |
| CAU-4 | SILENT | Everett and Roman note that closed timelike curves could be avoided only by a preferred axis along which every tube is oriented, which is a CAU-4 frame choice; Krasnikov proposes no such thing and says nothing about what would pick it. |
| CAU-5 | N/A | No quantum signalling. |
| ENE-1 | VIOLATES | Krasnikov states that creation of a type 1 space machine requires violating the weak energy condition; Everett and Roman compute negative energy density inside the tube wall. |
| ENE-2 | VIOLATES | Olum's theorem is about spacetimes with exactly this property, a causal path between flat-space points that beats light through flat space; the tube's return leg is one, and the weak energy condition fails in the wall as the theorem requires. |
| ENE-3 | VIOLATES | Krasnikov quotes Everett and Roman's inequality-based bill of $10^{32}$ galactic masses and does not dispute the calculation; his objection, developed in 2003, is that the flat-space inequality may not apply near an almost-formed time machine, which is an argument about the register entry's scope, not compliance with it. |
| ENE-4 | SILENT | Van Den Broeck's pocket trick is for bubbles; no analogous reduction is proposed for the tube here, and whether a conformal blow-up inside a tube could cut its bill has not been analysed in the sources this dossier could verify. |
| ENE-5 | N/A | The tube is not in the Natário class: its slices $t = \mathrm{const}$ carry the metric $k\,dx^2 + d\rho^2 + \rho^2 d\varphi^2$, which is not flat where $k$ varies and not even spacelike where $k < 0$. The theorem does not bear on it. |
| ENE-6 | SILENT | No source is proposed for the negative energy; the Casimir floor is tens of orders of magnitude below any wall density and the paper does not address it. |
| ENE-7 | N/A | Trivial topology by construction: the tube is a deformation of Minkowski space along a strip, not a handle joining two places. The return-leg advance is what ENE-2 prices and that row is where it is scored; ENE-7 is ENE-2 restated for wormholes. |
| CON-1 | SATISFIES | The tube was designed so that every change to the metric lies in the causal future of the pilot's decision; there is no horizon between the crew and the structure they build, which is what Everett and Roman mean by saying the tube "does not suffer from the first difficulty". |
| CON-2 | SATISFIES | CON-2 is Krasnikov's own theorem: the first flight cannot be hastened without tachyons, and the same effect without tachyons needs devices laid along the way. The proposal respects the constraint by construction. |
| CON-3 | SATISFIES | This paper is the entry's first citation; the round trip is arbitrarily short by home and traveller clocks alike, and the paper accepts the ENE-3 and CAU-3 costs the entry lists. |
| STA-1 | SILENT | There is no horizon, so Hiscock's divergence mechanism is absent, and the tube is static after formation; but no semiclassical stress-energy has been computed for the tube geometry in any dimension. |
| STA-2 | N/A | No wormhole throat in the tube; Example 6 is a wormhole variant discussed in one paragraph and not developed. |
| STA-3 | SILENT | The two-tube time machine would have a chronology horizon; Krasnikov discusses the divergence of the sampled energy density near the Cauchy horizon of a wormhole time machine as a feature to exploit, and whether Hawking's or Kim and Thorne's account holds there is unsettled. |
| HAZ-1 | N/A | The tube is static; nothing sweeps up interstellar matter at superluminal speed. Inside the tube the ship moves at near light speed relative to the local inertial frame, with only the ordinary hazards of relativistic flight. |
| HAZ-2 | N/A | No horizon, no Hawking flux; the interior is flat Minkowski space with tilted light cones. |
| HAZ-3 | N/A | Not a wormhole throat; tidal forces are confined to walls of width $\varepsilon$ that the ship does not enter. |
| LOR-1 | SATISFIES | The ship is always inside its local light cone; the return is superluminal only relative to the outside frame because the cone has been opened, not because the ship has been pushed. |
| LOR-2 | SATISFIES | The whole construction is designed to avoid tachyons: utter causality is imposed precisely so that nothing, matter or metric, acts outside the light cone, and Proposition 1 is proved under that assumption. |
| LOR-3 | N/A | No medium. |
| LOR-4 | N/A | Not relevant. |
| WRP-1 | N/A | Not a warp drive in the class sense: not unit lapse over flat slices with a shift, but a static tube with opened light cones. The paper says what it is instead, a "space machine", so WRP-1's demand is met by exclusion rather than membership. |
| WRP-2 | N/A | The classification of warp drives as shells moving inertially does not describe a static tube laid along a route. |
| WRP-3 | N/A | The tube makes no positive-energy claim and is not a warp bubble; the dated score of superluminal positive-energy bubbles is unaffected by it. |
| MAN-1 | N/A | Four dimensions, and in Example 5 the topology is trivial. |

## Status of the argument

- **1995 to 1998.** The preprint circulates from November 1995 and is published in March 1998 **[HIGH] S1**.
- **1997.** Everett and Roman, working from the preprint, extend the metric to four dimensions, show the weak energy condition is violated in the tube wall, bound the wall thickness by the quantum inequality at about $10^4$ Planck lengths, estimate the total negative energy at $10^{16}$ galactic masses for a metre of tube and $10^{32}$ for a tube to the nearest star, and build a time machine from two tubes **[HIGH] S1**.
- **1998.** Coule, "No warp drive", reaches the bootstrap conclusion for the Alcubierre bubble independently: "you need one to make one" **[HIGH] S1** (via the register, CON-2).
- **1999.** Van Den Broeck cites the tube as an attempt to improve on Alcubierre and sets it aside to attack the energy bill of the bubble instead **[HIGH] S1**.
- **2003.** Krasnikov, "The quantum inequalities do not forbid spacetime shortcuts": for a class including the Alcubierre bubble, the Krasnikov tube and certain wormholes, explicit examples are given in which the inequality does not imply large densities, large densities do not imply large total energy, and large total energy is physically meaningless in some relevant situations **[HIGH] S1**. This is the standing reply to Everett and Roman's bill; no published rebuttal was found as of 2026-09-12.
- **2003.** Lobo and Crawford's review treats the tube alongside the bubble and the wormhole as the three known superluminal geometries **[HIGH] S2**.
- **2017.** Alcubierre and Lobo's review chapter presents the tube as the answer to the horizon problem and restates the short round trip **[HIGH] S2**.
- **2026-09-12.** Proposition 1 has not been challenged in print. The tube remains the only superluminal geometry in this catalogue whose author built the bootstrap into the design rather than suffering it. Its price has not been reduced, and the two-tube time machine has not been answered.

## Sources

- **S1** Krasnikov, S. V., "Hyperfast interstellar travel in general relativity", Phys. Rev. D 57, 4760–4766 (1998), arXiv:gr-qc/9511068. Read in full.
- **S1** Everett, A. E. and Roman, T. A., "A superluminal subway: the Krasnikov tube", Phys. Rev. D 56, 2100–2108 (1997), arXiv:gr-qc/9702049. Read in full.
- **S1** Alcubierre, M., Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. Read in full.
- **S1** Krasnikov, S., "The quantum inequalities do not forbid spacetime shortcuts", Phys. Rev. D 67, 104013 (2003), arXiv:gr-qc/0207057. Abstract read.
- **S1** Coule, D. H., "No warp drive", Class. Quantum Grav. 15, 2523 (1998). Via the register, CON-2.
- **S1** Hawking, S. W., "Chronology protection conjecture", Phys. Rev. D 46, 603 (1992). Cited by Krasnikov for the energy condition consequence; via the register, CAU-2.
- **S1** Everett, A. E., "Warp drive and causality", Phys. Rev. D 53, 7365 (1996). Cited by Krasnikov; via INSPIRE and the register, CAU-3.
- **S1** Van Den Broeck, C., Class. Quantum Grav. 16, 3973 (1999), arXiv:gr-qc/9905084. Read in full.
- **S1** Ford, L. H. and Roman, T. A., Phys. Rev. D 53, 5496 (1996). The curved-space quantum inequality Krasnikov's discussion turns on; via the register, ENE-3.
- **S2** Lobo, F. S. N. and Crawford, P., "Weak energy condition violation and superluminal travel", Lect. Notes Phys. 617, 277–291 (2003), arXiv:gr-qc/0204038. Abstract read.
- **S2** Alcubierre, M. and Lobo, F. S. N., "Warp drive basics", Fundam. Theor. Phys. 189, 257–279 (2017), arXiv:2103.05610. Abstract read.
