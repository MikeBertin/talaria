# Brane-bulk shortcuts (Chung and Freese 2000, Ishihara 2001, Caldwell and Langlois 2001)

*If our universe is a brane bent by its own matter into a warped bulk, a graviton can leave, cut across and return before light along the brane; the shortcut is real, stays in the bulk light cone and is about one part in $10^{58}$ today.*

**Kind:** physics · **Loophole:** L4 · **Standing:** K4 · **Bill:** B-new, B-caus, B-mass · **Last reviewed:** 2026-09-12

## The claim

Suppose the observable universe is a three-brane, a four-dimensional surface embedded in a five-dimensional bulk, with Standard Model fields confined to the surface and gravity free to propagate in the bulk. Then there are two notions of "fastest path" between two events on the brane: the null geodesic of the brane's own induced metric, which light follows, and the null geodesic of the bulk metric, which a graviton or any bulk field follows. If the brane is curved in the bulk, these differ, and the bulk path can be shorter. Chung and Freese state the claim in its most ambitious form: "A signal traveling along an extra-dimensional null geodesic may leave our three-brane, travel into the extra dimensions, and subsequently return to a different place on our three-brane in a shorter time than the time a signal confined to our three-brane would take. Hence, these geodesics may connect distant points which would otherwise be 'outside' the four dimensional horizon" (Chung and Freese 2000, abstract). Their target was the cosmological horizon problem, not spaceflight: a non-inflationary explanation of why the sky is uniform.

Ishihara made the claim general and geometric. For any brane carrying ordinary matter in a five-dimensional anti-de Sitter bulk, "apparent causality violation is possible for the brane universe which contains matter energy" (Ishihara 2001, abstract): the brane's own matter bends it concave toward the bulk, and a bulk null geodesic from a point P reaches the brane again at a point R that lies in the past of the point Q where the brane's light from P arrives. The strongest form of the proposal, then, is that in the brane-world picture of the universe there is no special construction required: positive energy on the brane produces the shortcut automatically, and "true causality should be defined by the null geodesics" of the bulk. Caldwell and Langlois asked how big the effect is and answered: in a realistic Randall-Sundrum cosmology, small, and not enough for the horizon problem.

What the proposal does not claim is any separate space with laxer rules. The bulk has one light cone and the shortcut lives inside it. That distinction is the whole content of [MAN-1](../../constraints/man-1.md) and separates this dossier from [the hyperspace reading of extra dimensions](kaluza-klein-hyperspace.md).

## Origin and lineage

The brane-world setting is Hořava and Witten's 1996 M-theory domain walls, made concrete for phenomenology by Arkani-Hamed, Dimopoulos and Dvali (1998, large compact dimensions) and Randall and Sundrum (1999, a warped non-compact fifth dimension). Kälbermann and Halevi, gr-qc/9810083 (1998), had already noticed that matter on a thin shell in five dimensions "may be connected almost instantaneously through the fifth dimension". Chung and Freese, Phys. Rev. D 62, 063513 (2000), built explicit metrics; Ishihara, Phys. Rev. Lett. 86, 381 (2001), proved the general condition; Caldwell and Langlois, Phys. Lett. B 511, 129 (2001), computed the size in Schwarzschild-anti-de Sitter. Csáki, Erlich and Grojean, Nucl. Phys. B 604, 312 (2001), studied asymmetrically warped bulks in which gravitational waves "may travel with a speed different from the speed of light on the brane, and possibly even faster", linking this dossier to the [Lorentz-violating frameworks](lorentz-violating-frameworks.md). Abdalla, Casali and Cuadros-Melgar extended the shortcut analysis to six dimensions (Nucl. Phys. B 644, 201 (2002)); Päs, Pakvasa and Weiler used sterile-neutrino shortcuts in the bulk to build an oscillation resonance (Phys. Rev. D 72, 095017 (2005)); Lin, Yu and Gong turned the GW170817 timing into a bound on the number of extra dimensions (Phys. Rev. D 109, 104015 (2024)). The fictional descendant is every hyperspace that is "outside" normal space; none of them is this.

## The mechanism

