# Visser's thin-shell wormholes (1989)

*Cut a hole in two copies of flat space, glue the edges together, and the exotic matter collapses to a sheet at the throat that a traveller need never touch.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

Visser, Phys. Rev. D 39, 3182 (1989), takes the traversable wormhole of [Morris and Thorne](morris-thorne-1988.md) and strips it to the bone. Remove an identical compact region from two copies of Minkowski space and identify the boundaries. The result is a spacetime that is flat everywhere except on the junction surface, which is the throat, and all the curvature and all the matter live there as a delta function. Two things follow that spherical symmetry had hidden. First, the throat need not be a sphere: any shape will do, and a cube with flat faces is the natural example. Second, on a flat face the surface stress-energy vanishes, so "it is possible for a traveller to traverse such a wormhole without passing through a region of exotic matter" **[HIGH] S1**. The traveller feels "no forces, tidal or otherwise, during the trip" and is "simply shunted into the other universe" **[HIGH] S1**.

The paper does not claim to have removed the exotic matter, and says so in the abstract: "As in previous analyses, the weak energy condition is violated in these traversable wormholes" **[HIGH] S1**. Its claim is that the exotic matter can be minimised and quarantined, pushed to the edges of a polyhedron, and that its total amount is set by geometry alone, independent of the size of the wormhole. It also supplies the simplest proof in the literature that a convex throat must violate the energy conditions: the throat acts as a perfect mirror into the other universe, so a convex throat defocuses light, and the focusing theorem says defocusing needs negative energy **[HIGH] S1**.

## Origin and lineage

Direct descendant of [Morris and Thorne 1988](morris-thorne-1988.md) and [Morris, Thorne and Yurtsever](morris-thorne-yurtsever-time-machine.md), whose exotic-matter conclusion it confirms and localises. The method is the Israel junction formalism of general relativity, as applied by Blau, Guendelman and Guth to false-vacuum bubbles (1987). The register carries the delta-function result as part of [STA-2](../../constraints/sta-2.md). Visser extended the construction to Schwarzschild-based thin-shell wormholes and to the "Roman ring" of several wormholes; Poisson and Visser (1995) analysed the linearised stability of spherically symmetric thin-shell wormholes in terms of the shell's equation of state **[HIGH] S2**; Lemos, Lobo and Oliveira (2003) used the same junction technique to match Morris–Thorne interiors to exterior vacuum **[HIGH] S2**. The 1989 examples became the standard exemplars of Visser's 1995 monograph.

## The mechanism

**Construction.** Take two copies of Minkowski space and remove from each a region $\Omega \times \mathbb{R}$, with $\Omega$ a compact three-dimensional region and $\mathbb{R}$ the time axis, then identify the two boundaries $\partial\Omega \times \mathbb{R}$. The spacetime is ultrastatic ($g_{00} = 1$), geodesically complete, has two asymptotically flat regions, and is Riemann-flat except possibly at the throat $\partial\Omega$ **[HIGH] S1**. Since the metric is continuous but not differentiable at the junction, the connection jumps and the Riemann tensor has a delta-function singularity whose strength is fixed by the second fundamental form. In adapted coordinates the extrinsic curvature on the throat is

$$K^i{}_j = \mathrm{diag}\!\left(0,\ \frac{1}{\rho_1},\ \frac{1}{\rho_2}\right),$$

with $\rho_1$, $\rho_2$ the principal radii of curvature of the two-surface $\partial\Omega$, positive for a convex surface **[HIGH] S1** (eq. 2.1). By the symmetry of the two flat regions the surface stress-energy tensor is

$$S^i{}_j = -\frac{1}{4\pi G}\left(K^i{}_j - \delta^i{}_j K^k{}_k\right),$$

and reading it as a surface energy density $\sigma$ and principal surface tensions $\vartheta_{1,2}$ gives

$$\sigma = -\frac{1}{4\pi G}\left(\frac{1}{\rho_1} + \frac{1}{\rho_2}\right), \qquad \vartheta_1 = -\frac{1}{4\pi G}\,\frac{1}{\rho_2}, \qquad \vartheta_2 = -\frac{1}{4\pi G}\,\frac{1}{\rho_1}$$

**[HIGH] S1** (eq. 2.4). A convex throat therefore carries negative surface energy density and negative surface tension. On a flat face $\rho_{1,2} = \infty$ and the stress-energy is zero.

**Why negative energy is forced.** Consider light rays hitting the throat. Because the two flat regions are identified along it, "the throat of the wormhole acts as a 'perfect mirror', except that the 'reflected' light is shunted into the other universe" **[HIGH] S1**. A convex portion defocuses the bundle, and the focusing theorem for null geodesics then implies that convex portions of the throat violate both the weak energy condition and the averaged weak energy condition **[HIGH] S1**. This is the [ENE-2](../../constraints/ene-2.md) argument in its most compact form.

