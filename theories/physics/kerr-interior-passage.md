# Passage through the Kerr interior (Carter 1968)

*The analytically extended rotating black hole has a ring you can fly through into another universe; the real interior has a wall of infinite blueshift where the map runs out.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K3 · **Bill:** B-mass, B-caus · **Last reviewed:** 2026-09-12

## The claim

The Kerr solution describes the spacetime outside a rotating mass. Carter, Phys. Rev. 174, 1559 (1968), worked out its global structure: the maximal analytic extension, the causal behaviour, and, thanks to an unexpected fourth constant of motion, the complete integration of every geodesic **[HIGH] S1**. The proposal graded here is the one that fell out of that map and was repeated for fifty years in textbooks and fiction: a rotating black hole is not a dead end. The singularity is a ring, not a point. An infalling body that crosses the outer horizon, then the inner (Cauchy) horizon, can avoid the ring, pass through the disc it bounds into a region of negative radial coordinate, or continue to a new exterior region: "all geodesics which do not reach the central ring singularities are complete" **[HIGH] S1**. Only geodesics confined to the equatorial plane hit the ring at all **[HIGH] S1**. In its strongest form the claim is that a sufficiently massive spinning black hole is a tunnel whose far end opens onto another asymptotically flat universe, and the trip is a free fall with survivable tides.

The claim's honest form has always carried the warning that Carter attached to it. The extended manifold contains closed timelike curves, "there are closed timelike lines which are not removable by taking a covering space", and if the spin or charge exceeds the mass so that the horizons vanish, "it is possible to connect any event to any other by a future-directed timelike line" **[HIGH] S1**. What the claim did not carry until 1990 was the knowledge that the inner horizon, the door to the tunnel, is unstable.

## Origin and lineage

Kerr found the metric in 1963; Boyer and Lindquist gave the coordinates in 1967; Carter's 1968 paper is the global analysis and the source of the passage picture **[HIGH] S1**. Penrose (1968) and Simpson and Penrose (1973) pointed out that the Cauchy horizon of the charged (Reissner–Nordström) hole sees the whole future of the exterior compressed into finite proper time, an infinite blueshift, and argued it must be unstable **[HIGH] S2**. Chandrasekhar and Hartle (1982) computed the divergence of perturbations at the Cauchy horizon **[HIGH] S2**. Poisson and Israel, Phys. Rev. D 41, 1796 (1990), found the nonlinear consequence, mass inflation **[HIGH] S1**. Ori (1991, 1992) gave the exact mass-inflation solution and the structure of the singularity in the rotating case; Brady, Droz and Morsink (1998) the late-time null singularity in non-spherical holes **[HIGH] S2**. Dafermos and Luk (2017, published 2025) proved the rigorous version for Kerr **[HIGH] S1**. The sibling wormholes in this catalogue all descend from the Schwarzschild [Einstein–Rosen bridge](einstein-rosen-bridge-1935.md); the Kerr passage is the rotating cousin, and [Wheeler's group](wheeler-geons-and-foam.md) already regarded Kerr wormholes as foam objects. The fictional lineage runs through every "fly into the black hole" story from *The Black Hole* (1979) onward.

## The mechanism

**The metric.** In Boyer–Lindquist coordinates, with $G = c = 1$, mass $M$ and specific angular momentum $a = J/M$,

$$ds^2 = -\left(1 - \frac{2Mr}{\Sigma}\right)dt^2 - \frac{4 M a r \sin^2\theta}{\Sigma}\,dt\,d\phi + \frac{\Sigma}{\Delta}\,dr^2 + \Sigma\,d\theta^2 + \left(r^2 + a^2 + \frac{2 M a^2 r \sin^2\theta}{\Sigma}\right)\sin^2\theta\,d\phi^2 ,$$

with $\Sigma = r^2 + a^2\cos^2\theta$ and $\Delta = r^2 - 2Mr + a^2$ **[HIGH] S2** (standard; Carter 1968 uses equivalent coordinates). The horizons are the roots of $\Delta$,

$$r_\pm = M \pm \sqrt{M^2 - a^2},$$

real for $a \le M$. The curvature singularity is where $\Sigma = 0$, which requires both $r = 0$ and $\theta = \pi/2$: in the Kerr–Schild picture $r = 0$ is a disc of radius $a$ and the singularity is its rim, a ring **[HIGH] S2**. Passing through the disc away from the rim continues the geometry smoothly to $r < 0$, an asymptotically flat region with negative mass as seen from there **[HIGH] S2**.

