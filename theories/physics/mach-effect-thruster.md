# The Mach effect thruster

*Woodward's proposal that a body whose internal energy fluctuates while it accelerates fluctuates in mass, and that a piezoelectric stack can turn that into propellantless thrust; the most sensitive balances find vibration, not thrust.*

**Kind:** physics · **Loophole:** L6 · **Standing:** K0 · **Bill:** B-new · **Last reviewed:** 2026-09-12

## The claim

James Woodward's proposal rests on Mach's principle in Sciama's form: inertia is the gravitational action of all the matter in the causally connected universe on a body that is accelerated. Take that seriously as a field theory, write the gravitational potential of the universe as $\phi \approx c^2$ at every point, and the wave equation for $\phi$ sourced by a body whose proper energy density changes in time acquires transient source terms. Woodward reads those terms as a transient change in the body's rest mass: any object that absorbs or releases internal energy while it is being accelerated fluctuates in mass, by an amount proportional to the second time derivative of its energy density, plus a smaller term, always negative, proportional to the square of the first derivative. The fluctuation is tiny at ordinary power levels but grows with frequency, and Woodward's thruster is a device to exploit it: a stack of piezoelectric discs driven at tens of kilohertz so that its internal energy oscillates, arranged so that the stack pushes a mass forwards while the mass is heavier and back while it is lighter, giving a net time-averaged force with no propellant expelled. Woodward reports thrusts of order a micronewton at a few hundred volts in the early devices and of order tens to a hundred micronewtons in the NIAC-funded designs of 2017 to 2018, and argues that the momentum is exchanged with the distant matter of the universe through the gravitational field, so that no conservation law is broken **[HIGH] S1** for the reported figures.

The proposal's reach goes beyond the thruster. Woodward's 2013 book, *Making Starships and Stargates: The Science of Interstellar Transport and Absurdly Benign Wormholes*, argues that the second, negative-definite term in the mass fluctuation can, at sufficient power, make a body transiently negative in mass, and that this is the exotic matter that the traversable wormholes of [Morris and Thorne](morris-thorne-1988.md) and [STA-2](../../constraints/sta-2.md) need **[MED] S2** (from the book's own title and the sign of the term in the 2004 paper; the book was not opened for this dossier). That is the link to the rest of this catalogue: even the thruster alone would give a [relativistic rocket](relativistic-rocket.md) without a rocket equation, and the "wormhole term", if real, would pay the bill that every L3 entry owes.

## Origin and lineage

Sciama's 1953 vector theory of gravity is the ancestor; Woodward's first paper on the effect, "A new experimental approach to Mach's principle and relativistic gravitation", appeared in Foundations of Physics Letters 3, 497 (1990), with a corrigendum in volume 4 (1991), and a first measurement claim in the same journal in 1991 (4, 407) **[HIGH] S1** (bibliographic records verified; abstracts consulted). The fullest published derivation is "Flux capacitors and the origin of inertia", Foundations of Physics 34, 1475 (2004), which is the paper read for this dossier **[HIGH] S1**. Woodward and Fearn at California State University, Fullerton, built the devices through the 2000s and 2010s; NASA's Innovative Advanced Concepts programme funded a Phase I study in 2017 and a Phase II in 2018 under the title "Mach effects for in-space propulsion: interstellar mission", with a Space Studies Institute team **[HIGH] S1** (the Phase II report). Rodal's 2019 paper in General Relativity and Gravitation examined whether the effect can be derived from Einstein's theory or from the Hoyle-Narlikar conformal scalar-tensor theory **[HIGH] S1**. Tajmar's group at TU Dresden tested devices supplied by Woodward and devices of their own from 2017, and Monette, Kößling and Tajmar published the conclusion in Acta Astronautica in 2021 **[HIGH] S1**. Buldrini reported a partial replication at 0.2 µN in a workshop proceedings **[MED] S2** (via Tajmar).

The reactionless drive in fiction needs no introduction; what is particular to this proposal is that its author wrote the starship book himself, and the "absurdly benign wormhole" is a Mach-effect wormhole, a real-physics attempt to reach the L3 entries in the catalogue.

## The mechanism

Woodward begins with Sciama's identification of inertial reaction with the gravitomagnetic-style field of the universe, $\mathbf{E} = -\nabla\phi - c^{-1}\partial\mathbf{A}/\partial t$, and the condition that the potential of the causally connected universe satisfies $\phi \approx c^2$, so that a body's rest energy density is $E_0 = \rho_0\phi$. Substituting into the wave equation for $\phi$ and separating variables, he obtains (his eq. 7)

$$\nabla^2\phi - \frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2} = 4\pi G\rho_0 + \frac{\phi}{\rho_0 c^4}\frac{\partial^2 E_0}{\partial t^2} - \Big(\frac{\phi}{\rho_0 c^4}\Big)^2\Big(\frac{\partial E_0}{\partial t}\Big)^2 - \frac{1}{c^4}\Big(\frac{\partial\phi}{\partial t}\Big)^2,$$

