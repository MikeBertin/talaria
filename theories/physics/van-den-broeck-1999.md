# Van Den Broeck 1999: the pocket geometry

*A femtometre bubble around a neck to a 200 m pocket cuts the warp bill from universe scale to a few solar masses.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

The quantum-inequality bill for an [Alcubierre](alcubierre-1994.md) bubble is enormous because the total negative energy scales as $R^2/\Delta$: a macroscopic bubble radius $R$ divided by a Planck-scale wall thickness $\Delta$. Van Den Broeck's claim is that the bubble radius and the size of the room inside it are different things. Multiply the spatial part of the Alcubierre metric by a conformal factor $B^2(r_s)$ that is huge inside a tiny radius and equal to one outside it, and you get a warp bubble whose outer surface is a few femtometres across while the flat region inside it, the "pocket", is two hundred metres in diameter. Ford and Pfenning's own formula then gives the wall a negative energy of about $-6 \times 10^{29}$ kg instead of $-6 \times 10^{62}$ kg; the transition region between pocket and bubble adds about $-1.4 \times 10^{30}$ kg of negative energy and $4.9 \times 10^{30}$ kg of positive energy; and the quantum inequality is checked and found to hold with a margin of more than an order of magnitude. The total negative mass is "of the order of a few solar masses", which "puts the warp drive in the mass scale of large [traversable wormholes](morris-thorne-1988.md)", and the new geometry keeps every advantage of the original: the pocket's centre moves on a timelike geodesic with proper time $t$, weightless and without time dilation.

The author is careful about what this does not show. It is "a proof of principle concerning the total energy required", not a realistic proposal: the energies are stellar, the densities are "unreasonably large", generating the negative energy at all remains an open question, and the geometry "still has structure with sizes only a few orders of magnitude above the Planck scale", which he suspects is generic for spacetimes that allow superluminal travel. The [tachyonic](tachyons-feinberg-1967.md) motion of part of the wall matter, pointed out by Krasnikov and Coule, is left untouched.

## Origin and lineage

Chris Van Den Broeck, Instituut voor Theoretische Fysica, Leuven, "A 'warp drive' with more reasonable total energy requirements", Class. Quantum Grav. 16, 3973 (1999), arXiv:gr-qc/9905084 (v5, September 1999) **[HIGH] S1**. It answers Ford and Pfenning's 1997 bill ([ENE-3](../../constraints/ene-3.md)) directly, exploiting their own remark that microscopic bubbles remain conceivable. It cites Krasnikov's tube ([Krasnikov 1998](krasnikov-tube.md)) as the earlier attempt to improve on Alcubierre and defers the tachyonic-matter problem to future work. Register entry [ENE-4](../../constraints/ene-4.md) is this paper. Downstream: Van Den Broeck's own unpublished STAIF talk of the same year reviews the objections and concludes superluminal bubbles are unlikely **[LOW] S1**; DeBenedictis and Ilijic (2018) apply Einstein-Cartan torsion to this geometry as well as to Alcubierre's, finding the spin density needed is higher but occupies a far smaller volume (see [warp drives in modified gravity](warp-drives-in-modified-gravity.md)) **[HIGH] S1**; Krasnikov (2003) argues more generally that large total negative energy is not a physically meaningful obstruction **[HIGH] S1**.

## The mechanism

Units $c = G = \hbar = 1$ except where stated. The metric is

$$ds^2 = -dt^2 + B^2(r_s)\Bigl[\bigl(dx - v_s(t) f(r_s)\,dt\bigr)^2 + dy^2 + dz^2\Bigr],$$

with $r_s$ and $f$ as in Alcubierre and $v_s$ taken constant for simplicity. $B$ is twice differentiable with

$$B(r_s) = 1 + \alpha \;\; (r_s < \tilde R), \qquad 1 < B(r_s) \leq 1 + \alpha \;\; (\tilde R \leq r_s < \tilde R + \tilde\Delta), \qquad B(r_s) = 1 \;\; (\tilde R + \tilde\Delta \leq r_s),$$