**Carter's results.** Separability of the Hamilton–Jacobi equation gives a fourth constant, Carter's constant $\mathcal{K}$, so that geodesics integrate by quadratures **[HIGH] S1**. With it Carter shows that in the maximal extension every geodesic that does not reach the ring is complete, that timelike or null geodesics reaching the ring are confined to the equator, and that the extended manifold has "nontrivial causality violation" in all but the spherically symmetric case: near the ring in the $r < 0$ region, $g_{\phi\phi} < 0$ for some $\theta$, so the closed $\phi$-circles there are timelike, and with the time-translation symmetry these can be threaded into closed timelike curves through any point of the extension **[HIGH] S1**. The passage from our exterior to a new exterior runs through $r_+$, then $r_-$, then either through the disc or outward past $r_-$ and $r_+$ again into a fresh asymptotic region, on a timelike geodesic of finite proper time **[HIGH] S2**.

**The infinite blueshift.** The inner horizon $r_-$ is a Cauchy horizon: initial data in the exterior does not determine the geometry beyond it. An observer crossing $r_-$ sees the entire infinite future of the exterior in finite proper time. Radiation falling in at late exterior time $v$ arrives at the Cauchy horizon blueshifted by a factor of order $e^{\kappa_- v}$, where $\kappa_- = (r_+ - r_-)/2(r_-^2 + a^2)$ is the surface gravity of the inner horizon **[HIGH] S2**. Price's law says the exterior radiative tail decays only as a power of $v$, so the blueshifted energy density diverges **[HIGH] S2**.

