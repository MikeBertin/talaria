# Morris–Thorne traversable wormhole (1988)

*The metric that made wormholes a subject: a horizon-free throat held open by matter whose tension exceeds its energy density.*

**Kind:** physics · **Loophole:** L3 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

Morris and Thorne, Am. J. Phys. 56, 395 (1988), reverse the usual order of general relativity. Instead of choosing matter and solving for the geometry, they write down the geometry a traveller would want, a static spherically symmetric tunnel between two asymptotically flat regions with no horizon and tolerable tides, and let the Einstein equations tell them what matter would have to thread it. The answer is a "new class of solutions of the Einstein field equations ... which describe wormholes that, in principle, could be traversed by human beings" **[HIGH] S1**. The design brief was Carl Sagan's *Contact*, which Thorne was asked to make consistent with the laws of physics, and the paper is framed as a tool for teaching relativity.

In its strongest form the claim is this. Nothing in the Einstein equations forbids a throat that stays open. The only thing forbidding it is the matter: at the throat the material must carry a radial tension $\tau_0$ larger than its own energy density $\rho_0 c^2$, which "no known material" does and which "would violate all the 'energy conditions' that underlie some deeply cherished theorems in general relativity" **[HIGH] S1**. But quantum field theory already violates those conditions in small ways (the Casimir effect), so "it is not possible today to rule out firmly the existence of such material" **[HIGH] S1**. Given that material, the paper shows that the throat can be made large enough and the redshift gentle enough that a human passes through in comfort, in a time of order a year or much less by both the traveller's clock and the stations' clocks, and arrives at a place light would have taken far longer to reach through ordinary space. The paper does not claim the material exists, does not claim any mechanism for building the wormhole, and explicitly leaves the engineering to an "absurdly advanced civilization" **[HIGH] S2**.

## Origin and lineage

The ancestor is the [Einstein–Rosen bridge](einstein-rosen-bridge-1935.md); Morris and Thorne open with the list of reasons a Schwarzschild wormhole cannot be used (horizons, the pinch-off, lethal tides at small mass) **[HIGH] S1**. Their proposed source for a wormhole is [Wheeler's quantum foam](wheeler-geons-and-foam.md), pulled to macroscopic size. Earlier exact solutions of the same class had appeared unnoticed: Ellis's "drainhole" (1973), Bronnikov (1973), Kodama (1978) and Clément (1981) **[HIGH] S2** (Lemos, Lobo and Oliveira §1.3). Within months the same authors with Yurtsever showed the wormhole is a time machine with an assembly step, the [Morris, Thorne and Yurtsever time machine](morris-thorne-yurtsever-time-machine.md), which became the register's [CAU-3](../../constraints/cau-3.md). Visser dropped spherical symmetry and confined the exotic matter to a thin shell, [Visser's thin-shell wormholes](visser-thin-shell-1989.md). Visser's 1995 monograph and Lobo's 2007 review are the standard secondary accounts. The direct fictional descendants are *Contact* itself and the wormhole of *Interstellar*, both with Thorne as consultant.

