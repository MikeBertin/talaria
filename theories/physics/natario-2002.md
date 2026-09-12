# Natário 2002: warp drive with zero expansion

*The general warp drive class, and a member of it that neither contracts nor expands space and still needs negative energy.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

The usual story of the [Alcubierre](alcubierre-1994.md) drive, that space is contracted ahead of the bubble and expanded behind it and that the bubble moves in response, is not what makes it work. Natário's claim is that a warp drive is any globally hyperbolic spacetime built from flat Euclidean slices with unit lapse and a time-dependent shift vector field $X$ on Euclidean 3-space, and that the bubble moves because $X$ carries it: the region where $X$ vanishes (the interior) slides through the region where $X$ equals the ship's velocity (the exterior, in ship-fixed coordinates), and whether space ahead is contracted or not is a detail of the particular $X$. To prove it, he constructs a divergence-free $X$, so that the expansion of the Eulerian volume elements is identically zero everywhere, and shows the resulting spacetime carries a ship at arbitrary speed exactly as Alcubierre's does. Along the way he proves that every non-flat member of the class violates the weak or the strong energy condition, gives the general formula for the energy density on flat slices, and shows that any member with $v_s > 1$ has a horizon, a visibility horizon and infinite blueshift at the horizon, whatever the choice of $X$.

The claim is therefore two things: a definition and a counterexample. The definition has become the standard one; the register's [WRP-1](../../constraints/wrp-1.md) entry adopts it and Santiago, Schuster and Visser's 2022 theorem is proved for it. The counterexample removes the heuristic without removing the bill. Natário does not claim the zero-expansion drive is cheaper, buildable or free of the pathologies of Alcubierre's; he says the opposite, that the pathologies are properties of the class.

## Origin and lineage

José Natário, Instituto Superior Técnico, Lisbon, "Warp drive with zero expansion", Class. Quantum Grav. 19, 1157 (2002), arXiv:gr-qc/0110086 **[HIGH] S1**. It answers the heuristic reading of Alcubierre 1994 and generalises the geometry using the extrinsic-curvature language of Wald and the rate-of-strain tensor of fluid mechanics. It cites Visser, Bassett and Liberati and Gao and Wald for the expectation that all superluminal spacetimes violate energy conditions ([ENE-2](../../constraints/ene-2.md)), Clark, Hiscock and Larson for the optics of the Alcubierre bubble and Low for the argument that horizons are unavoidable.

Downstream: Lobo and Visser (2004) analysed the Natário drive's energy conditions in linearised gravity; [Bobrick and Martire (2021)](bobrick-martire-2021.md) built their classification on the same shift-vector form ([WRP-2](../../constraints/wrp-2.md)); Santiago, Schuster and Visser (2022) named the class "generic Natário warp drives" and proved NEC violation for it ([ENE-5](../../constraints/ene-5.md)); the 2021 positive-energy claims of [Lentz](lentz-solitons-2021.md), [Fell and Heisenberg](fell-heisenberg-2021.md) and Bobrick and Martire all live inside it, as does the subluminal shell of [Fuchs et al. (2024)](fuchs-constant-velocity-2024.md) ([WRP-3](../../constraints/wrp-3.md)). The [modified gravity survey](warp-drives-in-modified-gravity.md) uses the class definition to say what modified gravity does and does not change.

## The mechanism

Units $G = c = 1$, signature $(-,+,+,+)$. **Definition.** A warp drive spacetime is $\mathbb{R}^4$ with the line element

$$ds^2 = -dt^2 + \sum_{i=1}^{3}\bigl(dx^i - X^i\,dt\bigr)^2,$$

for three bounded smooth functions $X^i(t, x, y, z)$. The induced metric on the slices $t = \mathrm{const}$ is the flat Euclidean metric, the lapse is 1, and the whole geometry is encoded in the time-dependent vector field $X = X^i\partial_i$ on Euclidean 3-space **[HIGH] S1**. The future unit normal is $n = \partial_t + X$; the observers with this four-velocity are the Eulerian observers, and they are in free fall (the curves $\dot t = 1$, $\dot x^i = X^i$ solve the geodesic equations) **[HIGH] S1**. The extrinsic curvature of the slices is

