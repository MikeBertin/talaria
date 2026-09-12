# The Hartman effect and the Nimtz tunnelling claims

*A tunnelling wave packet's delay stops growing with barrier thickness, so its apparent speed can exceed c without limit; the delay turns out to be a lifetime, not a transit time, and no signal beats light.*

**Kind:** physics · **Loophole:** L5 · **Standing:** K0 · **Bill:** B-none · **Last reviewed:** 2026-09-12

## The claim

A quantum particle, or an electromagnetic wave, can pass through a region it is classically forbidden to enter: a potential barrier higher than its energy, a waveguide narrower than its cutoff, an air gap between two prisms at total internal reflection, a photonic band gap. Inside the barrier the wave is evanescent, its wavenumber is imaginary and its amplitude decays rather than oscillates. Hartman showed in 1962 that the time a Gaussian wave packet appears to spend crossing a rectangular barrier, computed from the peak of the transmitted packet, becomes independent of the barrier thickness once the barrier is opaque. Divide a thickness that can be made as large as you like by a delay that does not grow and you get an apparent traversal velocity that exceeds $c$ and has no upper bound. Every experiment done since, at optical, microwave and acoustic frequencies, confirms the delay saturation.

Günter Nimtz and his collaborators take the next step. Since 1992 they have argued that the measured delays are genuine traversal times, that evanescent modes therefore cross barriers in zero time, that the only delay is a universal scattering time at the barrier entrance of order one period of the carrier, and that this is a superluminal signal velocity, not merely a superluminal group velocity. Nimtz and Stahlhofen's 2007 preprint puts it at its strongest: evanescent modes "lie outside the bounds of the special theory of relativity", they are the optical counterpart of virtual photons, and a microwave experiment with double prisms on a scale of a metre shows "a macroscopic violation of special relativity" **[MED] S1**. Nimtz's 2011 paper in Foundations of Physics restates the position: experiments with evanescent modes and tunnelling particles have shown that their signal velocity may be faster than light, that they are described by virtual particles and are non-local, and that their properties are not compatible with special relativity **[MED] S1**. The 2013 retrospective by Aichmann and Nimtz adds the concession that these signals "confront the Einstein causality, but they don't violate primitive causality", meaning that the finite duration of any real signal keeps the backwards-in-time effect from being usable **[MED] S1**.

## Origin and lineage

MacColl raised the tunnelling-time question in 1932. Hartman's paper (J. Appl. Phys. 33, 3427, 1962) derived analytic expressions for the time spent by a particle tunnelling through a rectangular barrier for an incident Gaussian packet and found the transmission time "positive, nonzero and in principle measurable" **[HIGH] S1**; the saturation with thickness is what later authors named the Hartman effect. Wigner's phase time and Smith's dwell time are the two definitions that survive. Enders and Nimtz began the microwave experiments in undersized waveguides in 1992 (J. Phys. I France 2, 1693), claimed zero-time tunnelling of evanescent packets in 1993 (J. Phys. I France 3, 1089) and followed with photonic band gap and double-prism experiments **[HIGH] S2** (as reviewed by Winful). Steinberg, Kwiat and Chiao measured the single-photon tunnelling time through a dielectric mirror in 1993 with a Hong, Ou and Mandel interferometer and inferred a group velocity of 1.7c (Phys. Rev. Lett. 71, 708) **[HIGH] S1**. Winful's resolution appeared in Optics Express in 2002, in Physical Review Letters in 2003 and in the long review in Physics Reports 436, 1 (2006) that the register cites for [LOR-3](../../constraints/lor-3.md).

Nothing in fiction descends from this directly; the tunnelling claims belong to the press more than to novels. They fed the general public sense, around 2007, that "photons have been sent faster than light", which is the sense the register's LOR-3 entry exists to correct.

## The mechanism

Take a particle of mass $m$ and energy $E$ meeting a rectangular barrier of height $V_0 > E$ and thickness $d$. Outside, $k = \sqrt{2mE}/\hbar$; inside, the wavefunction goes as $e^{\pm\kappa x}$ with $\kappa = \sqrt{2m(V_0 - E)}/\hbar$. The transmitted amplitude is $T = |T| e^{i\phi}$ and the group delay, also called the phase time or Wigner time, is

$$\tau_g = \hbar\,\frac{\partial \phi}{\partial E}.$$

For an opaque barrier, $\kappa d \gg 1$, the transmission phase becomes independent of $d$ and the delay saturates at

$$\tau_g \;\to\; \frac{2m}{\hbar\, k\, \kappa} = \frac{2}{v\,\kappa}, \qquad v = \frac{\hbar k}{m},$$

