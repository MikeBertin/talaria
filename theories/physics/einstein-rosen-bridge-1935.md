# Einstein–Rosen bridge (1935)

*The two-sheeted "bridge" in the Schwarzschild solution: the first wormhole in the literature, and one that no signal can cross.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K4 · **Bill:** B-none · **Last reviewed:** 2026-09-12

## The claim

Einstein and Rosen were not proposing a shortcut. They were trying to build elementary particles out of pure field, with no singularities anywhere, using only the metric of general relativity and the Maxwell potential. Their move was to take the Schwarzschild solution, change the radial coordinate so that the horizon at $r = 2m$ becomes the neck $u = 0$ of a surface with two identical sheets, and read the neck as the particle: physical space is "a space of two identical sheets, a particle being represented by a 'bridge' connecting these sheets" **[HIGH] S1**. A many-particle world would be two sheets joined by many bridges, and because nothing is singular the field equations would fix both the field and the motion of the particles.

Stated as generously as possible, the bridge is the simplest possible wormhole: two asymptotically flat regions joined at a throat of finite area, obtained from the vacuum Einstein equations with no extra ingredients, no exotic matter and no new fields. Every later wormhole in this catalogue, from [Wheeler's geons and foam](wheeler-geons-and-foam.md) to [Morris and Thorne 1988](morris-thorne-1988.md) to [ER = EPR](er-equals-epr.md), descends from this picture. What the bridge does not claim, and never did, is that anything can get from one sheet to the other. That question was settled by Fuller and Wheeler in 1962, and the answer is no.

The bridge belongs at the top of the L3 list because it is the object everyone else modifies, and because its failure mode, the throat pinching off before light can cross, is the cleanest statement of what a wormhole must overcome to be a shortcut.

## Origin and lineage

Flamm noticed in 1916 that the spatial geometry of the Schwarzschild solution embeds as a surface that flares out on both sides of the throat. Einstein and Rosen, Phys. Rev. 48, 73 (1935), made the two-sheeted reading explicit and gave it a physical role as a particle model **[HIGH] S1**. Kruskal (1960) and Szekeres (1960) gave the maximal analytic extension of Schwarzschild, in which the bridge is the $t = 0$ slice and its time evolution can be read off. Fuller and Wheeler, Phys. Rev. 128, 919 (1962), asked whether a signal through the bridge could outpace one going round, and showed it cannot **[HIGH] S1**. Wheeler's group renamed the object a "wormhole" (see [Wheeler's geons and foam](wheeler-geons-and-foam.md)). Morris and Thorne opened their 1988 paper by listing the objections to using Schwarzschild wormholes for travel, and built their traversable class to answer them. Maldacena and Susskind's [ER = EPR](er-equals-epr.md) conjecture returns to the non-traversable bridge as the geometric face of entanglement. In fiction the name survives in *Thor* (2011), where the Bifrost is called an Einstein–Rosen bridge on screen; the fiction catalogue carries that entry.

