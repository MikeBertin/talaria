# The Scharnhorst effect

*Light crossing the gap between Casimir plates travels a fraction of order $10^{-32}$ faster than c for micron plates, because the vacuum it crosses has been made emptier than empty; the effect is real, unmeasurable and causally harmless.*

**Kind:** physics · **Loophole:** L5 · **Standing:** K4 · **Bill:** B-none · **Last reviewed:** 2026-09-12

## The claim

The speed of light in vacuum is a property of the vacuum. Quantum electrodynamics describes light propagating through a sea of virtual electron-positron pairs, and the two-loop correction to photon propagation depends on the state of that sea. Between two parallel conducting plates the vacuum is modified: the Casimir boundary conditions remove modes and lower the zero-point energy density below its free-space value. Scharnhorst calculated in 1990, and Barton confirmed by a different route the same year, that photons propagating perpendicular to the plates therefore see an effective refractive index slightly less than one and travel at a speed $c_\perp$ slightly greater than $c$, while photons parallel to the plates travel at $c$. The effect scales as the inverse fourth power of the plate separation and is, for any separation that could be built, far too small to measure. In its strongest form the claim is that this is a genuine change in the propagation speed of light in a physical vacuum, not a group-velocity or tunnelling artefact, and that at high frequency the signal velocity is modified as well.

The faster-than-light reading, which the papers themselves do not make, is that here at last is a physical mechanism that makes signals exceed $c$, so that the causality consequences of [CAU-1](../../constraints/cau-1.md) follow and, in principle, an experiment could exploit them. Liberati, Sonego and Visser took that reading seriously as a test case and showed that it does not lead to causal paradox, because the plates pick a frame.

## Origin and lineage

Scharnhorst, Phys. Lett. B 236, 354 (1990), computed the two-loop correction to the QED effective action from the Casimir boundary conditions and read off the change in light speed for perpendicular propagation; a corrigendum in Phys. Lett. B 787, 204 (2018) corrects notation and symbols in some equations without changing the result **[HIGH] S1** (existence and content of both verified through the journal records and the author's publication list). Barton, Phys. Lett. B 237, 559 (1990), rederived it from the reduced zero-point field intensity between mirrors: for light normal to the mirrors the refractive index is $n < 1$ and the speed $c/n > c$, with effects "too small by many orders of magnitude to be measured, but ... fascinating as matters of principle" **[HIGH] S1** (abstract). Milonni and Svozil argued in the same year that the uncertainty principle prevents the shift from being measured as a signal advance **[MED] S1** (title verified, content not read here). Barton and Scharnhorst returned in 1993 (J. Phys. A 26, 2037) with a dispersion-relation argument that the signal velocity, the high-frequency limit, is increased as well, or else the vacuum between the plates amplifies light **[MED] S1** (title verified). Liberati, Sonego and Visser generalised the result to oblique incidence in 2001 (arXiv:quant-ph/0010055) and examined its compatibility with causality in 2002 (Ann. Phys. 298, 167), the paper that the register uses for both [CAU-4](../../constraints/cau-4.md) and [LOR-4](../../constraints/lor-4.md) **[HIGH] S1**.

No fiction descends from it. It is the one worked example of a superluminal vacuum, and it is thirty-two orders of magnitude too small to be a plot.

## The mechanism

At photon energies well below the electron mass the QED vacuum is described by the Euler-Heisenberg effective Lagrangian,

$$\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} + c_1\,(F_{\mu\nu}F^{\mu\nu})^2 + c_2\,(F_{\mu\nu}\tilde F^{\mu\nu})^2, \qquad c_1 = \frac{\alpha^2}{90\pi^2 m_e^4},\quad c_2 = \frac{7\alpha^2}{360\pi^2 m_e^4},$$

in units with $\hbar = c = 1$ **[HIGH] S1** (Liberati, Sonego and Visser 2001, eq. 56). The quartic terms are the box diagram: four photons coupling to one virtual electron loop. A weak probe photon propagating through a background field sees an effective metric built from the expectation value of the background stress-energy. Between Casimir plates the background is the vacuum itself, with

$$\langle C|T_{00}|C\rangle = -\frac{\pi^2}{720\,a^4}$$

for plate separation $a$, and the correction to the probe's dispersion relation is proportional to $(c_1 + c_2)\langle C|T_{00}|C\rangle$ **[HIGH] S1** (their eqs. 62 to 64). The result for propagation at angle $\theta$ to the normal is

$$v_{\rm phase}(\theta) = v_{\rm group}(\theta) = 1 + \frac{11\pi^2\alpha^2}{8100\,a^4 m_e^4}\cos^2\theta,$$