and reads the transient terms on the right as a transient proper matter density. With $\phi/c^2 = 1$ and the last term dropped as always minuscule (his eq. 9),

$$\delta\rho_0(t) \approx \frac{1}{4\pi G}\left[\frac{1}{\rho_0 c^2}\frac{\partial^2 E_0}{\partial t^2} - \Big(\frac{1}{\rho_0 c^2}\Big)^2\Big(\frac{\partial E_0}{\partial t}\Big)^2\right]$$

**[HIGH] S1**. Integrated over a capacitor or a piezoelectric stack of mass $m_0$ receiving instantaneous power $P$, the mass fluctuation is (his eq. 10)

$$\delta m_0 = \frac{1}{4\pi G}\left[\frac{1}{\rho_0 c^2}\frac{\partial P}{\partial t} - \Big(\frac{1}{\rho_0 c^2}\Big)^2 P^2\right],$$

on the assumption, which Woodward calls "optimistic, indeed, perhaps wildly optimistic", that all of the delivered power becomes proper energy density fluctuation **[HIGH] S1**. The first term oscillates at the drive frequency and is the one the thruster uses; the second is negative-definite and is the wormhole term. For a sinusoidal drive at angular frequency $\omega$ the first term scales as $\omega P$, hence the push to high frequency. The thrust follows when the fluctuating mass is accelerated at the same frequency with the right phase: in the form Tajmar's group use to summarise Woodward,

$$F = \frac{\omega}{2\pi}\oint \delta m(t)\,a(t)\,dt,$$

which is non-zero only if $\delta m$ and $a$ are correlated over a cycle **[HIGH] S2**. In Woodward's devices the acceleration is supplied by the electrostrictive response of the same piezoelectric material, which goes as the square of the applied field and so supplies a second harmonic automatically, and the predicted thrust scales as $\omega^4$ **[HIGH] S2** (Tajmar's group, paraphrasing Woodward). In the 2004 flux-capacitor experiment the capacitors were driven at 50 kHz and 1.3 kV and the reported mass fluctuation was $\delta m_0/m_0 \approx 0.08$, nearly ten percent of the quiescent mass of the dielectric, an enormous figure for a gravitational effect **[HIGH] S1**.