where $1 + \alpha$ is the factor by which space is blown up, and $f = 1$ for $r_s < R$, $0 < f \leq 1$ for $R \leq r_s < R + \Delta$, $f = 0$ beyond $R + \Delta$, with $R > \tilde R + \tilde\Delta$ **[HIGH] S1**. Four regions: I, the pocket ($r_s < \tilde R$, flat, large metric diameter); II, the transition where $B$ varies; III, ordinary Alcubierre interior with $B = 1$ and $f = 1$; IV, the bubble wall where $f$ varies. Spacetime is curved only in II and IV. The metric still has unit lapse and shift $N^i = (-v_s f, 0, 0)$, but the slices are no longer flat, so it lies outside the Natário class of [WRP-1](../../constraints/wrp-1.md). In the rubber-membrane picture a small Alcubierre bubble surrounds a neck leading to a pocket with large internal volume and a flat region in the middle; the centre $r_s = 0$ moves on a timelike geodesic with proper time $t$ **[HIGH] S1**.

**The numbers.** Every feature is required to be larger than the Planck length $L_P$, except the bubble wall, which Ford and Pfenning's inequality already pins at

$$\Delta \leq 10^2\, v_s\, L_P .$$

Van Den Broeck chooses

$$\alpha = 10^{17}, \qquad \tilde\Delta = 10^{-15}\ \mathrm{m}, \qquad \tilde R = 10^{-15}\ \mathrm{m}, \qquad R = 3 \times 10^{-15}\ \mathrm{m},$$

so that the outer surface of the bubble has the area of a sphere of radius about $3 \times 10^{-15}$ m while the inner diameter of the pocket is $2(1 + \alpha)\tilde R = 200$ m **[HIGH] S1**. Region IV carries the unmodified Alcubierre metric, so Ford and Pfenning's formula applies as it stands:

$$E_{\mathrm{IV}} = -\frac{v_s^2}{12}\left[\frac{(R + \Delta/2)^2}{\Delta} + \frac{\Delta}{12}\right] \;\simeq\; -6.3 \times 10^{29}\, v_s\ \mathrm{kg}$$

for this $R$ and the wall bound above **[HIGH] S1**. The value of $R$ is roughly the largest that keeps $|E_{\mathrm{IV}}|$ below a solar mass at $v_s \simeq 1$.

In region II, in the orthonormal frame $e_{\hat 0} = \partial_t + v_s\partial_x$, $e_{\hat i} = B^{-1}\partial_i$ (the Eulerian observers swept along with the drive), the energy density at $t = 0$ with $r_s = r$ is

$$T^{\hat 0 \hat 0} = \frac{1}{8\pi}\left[\frac{1}{B^4}(\partial_r B)^2 - \frac{2}{B^3}\,\partial_r^2 B - \frac{4}{B^3}\,\frac{1}{r}\,\partial_r B\right].$$

The second-derivative term is the dangerous one: obvious choices for $B$ (a sine, a low-order polynomial) give curvature radii far below the Planck length near $r = \tilde R + \tilde\Delta$. Van Den Broeck therefore takes

$$B = \alpha\bigl(-(n-1)w^n + n w^{n-1}\bigr) + 1, \qquad w = \frac{\tilde R + \tilde\Delta - r}{\tilde\Delta},$$

with many vanishing derivatives at $w = 0$, and $n = 80$, the value that maximises the minimum curvature radius. Then $T^{\hat 0\hat 0}$ is negative for $0 \leq w \leq 0.981$ and positive beyond, with a negative peak at $w = 0.349$ of $-4.9 \times 10^2/\tilde\Delta^2$ **[HIGH] S1**. Integrating over the Eulerian observers' slice $t = 0$ with $\sqrt{g_S} = B^3$,

$$E_{\mathrm{II},-} = 4\pi\tilde\Delta\int_0^{0.981} dw\,(2 - w)^2 B(w)^3\,\tilde T^{\hat 0\hat 0}(w) = -1.4 \times 10^{30}\ \mathrm{kg}, \qquad E_{\mathrm{II},+} = 4.9 \times 10^{30}\ \mathrm{kg},$$

