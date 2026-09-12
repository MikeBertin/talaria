# Meta relativity (Bilaniuk, Deshpande and Sudarshan 1962)

*The classical extension of special relativity to particles created above c: imaginary rest mass, a single-sheeted energy surface and the reinterpretation principle for negative energies.*

**Kind:** physics · **Loophole:** L1 · **Standing:** K3 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

Bilaniuk, Deshpande and Sudarshan ask a narrow question and answer it carefully: if a third class of particles exists, created already faster than light, is the classical (non-quantum) theory of special relativity consistent with them? Their answer is yes. Particles of class I travel below c, class II at c and the hypothetical class III above it. The postulates of relativity are, in their words, "strictly adhered to"; nothing is modified. The class III particle has a real energy and a real momentum, which forces its rest mass to be imaginary, but rest mass is not something any observer can measure, so an imaginary value offends only "the traditional way of thinking, and not observable physics" (Bilaniuk, Deshpande and Sudarshan 1962, p. 720). Its proper time and proper length are likewise imaginary and likewise unobservable, since every observer belongs to class I.

The paper's second and more consequential claim is the reinterpretation principle. Some observers will see a class III particle with negative energy travelling backward in time. Rather than admit negative-energy particles, the authors reinterpret: a negative-energy particle absorbed at $x_2$ and emitted at $x_1$ is, to that observer, a positive-energy particle emitted at $x_2$ and absorbed at $x_1$. Source and sink exchange roles, the energy is positive in every frame, and the single-sheeted energy surface is tamed by bookkeeping. The paper then proposes a detection method (a Čerenkov cone that grows with energy loss, opening to 90 degrees as the particle speeds up) and closes with a conclusion the authors were candid about: the speculation had "invariably led to lively and penetrating debates among the students". The paper does not claim class III particles exist. It claims the door is not locked.

## Origin and lineage

The pre-relativistic ancestors are Thomson (1889), Heaviside (1892) and Sommerfeld (1904, 1905), all cited in the paper's first footnote as having examined charges moving faster than light. The 1962 paper is the first to do so inside special relativity rather than before it. Feinberg's 1967 field theory, which named the particles tachyons, is its direct descendant and carries [its own dossier](tachyons-feinberg-1967.md); the two together are the register's [LOR-2](../../constraints/lor-2.md). The reinterpretation principle was tested against a two-way exchange by Benford, Book and Newcomb in 1970 and found wanting, which is [CAU-1](../../constraints/cau-1.md). Recami's "extended relativity" programme of the 1970s and 1980s generalised the reinterpretation into a "switching principle" and attempted superluminal Lorentz transformations. The paper's authors are the reason the tachyon has a respectable pedigree at all: Sudarshan was one of the two discoverers of the V-A theory of the weak interaction.

## The mechanism

The paper works entirely from the invariant

$$E^2 - p^2c^2 = m_0^2c^4 \tag{1}$$

and two criteria: (a) the energy of a particle must be positive in every frame, and (b) the laws of particle dynamics must be frame independent **[HIGH] S1**. For $m_0^2 > 0$ the surface described by (1) is a two-sheeted hyperboloid of revolution about the E axis and the positive-energy sheet is mapped into itself by proper Lorentz transformations; for $m_0^2 = 0$ it is a cone; for $m_0^2 < 0$ it is a single-sheeted hyperboloid on which "all points on the sheet can be transformed into each other under proper Lorentz transformations" **[HIGH] S1**. That single sentence contains both the freedom the authors want and the paradox their critics found.

Reality of the observables forces the mass imaginary:

$$E = \frac{m_0 c^2}{\sqrt{1 - v^2/c^2}}, \qquad p = \frac{m_0 v}{\sqrt{1 - v^2/c^2}}, \tag{2, 3}$$

real for $v > c$ only if $m_0$ is imaginary, and the same argument applied to $L = L_0\sqrt{1 - v^2/c^2}$ and $T = T_0\sqrt{1 - v^2/c^2}$ makes proper length and proper time imaginary **[HIGH] S1**. Writing $m_0 = i\mu$ with $\mu$ real and setting $c = 1$, $E = \mu/\sqrt{v^2 - 1}$ and $p = \mu v/\sqrt{v^2 - 1}$: energy decreases as velocity increases, the particle with zero energy has infinite velocity and momentum $\mu$, and the momentum never falls below $\mu$ because the hyperboloid contains no points with $p^2 < |m_0^2| c^2$.

Velocity addition is assumed unchanged,

$$v = \frac{u + w}{1 + uw/c^2}, \tag{10}$$

