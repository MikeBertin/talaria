# Bobrick and Martire 2021: physical warp drives

*A classification that says every warp drive is a moving shell of matter, and a subluminal positive-energy class whose one worked example turns out to be flat space.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K3 · **Bill:** B-neg, B-mass · **Last reviewed:** 2026-09-12

## The claim

Alexey Bobrick and Gianni Martire set out to say what a warp drive is, in general, rather than to study the one example Alcubierre wrote down. Their definition: an asymptotically flat vacuum region enclosing a compact curved shell of spherical topology, which in turn encloses a flat "passenger" region large enough to do physics in. The spacetime is stationary from the passenger's point of view, which they formalise as a global Killing vector field aligned with the four-velocity of the inner boundary. With that in hand they sort all such spacetimes into four classes by two questions: is the remote comoving observer at infinity timelike (subluminal drive) or spacelike (superluminal drive), and does the interior observer share that observer's norm (mild drive) or differ from it (extreme drive). The Alcubierre and Natário drives are Class I when slow and Class III when fast.

The conceptual result they draw from this is that a warp drive is "a shell of regular or exotic material moving inertially with a certain velocity", so that "any warp drive requires propulsion". The physical result is a general model of spherically symmetric subluminal warp drives built from ordinary positive-energy matter, which they present as the first manifestly positive-energy warp spacetimes. For that class they show the only thing positive energy can buy is a slower clock inside the shell. Alongside they offer a recipe for axisymmetric drives built by choosing how inner and outer observers' clocks and rulers relate, an energy reduction of the Alcubierre drive by flattening its shape and by an optimised shape function, superluminal flattened drives said to satisfy the quantum inequalities and drives with a chosen rate of time or a spinning interior.

What they do not claim matters as much. They do not claim a superluminal positive-energy drive; they argue the opposite, that superluminal drives "may always violate weak energy conditions", and they say their conclusions "do not support the recent claim in (Lentz 2020)". The paper's title is a promise about the subluminal case only.

## Origin and lineage

Bobrick and Martire, Advanced Propulsion Laboratory at Applied Physics, New York; arXiv:2102.06824, February 2021; Class. Quantum Grav. 38, 105009 (2021) **[HIGH] S1**. It answers the Alcubierre metric of [Alcubierre 1994](alcubierre-1994.md) and the zero-expansion drive of [Natário 2002](natario-2002.md), which it treats as truncated special cases of its own scheme, and it responds directly to the positive-energy claim of [Lentz 2021](lentz-solitons-2021.md), then a preprint. It fed [Fell and Heisenberg 2021](fell-heisenberg-2021.md), who adopt its "non-truncation" idea, and it is the parent of the same group's numerical shell in [Fuchs et al. 2024](fuchs-constant-velocity-2024.md). The register carries it as [WRP-2](../../constraints/wrp-2.md).

## The mechanism

The paper starts from the Alcubierre line element

$$ds^2 = -c^2 dt^2 + \big(dx - f(r_s)\, v_s\, dt\big)^2 + dy^2 + dz^2,$$

with $r_s$ the distance from the moving centre and $f$ a shape function equal to 1 inside and 0 outside, and the Eulerian energy density (the density measured by observers moving normal to the constant-$t$ slices)

$$T^{00} = -\frac{1}{8\pi}\,\frac{\rho^2 v_s^2}{4 r_s^2}\Big(\frac{df}{dr_s}\Big)^2,$$

with $\rho^2 = y^2 + z^2$, which is negative wherever the wall has a gradient **[HIGH] S1**.

The spherically symmetric case is where the paper's positive-energy claim lives. In the comoving frame the most general static spherically symmetric metric is

$$ds^2 = -N(r)\,c^2 dt^2 + \Lambda(r)\,dr^2 + r^2 d\Omega^2,$$