with $c^2/G$ reinstated **[HIGH] S1**. The total negative energy is therefore about $-2.0 \times 10^{30}$ kg, one solar mass, against Ford and Pfenning's $-6.2 \times 10^{62}$ kg for a hundred-metre Alcubierre bubble. These energies do not vary much with $\alpha$ as long as $\alpha$ is large, $\tilde R = \tilde\Delta$ and $\alpha\tilde R = 100$ m.

**The quantum inequality check.** In the frame where region II is $g = \mathrm{diag}(-1, B^2, B^2, B^2)$, the largest Riemann component is

$$R_{\hat 1\hat 2\hat 1\hat 2} = \frac{1}{B^4}(\partial_r B)^2 - \frac{1}{B^3}\partial_r^2 B - \frac{1}{B^3}\frac{1}{r}\partial_r B,$$

largest in magnitude at $w = 0.348$, giving a minimum curvature radius

$$r_{c,\min} = \frac{\tilde\Delta}{72.5} = 1.4 \times 10^{-34}\ \mathrm{m},$$

about ten Planck lengths **[HIGH] S1**. With sampling time $\tau_0 = 0.1\, r_{c,\min}$, over which $T^{\hat 0\hat 0}$ is nearly constant, the Ford and Roman inequality reduces to $T^{\hat 0\hat 0} \geq -3/(32\pi^2\tau_0^4)$; the left side is about $-6.6 \times 10^{93}$ kg per cubic metre at its most negative and the right side about $-9.2 \times 10^{94}$ kg per cubic metre, so the inequality "is amply satisfied" **[HIGH] S1**.

**What the numbers mean.** The Planck-thin wall is unchanged; what changed is how much of it there is, because its area went from $(100\ \mathrm{m})^2$ to $(3\ \mathrm{fm})^2$. The price is a second Planck-scale structure: the neck has a curvature radius of ten Planck lengths and an energy density of $10^{93}$ kg per cubic metre, and the geometry is now a bubble around a throat, which is why the author places it in the mass bracket of a large traversable wormhole while noting that, unlike a wormhole, it has trivial topology.

## What it costs

**B-neg.** The wall (region IV) is Alcubierre's and its energy density is negative throughout; the neck (region II) has a negative peak of $-4.9 \times 10^2/\tilde\Delta^2$ over most of its width. The paper removes none of this, only its quantity ([ENE-1](../../constraints/ene-1.md), [ENE-4](../../constraints/ene-4.md)).

**B-mass.** About $-2 \times 10^{30}$ kg of negative energy and $4.9 \times 10^{30}$ kg of positive energy, a solar mass and a few solar masses respectively, at densities of order $10^{93}$ kg per cubic metre, with structure ten Planck lengths across. The author's own verdict is that the total energies are "of stellar magnitude" and the densities "unreasonably large" **[HIGH] S1**.

**B-boot.** The outer bubble is an Alcubierre bubble and inherits the horizon and the spacelike leading edge for $v_s > 1$ ([CON-1](../../constraints/con-1.md), [CON-2](../../constraints/con-2.md)). The paper acknowledges that part of the energy moves tachyonically and leaves it for future work.