a quantity set by the decay constant and the incident velocity alone **[HIGH] S1** (Hartman 1962; Winful 2006 §3). The naive traversal speed $d/\tau_g$ then grows linearly with $d$ and exceeds $c$ for any barrier thicker than about $2c/(v\kappa)$. The same algebra holds for the Helmholtz equation, so a waveguide below cutoff, a Bragg stack in its stop band and frustrated total internal reflection all show it, which is why microwave experiments with centimetre barriers can be used to study a quantum effect **[HIGH] S1**.

Winful's resolution has three steps. First, an identity: the group delay decomposes as $\tau_g = \tau_d + \tau_i$, where $\tau_d$ is Smith's dwell time, the stored probability (or, for electromagnetic waves, stored energy) inside the barrier divided by the incident flux, and $\tau_i$ is a self-interference delay arising from the overlap of the incident and reflected waves in front of the barrier **[HIGH] S1**. For a symmetric barrier, and for waves where $\tau_i$ vanishes, the group delay is the dwell time exactly. Second, for an electromagnetic barrier the dwell time is

$$\tau_d = \frac{U}{P_{\rm in}},$$

the time-averaged stored energy divided by the input power, which is the definition of the lifetime of energy in a cavity, $\tau_c = Q/\omega$ **[HIGH] S1**. Since the evanescent field decays as $e^{-2\kappa x}$, the stored energy saturates as $d$ grows, and so does the lifetime: the Hartman effect is the statement that a longer evanescent region stores no more energy. Third, the interpretation: "the group delay in tunneling is a lifetime and not a transit time. For electromagnetic pulses it is a lifetime of stored energy leaking out of both ends of the barrier" **[HIGH] S1**. The delay is the same for the reflected and the transmitted pulse, because both are fed by the same stored field, and neither can be assigned a departure time from the far side of the barrier. "To define a transit time one must know the departure time of the thing that arrived. The measured group delay is therefore not a transit time" **[HIGH] S1**. The pulses in every one of these experiments are much longer than the barrier, so the whole pulse interacts with the whole barrier at once, a quasi-static regime in which the structure responds as a unit **[HIGH] S1**.

What the experiments then measure is a small delay on a transmitted pulse whose peak has been reshaped, with a transmitted energy that is a tiny fraction of the incident, arriving inside the envelope of the incident pulse. No point on the transmitted pulse lies outside the light cone of the corresponding point on the incident pulse. The front, the first non-analytic point of a signal that was switched on, travels at exactly $c$ by the Sommerfeld and Brillouin argument, because at frequencies far above any resonance every medium and every barrier is transparent with refractive index one. Winful's conclusion is direct: "Group velocity is not a meaningful concept in this context and we find no evidence for superluminality in barrier tunneling" **[HIGH] S1**. The register's LOR-3 entry carries this account.

Applied to the 2007 double-prism experiment, Winful's comment recomputes the transmission from Maxwell's equations. At 9.15 GHz and 45 degrees in a prism of index 1.6 the evanescent decay constant is $\kappa = 101\ \mathrm{m^{-1}}$, an attenuation of 0.88 dB per millimetre of gap, so that a gap of one metre would attenuate the tunnelled wave by 880 dB, a transmission of $10^{-88}$; the "macroscopic scale of the order of a meter" is the size of the prisms, not of the barrier, and the measured 100 ps delay common to the reflected and transmitted beams is the Goos-Hänchen shift along the interface, a classical phenomenon **[MED] S1** (preprint). The reported equal delays for reflection and transmission are in fact what the lifetime picture predicts, since both channels drain the same stored field.

## What it costs