**Ishihara's condition.** Let $g_{\mu\nu}$ be the bulk metric on $M$, $\gamma_{ab} = g_{\mu\nu}e^\mu_a e^\nu_b$ the induced metric on the brane $\Sigma$, $K_{ab}$ its extrinsic curvature and $n^\mu$ the normal. For a curve on the brane with tangent $u^\mu = u^a e^\mu_a$, the Gauss-Weingarten equation relates the two accelerations:

$$u^\mu \nabla_\mu u^\nu = (u^a D_a u^c)\, e^\nu_c - K_{ab}u^a u^b\, n^\nu ,$$

so a brane geodesic is a bulk geodesic only where $K_{ab}u^au^b = 0$ **[HIGH] S1** (Ishihara 2001, eq. 5). With $Z_2$ symmetry the Israel junction condition gives

$$K_{ab} = -\tfrac12 \kappa^2 \left(S_{ab} - \tfrac13 S \gamma_{ab}\right),$$

with $\kappa^2$ the five-dimensional gravitational constant and $S_{ab}$ the brane's surface stress-energy **[HIGH] S1** (eq. 7). For a pure-tension brane $S_{ab} = -\sigma\gamma_{ab}$, $K_{ab} \propto \gamma_{ab}$, and every null geodesic on the brane is a null geodesic of the bulk: no shortcut, which is the strict Randall-Sundrum vacuum. Add matter, $S_{ab} = -\sigma\gamma_{ab} + T_{ab}$, and for any brane null vector $k^a$

$$K_{ab}k^ak^b = -\tfrac12 \kappa^2\, T_{ab}k^ak^b < 0 \quad\text{whenever}\quad T_{ab}k^ak^b > 0,$$

so ordinary matter obeying the null energy condition makes the brane "concave towards $M$ in the null direction", and there is a bulk null geodesic from P to a point R in the past of Q **[HIGH] S1** (eq. 11). The paper's words: "the causality in the view point of $\Sigma$ is apparently violated. True causality should be defined by the null geodesics in $M$." The effect grows with matter density, so the two regimes where it matters are gravitational collapse and the early universe; in the closed FRW brane universe the initial singularity is pointlike from the bulk's point of view and "there is no particle horizon" **[HIGH] S1**.

**Caldwell and Langlois's size.** Take the bulk to be Schwarzschild-anti-de Sitter,

$$ds^2 = -f(R)\,dT^2 + f(R)^{-1}dR^2 + R^2 d\Sigma_k^2, \qquad f(R) = k + \frac{R^2}{\ell^2} - \frac{\mu}{R^2},$$

with $\ell$ the anti-de Sitter curvature radius, and the homogeneous brane moving on $R_b(T)$ so that $R_b(t) = a(t)$ is the scale factor and the brane Friedmann equation is $H^2 = \kappa_{(5)}^4\rho_{\rm brane}^2/36 + \Lambda/6$ **[HIGH] S1** (Caldwell and Langlois 2001, eqs. 1 to 6). Null geodesics in the bulk have conserved $E = f\,dT/d\lambda$ and $P = R^2 dr/d\lambda$, and for $k = \mu = 0$ integrate to $1/R_A - 1/R = \alpha E r/P$ with $\alpha = \sqrt{1 - P^2/E^2\ell^2}$. Eliminating the constants, the comoving distance a bulk null geodesic covers between leaving the brane at $t_A$ and returning at $t_B$ is

$$r_g = \left[\left(\int_{t_A}^{t_B}\frac{dt}{a}\sqrt{1 + \ell^2H^2}\right)^2 - \left(\int_{t_A}^{t_B}\frac{dt}{a}\,\ell H\right)^2\right]^{1/2},$$

against the photon's $r_\gamma = \int dt/a$ **[HIGH] S1** (eqs. 19, 20). For a static or de Sitter brane ($H$ constant) the two coincide, as Ishihara's condition ($\rho + p = 0$) requires. In the low-energy regime $\ell H \ll 1$, for a signal arriving today from redshift $z$ in the matter era,

$$\frac{r_g}{r_\gamma} \approx 1 + \frac{1}{10}(\ell H_0)^2 (1 + z)^{5/2},$$