and the authors plot it for $u < c$, $u = c$ and $u > c$ against the observer velocity $w$ restricted to $|w| < c$. For class III the role of c persists "except that c is the lower limit for the velocity here", and as $w \to -c^2/u$ the observed velocity tends to infinity while the energy tends to zero, so the principle that nothing propagates energy at infinite speed survives: zero energy is being propagated **[HIGH] S1**. Beyond that value of $w$ the time component of the interval and the energy both change sign, which is where the reinterpretation principle enters.

The reinterpretation is worked through three examples (a single emission and absorption, a collision, a simultaneous two-particle fusion). In each, the frame in which a class III particle has negative energy is also the frame in which it travels backward in time, and reading the negative-energy particle as a positive-energy one going the other way restores "positive definiteness of energy for all observers even though the hyperboloid is single-sheeted" **[HIGH] S1**. The apparent infinite energy source, in which two class III particles collide with a class I particle and appear to donate unbounded energy, is reinterpreted as a fusion of four particles bringing energy in from outside. The authors are explicit that observers "must agree on the identity of the physical laws but not on the description of specific events".

There is no headline number. The one quantitative prediction is the Čerenkov signature: the coherence condition still fixes a unique emission angle, which must exceed the limiting angle for ordinary particles, and as the particle loses energy and speeds up the angle tends to 90 degrees; the paper notes that the usual frequency cut-off that keeps the energy loss finite cannot be used and that the intensity would need a re-examination of the formalism **[HIGH] S1**. This is what Alväger and Kreisler (1968) and the later searches looked for and did not find (see the [tachyon dossier](tachyons-feinberg-1967.md) for the limits).

What the mechanism does not contain is any account of what happens when the reinterpreted signal is used to send a reply. Benford, Book and Newcomb, Phys. Rev. D 2, 263 (1970), supplied the missing calculation: two observers in relative motion each apply the reinterpretation principle to the other's emissions, and a message sent along a tachyon beam and answered along another arrives before it was sent **[HIGH] S1**. The reinterpretation principle is consistent for any single event and fails for a loop, and the register treats this as settled.

## What it costs

**B-new.** A class III particle is a new kind of matter with $m_0^2 < 0$, outside the Standard Model, and no candidate has been found in six decades of searching; the register lists the searches under [LOR-2](../../constraints/lor-2.md) and the tachyon dossier lists the limits.

**B-caus.** The paper keeps full Lorentz invariance and gives the class III particle no fixed speed in any frame, which is the configuration [CAU-4](../../constraints/cau-4.md) identifies as the paradoxical one. The reinterpretation principle removes negative energies from the description of single events but cannot prevent the two-way antitelephone; a meta particle that carried information would carry it into the past unless some further rule, not in this paper, picked a frame. Rembieliński and Włodarczyk's 2012 synchronisation-based construction is such a rule and is scored with the [Lorentz-violating frameworks](lorentz-violating-frameworks.md).

The proposal asks for no negative energy, no geometry and no infrastructure. Its bill is the particle and the paradox.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | A class III signal that is superluminal in one frame goes backward in time in another; the paper's own Fig. 2 shows source and sink exchanging roles, and Benford, Book and Newcomb showed the reinterpretation cannot stop a reply arriving before the question. |
| CAU-2 | N/A | Chronology protection concerns closed timelike curves of the metric and the back reaction of quantum stress-energy; the paper's particles move in fixed flat spacetime and produce no curve for the conjecture to forbid. |
| CAU-3 | N/A | The register's time-machine assembly step needs a wormhole mouth or warp bubble to carry on a round trip; a point particle is not such a device. |
| CAU-4 | VIOLATES | The paper insists that the postulates of special relativity are strictly adhered to and gives class III particles no fixed velocity in any frame, which is exactly the configuration the register says is a time machine; no frame is picked and the paper does not consider picking one. |
| CAU-5 | N/A | No entangled pairs, no measurement statistics. |
| ENE-1 | SILENT | The paper never writes a stress-energy tensor; the reinterpretation principle makes every particle's energy positive by relabelling, but whether a gas of class III particles satisfies the weak energy condition for every observer is not addressed here and is rarely treated in the literature. |
| ENE-2 | N/A | The theorems compare arrival times through curved geometry against flat space under energy conditions; the paper changes no geometry and its advance is kinematic, outside the theorems' hypotheses. |
| ENE-3 | N/A | No quantum field, no negative energy density, no wall. |
| ENE-4 | N/A | No bubble to pocket. |
| ENE-5 | N/A | Not in the Natário class; not a metric at all. |
| ENE-6 | N/A | The Casimir floor prices negative energy density; none is requested. |
| ENE-7 | N/A | The paper changes no geometry and proposes no handle; its advance is kinematic and the theorem's hypotheses are about topology. |
| CON-1 | N/A | No horizon and no bubble; there is nothing to pilot. |
| CON-2 | N/A | A particle created above c needs no route laid in advance. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No horizon for a quantised field to diverge on. |
| STA-2 | N/A | No throat. |
| STA-3 | N/A | No Cauchy horizon in a fixed Minkowski background. |
| HAZ-1 | N/A | No bubble wall. |
| HAZ-2 | N/A | No horizon flux. |
| HAZ-3 | N/A | No throat tides. |
| LOR-1 | DODGES | Einstein's argument bounds a body that starts below c; the paper's class III particles are "created at super-luminary velocities" and never cross the barrier, which is the escape hatch the register itself names. |
| LOR-2 | VIOLATES | This is the paper the register cites first under LOR-2; the classical kinematics are correct and the quantised version was shown by Aharonov, Komar and Susskind to describe an instability, while every search since 1968 has been null. |
| LOR-3 | N/A | The paper is classical point-particle kinematics with no wave equation, so no front velocity arises; the field version, where the front velocity is c, is scored in the tachyon dossier. |
| LOR-4 | N/A | Records the Scharnhorst calculation and the OPERA instrument; neither is a constraint on classical class III kinematics as such. |
| WRP-1 | N/A | Not a warp drive; a particle in flat space. |
| WRP-2 | N/A | No shell of material. |
| WRP-3 | N/A | The positive-energy warp argument does not touch a particle proposal. |
| MAN-1 | N/A | No extra dimension. |