**B-caus.** Two pockets, one boosted, give closed causal loops exactly as two Alcubierre bubbles do, since the exterior geometry is Alcubierre's ([CAU-3](../../constraints/cau-3.md)).

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | The pocket is carried between flat-space points faster than light through that space by an ordinary Alcubierre exterior, and nothing picks a frame; a boosted second pocket is a message to the past. |
| CAU-2 | SILENT | Not discussed; the two-pocket time machine's semiclassical fate is unsettled. |
| CAU-3 | VIOLATES | The exterior is Alcubierre's, so Everett's two-bubble construction applies verbatim. |
| CAU-4 | SILENT | No preferred frame is proposed or discussed. |
| CAU-5 | N/A | No quantum signalling. |
| ENE-1 | VIOLATES | The paper states the geometry violates the strong, dominant and "especially" the weak energy condition, and computes negative Eulerian energy density in both the wall and the neck. |
| ENE-2 | VIOLATES | The paper opens with Olum's definition of effective superluminal travel and says such spacetimes "will violate at least one of the energy conditions"; this one does, in two places. |
| ENE-3 | DODGES | The wall bound $\Delta \leq 10^2 v_s L_P$ is accepted and the Ford and Roman inequality is verified in the neck with a ten-fold margin; the $-6.2 \times 10^{62}$ kg figure is evaded because it assumed the bubble radius equals the room inside, and the pocket breaks that assumption. The register lists this as ENE-3's escape hatch. |
| ENE-4 | SATISFIES | This paper is the entry: about $-2 \times 10^{30}$ kg negative, $4.9 \times 10^{30}$ kg positive, wall within about a hundred Planck lengths, minimum curvature radius about ten Planck lengths, all verified against the text. |
| ENE-5 | VIOLATES | The slices are not flat, so the geometry is outside the Natário class the theorem is stated for; but region IV is literally an Alcubierre wall, for which Santiago, Schuster and Visser prove NEC violation, so the theorem bites on the part of the geometry that is in the class. |
| ENE-6 | SILENT | The Casimir effect is named as the reason the WEC may be violated quantum mechanically and never priced; the neck density of $10^{93}$ kg per cubic metre is about a hundred orders of magnitude above the Casimir floor and the paper does not address the gap beyond saying that generating enough negative energy remains a question. |
| ENE-7 | N/A | The pocket is a warp bubble with trivial topology; the theorem has no handle to deform. The paper's superluminal bill is charged under ENE-2, which ENE-7 restates for wormholes. |
| CON-1 | VIOLATES | The outer bubble is an Alcubierre bubble with $v_s$ constant and, for $v_s > 1$, the same horizon at the wall; the crew in the pocket are further from the wall in proper distance than in the original, not closer. |
| CON-2 | VIOLATES | The paper acknowledges that part of the energy in the bubble is moving tachyonically (citing Krasnikov and Coule) and explicitly leaves the problem for future work; the pocket must therefore be laid along the route or sourced by tachyons. |
| CON-3 | N/A | Not a tube; the paper cites the Krasnikov tube as a separate attempt at the causal problem and does not adopt it. |
| STA-1 | VIOLATES | The wall is an Alcubierre wall with a horizon for $v_s > 1$, so Hiscock's profile-independent divergence and the front-wall growth of Finazzi, Liberati and Barceló apply; the neck adds a second Planck-curvature region whose stability is not analysed. |
| STA-2 | N/A | Trivial topology, no throat in the wormhole sense, as the paper stresses; the "neck" is a conformal blow-up, not a handle. |
| STA-3 | SILENT | Only the two-pocket time machine would raise a chronology horizon; not constructed or analysed. |
| HAZ-1 | SILENT | The outer bubble sweeps a femtometre-scale cross-section, so far fewer particles are caught than by a hundred-metre bubble, but any that are caught are time locked and released on deceleration as McMonigal, Lewis and O'Byrne describe; not computed for this geometry. |
| HAZ-2 | SILENT | The wall is Planck-thin so the horizon temperature of Finazzi, Liberati and Barceló would be Planckian, but the crew sit deep inside a pocket where $B = 1 + 10^{17}$; how the flux reaches them through the neck has not been computed. |
| HAZ-3 | N/A | The tidal bound is for traversing a wormhole throat; the ship does not traverse the neck, it sits in the flat pocket, and the paper does not describe how it gets there. |
| LOR-1 | SATISFIES | The pocket centre moves on a timelike geodesic with proper time $t$; nothing is accelerated to $c$. |
| LOR-2 | VIOLATES | The paper states that part of the energy in the region moves tachyonically, which LOR-2 says is not a courier; this is the problem it defers. |
| LOR-3 | N/A | No medium, no group velocity. |
| LOR-4 | N/A | Not relevant. |
| WRP-1 | SATISFIES | Unit lapse and Alcubierre shift, with a conformally flat rather than flat slice; the paper says it "can still be written in the 3 + 1 formalism" and the register's ENE-4 entry treats it as a warp drive. The departure from strictly flat slices is noted in the text above. |
| WRP-2 | SATISFIES | A superluminal shell of exotic material moving inertially, with the shell made microscopic; nothing in the classification is contested and the exotic matter is admitted. |
| WRP-3 | SATISFIES | No positive-energy claim; the paper reduces the negative energy and says so. |
| MAN-1 | N/A | Four dimensions, trivial topology, which the paper emphasises as the advantage over wormholes. |

