# Tachyons (Feinberg 1967)

*Feinberg's Lorentz-invariant field theory of particles that were never below c, and why its quanta turned out to be an instability rather than a courier.*

**Kind:** physics · **Loophole:** L1 · **Standing:** K0 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

Special relativity forbids accelerating a massive body through the light barrier. It does not, on its face, forbid a particle that was created already above c and stays there. Feinberg's 1967 paper takes that gap seriously. It asks whether a relativistic particle with spacelike four-momentum, always faster than light in vacuum, can be given a consistent quantum field theory, and answers yes for the free, spinless case. He named such particles tachyons. The paper does not claim they exist. It claims that their existence is not excluded by relativity, that they could be produced in pairs without anything crossing the light barrier and that the way to settle the question is experiment.

The strongest form of the claim has three parts. First, kinematics: a particle with $p^\mu p_\mu < 0$ has a velocity $v = pc^2/E$ greater than c in every inertial frame, can never be brought below c and loses energy as it speeds up. Second, consistency: the negative-energy states that appear when such a particle is viewed from a suitably boosted frame are to be read as positive-energy antiparticles moving the other way, the reinterpretation principle inherited from [Bilaniuk, Deshpande and Sudarshan](meta-relativity-sudarshan-1962.md). Third, quantisation: a scalar field with negative mass-squared can be quantised so that its Fourier modes with real frequency describe free tachyons, and the theory built this way is Lorentz invariant even though, as Feinberg notes, the vacuum and the particle number are not.

One thing first: the tachyon is a claim about particles in ordinary flat spacetime, with no change to the metric, no exotic matter and no preferred frame. That is what makes it the cleanest L1 proposal in the catalogue, and it is also why the register closes it.

## Origin and lineage

The pre-relativistic literature on charges moving faster than light (Thomson 1889, Heaviside 1892, Sommerfeld 1904) is reviewed in the 1962 paper by Bilaniuk, Deshpande and Sudarshan, Am. J. Phys. 30, 718, which is the classical parent of this proposal and has [its own dossier](meta-relativity-sudarshan-1962.md). Feinberg, Phys. Rev. 159, 1089 (1967) supplied the quantum field theory and the name. The experimental programme that followed (Alväger and Kreisler 1968, Baltay, Feinberg, Yeh and Linsker 1970, Danburg et al. 1971, the cosmic-ray claim of Clay and Crouch 1974) is described below. The proposal that a known neutrino might be the tachyon (Chodos, Hauser and Kostelecký 1985) kept the idea alive into the tritium beta-decay era and gave the [OPERA anomaly](opera-neutrinos-2011.md) its ready-made interpretation in 2011. The frameworks that replace the tachyon with a preferred frame are in [Lorentz-violating frameworks](lorentz-violating-frameworks.md).

In fiction the tachyon became the stock word for a faster-than-light messenger, most seriously in Benford's *Timescape* (1980), which is listed in the catalogue as timescape-tachyon-message, and as a stock word in Star Trek's subspace radio (star-trek-subspace-radio).

Lineage: [Feinberg's tachyon, outward](../../lineage/feinberg-tachyon-outward.md); [Tolman's paradox to Timescape](../../lineage/tolman-benford-timescape.md).

## The mechanism

Take the invariant relation for a free particle in units with $c = 1$,

$$E^2 - \mathbf p^2 = m^2 .$$

For $m^2 > 0$ the surface in $(E, \mathbf p)$ is a two-sheeted hyperboloid and the physical states live on the upper sheet, which proper Lorentz transformations map into itself. For $m^2 < 0$, write $m = i\mu$ with $\mu$ real; the surface is a single-sheeted hyperboloid, every point of which can be reached from every other by a proper Lorentz transformation, including points with $E < 0$. Bilaniuk, Deshpande and Sudarshan drew this figure and made the observation that drives the whole subject: for the class of particles with $m^2 < 0$ there is no frame in which the particle is at rest, and none in which its speed is at or below c **[HIGH] S1**. The kinematics follow from