their eq. 65, which reproduces Scharnhorst's result at $\theta = 0$ and gives $c$ for propagation parallel to the plates **[HIGH] S1**. Restoring units, with $\bar\lambda_C = \hbar/(m_e c) = 3.86\times10^{-13}\ \mathrm{m}$ the reduced Compton wavelength,

$$\frac{c_\perp - c}{c} = \frac{11\pi^2}{8100}\,\alpha^2\left(\frac{\bar\lambda_C}{a}\right)^4 \approx 1.3\times10^{-2}\,\alpha^2\left(\frac{\bar\lambda_C}{a}\right)^4.$$

For $a = 1\ \mathrm{\mu m}$ this is $1.6\times10^{-32}$; for $a = 0.1\ \mathrm{\mu m}$, the smallest separation at which the Casimir force has been measured with precision, $1.6\times10^{-28}$. Liberati, Sonego and Visser quote the order of magnitude as $10^{-2}\alpha^2/(m_e a)^4$ and say the effect is "far too small to be experimentally detectable" **[HIGH] S1**. The register's LOR-4 figure, of order $10^{-32}$ for micron plates, is confirmed; the earlier $10^{-36}$ figure that circulated was a slip.

Three properties make the effect a genuine superluminal velocity rather than a group-velocity illusion. First, at leading order in $\alpha^2$ phase and group velocity coincide, so there is no anomalous dispersion doing the work as in [gain-assisted superluminal light](gain-assisted-superluminal-light.md). Second, the effective refractive index stays below unity at all frequencies for which the calculation is valid, and Barton and Scharnhorst's dispersion argument suggests the same for the signal velocity at frequencies above the electron mass; this is the one place in the register where the front-velocity argument of [LOR-3](../../constraints/lor-3.md) does not straightforwardly apply, because it assumes an ordinary medium that becomes transparent with $n \to 1$ at high frequency, and the Casimir vacuum is not a medium of that kind **[MED] S1**. Third, Liberati, Sonego and Visser show that the correction is fixed by the expectation value of the energy density, in agreement with the general result that light travels faster than $c$ only where the effective energy density along its path is negative: a velocity shift proportional to $\langle T_{00}\rangle$ with $\langle T_{00}\rangle < 0$ **[HIGH] S1**. That is the same direction of inference as the theorems of [ENE-2](../../constraints/ene-2.md): superluminal propagation needs negative energy, and here the negative energy is the measured Casimir one of [ENE-6](../../constraints/ene-6.md).

Causality. The Ann. Phys. paper argues that special relativity requires an invariant speed, not a maximum one, so faster-than-$c$ propagation is kinematically permitted; that paradoxes arise only for tachyons whose speed has no fixed value in any frame; and that the Scharnhorst photon is not of that kind, because the plates define a rest frame and the modified speed $c_\perp$ is fixed in that frame. The Casimir vacuum "softly" breaks Lorentz invariance, as any refractive medium does, and the superluminal features are "benign" and constrained so as not to lead automatically to causality violation **[HIGH] S1**. Two sets of plates in relative motion would each define their own frame, but a photon leaving one gap and entering the other passes through ordinary vacuum between them at $c$, and the authors show that no closed signal loop can be constructed with the light-cone tilts available. The escape is the one CAU-4 names, and the cost is the one CAU-4 names: in the presence of the plates special relativity is not the whole story for the FTL sector.

## What it costs