**The cube.** Let $\Omega$ be a cube of edge $L$ with edges and corners rounded to radius $r \ll L$. The six faces carry nothing. Each of the twelve quarter-cylinder edges carries surface stress-energy $S^i{}_j = -(4\pi G r)^{-1}\,\mathrm{diag}(1, 1, 0)$, which integrates to an energy per unit length and a tension

$$\mu = T = -\frac{1}{8G}$$

independent of $r$, while the energy on each of the eight corner octants, $-r/4G$, vanishes as $r \to 0$ **[HIGH] S1** (§3). The sharp-cornered limit is therefore well behaved: all the matter sits on the twelve edges, with

$$\mu = T = -\frac{c^4}{8G} = -1.52 \times 10^{43}\ \text{J m}^{-1} = -\tfrac{1}{8}\,\frac{m_{\rm Planck}}{\ell_{\rm Planck}}$$

**[HIGH] S1**. Visser notes that the ratio of Planck mass to Planck length is classical (independent of $\hbar$), and that "energies and tensions of this magnitude (let alone sign) are well beyond current technological capabilities" **[HIGH] S1**. The stress-energy on an edge is exactly that of a classical Nambu–Goto string with negative tension; "No natural mechanism for generating negative string tension is currently known" **[HIGH] S1**.

**General polyhedra.** For an edge with bending angle $\varphi$ the energy per unit length is $\mu = T = -\varphi/(4\pi G)$; in terms of the deficit angle $\phi = -2\varphi$ seen going round the edge (which passes through both universes), $\mu = T = \phi/(8\pi G)$, the usual cosmic-string relation with the sign reversed. Convex edges have negative tension; concave edges positive **[HIGH] S1**. The edge length $L$ never enters, so the total exotic energy of a cubical wormhole is $12 L \times (-1.52 \times 10^{43}\ \text{J m}^{-1})$: about $-1.8 \times 10^{44}$ J, or $-2 \times 10^{27}$ kg, for a one-metre cube, scaling linearly with size. That linear scaling is the register's "the amount scales with throat radius" in [STA-2](../../constraints/sta-2.md).

The headline number is the edge tension, $-c^4/8G$, one eighth of a Planck mass per Planck length, for any size of cube.

## What it costs

**B-neg.** Negative surface energy density and negative tension on every convex part of the throat, violating the weak and the averaged weak energy conditions. The paper's proof by the focusing theorem is general and does not depend on the cube.

**B-mass.** The exotic tension is $c^4/8G \approx 1.5 \times 10^{43}$ J per metre of edge, the string tension of a negative-tension cosmic string, with a total of order $10^{27}$ kg of negative mass-energy per metre of cube. The [Casimir floor](../../constraints/ene-6.md) is some tens of orders below this per unit volume, and Visser reports failing to obtain the required stress-energy from the Casimir energy of a classical string **[HIGH] S1**.

**B-boot.** Nothing in the construction says how the two flat regions came to be identified. To be a route between two places in one universe the far mouth must be carried there at sublight speed, as for every wormhole.