$$E = \frac{\mu}{\sqrt{v^2 - 1}}, \qquad |\mathbf p| = \frac{\mu v}{\sqrt{v^2 - 1}}, \qquad v = \frac{|\mathbf p|}{E} > 1 ,$$

so the energy falls to zero as $v \to \infty$, the momentum never falls below $\mu$, and a tachyon that loses energy speeds up. Under the relativistic velocity addition $v' = (u + w)/(1 + uw)$ an observer moving at $w = -1/u$ sees the tachyon with infinite velocity and zero energy, and observers beyond that see it with negative energy travelling the other way in time **[HIGH] S1**.

Feinberg's contribution is the field. A real scalar field with the wrong-sign mass term obeys

$$\left(\Box + \mu^2\right)\phi = 0 \quad\text{with}\quad \Box = \partial_t^2 - \nabla^2, \qquad \text{so}\qquad \omega^2 = \mathbf k^2 - \mu^2 .$$

Modes with $|\mathbf k| > \mu$ have real frequency and are the candidate tachyons; modes with $|\mathbf k| < \mu$ have imaginary frequency and grow exponentially. Feinberg's quantisation keeps only the first set and, to obtain a Lorentz-invariant theory, quantises the spinless field with anticommutators (Fermi statistics) rather than the commutators the spin-statistics theorem would assign to a normal scalar. The abstract states the result plainly: a theory of non-interacting spinless tachyons using Fermi statistics that maintains Lorentz invariance, while the particle number and the vacuum state are not Lorentz invariant **[HIGH] S1** (Feinberg 1967, abstract via the INSPIRE record; the full text is paywalled). That last clause is the seed of everything that went wrong later: a vacuum that different observers do not agree on is not a vacuum in the usual sense.

The key quantity for scoring is not any headline number, because the paper produces none; it is the group velocity. For the dispersion relation above, $v_g = d\omega/dk = k/\omega > 1$, but the equation is hyperbolic with the same characteristic cones as the ordinary Klein-Gordon equation, so a wavefront launched from a compact region still propagates at exactly c. Aharonov, Komar and Susskind, Phys. Rev. 182, 1400 (1969), made this the centre of their analysis: superluminal group velocities that stay inside the forward light cone arise as small oscillations about an unstable equilibrium, exactly the $|\mathbf k| < \mu$ instability Feinberg had to discard, and the theory gives "tachyonlike behavior without one's having to introduce negative energies" **[HIGH] S1**. In modern language the tachyonic field is the sign of a wrong vacuum: the field rolls off the top of its potential, the true vacuum has $m^2 > 0$ and the "tachyon" is gone. This is [LOR-2](../../constraints/lor-2.md) in one sentence, and it is why the proposal is graded K0 rather than merely unconfirmed.

The reinterpretation principle does not rescue signalling. Benford, Book and Newcomb, Phys. Rev. D 2, 263 (1970), showed that two observers in relative motion, each equipped with a tachyon transmitter, can arrange for a reply to arrive before the question was sent, whatever reinterpretation each applies to the other's negative-energy emissions **[HIGH] S1** (this is the antitelephone that the register carries as [CAU-1](../../constraints/cau-1.md)). The reinterpretation principle is a bookkeeping rule for single emissions; it has nothing to say about a loop.