## Status of the argument

- 1962: the paper appears in the American Journal of Physics, a teaching journal, and says so in its conclusion; its stated purpose is to see whether the generalisation has "any physical content".
- 1967: Feinberg, "Possibility of faster-than-light particles", gives the quantum field theory and the name tachyon; the paper had promised "a field-theoretical treatment of the hypothesis will be published at a later date", and Feinberg's is the one that stuck.
- 1968 to 1971: the Čerenkov and missing-mass searches proposed here are carried out (Alväger and Kreisler; Baltay, Feinberg, Yeh and Linsker; Danburg et al.) and find nothing.
- 1969: Aharonov, Komar and Susskind show the field-theory tachyon is an instability, which removes the quantum version of class III particles as stable quanta.
- 1970: Benford, Book and Newcomb publish the tachyonic antitelephone, the first published demonstration that the reinterpretation principle fails for a two-way exchange; this is the refutation of the paper's consistency claim in the sense that matters for signalling, and it has not been answered on its own terms.
- 1986: Recami's Riv. Nuovo Cimento review generalises the reinterpretation principle into "extended relativity" with superluminal Lorentz transformations; the programme is internally elaborate and has produced no confirmed prediction.
- 2012: Rembieliński and Włodarczyk (arXiv:1206.0841) give a covariant tachyon description that avoids the paradox by fixing a synchronisation, which concedes the register's point: the paradox is removed only by a preferred frame.
- No peer-reviewed defence of the reinterpretation principle against the antitelephone, other than by adding a preferred frame, exists as of 2026-09-12.

## Sources

- Bilaniuk, Deshpande and Sudarshan, "'Meta' relativity", Am. J. Phys. 30, 718 (1962). S1. Read in full from the reprint hosted at the University of Texas; bibliographic record verified via INSPIRE.
- Feinberg, "Possibility of faster-than-light particles", Phys. Rev. 159, 1089 (1967). S1. Abstract via INSPIRE.
- Benford, Book and Newcomb, "The tachyonic antitelephone", Phys. Rev. D 2, 263 (1970). S1.
- Aharonov, Komar and Susskind, Phys. Rev. 182, 1400 (1969), on superluminal behaviour, causality and instability. S1. Abstract via INSPIRE.
- Alväger and Kreisler, "Quest for faster-than-light particles", Phys. Rev. 171, 1357 (1968). S1.
- Baltay, Feinberg, Yeh and Linsker, "Search for uncharged faster-than-light particles", Phys. Rev. D 1, 759 (1970). S1.
- Recami, "Classical tachyons and possible applications", Riv. Nuovo Cimento 9(6), 1 (1986). S2.
- Rembieliński and Włodarczyk, "'Meta' relativity: against special relativity?", arXiv:1206.0841 (2012). S2 (preprint).
- Sommerfeld, K. Akad. Wet. Amsterdam Proc. 8, 346 (1904); Nachr. Ges. Wiss. Göttingen, 201 (1905). S1 (as cited by the paper; not read).