$$K_{ij} = \tfrac{1}{2}\bigl(\partial_i X_j + \partial_j X_i\bigr),$$

which is the rate-of-strain tensor of fluid mechanics for the "flow" $X$, and its trace is the expansion of the Eulerian volume elements

$$\theta = K^i{}_i = \nabla \cdot X .$$

The spacetime is flat wherever $X$ is a Killing field of the Euclidean metric, in particular wherever $X$ is spatially constant **[HIGH] S1**.

**The energy theorem.** Since the slices are flat, the Hamiltonian constraint gives the energy density seen by Eulerian observers as

$$\rho = T_{ab}n^a n^b = \frac{1}{16\pi}\bigl(\theta^2 - K_{ij}K^{ij}\bigr).$$

If the strong energy condition holds and $\theta \neq 0$ somewhere, the Raychaudhuri equation makes $\theta$ blow up in finite time, which is impossible for bounded $\nabla\cdot X$; so the strong condition forces $\theta \equiv 0$, and then $\rho = -K_{ij}K^{ij}/16\pi \leq 0$ with equality only where $K_{ij} = 0$. Hence a warp drive spacetime that violates neither the strong nor the weak energy condition is flat **[HIGH] S1**. This is Theorem 1.7 and it is the cleanest short proof in the literature that the class pays in negative energy.

**Alcubierre as a special case.** Taking $X = v_s f(r_s)\,\partial_x$ gives

$$\theta = v_s f'(r_s)\frac{x - x_s}{r_s}, \qquad \rho = -\frac{v_s^2\,[f'(r_s)]^2}{32\pi}\,\frac{y^2 + z^2}{r_s^2},$$

reproducing Alcubierre's expansion and energy density **[HIGH] S1**. Replacing $x$ by $\xi = x - x_s(t)$ shifts $X$ by $-v_s$ so that the interior stands still and the exterior flows past at $-v_s$; a field $X$ that vanishes near the origin and equals $-v_s(t)\,\partial_x$ far away is said to generate a warp bubble with velocity $v_s$.

**The zero-expansion drive.** In spherical coordinates with the $x$ axis as polar axis, use the Euclidean identification of vectors with 2-forms. Since $\partial_x \sim d\bigl(\tfrac{1}{2}r^2\sin^2\theta\,d\varphi\bigr)$, the field