The experimental record is uniformly null, and long. Alväger and Kreisler, Phys. Rev. 171, 1357 (1968), searched for charged tachyons photoproduced in lead and set the photoproduction cross section below $3 \times 10^{-30}\ \mathrm{cm}^2$ for charges between 0.1 and 2 electron charges, independent of the assumed rest mass **[HIGH] S1**. Baltay, Feinberg, Yeh and Linsker, Phys. Rev. D 1, 759 (1970), searched for neutral tachyons in stopped kaon and antiproton annihilations by missing mass and found none, with production limits of $10^{-3}$ to $2.5 \times 10^{-3}$ relative to pion production in the same reactions **[HIGH] S1**. Danburg et al., Phys. Rev. D 4, 53 (1971), searched for ionising tachyon pairs from 2.2 GeV/c kaon interactions in a bubble chamber with a null result **[HIGH] S1**. Clay and Crouch, Nature 248, 28 (1974), reported "apparently positive results" for a precursor signal in cosmic-ray air showers near $2 \times 10^{15}$ eV **[HIGH] S1**; it was never reproduced, and Ehrlich's 2022 review of every tachyon search treats the air-shower claims as unconfirmed **[MED] S2**. Chodos, Hauser and Kostelecký, Phys. Lett. B 150, 431 (1985), proposed that at least one known neutrino is a tachyon and reviewed the evidence then available **[HIGH] S1**; the hypothesis was fed for two decades by the negative central values of $m_\nu^2$ from tritium beta-decay endpoint experiments (Mainz, Troitsk), and has been drained by KATRIN, whose second campaign gave $m_\nu^2 = (0.26 \pm 0.34)\ \mathrm{eV}^2$ **[HIGH] S1** (arXiv:2105.08533, Nature Physics 18, 160 (2022)) and whose 259-day dataset gives $m_\nu^2 = -0.14^{+0.13}_{-0.15}\ \mathrm{eV}^2$ and $m_\nu < 0.45$ eV at 90% confidence **[HIGH] S1** (Science 388, 180 (2025)), both consistent with zero. The one claimed measurement of a superluminal neutrino, OPERA in 2011, was an instrument and has [its own dossier](opera-neutrinos-2011.md). Pair-emission arguments of the Cohen and Glashow type now bound any superluminal neutrino velocity excess to below about $10^{-20}$ from the IceCube PeV events **[MED] S1** (Stecker and Scully, Phys. Rev. D 90, 043012 (2014)).

## What it costs

**B-new.** A particle with $m^2 < 0$ is not in the Standard Model, and the only field that has ever shown a tachyonic mass term in a working theory (the Higgs doublet at the symmetric point) does so as the signal of an instability that the theory then resolves. Feinberg's construction needs the tachyon as a stable quantum, which requires discarding the unstable modes by hand and a vacuum that observers disagree about.

**B-caus.** The theory is fully Lorentz invariant and the tachyon has no fixed speed in any frame. That is exactly the case [CAU-4](../../constraints/cau-4.md) identifies as paradoxical: with two transmitters in relative motion the antitelephone follows, and nothing in the proposal picks a frame to prevent it. A tachyon that could carry a message would carry it into the past.