and since tests of the inverse-square law put $\ell$ below about a millimetre, $\ell H_0 \lesssim 10^{-29}$ and the advance is of order $10^{-58}$ times $(1 + z)^{5/2}$ **[HIGH] S1** (eq. 22). In the high-energy regime $\ell H \gg 1$ the ratio is independent of $\ell$ and can reach $r_g/r_\gamma \sim (M_{\rm Pl}/M_{(5)})^{1/4} \sim 10^3$ for the lowest allowed $M_{(5)} \sim 10^8$ GeV, against the $10^{14}$ the horizon problem needs **[HIGH] S1** (eqs. 25 to 27). Their verdict: "shortcuts through the fifth dimension ... are not short enough to solve the classical horizon problem", and for a local distortion of the brane by a mass like the Earth, "the effect is negligible" **[HIGH] S1**. They note the result holds for an empty bulk with one infinite warped dimension and that "there is no shortcut for compact, flat extra dimensions" **[HIGH] S1**.

**Chung and Freese's construction.** Their viable cosmological example is a two-brane metric

$$ds^2 = dt^2 - e^{-2ku}a^2(t)\,d\mathbf h^2 - du^2,$$

with our brane at $u = 0$ and a hidden brane at $u = L$; a signal that leaves perpendicular to the brane, runs along the hidden brane and returns covers a brane distance $h_{(1,2)} = e^{kL}\int_L^{t_f - L} dt/a$ against the brane's own $h_{(1,3)} = \int_0^{t_f} dt/a$, so for $kL \sim \ln(10^5)$ the $10^5$ causally disconnected patches at last scattering could have been in contact **[HIGH] S1** (Chung and Freese 2000, eqs. 3 to 9). Two honest caveats are in the paper. The path is patched from three geodesics with interactions at the hidden brane doing the turning, and "we have not found continuous paths which return to our brane at a point more distant than our naive 'horizon'"; and the brane energy density supporting the metric is a fine-tuned constant $\rho = 6k/\kappa_5^2$ of order $100\,M_5^3/L$ **[HIGH] S1** (§II A and §III). They also give the correct field-theoretic reading: the five-dimensional Green function does not fall off exponentially outside the four-dimensional light cone, so the brane's effective theory acquires non-local interactions, "a propagator that can leave the brane and hence connect two distant points on the brane" **[HIGH] S1** (§III).

**What it would look like from the brane.** A graviton (or a sterile neutrino, or any field not stuck to the brane) sent from P arrives at R before any photon from P could. To a brane observer using brane clocks and brane rulers this is a superluminal signal. The bulk light cone says nothing has exceeded $c$: the bulk geodesic is null and the brane's own light took the long way round because the brane is bent. Since Standard Model matter cannot leave the brane, the shortcut is for gravitons, and the time advance it gives them today is $10^{-58}$ of the travel time; the GW170817 coincidence of gravitational and electromagnetic arrival within seconds over $40$ Mpc is the observational version of that number, and Lin, Yu and Gong turn it into "an upper limit of $d \le 9$" on the number of extra dimensions in their braneworld model **[MED] S1** (Phys. Rev. D 109, 104015 (2024)).

## What it costs

**B-new.** A fifth dimension, warped, with an anti-de Sitter bulk, and the confinement of all Standard Model fields to the brane, none of which is in general relativity or the Standard Model.

**B-mass.** The shortcut is proportional to $(\ell H)^2$, which is $10^{-58}$ now; to make it order one requires the brane energy density to approach the brane tension $\sigma \sim M_{(5)}^6/M_{\rm Pl}^2$, the regime of the very early universe or the interior of a collapsing star. A local shortcut built by placing mass on the brane is negligible for anything the size of the Earth. This is energy beyond engineering, positive though it is.

