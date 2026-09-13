# Morris, Thorne and Yurtsever: the wormhole time machine (1988)

*Take one mouth of a traversable wormhole on a fast round trip and the shortcut becomes a machine for visiting your own past.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K3 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

The paper, Phys. Rev. Lett. 61, 1446 (1988), makes a conditional claim and is careful about the condition: "if the laws of physics permit an advanced civilization to create and maintain a wormhole in space for interstellar travel, then that wormhole can be converted into a time machine with which causality might be violatable" **[HIGH] S1**. The conversion uses nothing but special relativity applied to the two mouths. Carry one mouth away at high speed and bring it back; its clock, being the clock of a travelling twin, lags the clock of the stationary mouth. But the wormhole's throat is short, so the two mouths remain nearly simultaneous through the tunnel. The result is a permanent offset between "through" and "around", and once the offset exceeds the external light travel time between the mouths, a traveller who goes through and comes back around arrives before leaving.

As its best proponent would put it, the claim is a theorem about wormholes, not a recipe for paradox. It says that the physics of traversable wormholes cannot be separated from the physics of closed timelike curves, so that whoever wants the shortcut must also want, or forbid, the time machine. The paper also asks whether the exotic matter can exist at all, and turns the question into one about whether quantum field theory enforces an averaged version of the weak energy condition: "Whether wormholes can be created and maintained entails deep, ill-understood issues about cosmic censorship, quantum gravity, and quantum field theory, including the question of whether field theory enforces an averaged version of the weak energy condition" **[HIGH] S1**. The authors' own position, developed over the following years by Thorne's group, was that the classical time machine is stable and that the decisive question is semiclassical.

## Origin and lineage