There is no negative energy in the geometric sense and no infrastructure; the bill is short because the proposal is short.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | A Lorentz-invariant tachyon signal is a backward-in-time signal in some inertial frame; Benford, Book and Newcomb built the two-way antitelephone from exactly this proposal, and the reinterpretation principle does not close the loop. |
| CAU-2 | N/A | Chronology protection acts on closed timelike curves of the metric through back reaction of the stress-energy; a tachyon signal loop in flat spacetime is a causal loop of signals, not a closed curve of the geometry, so Hawking's mechanism has nothing to act on. |
| CAU-3 | N/A | The wormhole and warp-bubble time-machine constructions need a geometric device to carry on a round trip; the tachyon is a particle in flat space and provides none. |
| CAU-4 | VIOLATES | Feinberg's theory keeps full Lorentz invariance with no fixed tachyon speed, which the register names as the one case that is a time machine; the proposal never picks a frame and its whole point is not to. |
| CAU-5 | N/A | No entanglement is involved; the tachyon is a propagating quantum, not a correlation. |
| ENE-1 | VIOLATES | The classical field with $m^2 < 0$ has a potential unbounded below, so its energy density $\tfrac12\dot\phi^2 + \tfrac12(\nabla\phi)^2 - \tfrac12\mu^2\phi^2$ can be negative for any observer; this is the instability, and the energy conditions are the currency in which it shows. |
| ENE-2 | N/A | Olum, Visser and Gao-Wald bound geometric time advances against the flat light cone under energy conditions; the tachyon changes no geometry, and its claimed advance is kinematic, so the theorems have no premise to apply to. |
| ENE-3 | N/A | The quantum inequalities bound negative energy density of quantum fields in bubble walls and throats; no such structure is proposed. |
| ENE-4 | N/A | The pocket geometry is an L2 accounting trick; nothing here has a bubble. |
| ENE-5 | N/A | The Natário class of warp metrics does not contain a flat-space particle theory. |
| ENE-6 | N/A | The Casimir floor prices negative energy density; the proposal asks for none. |
| ENE-7 | N/A | No geometry is changed and no handle exists; the theorem's hypotheses are about topology and none is present. |
| CON-1 | N/A | No bubble, no horizon, nothing to control; Krasnikov's remark that a superluminal bubble would need tachyons to shape the metric ahead is the inverse dependence, a warp drive needing this proposal rather than this proposal needing a warp drive. |
| CON-2 | N/A | A particle created above c needs no route laid in advance; the bootstrap problem is about metrics. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No horizon for a quantised field to diverge on; the proposal's own instability is scored under LOR-2. |
| STA-2 | N/A | No throat. |
| STA-3 | N/A | No chronology horizon in a fixed flat background. |
| HAZ-1 | N/A | No bubble wall to sweep up particles. |
| HAZ-2 | N/A | No horizon, no Hawking flux. |
| HAZ-3 | N/A | No throat, no tidal bound. |
| LOR-1 | DODGES | The register lists never having been below c as the escape hatch from Einstein's 1905 argument, and Feinberg's pair-production picture takes exactly that hatch: nothing is accelerated through c. |
| LOR-2 | VIOLATES | This is the entry that closes the proposal: Aharonov, Komar and Susskind show the causal superluminal group velocities are small oscillations about an unstable configuration, and nearly sixty years of searches (Alväger and Kreisler, Baltay et al., Danburg et al., the tritium endpoint, OPERA) have found nothing. |
| LOR-3 | SATISFIES | The tachyonic Klein-Gordon equation is hyperbolic with characteristics at c, so the front velocity of any disturbance is c even though the group velocity exceeds it; this agreement with LOR-3 is precisely why the field cannot carry a signal faster than light. |
| LOR-4 | N/A | The entry records the [Scharnhorst calculation](scharnhorst-effect.md) and the OPERA instrument; the OPERA half, which was read at the time as a tachyonic neutrino, is scored in its own dossier. |
| WRP-1 | N/A | Not a warp drive and does not claim to be: it is a particle in flat space. |
| WRP-2 | N/A | No shell of material moving inertially. |
| WRP-3 | N/A | The positive-energy warp argument does not touch a particle proposal. |
| MAN-1 | N/A | No extra dimension and no bulk. |

## Status of the argument