**B-caus.** The construction is a Morris–Thorne-class wormhole and is subject to the [Morris, Thorne and Yurtsever](morris-thorne-yurtsever-time-machine.md) conversion; Visser lists "causal constraints on the construction of such wormholes" as an open question **[HIGH] S1**.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | A single static thin-shell wormhole has fixed mouths and no signal reverses in any frame; the mouths' frame is CAU-1's fixed-endpoint escape, and it fails once a mouth moves. |
| CAU-2 | VIOLATES | The wormhole is maintainable and traversable, hence convertible into a device producing closed timelike curves; chronology protection and a maintainable thin-shell wormhole cannot both hold. |
| CAU-3 | VIOLATES | The Morris–Thorne–Yurtsever round trip applies unchanged; the paper names the causal constraints as an open question rather than answering them. |
| CAU-4 | DODGES | No preferred frame is chosen by the construction; the fixed mouths supply one by accident. |
| CAU-5 | N/A | No entanglement enters a classical junction-condition spacetime. |
| ENE-1 | VIOLATES | Surface energy density $\sigma < 0$ on every convex part of the throat; the paper proves violation of the weak and averaged weak conditions by the focusing theorem. |
| ENE-2 | VIOLATES | The throat is a shortcut relative to flat exterior light; the paper's mirror argument is a direct instance of the theorem that a time advance needs defocusing and therefore negative energy. |
| ENE-3 | VIOLATES | The exotic matter is already a delta function, thinner than any quantum-inequality band, at a magnitude of a Planck mass per Planck length per edge; the inequalities' bound on magnitude times duration squared is exceeded by any static configuration of this kind. |
| ENE-4 | N/A | The pocket geometry is a warp-bubble device; the thin-shell cube already has its exotic matter at zero thickness. |
| ENE-5 | N/A | Not a Natário-class warp metric. |
| ENE-6 | VIOLATES | Visser tried to source the edge stress-energy from a Casimir energy and could not; the measured Casimir density is tens of orders of magnitude below the requirement. |
| ENE-7 | VIOLATES | Two copies of Minkowski space with a region cut out and the boundaries identified: an asymptotically flat spacetime with a handle, and a throat that is a shortcut relative to the outside. Friedman, Schleich and Witt say that curve must be deformable to the exterior under the ANEC, so the edge stress-energy must violate the achronal version, a stronger failure than the pointwise one Visser exhibits and one no quantum field is known to supply. |
| CON-1 | N/A | No warp-bubble horizon; the spacetime is ultrastatic and horizon-free. |
| CON-2 | SATISFIES | The construction identifies two regions and says nothing about how; as a route the far mouth is delivered sublight in advance, which is CON-2's demand accepted. |
| CON-3 | N/A | The Krasnikov tube is an L2 construction. |
| STA-1 | N/A | No superluminal bubble wall; the stability question Visser leaves open concerns perturbations of the shell (Poisson and Visser 1995), a different instability. |
| STA-2 | VIOLATES | This is the paper STA-2 cites for the delta-function layer: all exotic matter sits on the throat, the weak energy condition is violated there, and the total scales with throat size. |
| STA-3 | SILENT | The paper names causal constraints as open and does not compute the chronology-horizon divergence; the literature has not settled whether the Kim–Thorne cutoff saves the converted machine. |
| HAZ-1 | N/A | No superluminal bubble sweeps up particles. |
| HAZ-2 | N/A | No horizons, so no interior Hawking bath. |
| HAZ-3 | SATISFIES | Through a flat face the tidal forces are exactly zero, better than the one-g bound; the edges, where curvature is a delta function, are lethal and are to be avoided, which the design allows. |
| LOR-1 | SATISFIES | The traveller crosses a flat face at any subluminal speed with no acceleration. |
| LOR-2 | N/A | No tachyonic matter; the negative-tension string is not a tachyon. |
| LOR-3 | N/A | No wave-propagation claim is made. |
| LOR-4 | N/A | No Scharnhorst-type effect is involved. |
| WRP-1 | N/A | Not a warp drive. |
| WRP-2 | N/A | The shell classification of warp spacetimes concerns moving shells; this shell is static and is a throat, not a vehicle. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a wormhole. |
| MAN-1 | N/A | Both flat regions are ordinary four-dimensional space. |

## Status of the argument

1989: the paper appears as a Rapid Communication; the construction and the delta-function result are uncontested **[HIGH] S1**.

1995: Poisson and Visser analyse linearised spherically symmetric perturbations of thin-shell wormholes and map the stable region of the parameter space of surface pressure over surface density against throat radius over mass; stability is possible for suitable exotic equations of state **[HIGH] S2**. Ishak and Lake, and later Lobo and Crawford, extended the stability analysis **[HIGH] S2** (Lemos, Lobo and Oliveira §1.5).

1995: Visser's monograph makes the thin-shell examples canonical **[MED] S2**.

2003: Lemos, Lobo and Oliveira match Morris–Thorne interiors to vacuum exteriors with the same junction formalism and find the surface tangential pressure at the junction is strictly positive for asymptotically flat and anti-de Sitter exteriors **[HIGH] S2**.

2008: Visser uploads the 1989 paper to arXiv "to help researchers with limited library facilities" **[HIGH] S1**.

No peer-reviewed response disputes any result of the paper as of 2026-09-12. The open questions Visser listed, stability against perturbations, causal constraints and whether exotic matter is obtainable, have been answered for the first two (conditionally stable; convertible to a time machine) and remain open for the third.

## Sources

- **S1** Visser, M., "Traversable wormholes: Some simple examples", Phys. Rev. D 39, 3182–3184 (1989), arXiv:0809.0907. doi:10.1103/PhysRevD.39.3182. Read in full.
- **S1** Morris, M. S. and Thorne, K. S., Am. J. Phys. 56, 395–412 (1988). doi:10.1119/1.15620. The parent.
- **S1** Morris, M. S., Thorne, K. S. and Yurtsever, U., Phys. Rev. Lett. 61, 1446–1449 (1988). doi:10.1103/PhysRevLett.61.1446.
- **S2** Poisson, E. and Visser, M., "Thin-shell wormholes: Linearization stability", Phys. Rev. D 52, 7318 (1995), arXiv:gr-qc/9506083. Abstract verified via INSPIRE.
- **S2** Lemos, J. P. S., Lobo, F. S. N. and Oliveira, S. Q., Phys. Rev. D 68, 064004 (2003), arXiv:gr-qc/0302049. Read in full.
- **S2** Blau, S. K., Guendelman, E. I. and Guth, A. H., "The Dynamics of False Vacuum Bubbles", Phys. Rev. D 35, 1747 (1987). The junction formalism Visser applies; record via Visser's reference list.
- **S2** Visser, M., *Lorentzian Wormholes: From Einstein to Hawking* (AIP Press, 1995), ch. 15. Not verified online.