**B-caus.** From the brane the shortcut is a superluminal signal and inherits [CAU-1](../../constraints/cau-1.md)'s consequences unless a frame is picked. The cosmological brane comes with one, the comoving frame in which the bulk is static and the brane homogeneous, and a local mass on the brane comes with its rest frame; the bulk geometry does supply the preferred frame the register's [CAU-4](../../constraints/cau-4.md) needs. The papers do not say this. The register's MAN-1 entry marks it as an inference of the register, and this dossier agrees while noting that no paper in the set has proved that every brane-bulk configuration has such a frame.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | On the brane the signal is superluminal and a boosted brane observer would see it reversed; the bulk geometry singles out the comoving (or local rest) frame in which the advance is fixed, and Ishihara's instruction that "true causality should be defined by the null geodesics in $M$" is the preferred-frame escape CAU-1 names, though none of the three papers says so. |
| CAU-2 | SATISFIES | Every shortcut is a null geodesic of the bulk, so the full five-dimensional spacetime has an ordinary causal structure with no closed causal curves for the conjecture to act on. |
| CAU-3 | N/A | There is no device to carry on a round trip; the shortcut is a property of the brane's embedding, not a mouth or a bubble. |
| CAU-4 | SILENT | The papers never address what picks the frame; the register infers that the bulk supplies one, and the literature has not settled it for general brane configurations (Csáki, Erlich and Grojean and Greene, Levin and Parikh show brane motion and asymmetric warping generate genuine Lorentz violation on the brane, which is the same question from the other side). |
| CAU-5 | N/A | No entanglement. |
| ENE-1 | SATISFIES | Ishihara's shortcut requires $T_{ab}k^ak^b > 0$ on the brane, which is the null energy condition holding, not failing; the bulk is anti-de Sitter vacuum, whose negative cosmological constant saturates the NEC. |
| ENE-2 | DODGES | Olum's and Gao and Wald's theorems bound time advances within one manifold against its own flat light cone; the shortcut compares a bulk null geodesic with a brane null geodesic on a different manifold, the register's listed escape of a curved rather than flat comparison background, and within the bulk itself no geodesic beats the bulk light cone. |
| ENE-3 | N/A | No negative energy density anywhere in the construction. |
| ENE-4 | N/A | No bubble to pocket. |
| ENE-5 | N/A | Not a warp metric; the brane metric is ordinary FRW. |
| ENE-6 | N/A | No Casimir bill. |
| ENE-7 | DODGES | The route is not a handle in one asymptotically flat four-dimensional spacetime but a null geodesic of a warped anti-de Sitter bulk that leaves and rejoins the brane; the bulk is neither asymptotically flat nor of changed topology, so neither hypothesis of Friedman, Schleich and Witt holds, and the achronal ANEC is never tested because the bulk light cone is respected throughout. |
| CON-1 | N/A | No bubble and no horizon; a bulk geodesic is not piloted. |
| CON-2 | DODGES | In the cosmological case the brane bending is supplied by matter already everywhere, so no route is laid; an engineered shortcut between chosen points would need the brane bent along the way in advance by mass placed at sublight speed, which is the bootstrap CON-2 describes, and Caldwell and Langlois find the local effect negligible. |
| CON-3 | N/A | Not a tube, though a brane deliberately bent along a route by placed mass would be the nearest analogue. |
| STA-1 | N/A | No horizon forms; the geometry is a standard brane cosmology. |
| STA-2 | N/A | No throat to hold open. |
| STA-3 | N/A | No chronology horizon. |
| HAZ-1 | N/A | No bubble wall. |
| HAZ-2 | N/A | No horizon flux. |
| HAZ-3 | N/A | No throat tides; the brane bending at cosmological scales is gentle. |
| LOR-1 | SATISFIES | Nothing is accelerated to $c$; the graviton is massless and the bulk geodesic is null. |
| LOR-2 | N/A | No tachyons; bulk fields have ordinary dispersion. |
| LOR-3 | SATISFIES | The front velocity of a bulk signal is the bulk $c$; the apparent brane superluminality is a path-length effect, not a front outrunning its own light cone. |
| LOR-4 | N/A | Neither the Scharnhorst calculation nor the OPERA instrument bears on a bulk geodesic, though Päs, Pakvasa and Weiler's sterile-neutrino shortcuts were briefly floated for OPERA. |
| WRP-1 | N/A | Not a warp drive and says what it is instead: a null geodesic of a higher-dimensional embedding, an L3 shortcut reached by L4 means. |
| WRP-2 | N/A | No shell. |
| WRP-3 | N/A | No positive-energy warp claim. |
| MAN-1 | SATISFIES | This is the entry's second half stated exactly: the shortcut is real, is a form of L3, remains inside the bulk light cone and looks from the brane like FTL, and the size is set by $(\ell H)^2$. |