and the comoving energy density is $w(r) = \frac{1}{8\pi r^2}\big(1 - (r/\Lambda)'\big)$, so that $\Lambda$ can be written directly in terms of the enclosed energy,

$$\Lambda(r) = \Big(1 - \frac{2}{r}\int_0^r 4\pi w(r')\,r'^2\,dr'\Big)^{-1},$$

which is Birkhoff's theorem in disguise: outside a positive-energy shell the metric is Schwarzschild **[HIGH] S1**. The argument against truncation follows at once. A drive whose exterior is exactly flat needs $\int 4\pi w r^2 dr = 0$ over the shell, so any non-trivial truncated spherically symmetric drive must contain negative energy somewhere **[HIGH] S1**. The pressure comes from the radial Einstein equation, $P\Lambda = (1 - \Lambda + rN'/N)/r^2$, and the continuity equation gives a Tolman–Oppenheimer–Volkoff-type relation $N'/N = -2P'/(P+\rho)$; with $P = 0$ at both faces of the shell and a barotropic equation of state, $N$ takes the same value at the inner and outer faces, so the interior clock is slowed relative to the comoving observer at infinity and can only be slowed **[HIGH] S1**. The scale is unpromising: an Earth-mass shell of 10 m radius slows the interior clock by a fraction of about $4 \times 10^{-4}$ **[HIGH] S1**. The paper then shows that Classes II, III and IV cannot be spherically symmetric, because the Killing field would have to be radial at infinity, so all spherically symmetric positive-energy drives are Class I and subluminal **[HIGH] S1**.

The axisymmetric recipe is a metric of the form

$$ds^2 = -c^2\big((1-f_t)\,dt + f_t\,dt_{co}\big)^2 + \big((1-f_x)\,dx + f_x\,dx_{co}\big)^2 + \dots,$$

where $(t_{co}, x_{co})$ are the coordinates of the interior observer, mapped one-to-one onto those of the exterior observer, and the $f_\eta$ interpolate from 1 inside to 0 outside. Choosing $dt_{co} = dt$, $dx_{co} = dx - v_s dt$ recovers Alcubierre **[HIGH] S1**. Writing the shape function as $f(x - x_s, \rho)$ rather than as a function of $r_s$ simplifies the Alcubierre energy density to

$$w = -\frac{1}{8\pi}\,\frac{v_s^2}{4}\Big(\frac{\partial f}{\partial \rho}\Big)^2,$$

from which flattening the bubble along the direction of motion by a factor $\alpha_X$ reduces the total Eulerian energy by $1/\alpha_X$; the optimised shape function $\bar f(r_s) = \min(r_s/r_0, 1)$ cuts a further factor of about three, the two together being the "two orders of magnitude" of the abstract **[HIGH] S1**. The paper also observes that extreme flattening lets the wall thickness along $x$ approach the Planck scale so that the Pfenning–Ford sampling inequality is satisfied, while conceding that "even the extremely flattened version of the Alcubierre drive, as discussed here, does not satisfy the averaged null energy conditions" **[HIGH] S1**. Its Lorentz drive (interior observer time-dilated like a Lorentz observer), improved Van Den Broeck drive, modified-time drive and spinning drive each come with an explicit Eulerian density, and each contains regions of negative energy density by the paper's own equations **[HIGH] S1**.

The critical finding on the positive-energy class is in Santiago, Schuster and Visser, appendix A: under the assumptions the paper imposes on its shell (zero pressure at both faces, non-negative density, barotropic and isotropic fluid) "the unique solution to the TOV is the trivial solution p(r) = 0 = ρ(r), and the mass of the exterior region must be zero", so the model "just reduces, globally, to flat Minkowski space" and is not a warp drive **[HIGH] S1**. They add that the paper's asymptotic boundary conditions force the bubble to be at rest with respect to spatial infinity, which in their words "defeats the whole purpose of a warp drive" **[HIGH] S1**. Their appendix B finds that the paper's appendices A.1 and A.2, which claim the non-unit-lapse and Van Den Broeck metrics are coordinate transformations of Alcubierre, use maps that fail the condition $J^a{}_{[b,c]} = 0$ and "are simply not coordinate transformations" **[HIGH] S1**. They also reject the paper's assertion that Alcubierre's velocity cannot be time-dependent and that the metric fails the continuity equations, since the Bianchi identities enforce continuity automatically once the metric is written down **[HIGH] S1**. The paper's Eulerian density is, in their words, "the only quantity Bobrick–Martire [2] explicitly calculate", and a positive Eulerian density does not establish the weak energy condition **[HIGH] S1**.

## What it costs

The bill splits by class. The positive-energy class is subluminal by the paper's own theorem, so it is a spaceship with a slow clock, and the mass to make the clock noticeably slow is planetary: an Earth mass for a part in a few thousand at 10 m radius **[HIGH] S1**. That is B-mass. Every superluminal member, and every axisymmetric example the paper actually writes down, carries negative Eulerian energy density by the paper's own formulae, and the paper's own reading of Olum and of Visser, Bassett and Liberati is that superluminal drives need it **[HIGH] S1**. That is B-neg. There is no B-caus mark only because the members the paper calls physical never exceed light speed; the superluminal classes are left, in the paper's words, "entirely hypothetical". No new field is invoked, so no B-new.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | The members the paper calls physical are subluminal Class I shells, so no signal outruns light and the antitelephone never arises; the paper concedes that in Class III the interior observer "will be travelling back in time from the point of view of yet another remote timelike observer" and leaves that class hypothetical, citing Liberati, Sonego and Visser for a Lorentz-breaking way out it does not adopt |
| CAU-2 | SILENT | Notes in the introduction that superluminal motion "allows for closed timelike loops" and never discusses chronology protection; the subluminal class does not raise it |
| CAU-3 | SILENT | Cites Everett 1996 in passing and never examines two-device loops; its superluminal classes would fall to Everett's construction and its subluminal class would not |
| CAU-4 | SILENT | Mentions that causality "may be recovered at the expense of Lorentz invariance" and neither picks a frame nor says what would |
| CAU-5 | N/A | No entanglement or quantum signalling is involved |
| ENE-1 | VIOLATES | Every non-trivial metric written down (flattened Alcubierre, Lorentz drive, pocket variant, modified-time and spinning drives) has regions of negative Eulerian density by the paper's equations (12), (15), (17), (19) and (21); the one positive-energy construction reduces to Minkowski space under its own assumptions (Santiago, Schuster and Visser, App. A) |
| ENE-2 | SATISFIES | Agrees with the entry: it states that negative energy is "a general property of any superluminal drive", citing Olum and Visser, Bassett and Liberati, and it confines its positive-energy claim to subluminal shells |
| ENE-3 | DODGES | Flattening by $\alpha_X$ cuts the Eulerian energy by $1/\alpha_X$ and lets the wall along $x$ approach Planck thickness so the Pfenning–Ford sampling inequality is met, at the price of an interior too thin for any observer; the paper admits the result still violates the averaged null condition and that such drives "more likely probe the limits of applicability of the quantum inequalities" |
| ENE-4 | SATISFIES | Its own pocket variant, equation (17), still carries negative density, in line with the entry's finding that the pocket changes the quantity not the sign; its appendix A.2 claim that Van Den Broeck's metric is a coordinate transformation of Alcubierre, which would undercut the entry's solar-mass figure, is shown by Santiago, Schuster and Visser (App. B) not to be a coordinate transformation, so the register figure stands |
| ENE-5 | VIOLATES | Named in the entry as one of the three 2021 claims that checked only the co-moving Eulerian density; Santiago, Schuster and Visser prove the null energy condition fails for the whole Natário class the axisymmetric examples belong to, and the paper's non-Natário members carry negative density by its own formulae |
| ENE-6 | SILENT | Mentions zero-point fluctuations only to say Alcubierre walls would need Planck thickness; never names a source for the negative density its axisymmetric members need |
| ENE-7 | N/A | Warp shells of trivial topology; the theorem's hypotheses concern a handle in an asymptotically flat spacetime and none is proposed. Any superluminal member of the class is already caught by ENE-2, which the paper accepts, and ENE-7 is that entry's wormhole form. |
| CON-1 | SATISFIES | Its Class III drives carry a Killing horizon by definition and the paper does not claim the interior observer can steer them; its physical class is subluminal and has no horizon, the entry's own escape hatch |
| CON-2 | SATISFIES | The paper's central conclusion is the entry's: a warp drive is an inertially moving shell, "there is no known way of accelerating a warp drive beyond the speed of light"; no self-consistent accelerating solution exists in the literature |
| CON-3 | N/A | Not a tube; the paper mentions Krasnikov tubes only as a round-trip alternative with larger energy needs |
| STA-1 | SATISFIES | Lists the Finazzi, Liberati and Barceló instabilities as a drawback of superluminal Alcubierre motion and confines its physical class to subluminal speeds, where the entry says the problem does not arise |
| STA-2 | N/A | No wormhole throat |
| STA-3 | N/A | No time machine is assembled, so no chronology horizon |
| HAZ-1 | SILENT | Sweeping up interstellar matter is never discussed; the subluminal class avoids the superluminal burst, the superluminal classes would not |
| HAZ-2 | SILENT | Horizon flux on the crew is not discussed; the subluminal class has no horizons |
| HAZ-3 | N/A | No throat to cross |
| LOR-1 | SATISFIES | States that "there is no known way of accelerating regular material beyond the speed of light" and that a superluminal shell can only be postulated, like a superluminal test particle |
| LOR-2 | SILENT | Class II "superluminal matter", at rest in a spacelike frame and violating the dominant energy condition, is tachyonic matter in all but name; the paper neither engages the instability result nor claims such matter exists |
| LOR-3 | N/A | No group-velocity or tunnelling signal claim |
| LOR-4 | N/A | Neither Scharnhorst light nor a superluminal particle measurement |
| WRP-1 | SATISFIES | Places Alcubierre and Natário inside its scheme as Classes I and III and says what its own objects are, shells; Santiago, Schuster and Visser note that two of its metrics (non-unit lapse, conformally flat slices) lie outside the Natário class and must be judged separately |
| WRP-2 | SATISFIES | The entry is built from this paper: positive energy buys a subluminal shell, superluminal needs exotic matter. The correction recorded in the entry, that the paper's explicit positive-energy example reduces to flat space, is a failure of the example not of the thesis |
| WRP-3 | SATISFIES | Makes no superluminal positive-energy claim and says its conclusions do not support Lentz's; its subluminal positive-energy idea is carried by the group's own 2024 shell, the one survivor the entry records |
| MAN-1 | N/A | Extra dimensions appear only in a one-line citation of White 2013; not part of the mechanism |

## Status of the argument

- **February 2021.** Preprint; accepted at Class. Quantum Grav. and published as 38, 105009 **[HIGH] S1**.
- **April 2021.** Fell and Heisenberg adopt the paper's "non-truncation" explanation for why their own Eulerian density is positive, and Santiago, Schuster and Visser later note that this terminology "has been uncritically adopted by subsequent authors" **[HIGH] S1**.
- **May 2021 to March 2022.** Santiago, Schuster and Visser, Phys. Rev. D 105, 064038: appendix A finds the paper's spherically symmetric positive-energy model reduces to flat space under its own assumptions; appendix B finds its coordinate-transformation claims for the Loup and Van Den Broeck metrics are not coordinate transformations; appendix D records that the axisymmetric section contains no metric satisfying the weak energy condition, so "their only 'warp drive' which satisfies the WEC is actually not a warp drive metric at all" **[HIGH] S1**.
- **2022 to 2023.** Schuster, Santiago and Visser, Gen. Relativ. Gravit. 55, 14 (2023), examine what mass means in a warp spacetime and build a Natário-class bubble carrying a massive payload, the "Schwarzschild drive" that Fuchs et al. later cite as showing that moving a massive centre through the slices costs negative energy **[MED] S1**.
- **May 2024.** The same group's Fuchs et al., Class. Quantum Grav. 41, 095013, replace the analytic shell with a numerically built shell of $4.49 \times 10^{27}$ kg carrying a shift of $0.02c$, checked against all four energy conditions; it is subluminal and constant-velocity, and the register carries it as the one surviving positive-energy result **[HIGH] S1**. Helmerich et al., Class. Quantum Grav. 41, 095009 (2024), evaluate the paper's modified-time metric in their Warp Factory toolkit alongside Alcubierre, Van Den Broeck and a Lentz-inspired metric **[MED] S1**.
- **As of 2026-09-12.** No peer-reviewed reply by Bobrick and Martire to the flat-space finding of appendix A has been found; the group's answer in practice was the 2024 numerical construction, which abandons the analytic TOV shell for a smoothed one with anisotropic pressure **[MED] S1**.

## Sources

- Bobrick and Martire, "Introducing physical warp drives", Class. Quantum Grav. 38, 105009 (2021), arXiv:2102.06824. S1.
- Santiago, Schuster and Visser, "Generic warp drives violate the null energy condition", Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079, appendices A, B and D. S1.
- Fuchs, Helmerich, Bobrick, Sellers, Melcher and Martire, "Constant velocity physical warp drive solution", Class. Quantum Grav. 41, 095013 (2024), arXiv:2405.02709. S1.
- Helmerich, Fuchs, Bobrick, Sellers, Melcher and Martire, "Analyzing warp drive spacetimes with Warp Factory", Class. Quantum Grav. 41, 095009 (2024), arXiv:2404.03095. S1.
- Schuster, Santiago and Visser, "ADM mass in warp drive spacetimes", Gen. Relativ. Gravit. 55, 14 (2023), arXiv:2205.15950. S1.
- Fell and Heisenberg, "Positive energy warp drive from hidden geometric structures", Class. Quantum Grav. 38, 155020 (2021), arXiv:2104.06488. S1.
- Lentz, "Breaking the warp barrier: hyper-fast solitons in Einstein–Maxwell-plasma theory", Class. Quantum Grav. 38, 075015 (2021), arXiv:2006.07125. S1.
- Alcubierre, "The warp drive: hyper-fast travel within general relativity", Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. S1.
- Natário, "Warp drive with zero expansion", Class. Quantum Grav. 19, 1157 (2002), arXiv:gr-qc/0110086. S1.
- Van Den Broeck, "A 'warp drive' with more reasonable total energy requirements", Class. Quantum Grav. 16, 3973 (1999), arXiv:gr-qc/9905084. S1.
- Pfenning and Ford, "The unphysical nature of 'warp drive'", Class. Quantum Grav. 14, 1743 (1997), arXiv:gr-qc/9702026. S1.
- Olum, "Superluminal travel requires negative energies", Phys. Rev. Lett. 81, 3567 (1998), arXiv:gr-qc/9805003. S1.