Nothing. The Hartman effect is real and needs no exotic matter, no new field and no preferred frame; the bill is **B-none** because nothing faster than light sits here, which is the finding. The claim that the effect is a superluminal signal velocity would, if true, need Lorentz invariance to fail for evanescent modes, and Nimtz says as much when he places them "outside the bounds" of special relativity. The register scores that as a violation rather than a bill, because the claim is not a proposal to build something but a reading of a measurement, and the reading has been shown to be wrong. Standing K0: a misreading of a real effect that has been shown, in print and in detail, to be an artefact of treating a lifetime as a transit time.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | Nimtz's claim is a signal faster than c in the laboratory frame with no preferred frame named, which is the tachyonic antitelephone case CAU-1 describes; Aichmann and Nimtz concede the signals "confront the Einstein causality" and argue only that finite pulse duration blunts the paradox |
| CAU-2 | N/A | No spacetime geometry and no closed timelike curve; the causal loop CAU-1 would supply is made of signals |
| CAU-3 | N/A | No wormhole or bubble |
| CAU-4 | SILENT | If the signal were real it would need the preferred-frame escape; the claim never says which frame the barrier picks, and the Casimir-type argument of Liberati, Sonego and Visser is not invoked |
| CAU-5 | N/A | No entanglement is involved |
| ENE-1 | N/A | A tunnelling barrier is ordinary matter with ordinary stress-energy |
| ENE-2 | N/A | ENE-2 concerns gravitational time advance; no gravity is involved |
| ENE-3 | N/A | No negative energy is claimed |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class |
| ENE-6 | N/A | The Casimir effect is not invoked, though evanescent modes in a gap are a cousin of the Casimir geometry; no proposal here uses that |
| ENE-7 | N/A | Tunnelling times through a barrier on flat spacetime; nothing topological is claimed, so the theorem does not bear. |
| CON-1 | N/A | Nothing is piloted |
| CON-2 | N/A | No route is laid; the barrier is the whole apparatus |
| CON-3 | N/A | No tube |
| STA-1 | N/A | No bubble |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | Nothing is swept up |
| HAZ-2 | N/A | No horizon |
| HAZ-3 | N/A | No throat |
| LOR-1 | N/A | LOR-1 is about accelerating a massive body to c; tunnelling photons are massless and tunnelling electrons are never claimed to be accelerated. The claim is about a delay, not a push |
| LOR-2 | N/A | No tachyon is proposed; Nimtz's "virtual photons" with imaginary wavenumber are evanescent modes of an ordinary field, not particles with spacelike momentum |
| LOR-3 | VIOLATES | The claim requires the front-velocity theorem to fail for evanescent modes. Winful shows the group delay is a cavity lifetime, that no point of the transmitted pulse leaves the light cone of the incident pulse and that the experiments contain no evidence of superluminality. LOR-3 holds the verified account |
| LOR-4 | N/A | Neither Scharnhorst nor OPERA is invoked |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 1962: Hartman derives the thickness-independent delay **[HIGH] S1**.
- 1992 to 1994: Enders and Nimtz report superluminal barrier traversal and then zero-time tunnelling in undersized waveguides and photonic band gaps **[HIGH] S2** (Winful's review). 1993: Steinberg, Kwiat and Chiao report 1.7c for single photons and are careful, in their own review, to say the effect is linear-optical and not a signal **[HIGH] S1**.
- 2002 to 2006: Winful reinterprets the group delay as a lifetime, first in Optics Express, then in Physical Review Letters, then at length in Physics Reports 436, 1, whose discussion section prints the referee's objections and answers them **[HIGH] S1**.
- 2007: Nimtz and Stahlhofen's "macroscopic violation" preprint and the New Scientist coverage; Winful's comment (arXiv:0709.2736) shows the metre-scale claim is physically impossible at the stated attenuation and that the measurement is classical **[MED] S1**. Neither the preprint nor the comment appears to have been published in a journal as of 2026-09-12.
- 2011: Nimtz, "Tunneling confronts special relativity", Found. Phys. 41, 1193, restates the claim in a peer-reviewed venue **[MED] S1**. 2013: Aichmann and Nimtz's preprint history of the dispute names Winful as the chief antagonist and does not engage the lifetime identity on its merits **[MED] S1**.
- The consensus position of the optics community, as recorded in Winful's review and in Chiao and Steinberg's earlier review, is that tunnelling delays are real, that the Hartman effect is real and that no signal is superluminal. No peer-reviewed rebuttal of Winful's lifetime interpretation exists as of 2026-09-12; the disagreement continues in Nimtz's own papers and nowhere else.

## Sources

- Hartman, "Tunneling of a wave packet", J. Appl. Phys. 33, 3427 (1962), doi:10.1063/1.1702424. S1
- Winful, "Tunneling time, the Hartman effect, and superluminality: a proposed resolution of an old paradox", Phys. Rep. 436, 1 (2006), doi:10.1016/j.physrep.2006.09.002. S1
- Nimtz and Stahlhofen, "Macroscopic violation of special relativity", arXiv:0708.0681 (2007). S1
- Winful, "Comment on 'Macroscopic violation of special relativity' by Nimtz and Stahlhofen", arXiv:0709.2736 (2007). S1
- Nimtz, "Tunneling confronts special relativity", Found. Phys. 41, 1193 (2011), doi:10.1007/s10701-011-9539-2. S1
- Aichmann and Nimtz, "The superluminal tunneling story", arXiv:1304.3155 (2013). S1
- Steinberg, Kwiat and Chiao, "Measurement of the single-photon tunneling time", Phys. Rev. Lett. 71, 708 (1993). S1
- Enders and Nimtz, "On superluminal barrier traversal", J. Phys. I France 2, 1693 (1992); "Zero-time tunneling of evanescent mode packets", J. Phys. I France 3, 1089 (1993). S1 (cited through Winful 2006)
- Chiao and Steinberg, "Tunneling times and superluminality", Progress in Optics 37, 345 (1997). S2
- Brillouin, *Wave Propagation and Group Velocity* (Academic Press, 1960). S2
