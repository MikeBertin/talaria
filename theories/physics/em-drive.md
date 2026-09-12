# The EM drive

*A closed, tapered microwave cavity claimed to push itself without exhaust at a millinewton per kilowatt; the most careful measurement finds nothing above the photon-pressure floor, and the claim would have broken momentum conservation, not the light barrier.*

**Kind:** physics · **Loophole:** L6 · **Standing:** K0 · **Bill:** B-new · **Last reviewed:** 2026-09-12

## The claim

Roger Shawyer's resonant-cavity thruster, marketed from about 2001 as the EmDrive, is a closed copper frustum, a truncated cone, fed with microwaves at a resonant frequency. Shawyer's theory paper states the principle: the group velocity of the wave at the large end plate is higher than at the small end plate, so the radiation pressure differs between the two ends, and the difference, multiplied by the quality factor $Q$ of the resonator, is a net thrust on the cavity towards the small end, with no propellant and "direct conversion of d.c. power to thrust" **[HIGH] S1**. He argues that special relativity makes the wave and the cavity an open system, so that the end-plate reactions need not cancel **[HIGH] S1**. Shawyer's reported thrusts run from millinewtons at hundreds of watts in his own tests to a projected performance for interstellar probes, and the concept was picked up by a Chinese group (Yang et al., 2013), by Fetta's Cannae drive and by NASA's Eagleworks laboratory, whose 2017 paper in the Journal of Propulsion and Power reported a thrust-to-power ratio of $1.2 \pm 0.1$ mN/kW in vacuum, with forward, reverse and null tests, and "no mundane sources of impulsive thrust" identified **[HIGH] S1**. White and colleagues offered as a possible mechanism a pilot-wave picture of the quantum vacuum, in which the cavity pushes against vacuum fluctuations treated as a medium **[HIGH] S1**.

The claim as its proponents state it is therefore not faster-than-light travel. It is propellantless thrust at a rate some 360 times the photon-rocket figure of 3.3 nN/W, which, if real, would give a spacecraft unlimited delta-v for the price of electricity, and would put the [relativistic rocket](relativistic-rocket.md) within reach without its mass ratio. That is why it is filed here: it is the reactionless drive of fiction, the thing that would make the sublight epic affordable, and it sits in L6 because the best it could do is approach $c$ from below.

## Origin and lineage