- 1962: Bilaniuk, Deshpande and Sudarshan set out the classical kinematics and the reinterpretation principle.
- 1967: Feinberg builds the free field theory and coins the name; the abstract already records that the vacuum and particle number are not Lorentz invariant.
- 1968 to 1971: three accelerator searches (Alväger and Kreisler; Baltay, Feinberg, Yeh and Linsker; Danburg et al.) find nothing and set cross-section and production limits.
- 1969: Aharonov, Komar and Susskind show that causal superluminal group velocities are oscillations about an unstable configuration; this is the physical reading of the tachyonic mass term that has held ever since.
- 1970: Benford, Book and Newcomb publish the tachyonic antitelephone, showing the reinterpretation principle does not save causality for a two-way exchange.
- 1974: Clay and Crouch report a possible cosmic-ray tachyon signal; not reproduced.
- 1985: Chodos, Hauser and Kostelecký propose the tachyonic neutrino.
- 1986: Recami's review in Riv. Nuovo Cimento 9(6), 1, with several hundred references, remains the largest survey of the classical theory and its "extended relativity"; the programme it describes has produced no experimental support.
- 2011 to 2012: OPERA's superluminal neutrino, read by some as the Chodos tachyon, is traced to a fibre connector and an oscillator offset; the Cohen and Glashow pair-bremsstrahlung argument refutes the superluminal reading independently of the instrument.
- 2012: Rembieliński and Włodarczyk, arXiv:1206.0841, propose a Lorentz-covariant tachyon description "free of inconsistencies" by exploiting the freedom of clock synchronisation, which in the register's terms is a CAU-4 move, a preferred synchronisation, and belongs with the Lorentz-violating frameworks rather than with Feinberg's proposal.
- 2022 to 2025: KATRIN's $m_\nu^2$ is consistent with zero and the tritium endpoint no longer supports a tachyonic neutrino; Ehrlich's 2022 review (Symmetry 14, 1198) argues for a tachyonic mass state in a 3 + 3 neutrino model, which has no independent support as of 2026-09-12.
- No peer-reviewed reply has rehabilitated the free tachyon as a stable particle since 1969, as of 2026-09-12.

## Sources

- Feinberg, "Possibility of faster-than-light particles", Phys. Rev. 159, 1089 (1967). S1. Full text paywalled; abstract and bibliographic record verified via INSPIRE.
- Bilaniuk, Deshpande and Sudarshan, "'Meta' relativity", Am. J. Phys. 30, 718 (1962). S1. Read in full (reprint hosted at the University of Texas).
- Aharonov, Komar and Susskind, Phys. Rev. 182, 1400 (1969), on superluminal behaviour, causality and instability. S1. Abstract verified via INSPIRE.
- Benford, Book and Newcomb, "The tachyonic antitelephone", Phys. Rev. D 2, 263 (1970). S1.
- Alväger and Kreisler, "Quest for faster-than-light particles", Phys. Rev. 171, 1357 (1968). S1. Abstract verified via INSPIRE.
- Baltay, Feinberg, Yeh and Linsker, "Search for uncharged faster-than-light particles", Phys. Rev. D 1, 759 (1970). S1. Abstract verified via INSPIRE.
- Danburg, Kalbfleisch, Borenstein, Strand, VanderBurg, Chapman and Lys, "Search for ionizing tachyon pairs from 2.2-GeV/c K⁻p interactions", Phys. Rev. D 4, 53 (1971). S1.
- Clay and Crouch, "Possible observation of tachyons associated with extensive air showers", Nature 248, 28 (1974). S1. Abstract verified via INSPIRE.
- Chodos, Hauser and Kostelecký, "The neutrino as a tachyon", Phys. Lett. B 150, 431 (1985). S1. Abstract verified via INSPIRE.
- Cohen and Glashow, "Pair creation constrains superluminal neutrino propagation", Phys. Rev. Lett. 107, 181803 (2011), arXiv:1109.6562. S1. Read in full.
- Stecker and Scully, "Propagation of superluminal PeV IceCube neutrinos", Phys. Rev. D 90, 043012 (2014), arXiv:1404.7025. S1.
- KATRIN collaboration, "Direct neutrino-mass measurement with sub-electronvolt sensitivity", Nature Physics 18, 160 (2022), arXiv:2105.08533; and "Direct neutrino-mass measurement based on 259 days of KATRIN data", Science 388, 180 (2025), arXiv:2406.13516. S1.
- Recami, "Classical tachyons and possible applications", Riv. Nuovo Cimento 9(6), 1 (1986). S2.
- Ehrlich, "A review of searches for evidence of tachyons", Symmetry 14, 1198 (2022), arXiv:2204.12017. S2. Used for the catalogue of searches; its 3 + 3 model is the author's own proposal.
- Rembieliński and Włodarczyk, "'Meta' relativity: against special relativity?", arXiv:1206.0841 (2012). S2 (preprint).