Nothing beyond two conducting plates. The effect uses the negative energy density that ENE-6 says the laboratory already has, so no new negative energy is owed; it needs no new field or particle; it introduces no closed timelike curve, because the plates supply the frame that CAU-4 requires. The bill is **B-none** with a footnote: the only exotic ingredient is the Casimir vacuum, which exists, and the finding is that nothing usable sits here. A fractional advance of $10^{-32}$ over a micron gap is an advance of $10^{-38}$ m, or $3\times10^{-47}$ s, per crossing. Standing K4: an established result of quantum field theory, derived independently by two methods, generalised and analysed for causality, and unchallenged.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | A photon faster than c in the plates' rest frame is faster than c in every frame, and CAU-1 would make it a signal to the past unless Lorentz invariance is broken; it is, softly, by the plates, which fix the FTL speed in one frame. This is the escape CAU-1 itself names |
| CAU-2 | N/A | No closed timelike curves arise; Liberati, Sonego and Visser show no causal loop can be built from two sets of plates, so chronology protection has nothing to protect |
| CAU-3 | N/A | No wormhole or bubble to convert into a time machine |
| CAU-4 | SATISFIES | This is the worked example CAU-4 was written from: the Casimir vacuum picks a frame, the FTL speed is fixed in it, and the authors argue the propagation is benign |
| CAU-5 | N/A | No entanglement |
| ENE-1 | VIOLATES | The Casimir vacuum violates the pointwise energy conditions, and the effect exists precisely because it does: the velocity shift is proportional to a negative energy density. The violation is the quantum, static, tiny one ENE-1 already allows for |
| ENE-2 | SATISFIES | Consistent with the theorem's direction: propagation exceeds c only where the effective energy density is negative, and in ordinary vacuum, where the energy conditions hold, the speed is c. No gravitational time advance is claimed |
| ENE-3 | SATISFIES | The static Casimir configuration is the standard case in which the quantum inequalities are respected; the effect asks for no more negative energy than that |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class |
| ENE-6 | SATISFIES | The effect is driven by exactly the energy density ENE-6 records, about $-4\times10^{-4}$ J per cubic metre at one micron, and inherits its fourth-power falloff with gap |
| ENE-7 | N/A | Light between plates on flat spacetime with trivial topology; there is no handle and the theorem is about handles. The Casimir energy it uses is the ENE-6 kind, not an achronal ANEC violation across a throat. |
| CON-1 | N/A | Nothing is piloted |
| CON-2 | N/A | The plates must be in place, but they are ordinary matter set up at ordinary speed and nothing about the route needs FTL |
| CON-3 | N/A | No tube |
| STA-1 | N/A | No bubble; the Casimir configuration is static and stable |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | Nothing is swept up |
| HAZ-2 | N/A | No horizon |
| HAZ-3 | N/A | No throat |
| LOR-1 | N/A | Photons are massless; nothing is accelerated |
| LOR-2 | N/A | The Scharnhorst photon is not a [tachyon](tachyons-feinberg-1967.md): it has a fixed speed in the plates' frame and is not an instability |
| LOR-3 | DODGES | LOR-3's front-velocity argument assumes a causal medium with n → 1 at high frequency. The Casimir vacuum has n < 1 at all frequencies in the effective theory, and Barton and Scharnhorst argue the signal velocity is modified too. The register should note this as the one principled exception, of size $10^{-32}$ |
| LOR-4 | SATISFIES | This is the entry: magnitude of order $10^{-32}$ for micron plates, unmeasurable, causally harmless. The entry's other half, the [OPERA neutrinos](opera-neutrinos-2011.md), was an instrument; this was a calculation |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 1990: Scharnhorst's calculation; Barton's rederivation; Milonni and Svozil on the impossibility of measuring a signal advance; Ben-Menahem on causality between the plates **[HIGH] S1** for the first two, **[MED] S1** for the last two (titles verified).
- 1993: Barton and Scharnhorst extend the argument to the signal velocity via dispersion relations **[MED] S1**.
- 2001 to 2002: Liberati, Sonego and Visser generalise to oblique incidence, relate the shift to the vacuum energy density and show the causal structure is benign with the plates as preferred frame **[HIGH] S1**.
- 2018: Scharnhorst's corrigendum corrects notation in the 1990 paper; the physical result stands **[HIGH] S1**.
- No peer-reviewed claim that the effect can be measured, amplified or used for signalling exists as of 2026-09-12. The effect is uncontested and unexploitable, and that is the finding.

## Sources

- Scharnhorst, "On propagation of light in the vacuum between plates", Phys. Lett. B 236, 354 (1990), doi:10.1016/0370-2693(90)90997-K; corrigendum Phys. Lett. B 787, 204 (2018). S1
- Barton, "Faster-than-c light between parallel mirrors: the Scharnhorst effect rederived", Phys. Lett. B 237, 559 (1990), doi:10.1016/0370-2693(90)91224-Y. S1
- Liberati, Sonego and Visser, "Scharnhorst effect at oblique incidence", Phys. Rev. D 63, 085003 (2001), arXiv:quant-ph/0010055, eqs. 56 to 65. S1
- Liberati, Sonego and Visser, "Faster-than-c signals, special relativity, and causality", Ann. Phys. 298, 167 (2002), arXiv:gr-qc/0107091. S1
- Barton and Scharnhorst, "QED between parallel mirrors: light signals faster than c, or amplified by the vacuum", J. Phys. A 26, 2037 (1993). S1
- Milonni and Svozil, "Impossibility of measuring faster than c signaling by the Scharnhorst effect", Phys. Lett. B 248, 437 (1990). S1
- Ben-Menahem, "Causality between conducting plates", Phys. Lett. B 250, 133 (1990). S1
- Casimir, Proc. K. Ned. Akad. Wet. 51, 793 (1948); Lamoreaux, Phys. Rev. Lett. 78, 5 (1997), for the energy density and its measurement. S1