## Status of the argument

- 1998: Kälbermann and Halevi note near-instantaneous connection through a fifth dimension for a thin-shell universe.
- 1999 to 2000: Chung and Freese (arXiv:hep-ph/9910235, Phys. Rev. D 62, 063513) propose bulk geodesics as a non-inflationary solution to the horizon problem, with explicit metrics and explicit caveats.
- 2000 to 2001: Ishihara (Phys. Rev. Lett. 86, 381) derives the general condition, brane matter obeying the NEC, and calls the result apparent causality violation.
- 2001: Caldwell and Langlois (Phys. Lett. B 511, 129) compute the gravitational horizon radius in Schwarzschild-anti-de Sitter and find the effect too small for the horizon problem by eleven orders of magnitude, and negligible locally; this is the standing reply to Chung and Freese's cosmological claim and has not been overturned.
- 2001: Csáki, Erlich and Grojean show asymmetric warping makes bulk gravity Lorentz violating on the brane.
- 2002 to 2005: six-dimensional generalisations (Abdalla et al.) and sterile-neutrino shortcut phenomenology (Päs, Pakvasa and Weiler).
- 2011: Greene, Levin and Parikh (Class. Quantum Grav. 28, 155013) show a brane moving in compact dimensions breaks global Lorentz invariance, with a twin-paradox signature.
- 2017 to 2024: GW170817's coincident arrival of gravitational and electromagnetic signals bounds any graviton shortcut; Lin, Yu and Gong (2024) turn it into $d \le 9$.
- No paper has claimed a usable shortcut for matter, and no peer-reviewed reply to Caldwell and Langlois's smallness estimate exists as of 2026-09-12.

## Sources

- Chung and Freese, "Can geodesics in extra dimensions solve the cosmological horizon problem?", Phys. Rev. D 62, 063513 (2000), arXiv:hep-ph/9910235. S1. Read in full.
- Ishihara, "Causality of the brane universe", Phys. Rev. Lett. 86, 381 (2001), arXiv:gr-qc/0007070. S1. Read in full.
- Caldwell and Langlois, "Shortcuts in the fifth dimension", Phys. Lett. B 511, 129 (2001), arXiv:gr-qc/0103070. S1. Read in full.
- Randall and Sundrum, "A large mass hierarchy from a small extra dimension", Phys. Rev. Lett. 83, 3370 (1999), arXiv:hep-ph/9905221. S1.
- Arkani-Hamed, Dimopoulos and Dvali, "The hierarchy problem and new dimensions at a millimeter", Phys. Lett. B 429, 263 (1998), arXiv:hep-ph/9803315. S1.
- Csáki, Erlich and Grojean, "Gravitational Lorentz violations and adjustment of the cosmological constant in asymmetrically warped spacetimes", Nucl. Phys. B 604, 312 (2001), arXiv:hep-th/0012143. S1.
- Kälbermann and Halevi, "Nearness through an extra dimension", arXiv:gr-qc/9810083 (1998). S1 (preprint; the INSPIRE record lists a proceedings publication).
- Abdalla, Casali and Cuadros-Melgar, "Shortcuts for graviton propagation in a six dimensional brane world model", Nucl. Phys. B 644, 201 (2002), arXiv:hep-th/0205203. S1.
- Päs, Pakvasa and Weiler, "Sterile-active neutrino oscillations and shortcuts in the extra dimension", Phys. Rev. D 72, 095017 (2005), arXiv:hep-ph/0504096. S1.
- Greene, Levin and Parikh, "Brane-world motion in compact dimensions", Class. Quantum Grav. 28, 155013 (2011), arXiv:1103.2174. S1.
- Lin, Yu and Gong, "Limiting the number of extra dimensions with shortcuts", Phys. Rev. D 109, 104015 (2024), arXiv:2312.17549. S1.
- Lee, Adelberger, Cook, Fleischer and Heckel, "New test of the gravitational $1/r^2$ law at separations down to 52 μm", Phys. Rev. Lett. 124, 101101 (2020). S1 (for the sub-millimetre bound on $\ell$; Caldwell and Langlois cite the 2001 state of the art).