**Mass inflation.** Poisson and Israel followed the back reaction. Inside the hole an ingoing stream (the blueshifted tail) crosses an outgoing stream (radiation scattered off the interior curvature). Their counter-streaming near the Cauchy horizon drives the local mass function $m(r, v)$, the Misner–Sharp mass, to grow without bound: "the infinite blueshift of the tail's energy density occurring at the Cauchy horizon of the resulting black hole causes a classically unbounded inflation of the effective internal gravitational-mass parameter of the hole" **[HIGH] S1**. The exterior mass is unaffected because the effect is causally disconnected from outside. The consequence for the passage is stated in the abstract: "The mass inflation phenomenon causes the spacetime curvature to grow to Planckian scales on a spacelike hypersurface in the vicinity of the Cauchy horizon, beyond which the classical laws of general relativity break down", and "an observer's trip to this hypersurface embraces all but the last Planck time of the entire black-hole classical history" **[HIGH] S1**. In the simplest model the mass function grows as $m \sim v^{-p} e^{\kappa_- v}$ for a tail decaying as $v^{-p}$ **[HIGH] S2** (Hamilton and Avelino's review).

**What survives.** Ori argued that the resulting singularity at the Cauchy horizon is null and weak in Tipler's sense: the tidal deformation of an extended body crossing it is finite even though the curvature diverges, so the question of crossing is not settled by the divergence alone **[MED] S2**. Brady, Droz and Morsink confirmed the generic late-time singularity in non-spherical holes is null rather than the spacelike crushing type **[HIGH] S2**. Dafermos and Luk proved that for Kerr-like interior data the maximal Cauchy evolution extends across a piece of the Cauchy horizon as a manifold with continuous metric, so the $C^0$-inextendibility form of strong cosmic censorship is false, while the expectation that the extension fails at the level of the metric's derivatives (the curvature blow-up of mass inflation) stands **[HIGH] S1**. On the quantum side, Zilberman, Casals, Ori and Ottewill computed the renormalised stress-energy flux of a scalar field at the Kerr inner horizon and found it diverges there, in the Unruh state of an evaporating hole, independently of the classical instability **[HIGH] S1**.

**Tides for the record.** Outside the inner horizon the tidal acceleration across a body of length $\ell$ is of order $2 M \ell / r^3$, which at $r \sim M$ is one Earth gravity for $\ell = 2$ m when $M \gtrsim 3 \times 10^4$ solar masses. A supermassive hole passes the [HAZ-3](../../constraints/haz-3.md) bound at its horizons; the bound is irrelevant at the Cauchy horizon, where the hazard is the blueshifted flux, not the tide **[HIGH] S2**.

The headline number is the exponential: the energy density at the inner horizon grows as $e^{\kappa_- v}$ in the advanced time of the exterior, and $v \to \infty$ is exactly what an observer crossing the horizon experiences in finite proper time.

## What it costs

The Kerr interior asks for no exotic matter, which is why the bill carries no **B-neg**. What it asks for instead is the following.

**B-mass.** A rotating black hole of at least tens of thousands of solar masses, if the traveller is to survive the tides at the horizons, and no smaller than that even in principle for the crossing to be anything but instant death. The proposal offers no way to make one; it presupposes one at the departure point, and the destination is not chosen.

**B-caus.** Carter's closed timelike curves are built into the analytically extended manifold, in the region beyond the ring, and the over-spun case has total causality violation. The route runs through a spacetime that contains time machines whether or not one uses them.

The cost that is not on the bill because the vocabulary has no mark for it: the route itself does not exist in a real black hole. Mass inflation replaces the smooth inner horizon with a null singularity at Planckian curvature, and the region beyond it, the other universe of the analytic extension, is outside the domain of any classical prediction. The grade K3 records that the geometry is exact and its central claim, passage, is contested in print; the honest summary is that the geometry is K4 and the route is K0.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | Passage to another asymptotic region sends no signal faster than light within any one region; nothing that enters the horizon returns to our exterior, so there is no reversed-order signal for CAU-1 to bite. |
| CAU-2 | DODGES | Carter's closed timelike curves are eternal features of the analytic extension rather than curves that appear, so chronology protection, which concerns their formation, is not engaged; the extension containing them is in any case not the interior of a real collapse. |
| CAU-3 | N/A | The conversion needs a wormhole that can be maintained between two points of one universe; the Kerr passage is one-way into another asymptotic region and cannot be so used. |
| CAU-4 | N/A | No faster-than-light sector exists for which a preferred frame would be chosen. |
| CAU-5 | N/A | No entanglement enters. |
| ENE-1 | SATISFIES | Kerr is a vacuum solution; the perturbations that drive mass inflation are ordinary radiation obeying the energy conditions. |
| ENE-2 | SATISFIES | No time advance relative to flat exterior light is claimed; the passage leaves our asymptotic region rather than shortening a path within it. |
| ENE-3 | N/A | No negative energy is invoked. |
| ENE-4 | N/A | The pocket geometry is a warp-bubble device with no counterpart. |
| ENE-5 | N/A | Not a Natário-class warp metric. |
| ENE-6 | N/A | No negative energy is required, so the Casimir floor is not a comparison. |
| ENE-7 | DODGES | The passage does not return to the future null infinity it started from: it leaves our asymptotic region through the Cauchy horizon into another, so it is not a causal curve from past to future null infinity of one asymptotically flat end and the theorem's premise is not met. Mass inflation then seals the door anyway, so nothing here beats an outside route because there is no outside route to beat. |
| CON-1 | N/A | The horizons here are black-hole horizons, not the wall of a superluminal bubble; the one-way nature of the trip is scored under CAU-1. |
| CON-2 | N/A | Nothing is laid along a route; the black hole exists or it does not, and the destination is not selectable. |
| CON-3 | N/A | No Krasnikov-type pre-laid metric is involved. |
| STA-1 | N/A | The semiclassical instability of bubble walls is a different object; the instability that matters here is the Cauchy horizon's, scored under STA-3. |
| STA-2 | N/A | There is no throat held open by matter; the passage is a feature of the vacuum extension. |
| STA-3 | VIOLATES | The route runs through a Cauchy horizon at which the classical stress-energy (Poisson–Israel mass inflation) and the renormalised quantum stress-energy (Zilberman et al. 2022) both diverge; this is the same Cauchy-horizon divergence STA-3 records for wormhole time machines, and here there is no proposed cutoff. |
| HAZ-1 | N/A | No superluminal bubble sweeps up particles. |
| HAZ-2 | N/A | No bubble-wall Hawking bath; the hazard is the blueshifted infalling flux at the inner horizon, recorded under HAZ-3 and STA-3. |
| HAZ-3 | VIOLATES | The tidal bound is met at the horizons of a hole above about $3 \times 10^4$ solar masses, but at the inner horizon the traveller meets the exterior's entire future blueshifted by $e^{\kappa_- v}$ and a curvature that grows to Planckian scale, which no throat design can tune down. |
| LOR-1 | SATISFIES | The traveller free-falls on a timelike geodesic at $v < c$ throughout. |
| LOR-2 | N/A | No tachyonic matter. |
| LOR-3 | N/A | No wave-propagation claim. |
| LOR-4 | N/A | No Scharnhorst-type effect. |
| WRP-1 | N/A | Not a warp drive. |
| WRP-2 | N/A | The shell classification of warp spacetimes does not apply. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a black-hole interior. |
| MAN-1 | N/A | The other asymptotic region is a further four-dimensional region of the same solution, not an extra dimension; MAN-1's bulk shortcuts are not invoked. |

## Status of the argument

1968: Carter's global analysis establishes the extension, the geodesic completeness away from the ring and the closed timelike curves **[HIGH] S1**. No part of that mathematics has been challenged.

1968–1973: Penrose, then Simpson and Penrose, argue from the infinite blueshift that the Cauchy horizon must be unstable, so the analytic extension is not physical **[HIGH] S2**.

1982: Chandrasekhar and Hartle compute the divergence of the perturbations at the Reissner–Nordström Cauchy horizon **[HIGH] S2**.

1990: Poisson and Israel find mass inflation; the curvature grows to Planckian scale near the Cauchy horizon and classical general relativity ends there **[HIGH] S1**. Ori (1991) gives an exact mass-inflation solution and (1992) the structure of the singularity in the rotating case, arguing it is null and weak **[MED] S2**.

1998: Brady, Droz and Morsink confirm the late-time null singularity in non-spherical black holes **[HIGH] S2**.

2010: Hamilton and Avelino review the physics of the counter-streaming instability and note that in a real astronomical black hole one meets the inflation at the inner horizon, not a central singularity **[HIGH] S2**.

2017–2025: Dafermos and Luk prove the $C^0$-stability of the Kerr Cauchy horizon: the metric extends continuously across a piece of it, so the crude form of strong cosmic censorship fails, while the physically relevant curvature blow-up is expected to hold **[HIGH] S1**.

2020–2022: quantum stress-energy at the inner horizon is shown to diverge in Reissner–Nordström–de Sitter (Hollands, Wald and Zahn) and in Kerr (Zilberman, Casals, Ori and Ottewill), so the horizon is destroyed by quantum effects even where classical effects are tamed **[HIGH] S1**.

Where it stands: the passage through the ring exists in the exact solution and nowhere else. Whether an extended body could cross the weak null singularity that replaces the Cauchy horizon is contested (Ori for, the Planckian-curvature argument against), and what lies beyond is not described by any theory we have. No peer-reviewed paper proposes the Kerr interior as a usable route as of 2026-09-12.

## Sources

- **S1** Carter, B., "Global Structure of the Kerr Family of Gravitational Fields", Phys. Rev. 174, 1559–1571 (1968). doi:10.1103/PhysRev.174.1559. No arXiv version; abstract verified via INSPIRE, full text paywalled.
- **S1** Poisson, E. and Israel, W., "Internal structure of black holes", Phys. Rev. D 41, 1796–1809 (1990). doi:10.1103/PhysRevD.41.1796. Abstract verified via INSPIRE.
- **S1** Dafermos, M. and Luk, J., "The interior of dynamical vacuum black holes I: The $C^0$-stability of the Kerr Cauchy horizon", Ann. Math. 202, 309–630 (2025), arXiv:1710.01722. Abstract verified via INSPIRE.
- **S1** Zilberman, N., Casals, M., Ori, A. and Ottewill, A. C., "Quantum Fluxes at the Inner Horizon of a Spinning Black Hole", Phys. Rev. Lett. 129, 261102 (2022), arXiv:2203.08502. Abstract verified via INSPIRE.
- **S1** Hollands, S., Wald, R. M. and Zahn, J., "Quantum instability of the Cauchy horizon in Reissner–Nordström–deSitter spacetime", Class. Quantum Grav. 37, 115009 (2020), arXiv:1912.06047. Abstract verified via INSPIRE.
- **S2** Hamilton, A. J. S. and Avelino, P. P., "The physics of the relativistic counter-streaming instability that drives mass inflation inside black holes", Phys. Rep. 495, 1–32 (2010), arXiv:0811.1926. Abstract verified via INSPIRE.
- **S2** Simpson, M. and Penrose, R., "Internal instability in a Reissner–Nordström black hole", Int. J. Theor. Phys. 7, 183–197 (1973). doi:10.1007/BF00792069. Record verified via Crossref.
- **S2** Chandrasekhar, S. and Hartle, J. B., "On crossing the Cauchy horizon of a Reissner–Nordström black-hole", Proc. R. Soc. A 384, 301–315 (1982). doi:10.1098/rspa.1982.0160. Record verified via Crossref.
- **S2** Ori, A., "Inner structure of a charged black hole: An exact mass-inflation solution", Phys. Rev. Lett. 67, 789–792 (1991); "Structure of the singularity inside a realistic rotating black hole", Phys. Rev. Lett. 68, 2117–2120 (1992). Records verified via Crossref.
- **S2** Brady, P. R., Droz, S. and Morsink, S. M., "The late-time singularity inside non-spherical black holes", Phys. Rev. D 58, 084034 (1998), arXiv:gr-qc/9805008. Abstract verified via INSPIRE.
- **S2** Chandrasekhar, S., *The Mathematical Theory of Black Holes* (Oxford, 1983), ch. 6–7, for the Boyer–Lindquist form and the ring. Not verified online.