Lineage: [The wormhole goes to television](../../lineage/morris-thorne-gate-fiction.md); [Physicists in the writers' room](../../lineage/physicists-in-the-writers-room.md); [The paper fold](../../lineage/the-paper-fold.md).

## The mechanism

Start from the Schwarzschild metric in units $G = c = 1$,

$$ds^2 = -\left(1 - \frac{2m}{r}\right)dt^2 + \left(1 - \frac{2m}{r}\right)^{-1}dr^2 + r^2\,d\Omega^2 .$$

Einstein and Rosen substitute $u^2 = r - 2m$, so that $u$ runs from $-\infty$ to $+\infty$ while $r$ runs from $\infty$ down to $2m$ and back out to $\infty$. The metric becomes

$$ds^2 = -\frac{u^2}{u^2 + 2m}\,dt^2 + 4\left(u^2 + 2m\right)du^2 + \left(u^2 + 2m\right)^2 d\Omega^2 ,$$

which is regular in $u$ everywhere except that $g_{tt}$ vanishes at $u = 0$. The two half-lines $u > 0$ and $u < 0$ are the two sheets; $u = 0$ is the bridge, a sphere of area $4\pi(2m)^2$. To avoid the vanishing of $g_{tt}$ being read as a singularity of the equations, Einstein and Rosen "modify slightly the gravitational equations", multiplying through by a power of the determinant so that they admit regular solutions with this structure **[HIGH] S1**. The charged version uses the Reissner–Nordström solution the same way, and the most natural elementary charged particle in that reading has zero mass **[HIGH] S1**.

The modern reading uses Kruskal coordinates, in which the full manifold has two exterior regions and two interior regions and the bridge is the spacelike slice through the bifurcation sphere. That slice is instantaneous. Follow the geometry forward in Kruskal time: the throat has zero area at the past singularity, opens to its maximum radius $2m$ at $T = 0$, and closes again at the future singularity. A radial light ray that enters the throat region from one exterior never reaches the other exterior; it hits $r = 0$ **[HIGH] S1** (Fuller and Wheeler's abstract: "The (Schwarzschild) throat of the wormhole pinches off in a finite time and traps the signal in a region of infinite curvature"). The longest proper time anything can spend inside $r < 2m$ before the singularity, the time available to cross, is $\pi m$, about $1.5 \times 10^{-5}$ s for a solar mass and about $1.6$ s for $10^5$ solar masses, and even that is not enough because the far exit is never in the causal future of the entrance **[HIGH] S2** (the standard Kruskal analysis; Misner, Thorne and Wheeler §31.6).

Fuller and Wheeler frame the result in terms of "catastrophic" regions, points every timelike geodesic through which necessarily runs into infinite curvature. The two exteriors are non-catastrophic, and "no signal can ever be sent from one to the other" **[HIGH] S1**. This is the focusing theorem at work: a bundle of light rays converging into a throat surrounded by vacuum, which obeys the null energy condition, keeps converging. The register entry [ENE-2](../../constraints/ene-2.md) is the general version of the same fact.

The headline number for this dossier is therefore zero. Zero signals cross, at any mass, for any choice of coordinates.

## What it costs

Nothing, and that is the point. The Einstein–Rosen bridge is a vacuum solution: no negative energy, no new fields, no pre-laid route, no closed timelike curves. The bill is **B-none**, which in this catalogue means that nothing faster than light sits here. The bridge is the control case for L3: a wormhole with an honest energy budget is a wormhole you cannot use.

To turn it into a shortcut you have to hold the throat open against the focusing of null rays, and [Morris and Thorne 1988](morris-thorne-1988.md) show that this requires matter whose radial tension exceeds its energy density, which is the [STA-2](../../constraints/sta-2.md) bill. Every cost on this page's descendants is the cost of undoing the pinch-off.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | No signal crosses the bridge (Fuller and Wheeler), so there is no faster-than-light signal to reverse in any frame. |
| CAU-2 | SATISFIES | The maximal extension contains no closed timelike curves; chronology protection has nothing to protect against. |
| CAU-3 | SATISFIES | The conversion to a time machine needs a wormhole that can be maintained and traversed; this one pinches off before one crossing, so the assembly step never starts. |
| CAU-4 | N/A | No faster-than-light sector exists for which a preferred frame would need to be chosen. |
| CAU-5 | N/A | No entanglement or measurement enters the 1935 construction; the entanglement reading is scored on the ER = EPR page. |
| ENE-1 | SATISFIES | Vacuum (or an electromagnetic field in the charged case) obeys the null, weak and averaged null conditions everywhere. |
| ENE-2 | SATISFIES | Under the null energy condition there is no time advance through the throat; the pinch-off is the concrete instance of the Olum and Gao–Wald result. |
| ENE-3 | N/A | No negative energy is invoked, so the quantum inequalities have nothing to bound. |
| ENE-4 | N/A | The pocket geometry is a warp-bubble device and does not bear on a vacuum wormhole. |
| ENE-5 | N/A | The Natário warp class is a different object; the bridge is not a warp metric. |
| ENE-6 | N/A | No negative energy is required, so the Casimir floor is not a comparison. |
| ENE-7 | SATISFIES | The bridge is the object the theorem describes: an asymptotically flat vacuum spacetime with a handle, and vacuum obeys the ANEC on every null geodesic. Its verdict is the theorem's: no causal curve from one exterior's past infinity reaches the other exterior, the throat pinches off first, and nothing beats the outside route. |
| CON-1 | N/A | Horizons at a warp-bubble wall are not this geometry; the Schwarzschild horizons are scored under causality above. |
| CON-2 | N/A | Nothing is laid along a route; the bridge is a feature of a single vacuum solution, not an engineered path. |
| CON-3 | N/A | The Krasnikov tube is an L2 construction with no counterpart here. |
| STA-1 | N/A | The semiclassical instability concerns superluminal bubble walls; the bridge has no wall and moves nothing. |
| STA-2 | SATISFIES | The throat has no exotic matter and, as STA-2 predicts for such a throat, it is not traversable: it pinches off. |
| STA-3 | N/A | No chronology horizon forms because no time machine can be built from a bridge that cannot be crossed. |
| HAZ-1 | N/A | Particle sweep-up is a superluminal bubble effect with no analogue here. |
| HAZ-2 | N/A | The interior Hawking bath of a warp bubble has no counterpart in a vacuum throat that is not traversed. |
| HAZ-3 | N/A | The tidal bound prices a traversable throat; this throat is not traversable at any mass, so there is nothing to price (for the record a throat of $m \gtrsim 3 \times 10^4$ solar masses would pass the one-g bound). |
| LOR-1 | SATISFIES | Nothing is accelerated to or past $c$; all motion is timelike or null within the manifold. |
| LOR-2 | N/A | No tachyonic matter appears. |
| LOR-3 | N/A | No wave-propagation claim is made. |
| LOR-4 | N/A | No Scharnhorst-type vacuum modification is involved. |
| WRP-1 | N/A | Not a warp drive; the metric has no shift vector carrying a ship. |
| WRP-2 | N/A | The shell classification of warp spacetimes does not apply to a vacuum wormhole. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a wormhole. |
| MAN-1 | N/A | Both sheets are ordinary four-dimensional regions of one solution; no extra dimension or hyperspace is invoked. |

## Status of the argument

1935: Einstein and Rosen propose the bridge as a particle model; the particle programme itself was abandoned, and Wheeler's later "mass without mass" geons took a different route to the same aim **[HIGH] S1**.

1960: Kruskal and Szekeres give the maximal extension, which makes the dynamics of the bridge readable **[HIGH] S2**.

1962: Fuller and Wheeler prove that causality is preserved because the throat pinches off in finite time and traps any signal **[HIGH] S1**. There has been no peer-reviewed challenge to that result as of 2026-09-12; it is now a textbook exercise.

1988: Morris and Thorne list the objections to Schwarzschild wormholes for travel (horizons, the pinch-off, tidal forces at small masses) and construct a class that avoids them at the price of exotic matter **[HIGH] S1** (abstract, Am. J. Phys. 56, 395).

2013: Maldacena and Susskind reinterpret the non-traversable bridge as the geometry of an entangled pair and make its non-traversability a burden their conjecture must carry; the [ER = EPR](er-equals-epr.md) dossier scores that reading **[HIGH] S1**.

2017 onward: Gao, Jafferis and Wall render an AdS Einstein–Rosen bridge slightly traversable with a two-boundary coupling, without making it a shortcut relative to the outside; see [Gao, Jafferis and Wall 2017](gao-jafferis-wall-2017.md) **[HIGH] S1**.

The 1935 object itself has no live argument. Its standing is that of an exact solution whose non-traversability is proven.

## Sources

- **S1** Einstein, A. and Rosen, N., "The Particle Problem in the General Theory of Relativity", Phys. Rev. 48, 73–77 (1935). doi:10.1103/PhysRev.48.73. No arXiv version; abstract verified via Crossref and INSPIRE.
- **S1** Fuller, R. W. and Wheeler, J. A., "Causality and Multiply Connected Space-Time", Phys. Rev. 128, 919–929 (1962). doi:10.1103/PhysRev.128.919. No arXiv version; abstract verified via INSPIRE.
- **S1** Kruskal, M. D., "Maximal Extension of Schwarzschild Metric", Phys. Rev. 119, 1743–1745 (1960). doi:10.1103/PhysRev.119.1743. Record verified via Crossref.
- **S1** Morris, M. S. and Thorne, K. S., "Wormholes in spacetime and their use for interstellar travel: A tool for teaching general relativity", Am. J. Phys. 56, 395–412 (1988). doi:10.1119/1.15620. Abstract verified; full text paywalled.
- **S2** Misner, C. W., Thorne, K. S. and Wheeler, J. A., *Gravitation* (Freeman, 1973), §31.6, the dynamics of the Schwarzschild throat. Not verified online.
- **S2** Lobo, F. S. N., "Exotic solutions in General Relativity: Traversable wormholes and 'warp drive' spacetimes", arXiv:0710.4474 (2007), §I, for the history from Flamm through Fuller and Wheeler.
- **S2** Visser, M., *Lorentzian Wormholes: From Einstein to Hawking* (AIP Press, 1995), ch. 5. Not verified online.