The theoretical objection is that the derivation is not general relativity. Rodal examined the frequency-dependent Machian term in Einstein's theory and found "a similar term that is 3rd order post-Newtonian", far too small, and noted that "the Machian significance of any field term in Einstein's equation depends on the (universe's) cosmological solution"; in the Hoyle-Narlikar conformal scalar-tensor theory, built expressly to embody Mach's principle, a first-order term of Woodward's form does exist when the mass-energy fluctuation is that of distant objects, but "it effectively becomes a higher order effect when the mass-energy fluctuations arise from fluctuation of the (local) mass-energy", which is the only kind an experimenter can drive **[HIGH] S1**. That is a precise statement of what the proposal would need: a theory of gravity in which the local second derivative of energy density sources the local inertial mass at first order, which neither general relativity nor its most Machian rival supplies.

The experiments. Woodward's own torsion-balance results, as summarised by Tajmar's group, are thrusts of 1 to 5 µN at voltage amplitudes of 200 to 250 V, with larger transients at switch-on and switch-off **[HIGH] S2**. The NIAC Phase II report describes devices of eight PZT discs that "produced on the order of 1 µN of force", then, after redesign of the mounting to a free-sliding sledge, forces "of order 10's of microNewtons" and "regularly seeing 100 µN or so" **[HIGH] S1**. Kößling, Monette, Weikert and Tajmar tested thrusters supplied by Woodward and their own copies on an automated torsion balance with 100 nN resolution in vacuum, rotating the thruster through three orientations to separate thrust from drift, and reported "only thermal drifts and no real thrust" in all measurements; on the balance the Woodward device gave a signal of about 2 µN whose shape lacked the impulse-like behaviour Woodward reports and which did not reverse with the thruster, and their own device gave nothing above 100 nN at 180 V, where Woodward's theory predicted a thrust growing as $\omega^4$ **[HIGH] S1**. Monette, Kößling and Tajmar in 2021 characterised the devices on torsion balances of increasing sensitivity and found that "using different thrust balances with increasing measurement sensitivity ... resulted in a decrease in the claimed effect's magnitude"; that large second harmonics and sub-harmonic vibration coupling appear at the stack's electromechanical resonances; that the observed transients follow the balance's own vibration modes; that "the varying driving conditions do not significantly affect the forces observed, contrary to the theory"; and that "the observed effect is a result of coupled vibrations on the torsion balance" **[HIGH] S1**.

Woodward's team replied in the NIAC report rather than in a journal: they state that Tajmar's students removed a vibration-suppression yoke supplied with the thrusters and bolted the devices directly to the balance, that the Fullerton tests with the yoke show "vibrational effects are NOT responsible for the thrusts", and that a discrepancy in the calibration of the two laboratories' force references was later found and reduced the Fullerton figures **[HIGH] S1**. The reply establishes a disagreement about apparatus; it does not present a measurement on a balance of Dresden's sensitivity that survives the vibration analysis.

## What it costs

If the effect were real it would need a theory of gravity in which local energy-density fluctuations source inertial mass at first order, which is neither general relativity nor, by Rodal's analysis, the Hoyle-Narlikar theory; that is a new sector of physics, **B-new**. It would give, even so, only a sublight ship: a thruster with high thrust per watt is a way to run a relativistic rocket without carrying reaction mass, and the ship would still obey [LOR-1](../../constraints/lor-1.md) and arrive after light. The wormhole term would in addition be a source of negative mass, which would pay the bill of STA-2 and [ENE-2](../../constraints/ene-2.md) for the L3 schemes, but that claim rests on the same derivation and on power levels the thruster experiments do not approach, so it is not scored as a separate bill here. Standing K0 on the evidence: the independent tests with the most sensitive apparatus, published in a peer-reviewed journal, attribute the signal to vibration, and no counter-measurement of equal sensitivity has been published.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | N/A | The thruster is subluminal; no signal or ship faster than light is claimed |
| CAU-2 | N/A | No closed timelike curves are claimed for the thruster; the wormhole programme would inherit CAU-2 and CAU-3 from the L3 entries, but it is not scored here |
| CAU-3 | N/A | No wormhole is built; the "absurdly benign wormhole" is a claim about exotic matter supply, not a metric |
| CAU-4 | SILENT | Momentum is said to be exchanged with the distant universe through the gravitational field, which means the universe's rest frame enters the dynamics; Woodward does not say whether this defines a preferred frame in the sense of CAU-4 |
| CAU-5 | N/A | No entanglement |
| ENE-1 | DODGES | The wormhole term makes the transient rest mass negative, a violation of the weak energy condition by construction, but this is reached through a theory of gravity that is not general relativity, which is the escape ENE-1 does not cover. For the thruster alone the energy conditions are respected |
| ENE-2 | N/A | No gravitational time advance is claimed by the thruster |
| ENE-3 | SILENT | If the negative-mass transient were real, the quantum inequalities would bound its magnitude and duration; the proposal treats it classically and never addresses them |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class |
| ENE-6 | N/A | The Casimir effect is not invoked |
| ENE-7 | N/A | A thruster claim with no geometry and no shortcut; a theorem about wormhole topology does not bear. |
| CON-1 | N/A | Nothing superluminal |
| CON-2 | N/A | No route to lay |
| CON-3 | N/A | No tube |
| STA-1 | N/A | No bubble |
| STA-2 | SILENT | The book offers the wormhole term as the exotic matter STA-2 requires; no published calculation shows a throat held open by it, and the thruster papers do not address the throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | Nothing swept up |
| HAZ-2 | N/A | No horizon |
| HAZ-3 | N/A | No throat is designed |
| LOR-1 | SATISFIES | A working Mach effect thruster would still be a rocket without exhaust, approaching c from below with kinetic energy growing without bound; its advantage would be delta-v, not speed |
| LOR-2 | N/A | No [tachyons](tachyons-feinberg-1967.md) |
| LOR-3 | N/A | No group velocity or tunnelling claim |
| LOR-4 | N/A | Neither Scharnhorst nor OPERA |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 1990 to 1991: Woodward's prediction and first measurement claim in Foundations of Physics Letters **[HIGH] S1** (records).
- 2004: the flux-capacitor experiment in Foundations of Physics, reporting an effect of the predicted magnitude and phase dependence **[HIGH] S1**.
- 2013: *Making Starships and Stargates* extends the claim to wormhole-grade exotic matter **[MED] S2**.
- 2017: Tajmar's "Mach-Effect thruster model", Acta Astronautica 141, 8 **[HIGH] S1** (record verified; content not read). 2017 to 2018: NIAC Phase I and II; the Phase II report claims forces up to about 100 µN in the sledge configuration and disputes the vibration explanation **[HIGH] S1**.
- 2018 to 2019: Kößling, Monette, Weikert and Tajmar report only thermal drifts on a 100 nN balance, in conference and then in Acta Astronautica 161, 139 **[HIGH] S1**.
- 2019: Rodal, General Relativity and Gravitation, finds no first-order term of Woodward's form for local fluctuations in either Einstein's or Hoyle-Narlikar's theory **[HIGH] S1**.
- 2021: Monette, Kößling and Tajmar, Acta Astronautica 182, 531, conclude the observed effect is coupled vibration on the balance **[HIGH] S1**.
- As of 2026-09-12 there is no peer-reviewed reply from Woodward's group to the 2021 paper and no independent positive result on a balance of comparable sensitivity. The theoretical derivation has been examined in print once, by Rodal, and found not to follow from general relativity. The proposal is scored K0 as an artefact on the experimental evidence; the reader who weighs the Fullerton yoke argument more heavily than this dossier does would move it to K1.

## Sources

- Woodward, "Flux capacitors and the origin of inertia", Found. Phys. 34, 1475 (2004), doi:10.1023/B:FOOP.0000044102.03268.46. S1
- Woodward, "A new experimental approach to Mach's principle and relativistic gravitation", Found. Phys. Lett. 3, 497 (1990), doi:10.1007/BF00665932; corrigendum Found. Phys. Lett. 4, 299 (1991). S1
- Woodward, "Measurements of a Machian transient mass fluctuation", Found. Phys. Lett. 4, 407 (1991). S1
- Woodward, *Making Starships and Stargates: The Science of Interstellar Transport and Absurdly Benign Wormholes* (Springer, 2013). S2
- Fearn, Woodward et al., "Mach effects for in-space propulsion: interstellar mission", NASA NIAC Phase II final report (2018), nasa.gov. S1
- Monette, Kößling and Tajmar, "Experimental investigation of Mach-Effect thrusters on torsion balances", Acta Astronautica 182, 531 (2021), doi:10.1016/j.actaastro.2021.02.037. S1
- Kößling, Monette, Weikert and Tajmar, "The SpaceDrive project: thrust balance development and new measurements of the Mach-Effect and EMDrive thrusters", Acta Astronautica 161, 139 (2019), doi:10.1016/j.actaastro.2019.05.020; IAC-18,C4,7-C3.5,5 (2018). S1
- Tajmar, "Mach-Effect thruster model", Acta Astronautica 141, 8 (2017), doi:10.1016/j.actaastro.2017.09.021. S1
- Rodal, "A Machian wave effect in conformal, scalar-tensor gravitational theory", Gen. Relativ. Gravit. 51, 64 (2019), doi:10.1007/s10714-019-2547-9. S1
- Buldrini, "Verification of the thrust signature of a Mach effect device", Proceedings of the Estes Park Advanced Propulsion Workshop (Space Studies Institute, 2017). S2 (cited through Tajmar)
- Sciama, "On the origin of inertia", Mon. Not. R. Astron. Soc. 113, 34 (1953). S1