## Status of the argument

- **1999.** The paper. Negative energy cut from $10^{62}$ kg to about $10^{30}$ kg; quantum inequality satisfied; Planck-scale structure and stellar masses remain **[HIGH] S1**. Van Den Broeck's STAIF summary of the same year reviews the objections and calls superluminal bubbles unlikely within general relativity and quantum field theory **[LOW] S1**.
- **2003.** Krasnikov, Phys. Rev. D 67, 104013: the total negative energy is argued to be "physically meaningless in some relevant situations" and large densities need not imply large totals, which if accepted makes the pocket's remaining bill less decisive than it looks, and the quantum inequality bound on the wall less decisive too **[HIGH] S1**. No published reply found.
- **2018.** DeBenedictis and Ilijic apply Einstein-Cartan spin-torsion to this geometry with $P = 3$ fm, $\tilde P = 1$ fm, $\alpha = 5$: the weak and null conditions can be satisfied at a spin density of about $1.9 \times 10^{35}$ kg per femtometre per second, of order $10^{84}$ spin-one particles per cubic metre, in a much smaller volume than for the Alcubierre case **[HIGH] S1**.
- **2022.** Santiago, Schuster and Visser prove NEC violation for the Natário class; the pocket's wall is in that class **[HIGH] S1**.
- **2026-09-12.** The register's ENE-4 entry and this dossier agree on every number. No peer-reviewed response disputes the calculation. What has never been addressed is the assembly: how a hundred-metre ship enters a two-hundred-metre pocket whose only connection to the outside is a femtometre neck. The paper's answer is implicit, that the pocket is inflated around the ship at rest from flat space, and that step has not been analysed dynamically.

## Sources

- **S1** Van Den Broeck, C., "A 'warp drive' with more reasonable total energy requirements", Class. Quantum Grav. 16, 3973–3979 (1999), arXiv:gr-qc/9905084. Read in full.
- **S1** Van Den Broeck, C., "On the (im)possibility of warp bubbles", arXiv:gr-qc/9906050 (1999), unpublished STAIF-2000 talk summary. Abstract read.
- **S1** Pfenning, M. J. and Ford, L. H., "The unphysical nature of 'warp drive'", Class. Quantum Grav. 14, 1743–1751 (1997), arXiv:gr-qc/9702026. Abstract read; formula as reproduced in Van Den Broeck.
- **S1** Ford, L. H. and Roman, T. A., Phys. Rev. D 51, 4277 (1995), arXiv:gr-qc/9410043; Phys. Rev. D 53, 5496 (1996); Phys. Rev. D 55, 2082 (1997), arXiv:gr-qc/9607003. The quantum inequalities, via the register, ENE-3.
- **S1** Alcubierre, M., Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. Read in full.
- **S1** Krasnikov, S. V., Phys. Rev. D 57, 4760 (1998), arXiv:gr-qc/9511068. Read in full.
- **S1** Krasnikov, S., "The quantum inequalities do not forbid spacetime shortcuts", Phys. Rev. D 67, 104013 (2003), arXiv:gr-qc/0207057. Abstract read.
- **S1** Coule, D. H., "No warp drive", Class. Quantum Grav. 15, 2523 (1998). Via the register, CON-2.
- **S1** Olum, K. D., Phys. Rev. Lett. 81, 3567 (1998), arXiv:gr-qc/9805003. Via the register, ENE-2.
- **S1** DeBenedictis, A. and Ilijic, S., Class. Quantum Grav. 35, 215001 (2018), arXiv:1807.09745. Read in full.
- **S1** Santiago, J., Schuster, S. and Visser, M., Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079. Read in part.
- **S1** Everett, A. E., Phys. Rev. D 53, 7365 (1996). Via INSPIRE and the register, CAU-3.
- **S2** Visser, M., *Lorentzian Wormholes: from Einstein to Hawking* (AIP, 1995). Cited by Van Den Broeck for the wormhole mass bracket; not read directly.