The parent is [Morris and Thorne 1988](morris-thorne-1988.md), whose traversable class this paper takes as given; the twin-paradox trick was suggested to the authors in the course of that work **[MED] S2**. The register carries the result as [CAU-3](../../constraints/cau-3.md), alongside Everett's 1996 warp-bubble version of the same trick for the [Alcubierre drive](alcubierre-1994.md), and Everett and Roman's two-tube version for the [Krasnikov tube](krasnikov-tube.md). Novikov and Frolov (PRD 42, 1057, 1990) generalised the construction to a gravitational-redshift version, in which one mouth sits in a deeper potential instead of being moved **[HIGH] S2** (Lemos, Lobo and Oliveira §1.6). Kim and Thorne (PRD 43, 3929, 1991) computed the vacuum polarisation at the chronology horizon and found a weak divergence they proposed quantum gravity would cut off, which is the register's [STA-3](../../constraints/sta-3.md). Hawking's chronology protection conjecture (PRD 46, 603, 1992), [CAU-2](../../constraints/cau-2.md), was written in reply. [Gott's cosmic-string time machine](gott-cosmic-string-time-machine.md) is the sibling that dispenses with the wormhole. The [Gao, Jafferis and Wall](gao-jafferis-wall-2017.md) and [Maldacena, Milekhin and Popov](maldacena-milekhin-popov-2018.md) wormholes are built so that this construction fails on them.

Lineage: [The wormhole goes to television](../../lineage/morris-thorne-gate-fiction.md); [Sagan asks Thorne for a legal wormhole](../../lineage/sagan-thorne-contact-interstellar.md).

## The mechanism

**The offset.** Let the two mouths $A$ and $B$ of a Morris–Thorne wormhole start at rest a distance $D$ apart in the external space, with clocks synchronised both through the throat and around the outside. Mouth $B$ is carried away and back at speed $v$ for external time $T$. Its proper time is $T/\gamma$ with $\gamma = (1 - v^2/c^2)^{-1/2}$, so on return the clock at $B$ reads

$$t_B = t_A - \Delta t, \qquad \Delta t = T\left(1 - \frac{1}{\gamma}\right) .$$

The throat is short, and the geometry through it is not affected by the external motion of the mouths (the mouths are heavy and the throat matter is carried along rigidly), so a traveller entering $B$ at proper time $\tau$ on $B$'s clock emerges from $A$ at time $\tau$ on $A$'s clock **[HIGH] S2** (the standard account in Visser 1995 and in Lobo's review). Externally the two mouths now differ by $\Delta t$. A round trip, through the wormhole from $B$ to $A$ and back through the exterior at speed $u$, returns to $B$ at external time $\tau + D/u$ while $B$'s own clock reads $\tau - \Delta t + D/u$ relative to the departure. Once

$$\Delta t > \frac{D}{c},$$

there are closed timelike curves: the traveller can arrive at $B$ before leaving it **[HIGH] S2**. For $v = 0.9c$, $\gamma \approx 2.3$, and a one-year excursion gives $\Delta t \approx 0.56$ yr, enough to make a time machine of any wormhole whose mouths are within about $0.5$ light-years of each other, and mouths closer together need shorter excursions.

**The chronology horizon.** Before the offset reaches $D/c$ the spacetime is causally ordinary. The first closed null curve appears at the moment $\Delta t = D/c$, and the boundary of the region containing closed timelike curves is a Cauchy horizon generated by null geodesics that pass through the wormhole repeatedly, the chronology horizon. It is compactly generated: the generating null curves are trapped in a bounded region of the spacetime **[HIGH] S2**. This compactness is what Hawking's theorem later exploits.

**The weak energy condition.** The paper's second result is the general argument that a traversable wormhole requires violation of the weak energy condition, and its sharpening: what matters for the theorems of general relativity is not the pointwise condition, which quantum fields violate anyway, but its average along a null geodesic, the averaged null (or averaged weak) energy condition ([ENE-1](../../constraints/ene-1.md)) **[HIGH] S1** (abstract). A bundle of light rays passing through the throat is defocused, and by the Raychaudhuri equation defocusing a null congruence needs $\int T_{\mu\nu} k^\mu k^\nu d\lambda < 0$ along the ray. The question the paper leaves open, whether field theory enforces the averaged condition, is the one later settled in the affirmative for achronal geodesics (Graham and Olum 2007; Wall 2010; Faulkner et al. 2016; Hartman, Kundu and Tajdini 2017), which is why the twenty-first-century wormholes have to be long **[HIGH] S2** (as stated in Gao, Jafferis and Wall §1 and Maldacena, Milekhin and Popov §1).

**The classical stability of the machine.** Morris, Thorne and Yurtsever and later Thorne's group argued that the machine is classically stable: a single particle or wave that goes round the loop many times does not blow up, because the wormhole defocuses it on each pass and the sum over passes converges **[MED] S2**. The semiclassical story is different and is scored below.

The headline number is $\Delta t = T(1 - 1/\gamma)$: the time offset is a special-relativistic clock effect, of order the excursion time, with no new ingredient.

## What it costs

Everything the parent costs, plus the causality bill.

**B-neg, B-mass.** The wormhole is a [Morris–Thorne](morris-thorne-1988.md) throat, so it needs matter with $\tau_0 > \rho_0 c^2$ at neutron-star-core scales, with the quantum-inequality band of Ford and Roman on top. Moving a mouth at $0.9c$ also needs the mouth, of order $10^2$ solar masses for a human-safe throat, to be accelerated and returned, an energy bill of its own.

**B-boot.** The far mouth has to be delivered at sublight speed before the first fast trip; the round trip of the mouth that makes the machine is a second sublight journey.

**B-caus.** The construction produces closed timelike curves by design. Whether the machine survives its own chronology horizon is the open question of [STA-3](../../constraints/sta-3.md) and [CAU-2](../../constraints/cau-2.md).

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | The construction yields a traveller who returns before departing, the tachyonic antitelephone realised in curved spacetime with fixed Lorentz invariance. |
| CAU-2 | VIOLATES | Chronology protection is the conjecture that the closed timelike curves this device produces cannot appear; Hawking's 1992 paper is the reply to this construction, and the two cannot both hold. |
| CAU-3 | VIOLATES | This is the source paper for CAU-3: a maintainable wormhole plus one relativistic round trip of a mouth is a time machine. |
| CAU-4 | N/A | The preferred-frame escape is not taken; the construction keeps Lorentz invariance and accepts the closed timelike curves rather than fixing a frame to avoid them. |
| CAU-5 | N/A | No entanglement enters a classical wormhole spacetime. |
| ENE-1 | VIOLATES | The throat needs $\tau_0 > \rho_0 c^2$; the paper itself sharpens the requirement to violation of the averaged weak energy condition along null geodesics through the throat. |
| ENE-2 | VIOLATES | The wormhole is a shortcut relative to flat exterior light, which Olum and Gao–Wald show needs energy-condition violation; the offset trick then turns the shortcut into a loop. |
| ENE-3 | VIOLATES | Ford and Roman (1996) apply the quantum inequalities to the Morris–Thorne–Yurtsever wormhole parameters and find the exotic matter confined to a near-Planck band, which the construction does not accommodate. |
| ENE-4 | N/A | The pocket geometry is a warp-bubble device with no counterpart for a throat. |
| ENE-5 | N/A | Not a Natário-class warp metric. |
| ENE-6 | VIOLATES | The paper points to Casimir-type effects as the only known negative energy; the register's measured Casimir density is tens of orders of magnitude below the throat's requirement. |
| ENE-7 | VIOLATES | The time machine needs a short wormhole, one whose traversal beats the outside route, since a long one cannot be offset into a loop; that is exactly the achronal ANEC violation the theorem forbids. The 2007 to 2017 achronal ANEC proofs close the loophole the 1988 abstract left open for short wormholes. |
| CON-1 | N/A | No warp-bubble horizon; the wormhole has no horizon by design and the mouth is moved by ordinary means. |
| CON-2 | SATISFIES | The far mouth is placed and then moved at sublight speed; the paper accepts that the machine is infrastructure assembled in advance, which is CON-2's demand. |
| CON-3 | N/A | The Krasnikov tube is a warp-class construction; its two-tube time machine (Everett and Roman) is the L2 analogue of this result, scored on its own page. |
| STA-1 | N/A | No superluminal bubble wall. |
| STA-2 | VIOLATES | The throat is held open by exotic matter whose tension exceeds its density, as STA-2 states; the time machine inherits the throat unchanged. |
| STA-3 | VIOLATES | The construction creates a compactly generated chronology horizon at which the renormalised stress-energy of quantum fields diverges (Kim and Thorne); the machine survives only if that divergence is cut off, which the register records as unresolved. |
| HAZ-1 | N/A | No superluminal bubble; particles are not swept up. |
| HAZ-2 | N/A | No horizons at a bubble wall; the relevant divergence is the chronology horizon under STA-3. |
| HAZ-3 | SATISFIES | The wormhole is a Morris–Thorne throat built to the one-g tidal bound; moving a mouth at high speed does not change the tides through the throat. |
| LOR-1 | SATISFIES | The mouth is moved at $v < c$ and the traveller moves at $v < c$ everywhere; the effect is purely a clock offset. |
| LOR-2 | N/A | No tachyonic matter appears, although the outcome is the antitelephone. |
| LOR-3 | N/A | No wave-propagation claim is made. |
| LOR-4 | N/A | No Scharnhorst-type effect is involved. |
| WRP-1 | N/A | Not a warp drive. |
| WRP-2 | N/A | The shell classification of warp spacetimes does not apply. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a wormhole. |
| MAN-1 | N/A | Both mouths are in ordinary four-dimensional space. |

## Status of the argument

1988: the result appears in Physical Review Letters and has about 1800 citations on INSPIRE as of 2026-09-12 **[HIGH] S2**.

1990: Frolov and Novikov give the redshift variant and study physical effects in wormhole time machines **[HIGH] S2**.

1991: Kim and Thorne compute the vacuum polarisation near the chronology horizon and find a divergence they call extremely weak, proposing that quantum gravity cuts it off at the Planck scale so that closed timelike curves can form **[HIGH] S2** (register STA-3, verified there).

1992: Hawking's chronology protection conjecture argues the opposite, that the back reaction prevents the curves from closing, and proves that a compactly generated chronology horizon requires weak-energy-condition violation on its generators **[HIGH] S2** (register CAU-2).

1990s: the debate on Misner space, the two-dimensional model of the wormhole time machine, goes back and forth (Lemos, Lobo and Oliveira §1.6), and the consensus reached is that semiclassical calculations cannot settle chronology protection; a quantum theory of gravity is needed **[HIGH] S2**.

2007–2017: the averaged null energy condition is proven for achronal null geodesics in flat-space quantum field theory (Graham and Olum; Wall; Faulkner et al.; Hartman, Kundu and Tajdini), closing the loophole the 1988 abstract left open for short wormholes, which are the ones this construction needs **[HIGH] S2**.

2017 onward: [Gao, Jafferis and Wall](gao-jafferis-wall-2017.md) and [Maldacena, Milekhin and Popov](maldacena-milekhin-popov-2018.md) build traversable wormholes on which the Morris–Thorne–Yurtsever conversion explicitly cannot be performed, because the wormhole is longer than the exterior path and the two-sided coupling fixes the relative time of the mouths **[HIGH] S1**.

The theorem itself, that a maintainable short wormhole is a time machine, is uncontested. What has changed since 1988 is that no maintainable short wormhole is any longer expected to exist.

## Sources

- **S1** Morris, M. S., Thorne, K. S. and Yurtsever, U., "Wormholes, Time Machines, and the Weak Energy Condition", Phys. Rev. Lett. 61, 1446–1449 (1988). doi:10.1103/PhysRevLett.61.1446. No arXiv version; abstract verified via Crossref and INSPIRE, full text paywalled.
- **S1** Morris, M. S. and Thorne, K. S., Am. J. Phys. 56, 395–412 (1988). doi:10.1119/1.15620. The parent construction.
- **S2** Kim, S.-W. and Thorne, K. S., "Do vacuum fluctuations prevent the creation of closed timelike curves?", Phys. Rev. D 43, 3929–3947 (1991). doi:10.1103/PhysRevD.43.3929. Record verified via Crossref.
- **S2** Hawking, S. W., "Chronology protection conjecture", Phys. Rev. D 46, 603–611 (1992). doi:10.1103/PhysRevD.46.603. Record verified via Crossref.
- **S2** Frolov, V. P. and Novikov, I. D., "Physical effects in wormholes and time machines", Phys. Rev. D 42, 1057–1065 (1990). doi:10.1103/PhysRevD.42.1057. Record verified via Crossref.
- **S2** Lemos, J. P. S., Lobo, F. S. N. and Oliveira, S. Q., Phys. Rev. D 68, 064004 (2003), arXiv:gr-qc/0302049, §1.6 on time machines. Read in full.
- **S2** Lobo, F. S. N., arXiv:0710.4474 (2007). Read in full.
- **S2** Ford, L. H. and Roman, T. A., Phys. Rev. D 53, 5496 (1996), arXiv:gr-qc/9510071. Abstract verified via INSPIRE.
- **S2** Visser, M., *Lorentzian Wormholes: From Einstein to Hawking* (AIP Press, 1995), ch. 18 on time machines. Not verified online.