Shawyer, an engineer formerly at EADS Astrium, founded Satellite Propulsion Research Ltd and published the theory paper privately in 2006, the year New Scientist ran it as a cover story **[MED] S3**. He presented at IAC meetings from 2008 and published a "second generation" design in Acta Astronautica in 2015 **[HIGH] S2** (as cited by Tajmar). Yang and colleagues at Northwestern Polytechnical University reported 70 to 720 mN at 80 to 2500 W in 2013 and then, with an improved balance, nothing at all in 2016 **[HIGH] S2** (Tajmar's review of the literature). Brady, White, March, Lawrence and Davies reported 22.5 µN on a torsion pendulum in air in 2014, and the same laboratory published the 2017 vacuum campaign that made the claim respectable enough to require a definitive test **[HIGH] S1**. Martin Tajmar's group at TU Dresden began the SpaceDrive project in 2017 to test propellantless claims on purpose-built balances, reported only thermal drifts in 2018 and 2019, and published the decisive null result in 2021 **[HIGH] S1**. French groups (Peyre, Sokoloff and colleagues) reported null results with contactless microwave feeds in 2020 and 2021 **[HIGH] S2** (via Tajmar).

The reactionless drive is old in fiction: the Bergenholm of E. E. Smith, the impulse drive of Star Trek and any ship that accelerates without exhaust. The catalogue carries no fiction entry keyed to the EM drive specifically, and the sibling physics dossier on the [Mach effect thruster](mach-effect-thruster.md) covers the other propellantless claim of the same period.

## The mechanism

Shawyer's derivation starts from the radiation pressure on a perfectly reflecting plate, $F_0 = 2P_0/c$ for incident power $P_0$, and modifies it for a waveguide in which the wave's group velocity is $v_g = c\lambda_0/\lambda_g$, with $\lambda_0$ the free-space and $\lambda_g$ the guide wavelength, to obtain $F_g = (2P_0/c)(v_g/c)$. In a tapered guide with reflecting ends the guide wavelengths differ, $\lambda_{g2} > \lambda_{g1}$, so he writes the net thrust as

$$T = F_{g1} - F_{g2} = \frac{2P_0}{c}\Big(\frac{\lambda_0}{\lambda_{g1}} - \frac{\lambda_0}{\lambda_{g2}}\Big),$$

multiplied by the cavity $Q$ to account for the stored power circulating between the ends, and then corrected using the relativistic velocity-addition formula **[HIGH] S1** (his eqs. 3 to 7). Everything in this derivation is correct up to the moment the forces on the two end plates are treated as the only forces. A tapered cavity also has sloping side walls, and the microwave field presses on them too. Integrate the Maxwell stress tensor $T_{ij} = \epsilon_0(E_iE_j - \tfrac12\delta_{ij}E^2) + \mu_0^{-1}(B_iB_j - \tfrac12\delta_{ij}B^2)$ over the whole closed inner surface of any cavity in steady state and the result is zero: the field momentum inside a closed resonator is constant, so the total force on the walls is the rate of change of that momentum, which is nothing. Shawyer's "open system" argument does not change this, because the field and the walls together form a closed system whose total momentum is conserved by Maxwell's equations plus Newton's third law at the walls, and special relativity, far from weakening momentum conservation, is the theory in which it becomes conservation of four-momentum. The stored power multiplied by $Q$ merely multiplies a zero.

The energy argument is as sharp. Suppose the drive delivers a constant thrust $F$ per input power $P$, with $F/P = 1.2\ \mathrm{mN/kW} = 1.2\times10^{-6}\ \mathrm{N/W}$, and suppose it is mounted on a ship already moving at speed $v$ in some inertial frame. The mechanical power delivered to the ship is $Fv$, which exceeds the electrical input when $v > P/F = 8.3\times10^5\ \mathrm{m\,s^{-1}}$, about $0.3$ percent of $c$. Since every inertial frame is as good as any other, a drive with a fixed thrust-to-power ratio creates energy from nothing in every frame in which it moves faster than that, and a photon rocket, with $F/P = 1/c$, is exactly the device that avoids the paradox, because its break-even speed is $c$. This is the standard objection to any reactionless thruster with $F/P > 1/c$ and it is why the register treats the photon-pressure figure of $3.3$ nN/W as the floor below which a "propellantless" measurement is simply a light source **[HIGH] S2** (Tajmar and colleagues use exactly this benchmark).

The experiments. White and colleagues' 2017 campaign used a dielectric-loaded frustum in the TM212 mode at 1937 MHz, a torsion pendulum with a force uncertainty of about 6 µN, powers of 40 to 80 W and forward, reverse and null orientations, and reported thrusts of 30 to 130 µN scaling with power; the paper devotes a section to error sources, models the superposition of an impulsive signal on a thermal drift caused by expansion of the apparatus, and concludes the thermal contribution had been accounted for **[HIGH] S1**. Tajmar, Neunzig and Weikert's 2021 paper begins from the observation that a thruster carrying a hot amplifier, high currents and a rigid feed can produce false-positive forces from thermal expansion shifting the centre of mass, from current loops in the Earth's field and from feedthrough stiffness, and describes an inverted counterbalanced double-pendulum balance on which the thruster hangs below its suspension point, powered by an onboard battery and amplifier so that nothing crosses the balance **[HIGH] S1**. They replicated the geometry and mode of White's test article, scanned a wide frequency band including several resonances, and "found no thrust values within a wide frequency band including several resonance frequencies and different modes"; their data "limit any anomalous thrust to below the force equivalent from classical radiation for a given amount of power", that is, below 3.3 nN/W, which "rules out previous test results by at least two orders of magnitude" **[HIGH] S1**. In earlier work on a less refined balance they had seen a signal near the 1 µN/W level that White reported, and traced it to the interaction of the power cables with the balance and the Earth's magnetic field, which is a plausible account of the Eagleworks result **[HIGH] S1**. The "quantum vacuum plasma" mechanism proposed in the 2017 paper is a conjecture without a calculation of the thrust; the quantum vacuum in standard quantum field theory is Lorentz invariant and has no rest frame to push against, so any reaction against it would define a preferred frame, the same price [CAU-4](../../constraints/cau-4.md) records for FTL.

## What it costs

If the drive worked, it would need momentum not to be conserved for electromagnetic fields in a cavity, or a medium in the vacuum with a rest frame, which is a new field or a new sector outside the Standard Model and so **B-new**. It would also, by the energy argument, need energy not to be conserved in some frames. Neither is on offer, and the most sensitive measurement finds nothing, so the standing is K0: shown to be an artefact, by the group that built the apparatus to find out. The drive was never faster-than-light and never claimed to be; what it would have bought is the relativistic rocket without the rocket equation, and that is why its refutation belongs in this catalogue.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | N/A | The drive is subluminal; nothing it claims produces a signal or a ship faster than light, so CAU-1 has nothing to bite on |
| CAU-2 | N/A | No closed timelike curves |
| CAU-3 | N/A | No wormhole or bubble |
| CAU-4 | SILENT | Not for FTL, but White's proposed mechanism, pushing against the quantum vacuum as a medium, would require the vacuum to have a rest frame. The paper does not say what picks it, and standard quantum field theory says nothing does |
| CAU-5 | N/A | No entanglement |
| ENE-1 | N/A | Copper and microwaves obey the energy conditions; the drive's problem is conservation of momentum and energy, for which the register has no entry |
| ENE-2 | N/A | No gravitational time advance is claimed |
| ENE-3 | N/A | No negative energy |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class |
| ENE-6 | N/A | Casimir effect not invoked, though the "quantum vacuum" language borrows its prestige |
| ENE-7 | N/A | A cavity thruster claim; no topology, no shortcut and no spacetime geometry of any kind is proposed, so a theorem about wormhole handles does not bear. |
| CON-1 | N/A | Nothing superluminal; the pilot is in charge |
| CON-2 | N/A | No route to lay |
| CON-3 | N/A | No tube |
| STA-1 | N/A | No bubble |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | Nothing swept up |
| HAZ-2 | N/A | No horizon |
| HAZ-3 | N/A | No throat |
| LOR-1 | SATISFIES | Even a working reactionless thruster would approach c asymptotically; its supposed advantage is unlimited delta-v, not a route past the limit |
| LOR-2 | N/A | No [tachyons](tachyons-feinberg-1967.md) |
| LOR-3 | N/A | Shawyer's derivation uses the guide's group velocity, but as a property of radiation pressure inside the cavity, not as a signal speed; no superluminal propagation is claimed |
| LOR-4 | N/A | Neither Scharnhorst nor OPERA |
| WRP-1 | N/A | Not a warp drive. The same NASA laboratory ran the warp-field interferometer programme, covered in [the Eagleworks warp-field interferometer](eagleworks-warp-field-interferometer.md), but the EM drive is not part of it |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 2006: Shawyer's theory paper and the New Scientist cover; immediate criticism from physicists on momentum conservation **[MED] S3**.
- 2013: Yang and colleagues report large thrusts in China; 2016: the same group, with a better balance, reports none **[HIGH] S2** (via Tajmar).
- 2014: Brady and colleagues at NASA Eagleworks report 22.5 µN in air on a torsion pendulum **[HIGH] S2** (via Tajmar).
- 2017: White and colleagues, J. Propulsion and Power 33, 830, report $1.2 \pm 0.1$ mN/kW in vacuum, peer reviewed, with the pilot-wave conjecture **[HIGH] S1**.
- 2018 to 2019: Tajmar's SpaceDrive project reports only thermal drifts and identifies cable and magnetic-field interactions as sources of false positives at the level Eagleworks reported **[HIGH] S1**.
- 2020 to 2021: Peyre, Sokoloff and colleagues report null results with contactless feeds **[HIGH] S2**. 2021: Tajmar, Neunzig and Weikert, CEAS Space Journal, find no thrust above the photon-pressure floor and rule out the earlier positive results by at least two orders of magnitude **[HIGH] S1**.
- No peer-reviewed positive result has appeared since 2017 and no reply to the 2021 null result has been published by the Eagleworks authors as of 2026-09-12. The claim is closed by measurement; the theoretical case against it was complete before any measurement was made.

## Sources

- White, March, Lawrence, Vera, Sylvester, Brady and Bailey, "Measurement of impulsive thrust from a closed radio-frequency cavity in vacuum", J. Propulsion and Power 33, 830 (2017), doi:10.2514/1.B36120; NASA NTRS 20170000277. S1
- Tajmar, Neunzig and Weikert, "High-accuracy thrust measurements of the EMDrive and elimination of false-positive effects", CEAS Space Journal 14, 31 (2022; published online 2021), doi:10.1007/s12567-021-00385-1. S1
- Kößling, Monette, Weikert and Tajmar, "The SpaceDrive project: thrust balance development and new measurements of the Mach-Effect and EMDrive thrusters", Acta Astronautica 161, 139 (2019), doi:10.1016/j.actaastro.2019.05.020. S1
- Shawyer, "A theory of microwave propulsion for spacecraft", SPR Ltd theory paper v9.4 (2006), emdrive.com. S1
- Shawyer, "Second generation EmDrive propulsion applied to SSTO launcher and interstellar probe", Acta Astronautica 116, 166 (2015). S1
- Brady, White, March, Lawrence and Davies, "Anomalous thrust production from an RF test device measured on a low-thrust torsion pendulum", AIAA 2014-4029 (2014). S1
- Yang et al., Chin. Phys. B 22, 050301 (2013); Yang et al., J. Propulsion Technology 37, 362 (2016). S1 (cited through Tajmar 2021)
- Peyre, Sokoloff, Pascal, Pigaglio and Raveu, Prog. Electromagn. Res. M 95, 45 (2020) and 101, 1 (2021). S1 (cited through Tajmar 2021)
- Tajmar and Fiedler, "Direct thrust measurements of an EMDrive and evaluation of possible side-effects", AIAA 2015-4083 (2015). S1