Lineage: [The wormhole goes to television](../../lineage/morris-thorne-gate-fiction.md); [Physicists in the writers' room](../../lineage/physicists-in-the-writers-room.md); [Sagan asks Thorne for a legal wormhole](../../lineage/sagan-thorne-contact-interstellar.md); [The paper fold](../../lineage/the-paper-fold.md).

## The mechanism

**The metric.** With $G = c = 1$ where convenient, the Morris–Thorne line element is

$$ds^2 = -e^{2\Phi(r)}\,dt^2 + \frac{dr^2}{1 - b(r)/r} + r^2\left(d\theta^2 + \sin^2\theta\,d\phi^2\right) ,$$

where $\Phi(r)$ is the redshift function and $b(r)$ the shape function **[HIGH] S2** (Lemos, Lobo and Oliveira eq. 1; Lobo 2007 eq. 1). The radial coordinate runs from the throat $r_0$, where $b(r_0) = r_0$, outward to infinity in each of two copies joined at the throat; the proper radial distance $l(r) = \pm\int_{r_0}^{r} dr\,(1 - b/r)^{-1/2}$ is finite everywhere and covers both sides. For a horizon-free throat $\Phi$ must be finite everywhere.

**Flaring out.** Embedding a $t = \text{const}$, $\theta = \pi/2$ slice in Euclidean space gives $dz/dr = \pm(r/b - 1)^{-1/2}$, and the throat is a minimum of $r$ so the surface must flare outward there:

$$\frac{d^2 r}{dz^2} = \frac{b - b' r}{2 b^2} > 0 \quad \Longrightarrow \quad b'(r_0) < 1 .$$

This is the flaring-out condition, and it is the whole story **[HIGH] S2** (Lobo 2007 eq. 10; Lemos et al. eq. 30). Hochberg and Visser later gave the covariant, coordinate-free version for arbitrary static throats **[HIGH] S2**.

**The matter.** In the orthonormal frame of static observers the Einstein equations give the energy density, radial tension and lateral pressure as

$$\rho = \frac{b'}{8\pi r^2}, \qquad \tau = \frac{1}{8\pi r^2}\left[\frac{b}{r} - 2\left(1 - \frac{b}{r}\right) r\,\Phi'\right], \qquad p = \frac{r}{2}\left[(\rho - \tau)\Phi' - \tau'\right] - \tau ,$$

so at the throat $\tau_0 = 1/(8\pi r_0^2)$ **[HIGH] S2** (Lobo 2007 eqs 26–31). Restoring units,

$$\tau_0 = \frac{c^4}{8\pi G\, r_0^2} \approx \frac{4.8 \times 10^{42}\ \text{N}}{r_0^2} ,$$

which Morris and Thorne express as "(pressure at the center of the most massive of neutron stars) × (20 km)² / (circumference of throat)²" **[HIGH] S1** (abstract). For a 500 km throat this is about $2 \times 10^{31}$ Pa; for a throat with a 20 km circumference it is a few times $10^{35}$ Pa, the pressure at the centre of a heavy neutron star.

Define the dimensionless exoticity $\xi = (\tau - \rho)/|\rho|$. Combining the field equations with the flaring-out condition,

$$\xi = \frac{2 b^2}{r |b'|}\,\frac{d^2 r}{dz^2} - 2 r\left(1 - \frac{b}{r}\right)\frac{\Phi'}{|b'|} ,$$

and since $(1 - b/r)\Phi' \to 0$ at a horizon-free throat, $\xi(r_0) = (\tau_0 - \rho_0)/|\rho_0| > 0$. The radial tension must exceed the energy density: $\tau_0 > \rho_0 c^2$ **[HIGH] S2** (Lobo eqs 37–39). A null vector $k^\mu$ along the radial direction gives $T_{\mu\nu}k^\mu k^\nu = \rho - \tau < 0$, so the null energy condition fails at the throat, and with it every pointwise energy condition ([ENE-1](../../constraints/ene-1.md)). This is the matter Morris and Thorne named "exotic". It is not a choice of the paper; it is forced by the flaring-out geometry through the Einstein equations. The general theorems of [ENE-2](../../constraints/ene-2.md) say the same thing without spherical symmetry.

**Traversability.** Morris and Thorne then impose engineering conditions. A traveller of body length about 2 m must feel tidal accelerations no larger than one Earth gravity. In the traveller's frame the radial and lateral tidal constraints are

$$\left|\left(1 - \frac{b}{r}\right)\left[\Phi'' + (\Phi')^2 - \frac{b' r - b}{2 r (r - b)}\Phi'\right]\right| \le \frac{g_\oplus}{c^2\,(2\ \text{m})} \approx \frac{1}{(10^8\ \text{m})^2},$$

$$\left|\frac{\gamma^2}{2 r^2}\left[\frac{v^2}{c^2}\left(b' - \frac{b}{r}\right) + 2 (r - b)\Phi'\right]\right| \le \frac{1}{(10^8\ \text{m})^2},$$

with $\gamma = (1 - v^2/c^2)^{-1/2}$ **[HIGH] S2** (Lobo eqs 55–56; Lemos et al. eq. 119). The first constrains the redshift function; the second constrains the speed through the throat, and at the throat reduces to $\gamma^2 v^2 \le 2 g_\oplus r_0^2 / [(1 - b'_0)\,(2\ \text{m})]$. For the simplest choice $\Phi = 0$ (zero radial tides) and $b = \sqrt{r_0 r}$, the lateral constraint at the throat gives $v/c \le 2 r_0 / (10^8\ \text{m})$; at one percent of light speed the throat must be at least 500 km across **[HIGH] S2** (Lemos et al. App. B, eq. 123: "The wormhole throat obeys $r_o \ge 500$ km"). The register carries this as [HAZ-3](../../constraints/haz-3.md). The effective mass enclosed by such a throat, $m(r_0) = r_0 c^2/2G$, is about 170 solar masses **[HIGH] S2** (Lobo eq. 33, arithmetic). The traversal time is $\Delta\tau \approx 2 a / v$ for stations at radius $a$ in the nearly flat region; a one-year trip at $0.01c$ puts the stations at $a \approx 4.7 \times 10^{13}$ m **[HIGH] S2** (Lemos et al. eq. 125 and following).

**What "faster than light" means here.** The wormhole is a shortcut only in the sense that its proper length through the throat, of order $2a$, is much less than the external distance between the mouths, which the paper leaves free. Locally nothing exceeds $c$. The comparison is against light in the flat exterior, which is precisely the comparison the theorems of ENE-2 price in negative energy.

## What it costs

**B-neg.** The throat matter must violate the null energy condition: $\tau_0 > \rho_0 c^2$, forced by flaring out. This is the finding of the paper, not an assumption of the dossier.

**B-mass.** The tension is $c^4 / (8\pi G r_0^2)$, neutron-star-core pressures for a throat of kilometre scale and $10^{31}$ Pa for a human-safe 500 km throat, with a throat mass of order $10^2$ solar masses at that radius. The only negative energy ever measured, the Casimir effect ([ENE-6](../../constraints/ene-6.md)), is about $-4 \times 10^{-4}$ J m⁻³ at a micron gap, some 35 orders of magnitude short of the energy-density scale at a 500 km throat. Ford and Roman (1996) applied the quantum inequalities to this class and found the exotic matter confined to a band barely thicker than the Planck length unless the geometry has enormous discrepancies of scale **[HIGH] S2** ([ENE-3](../../constraints/ene-3.md)).

**B-boot.** The paper's construction procedure is to pull a wormhole from the quantum foam, enlarge it and then move one mouth to the destination. The mouth travels at sublight speed through ordinary space. The route must be laid before the first fast trip, which is the wormhole version of [CON-2](../../constraints/con-2.md).

**B-caus.** Any wormhole of this class that can be maintained is convertible into a time machine by a round trip of one mouth ([CAU-3](../../constraints/cau-3.md)), which the same authors proved within the year.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | A single static wormhole has fixed endpoints in a curved spacetime and no signal reverses order in any frame; the mouths' rest frame is the frame, which is CAU-1's fixed-endpoint escape hatch, and it fails as soon as a mouth moves (CAU-3). |
| CAU-2 | VIOLATES | A maintainable wormhole of this class is convertible into a device that produces closed timelike curves; if chronology protection holds, it is the maintainable wormhole that fails, since the conversion step uses nothing beyond the wormhole itself. |
| CAU-3 | VIOLATES | This is the wormhole CAU-3 was written about: take one mouth on a relativistic round trip and the shortcut becomes a time machine (Morris, Thorne and Yurtsever 1988). |
| CAU-4 | DODGES | No preferred frame is chosen by the theory; the fixed mouths supply one by accident, and nothing fixes it once mouths move or a second wormhole exists. |
| CAU-5 | N/A | No entanglement or measurement enters a classical wormhole metric. |
| ENE-1 | VIOLATES | At the throat $\tau_0 > \rho_0 c^2$, so $T_{\mu\nu}k^\mu k^\nu < 0$ for radial null $k$: the null condition fails, and therefore the weak and every stronger pointwise condition. |
| ENE-2 | VIOLATES | The throat is a shortcut relative to flat exterior light, exactly the time advance Olum and Gao–Wald show requires energy-condition violation; the paper's exotic matter is that violation. |
| ENE-3 | VIOLATES | Ford and Roman (1996) apply the quantum inequalities to this class: the exotic matter must sit in a band only slightly wider than the Planck length, or the geometry's scales must differ enormously, both of which the paper's human-scale designs do not allow. |
| ENE-4 | N/A | The pocket geometry reduces a warp bubble's negative energy; it has no counterpart for a throat whose exotic tension scales with $1/r_0^2$. |
| ENE-5 | N/A | Not a Natário-class warp metric; the energy-condition violation here is the throat's own. |
| ENE-6 | VIOLATES | The paper invokes Casimir-type quantum effects as the hint that exotic matter may exist; the register's measured Casimir density is some 35 orders of magnitude below the throat's $c^4/(8\pi G r_0^2)$ scale at 500 km. |
| ENE-7 | VIOLATES | An asymptotically flat spacetime with a handle whose throat length is far less than the outside distance between the mouths: the very causal curve the theorem says must be deformable to the exterior, and here it is not. The exotic matter the paper asks for must therefore violate the ANEC on the achronal null geodesics through the throat, which no known quantum field supplies. The 1988 paper predates the theorem and could not have addressed it. |
| CON-1 | N/A | Warp-bubble horizons do not occur; the design condition of a finite $\Phi$ removes horizons entirely. |
| CON-2 | SATISFIES | The paper accepts that the far mouth is moved into place at sublight speed by the builders; the route is infrastructure laid in advance, which is CON-2's demand. |
| CON-3 | N/A | The Krasnikov tube is a warp-class construction; the wormhole's pre-laid route is scored under CON-2. |
| STA-1 | N/A | No superluminal bubble wall or wall horizon exists in a static throat. |
| STA-2 | VIOLATES | This is the source paper for STA-2: the throat must be held open by matter with $\tau_0 > \rho_0 c^2$, which violates the energy conditions, and the tension scales as $1/r_0^2$. |
| STA-3 | SILENT | The 1988 paper predates the time-machine conversion; the chronology-horizon divergence bears once a mouth is moved, and the literature (Kim and Thorne versus Hawking) has not settled whether it destroys the machine. |
| HAZ-1 | N/A | No superluminal bubble sweeps up particles; the traveller moves at $v \ll c$ through the throat. |
| HAZ-2 | N/A | No horizons, so no Hawking bath inside; the interior temperature question belongs to warp bubbles. |
| HAZ-3 | SATISFIES | The paper imposes the one-g tidal bound over a 2 m body and derives the throat-size and speed constraints from it; at $0.01c$ the throat must be at least 500 km, which is the register's number. |
| LOR-1 | SATISFIES | The traveller moves at $v \ll c$ throughout; nothing is pushed to light speed. |
| LOR-2 | N/A | No tachyonic matter appears. |
| LOR-3 | N/A | No group- or phase-velocity claim is made. |
| LOR-4 | N/A | No Scharnhorst-type vacuum modification is involved. |
| WRP-1 | N/A | Not a warp drive; the metric has no shift vector and moves nothing. |
| WRP-2 | N/A | The shell classification of warp spacetimes does not apply to a static throat. |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a wormhole, whose exotic matter is forced by flaring out rather than by a moving shell. |
| MAN-1 | N/A | Both mouths are in ordinary four-dimensional space; no extra dimension is invoked. |

## Status of the argument

1988: the paper appears in the American Journal of Physics and becomes the most cited wormhole paper in the literature (about 2900 citations on INSPIRE as of 2026-09-12) **[HIGH] S2**. Morris, Thorne and Yurtsever (PRL 61, 1446) show the time-machine conversion the same year **[HIGH] S1**.

1989: Visser removes spherical symmetry and confines the exotic matter to a shell the traveller need not touch **[HIGH] S1**.

1995–1996: Ford and Roman derive the quantum inequalities and apply them to Morris–Thorne wormholes: for a free scalar field the exotic matter must be confined to a band only slightly wider than the Planck length, or the wormhole must have large discrepancies between its length scales, and they conclude macroscopic traversable wormholes are very improbable **[HIGH] S2** (Lobo §I, citing Ford and Roman PRD 53, 5496).

1997: Hochberg and Visser give the covariant generic-throat theorem: energy-condition violation at or near the throat of any static traversable wormhole, spherical symmetry not required **[HIGH] S2**.

1998–2000: Olum, then Visser, Bassett and Liberati, then Gao and Wald, prove the general theorems that any shortcut relative to flat space requires energy-condition violation (register [ENE-2](../../constraints/ene-2.md)) **[HIGH] S2**.

2003 onward: the class is extended to a cosmological constant (Lemos, Lobo and Oliveira), to modified gravity, and to matter sources that violate the energy conditions classically (non-minimally coupled scalars, phantom fields), which changes where the exotic matter comes from but not that it is needed **[HIGH] S2**.

2017 onward: the holographic wormholes of [Gao, Jafferis and Wall](gao-jafferis-wall-2017.md) and the four-dimensional construction of [Maldacena, Milekhin and Popov](maldacena-milekhin-popov-2018.md) supply the negative energy from quantum fields under a two-sided coupling, at the price that the wormhole is longer than the outside route. No peer-reviewed construction of a Morris–Thorne shortcut, one shorter than the exterior path, with a physically realised matter source exists as of 2026-09-12; the class is mathematically unchallenged and physically unsourced.

## Sources

- **S1** Morris, M. S. and Thorne, K. S., "Wormholes in spacetime and their use for interstellar travel: A tool for teaching general relativity", Am. J. Phys. 56, 395–412 (1988). doi:10.1119/1.15620. Abstract verified via Crossref and INSPIRE; full text paywalled, so the equations above are taken from the two S2 reviews below, which reproduce them.
- **S1** Morris, M. S., Thorne, K. S. and Yurtsever, U., "Wormholes, Time Machines, and the Weak Energy Condition", Phys. Rev. Lett. 61, 1446–1449 (1988). doi:10.1103/PhysRevLett.61.1446. Abstract verified via INSPIRE.
- **S2** Lemos, J. P. S., Lobo, F. S. N. and Oliveira, S. Q., "Morris–Thorne wormholes with a cosmological constant", Phys. Rev. D 68, 064004 (2003), arXiv:gr-qc/0302049. Read in full; §2 and Appendix B carry the metric, the exoticity function and the tidal constraints with the 500 km figure.
- **S2** Lobo, F. S. N., "Exotic solutions in General Relativity: Traversable wormholes and 'warp drive' spacetimes", arXiv:0710.4474 (2007), §II. Read in full; carries the Einstein equations, flaring-out, exoticity and traversability conditions.
- **S2** Ford, L. H. and Roman, T. A., "Quantum field theory constrains traversable wormhole geometries", Phys. Rev. D 53, 5496 (1996), arXiv:gr-qc/9510071. Abstract verified via INSPIRE.
- **S2** Hochberg, D. and Visser, M., "Geometric structure of the generic static traversable wormhole throat", Phys. Rev. D 56, 4745 (1997), arXiv:gr-qc/9704082. Abstract verified via INSPIRE.
- **S2** Visser, M., *Lorentzian Wormholes: From Einstein to Hawking* (AIP Press, 1995). Not verified online.
- **S2** Ellis, H. G., "Ether flow through a drainhole: A particle model in general relativity", J. Math. Phys. 14, 104 (1973). Record via Lobo's reference list; the earlier exact solution of the same class.