$$X \sim -v_s(t)\,d\bigl(f(r)\,r^2\sin^2\theta\,d\varphi\bigr) \;=\; -2 v_s f\cos\theta\; e_r \;+\; v_s\,(2f + r f')\sin\theta\; e_\theta,$$

with $f(r) = \tfrac{1}{2}$ for large $r$ and $f(r) = 0$ for small $r$, is the exterior derivative of a 2-form and therefore divergence-free, and it generates a warp bubble with velocity $v_s\,\partial_x$ **[HIGH] S1**. The rate-of-strain components are

$$K_{rr} = -2v_s f'\cos\theta, \quad K_{\theta\theta} = K_{\varphi\varphi} = v_s f'\cos\theta, \quad K_{r\theta} = v_s\sin\theta\Bigl(f' + \frac{r}{2}f''\Bigr), \quad K_{r\varphi} = K_{\theta\varphi} = 0,$$

so $\theta = K_{rr} + K_{\theta\theta} + K_{\varphi\varphi} = 0$ identically, and the energy density is

$$\rho = -\frac{1}{16\pi}K_{ij}K^{ij} = -\frac{v_s^2}{8\pi}\Bigl[\,3 (f')^2\cos^2\theta + \Bigl(f' + \frac{r}{2}f''\Bigr)^2\sin^2\theta\,\Bigr] \;\leq\; 0 .$$

Ahead of the bubble ($\cos\theta > 0$) the wall is compressed radially ($K_{rr} < 0$ where $f' > 0$) and this is exactly balanced by expansion in the two perpendicular directions: volume is preserved, nothing is "contracted in front and expanded behind", and the energy density is negative everywhere the wall has a gradient **[HIGH] S1**. That is the counterexample.

**Horizons and blueshifts.** For a stationary bubble, $\langle\partial_t,\partial_t\rangle = -1 + X^2$, so the spacetime is stationary only if $|v_s| < 1$. For $v_s > 1$, null geodesics satisfy $|d\mathbf{x}/dt - X| = 1$: a flash outside the bubble is a sphere expanding at unit speed while being carried along $X$ at speed $v_s$, so events inside the bubble cannot influence events far ahead. Assuming cylindrical symmetry there is a point on the forward axis where $\|X\| = 1$, and the surface through it making angle $\alpha$ with $X$, $\sin\alpha = 1/\|X\|$, is a horizon; far from the bubble this is the Mach cone $\sin\alpha = 1/v_s$. The interior is causally disconnected from part of its own wall, which Natário notes is unavoidable (Low 1999). A visibility horizon bounds what the crew can see. Light energy measured by Eulerian observers obeys $E\,(1 + X\cdot n) = E_0$, so the observer at the centre sees a blueshift of $1 + v_s$ dead ahead, none at $90^\circ$, and infinite blueshift for rays approaching the horizon; light sent backwards is redshifted by $1 + v_s$ **[HIGH] S1**. These results are independent of the choice of $X$ and reproduce the thin-wall limit of Clark, Hiscock and Larson's numerical optics for the Alcubierre case.

**Headline number.** The paper gives no total energy. The quantity that fixes the bill is the same as Alcubierre's: $\rho \propto -v_s^2 (f')^2$, so the density scales as the inverse square of the wall thickness and the quantum inequalities of [ENE-3](../../constraints/ene-3.md) apply in the same way; Lobo and Visser's linearised analysis of both the Alcubierre and Natário drives finds that the negative energy in the warp field must be a considerable fraction of the ship's own mass-energy even at arbitrarily low speeds **[HIGH] S1**. Santiago, Schuster and Visser show the zero-expansion drive violates the null and strong conditions as well as the weak, and that the whole class violates the NEC **[HIGH] S1**.

## What it costs

**B-neg.** Theorem 1.7: any non-flat member of the class violates the weak or the strong energy condition, and for the zero-expansion example the Eulerian energy density is negative throughout the wall in closed form ([ENE-1](../../constraints/ene-1.md), [ENE-5](../../constraints/ene-5.md)).

**B-mass.** The density has the same $v_s^2 f'^2$ structure as Alcubierre's, so the quantum-inequality wall bound and the inverse-thickness scaling of the total energy carry over; the linearised analysis of Lobo and Visser puts the negative energy at a considerable fraction of the ship's mass even at low speed **[HIGH] S1**. No total has been computed for the zero-expansion metric specifically, which is why the mark rests on the class and not on a number.

**B-boot.** Natário proves the horizon for any $X$ with $v_s > 1$: the crew are cut off from part of the wall and from everything ahead, so the bubble cannot be created or controlled from inside ([CON-1](../../constraints/con-1.md)); the bootstrap of [CON-2](../../constraints/con-2.md) follows, since the metric ahead must already be in place.

**B-caus.** Everett's two-bubble construction needs only effective superluminal transport between flat regions and a Lorentz boost of the second bubble's exterior; nothing in it depends on the expansion profile, so it applies to the class ([CAU-3](../../constraints/cau-3.md)) **[MED] S1**.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | Any member of the class with $v_s > 1$ carries the interior between flat-space points faster than light through that space; nothing in the definition breaks Lorentz invariance or singles out the exterior frame, so a boosted second bubble sends the ship into its own past. |
| CAU-2 | SILENT | Chronology protection is not discussed; whether Hawking's back reaction forbids the two-bubble loop for this class is unsettled and uncomputed. |
| CAU-3 | VIOLATES | Everett's two-bubble loop uses only superluminal transport between flat regions plus a boost of the second bubble's exterior, which every member of the class provides; the profile of $X$ plays no role. |
| CAU-4 | SILENT | No preferred frame is proposed and general covariance is kept; the constraint asks what picks the frame that avoids the time machine, and the paper does not say. |
| CAU-5 | N/A | No quantum signalling is involved. |
| ENE-1 | VIOLATES | Theorem 1.7 proves every non-flat warp drive spacetime violates the weak or the strong condition, and the zero-expansion example has $\rho \leq 0$ everywhere; Santiago, Schuster and Visser add the null condition. |
| ENE-2 | VIOLATES | Natário cites Visser, Bassett and Liberati and Gao and Wald as the reason all superluminal spacetimes are expected to violate energy conditions, and his theorem is the class-wide confirmation for warp drives. |
| ENE-3 | VIOLATES | The energy density scales as $v_s^2 f'^2$, exactly as Alcubierre's, so the quantum-inequality bound on wall thickness applies unchanged; the paper offers no thicker wall and no smaller bill. |
| ENE-4 | SILENT | The pocket trick (a conformal factor on the slices) is outside the class as defined, since it makes the slices non-flat; Natário does not use it and does not say whether a zero-expansion pocket exists. |
| ENE-5 | VIOLATES | ENE-5 is a theorem about this class by name: for generic Natário warp drives the NEC is violated for any nonzero velocity, and the zero-expansion drive is treated as its own case in the proof. |
| ENE-6 | SILENT | The paper does not invoke a source at all; the only negative energy ever made (Casimir) is tens of orders of magnitude short of any wall density, and the gap is not addressed. |
| ENE-7 | N/A | Trivial topology by definition of the warp-drive class; no handle for Friedman, Schleich and Witt to deform. The energy-condition violation Natário's theorem proves is the ENE-2 verdict, of which ENE-7 is the wormhole version. |
| CON-1 | VIOLATES | Natário derives the horizon at $\|X\| = 1$ and the causal disconnection of the interior from part of the wall for any $X$ with $v_s > 1$, calling it unavoidable; this is CON-1 proved for the class. |
| CON-2 | VIOLATES | Given the horizon, the field $X$ ahead of a superluminal bubble is outside the crew's future light cone and cannot be created from the ship; Krasnikov's spacelike leading edge argument is about the location of the wall matter, which is the same for any profile. |
| CON-3 | N/A | The Krasnikov tube is not a warp bubble; it has non-flat slices and a static structure, and the paper does not use it. |
| STA-1 | SILENT | Natário exhibits the horizon and the infinite blueshift there, which are the ingredients of Hiscock's divergence, but no semiclassical stress-energy has been computed for the zero-expansion metric; Hiscock's and Finazzi, Liberati and Barceló's calculations are for Alcubierre profiles. |
| STA-2 | N/A | No wormhole throat. |
| STA-3 | SILENT | The chronology horizon would appear only in the two-bubble time machine, which is not constructed here and whose semiclassical fate is unsettled. |
| HAZ-1 | SILENT | The sweeping-up of particles by a superluminal wall was computed for the Alcubierre profile; the mechanism (a wall moving faster than light with a horizon ahead) is present in every member of the class, but the burst has not been computed for the zero-expansion drive. |
| HAZ-2 | SILENT | The horizon is present and its infinite blueshift is Natário's own result, so a Hawking flux to the centre is expected; the temperature calculation exists only for Alcubierre-type walls. |
| HAZ-3 | N/A | Wormhole tidal bound; not a throat geometry. |
| LOR-1 | SATISFIES | The Eulerian observers, including the ship, are in free fall inside their light cones; the exterior flows past. Nothing is pushed to $c$. |
| LOR-2 | VIOLATES | For $v_s > 1$ the wall matter ahead of the ship lies outside its light cone and moves on spacelike world lines in the exterior frame, so creating the bubble on demand needs [tachyonic](tachyons-feinberg-1967.md) matter; the class inherits Krasnikov's objection to Alcubierre. |
| LOR-3 | N/A | No wave propagation in a medium. |
| LOR-4 | N/A | Not relevant to a geometric drive. |
| WRP-1 | SATISFIES | This paper is the class definition WRP-1 cites: unit lapse, flat slices, a shift vector field carrying the ship, and the demonstration that expansion is incidental. |
| WRP-2 | SATISFIES | Bobrick and Martire's classification is built on the same shift-vector form; the zero-expansion drive is a superluminal shell of exotic material moving inertially and the paper says so. |
| WRP-3 | SATISFIES | No positive-energy claim is made; Theorem 1.7 is a proof that none can be made inside the class in general relativity, consistent with the absence WRP-3 records. |
| MAN-1 | N/A | Four dimensions, trivial topology. |

## Status of the argument

- **2002.** The paper. The class is defined, the energy theorem is proved, the zero-expansion example is built, horizons and blueshifts are derived for any profile **[HIGH] S1**.
- **2004.** Lobo and Visser analyse both the Alcubierre and Natário drives non-perturbatively and in linearised gravity; energy condition violations are generic to the geometry, present at arbitrarily low speeds, and the warp field's negative energy must be a considerable fraction of the ship's mass **[HIGH] S1**.
- **2017.** Alcubierre and Lobo's review chapter "Warp drive basics" presents the Natário form as the general warp drive **[HIGH] S2**.
- **2021.** Bobrick and Martire classify warp spacetimes as shells moving inertially, using the shift-vector form; Lentz and Fell and Heisenberg claim positive-energy members of the class **[HIGH] S1** (via the register, WRP-2 and WRP-3).
- **2022.** Santiago, Schuster and Visser: generic Natário warp drives violate the NEC for any nonzero flow, the zero-expansion drive violates the strong and null conditions as well as the weak, and the 2021 positive-energy claims examined only Eulerian observers **[HIGH] S1**. Their abstract adds that even in modified gravity the purely geometrical null convergence condition is still violated.
- **2026-09-12.** No peer-reviewed response disputes the class definition or Theorem 1.7. The theorem has become the reference point against which every "positive energy" claim is measured, and none has survived it.

## Sources

- **S1** Natário, J., "Warp drive with zero expansion", Class. Quantum Grav. 19, 1157–1165 (2002), arXiv:gr-qc/0110086. Read in full.
- **S1** Alcubierre, M., "The warp drive: hyper-fast travel within general relativity", Class. Quantum Grav. 11, L73–L77 (1994), arXiv:gr-qc/0009013. Read in full.
- **S1** Lobo, F. S. N. and Visser, M., "Fundamental limitations on 'warp drive' spacetimes", Class. Quantum Grav. 21, 5871–5892 (2004), arXiv:gr-qc/0406083. Abstract read.
- **S1** Lobo, F. S. N. and Visser, M., "Linearized warp drive and the energy conditions", proceedings of the Spanish Relativity Meeting 2004, arXiv:gr-qc/0412065. Abstract read.
- **S1** Santiago, J., Schuster, S. and Visser, M., "Generic warp drives violate the null energy condition", Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079. Read in part.
- **S1** Everett, A. E., "Warp drive and causality", Phys. Rev. D 53, 7365–7368 (1996). Via INSPIRE and the register, CAU-3.
- **S1** Krasnikov, S. V., "Hyperfast interstellar travel in general relativity", Phys. Rev. D 57, 4760–4766 (1998), arXiv:gr-qc/9511068. Read in full.
- **S1** Clark, C., Hiscock, W. A. and Larson, S. L., "Null geodesics in the Alcubierre warp-drive spacetime: the view from the bridge", Class. Quantum Grav. 16, 3965–3972 (1999). Cited by Natário; not read directly.
- **S1** Low, R. J., "Speed limits in general relativity", Class. Quantum Grav. 16, 543–549 (1999). Cited by Natário; not read directly.
- **S1** Bobrick, A. and Martire, G., "Introducing physical warp drives", Class. Quantum Grav. 38, 105009 (2021), arXiv:2102.06824. Via the register, WRP-2.
- **S2** Alcubierre, M. and Lobo, F. S. N., "Warp drive basics", Fundam. Theor. Phys. 189, 257–279 (2017), arXiv:2103.05610. Abstract read.
