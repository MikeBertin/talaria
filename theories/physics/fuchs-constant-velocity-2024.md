# Fuchs et al. 2024: the constant-velocity physical warp shell

*A matter shell of two Jupiter masses carrying a small shift vector, satisfying every energy condition, subluminal and at constant velocity: the one positive-energy warp result still standing.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K3 · **Bill:** B-mass, B-none · **Last reviewed:** 2026-09-12

## The claim

Jared Fuchs and five colleagues at Applied Physics present what they call the first constant-velocity subluminal physical warp drive: a spacetime that transports passengers along a geodesic in the manner of the Alcubierre metric while satisfying the null, weak, strong and dominant energy conditions everywhere, with a positive ADM mass. The construction is deliberately modest in the right places. Start with a stable spherical shell of ordinary matter, built numerically in its own rest frame with anisotropic pressure so that it does not collapse. Add, inside the shell, a shift vector along the direction of motion, shaped like the Alcubierre profile but small. The shift gives the interior the property that defines a warp drive in their sense: an observer who entered at rest is carried along at the drive's coordinate velocity without local acceleration or tidal force. Keep the shift below the level at which the momentum flux it induces would outrun the energy density, and the energy conditions survive.

They state the three ingredients they believe a physical warp drive needs: a positive ADM mass, so the far field looks like a gravitating body rather than a truncated bubble; an energy density much larger than the pressures and momentum flux in the wall, as Eulerian observers see it; and subluminal speed. They show the shift is not a coordinate artefact by an invariant light-ray test, and they say plainly what they have not done: no acceleration phase, no superluminal phase and a mass chosen by trial. The claim is that "classic warp drive spacetimes can be made to satisfy the energy conditions by adding a regular matter shell with a positive ADM mass", nothing more.

## Origin and lineage

Fuchs, Helmerich, Bobrick, Sellers, Melcher and Martire, University of Alabama in Huntsville and Applied Physics, arXiv:2405.02709, May 2024; Class. Quantum Grav. 41, 095013 (2024) **[HIGH] S1**. It is the numerical descendant of [Bobrick and Martire 2021](bobrick-martire-2021.md), whose analytic shell Santiago, Schuster and Visser had found to reduce to flat space, and it is built with the Warp Factory toolkit of the companion paper Helmerich et al. 2024. It takes its shift profile from [Alcubierre 1994](alcubierre-1994.md), compares itself to [Van Den Broeck 1999](van-den-broeck-1999.md) and to the Natário class of [Natário 2002](natario-2002.md), and answers the critique in [ENE-5](../../constraints/ene-5.md) by leaving the class that critique covers. The register records it in [WRP-3](../../constraints/wrp-3.md) as the one surviving positive-energy result, and in [WRP-2](../../constraints/wrp-2.md) it is the shell that entry says positive energy can buy.

## The mechanism

In the 3+1 form

$$ds^2 = -\alpha^2 dt^2 + \gamma_{ij}\,(dx^i + \beta^i dt)(dx^j + \beta^j dt),$$

a passenger in a flat interior region has $du_i/dt = 0$, so with $u_i = 0$ on entry the coordinate motion is $dx^i/dt = -\beta^i = -\gamma^{ij}\beta_j$: the shift alone does the transporting, which is how the Alcubierre drive works and why a constant-velocity drive with passengers who were always comoving would need no shift at all **[HIGH] S1**. The warp shell is

$$g_{\text{warpshell}} = g_{\text{shell}} + \delta g_{\text{warp}},$$

with $\delta g_{\text{warp}}$ carrying only a $g_{01}$ component **[HIGH] S1**.

The shell is a static spherically symmetric metric $ds^2 = -e^{2a}dt^2 + e^{2b}dr^2 + d\Omega^2$ with anisotropic stress $T_{\hat\mu\hat\nu} = \mathrm{diag}(\rho, P_1, P_2, P_3)$. It is built iteratively: a constant-density shell between $R_1$ and $R_2$; an isotropic pressure from the Tolman–Oppenheimer–Volkoff equation

$$\frac{dP'}{dr} = -G\,\big(\rho'/c^2 + P'/c^4\big)\big(m'/r^2 + 4\pi r P'/c^2\big)\Big(1 - \frac{2Gm'}{c^2 r}\Big)^{-1}$$

with $P' = 0$ at $R_2$ and inside $R_1$; a moving-average smoothing of density and pressure, applied four times with span ratio $s_\rho/s_P \approx 1.72$, to soften the discontinuities; then $e^{2b} = (1 - 2Gm/c^2r)^{-1}$ and $da/dr = G\,(m/c^2r^2 + 4\pi r\tilde P/c^4)(1 - 2Gm/c^2r)^{-1}$ integrated inward from a Schwarzschild exterior **[HIGH] S1**. The smoothing is what produces the hoop stress at the inner face that keeps the shell up; the coefficients were "found by trial and error" **[HIGH] S1**. The parameters are $R_1 = 10$ m, $R_2 = 20$ m and $M = 4.49 \times 10^{27}$ kg, 2.365 Jupiter masses, with the mass chosen "to allow the most amount of the shift vector to the drive while balancing physicality" **[HIGH] S1**.

The shift is added through

$$g_{01}^{\text{warp}} = g_{01} - S_{\text{warp}}(r)\,\big(g_{01} + \beta_{\text{warp}}\big),$$

with $S_{\text{warp}}$ a compact sigmoid equal to 1 inside $R_1 + R_b$ and 0 outside $R_2 - R_b$, built from $f(r) = \big[\exp\big((R_2 - R_1)(\tfrac{1}{r - R_2} + \tfrac{1}{r - R_1})\big) + 1\big]^{-1}$ **[HIGH] S1**. With $\beta_{\text{warp}} = 0.02$ the addition produces no energy-condition violation; the authors say this "is likely not an upper limit" **[HIGH] S1**. The conditions are evaluated in Warp Factory by contracting the Eulerian-frame stress-energy with 100 spatial orientations of null observers and, for timelike observers, an additional 10 speed magnitudes, at every grid point, the minimum over observers being reported; the stress-energy values are of order $10^{39}$ J m$^{-3}$ and the double-precision floor is about $10^{34}$, so nothing below a part in $10^{5}$ can be resolved **[HIGH] S1**. The shift adds a circulating momentum density of both signs near $r \approx (R_2 - R_1)/2$ and leaves the energy density essentially unchanged **[HIGH] S1**.

The invariant test sends light rays through the centre along and against the shift and compares the return times measured at the comoving emitters: the warp shell gives $\delta t \approx 7.6$ ns, the matter shell alone 0 ns and, at the same $v_{\text{warp}} = 0.04c$ an Alcubierre bubble of 15 m radius gives 8.0 ns, so the shift is a linear frame-dragging effect and "cannot be reduced to a coordinate transformation" **[HIGH] S1**. The Shapiro delay across the shell remains a delay, unlike the advance an Alcubierre bubble gives, which the authors attribute to the non-unit lapse that comes with ADM mass and suggest may be a further mark of physicality **[HIGH] S1**. Because the lapse is not unity and the spatial metric is not flat, the spacetime lies outside the Natário class, and the authors state it is "hence not subject to the same scope" as the null-condition theorem **[HIGH] S1**. The shell must stay outside its own Schwarzschild radius, $R_{\text{shell}} > 2GM_{\text{shell}}/c^2$, which caps how much energy density can be added and hence how much shift; for the chosen mass $2GM/c^2 \approx 6.7$ m against an inner radius of 10 m **[HIGH] S1**.

Acceleration is discussed and not solved. Moving the coordinate centre while ramping the shift reproduces the problem of the "Schwarzschild drive" of Schuster, Santiago and Visser, a negative energy density throughout space falling to zero at infinity; ejecting mass rocket-fashion is possible in principle but "becomes quickly untenable" because the shell mass that cancels acceleration inside must itself be pushed **[HIGH] S1**.

## What it costs

Nothing exotic, and that is the finding: B-none. The passengers ride a shell of ordinary matter at $0.02c$ with no negative energy anywhere, which by [ENE-2](../../constraints/ene-2.md) is what positive energy can buy. The price is B-mass: $4.49 \times 10^{27}$ kg of shell to move a 10 m cabin at two percent of light speed, with the authors hoping optimisation of the radial profiles might cut the mass "by orders of magnitude" **[HIGH] S1**. The mass ratio is the point to hold on to. A conventional ship reaches $0.02c$ by burning fuel; this one reaches it by carrying two Jupiters whose frame dragging carries the cabin, and it still has to be accelerated by something else. For the loophole the result is subluminal by construction: the Lorentz transformation used to bring the Alcubierre shift into the comoving frame exists only for $v < c$, and the authors list subluminal speed among their three ingredients of physicality. So L2 is answered here in the only way the register allows: a warp geometry built from positive energy exists, and it does not beat light.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | A subluminal shell: nothing outruns light in any frame, so the antitelephone never arises |
| CAU-2 | SATISFIES | No closed timelike curves can be built from a subluminal shell; there is nothing for chronology protection to forbid |
| CAU-3 | SATISFIES | Everett's construction needs two superluminal bubbles; two of these shells are two slow spaceships |
| CAU-4 | N/A | No faster-than-light sector for which a frame would need to be picked |
| CAU-5 | N/A | No entanglement signalling |
| ENE-1 | SATISFIES | Null, weak, strong and dominant conditions evaluated numerically over sampled null and timelike observers at every grid point, with no violation above the $10^{34}$ J m$^{-3}$ numerical floor against values of order $10^{39}$ |
| ENE-2 | SATISFIES | Subluminal, and the paper checks the point the entry turns on: the Shapiro delay through the shell is a delay, not an advance |
| ENE-3 | N/A | No negative energy, so no quantum-inequality bill on wall thickness or total |
| ENE-4 | N/A | No pocket geometry; Van Den Broeck appears only in the light-ray comparison table |
| ENE-5 | DODGES | The entry's own escape hatch: non-unit lapse and non-flat slices put the metric outside the Natário class the theorem covers, and the paper says so |
| ENE-6 | N/A | No negative energy to source |
| ENE-7 | N/A | A subluminal warp shell in a spacetime of trivial topology; the theorem has no handle to act on, and the ENE-2 row already records that the shell delays light rather than advancing it. |
| CON-1 | SATISFIES | Subluminal, so no horizon; the constraint that does apply, $R_{\text{shell}} > 2GM/c^2$, is respected with $2GM/c^2 \approx 6.7$ m inside a 10 m cabin |
| CON-2 | N/A | The bootstrap problem is about creating superluminal structure ahead of a first flight; a subluminal shell needs no route infrastructure. How to accelerate the shell at all is unsolved, which the paper calls "one of the foremost problems in warp drive research", but that is propulsion, not bootstrap |
| CON-3 | N/A | Not a tube |
| STA-1 | SATISFIES | No horizon forms at $0.02c$, and the entry records that the semiclassical problems disappear while the bubble stays subluminal; the classical shell is held up by the anisotropic hoop stress the construction supplies |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No time machine |
| HAZ-1 | N/A | The burst is released on dropping below $c$; this shell never exceeds it |
| HAZ-2 | N/A | No horizons, so no Hawking flux on the cabin |
| HAZ-3 | N/A | No throat |
| LOR-1 | SATISFIES | $\beta = 0.02$; the Lorentz transformation used to build the comoving shift exists only below $c$, and subluminal speed is one of the paper's three stated ingredients |
| LOR-2 | N/A | No tachyons |
| LOR-3 | N/A | No signal-velocity claim; the light-ray test measures a frame-dragging asymmetry, not a superluminal front |
| LOR-4 | N/A | Not Scharnhorst light or a particle measurement |
| WRP-1 | DODGES | Steps outside the class by design (non-unit lapse, curved slices) and gives its own three-part definition of a warp drive: geodesic transport, an empty passenger region and a comoving bounded bubble. Whether that is a warp drive or a spaceship with frame dragging is the WRP-2 question |
| WRP-2 | SATISFIES | It is the entry's shell: regular matter, positive ADM mass, moving inertially, subluminal |
| WRP-3 | SATISFIES | The one surviving positive-energy result the entry records, and it is subluminal and constant-velocity as the entry says |
| MAN-1 | N/A | No extra dimensions |

## Status of the argument

- **May 2024.** Preprint and publication in Class. Quantum Grav. 41, 095013, alongside the Warp Factory toolkit paper, Class. Quantum Grav. 41, 095009 **[HIGH] S1**. Popular coverage presented it as warp drives getting better; the paper itself claims a constant-velocity subluminal shell and no more **[MED] S4**.
- **2024 to 2026.** No peer-reviewed refutation as of 2026-09-12 **[MED] S1**. The register's WRP-3 entry, reviewed 2026-09-12, records the later positive-energy attempts around it: Rodal's 2026 "predominantly positive" drive in Gen. Relativ. Gravit. 58, 1, which still violates the null condition, and the 2026 preprints of Le and of Barzegar, Buchert and Vigneron **[MED] S1**. None of them displaces this shell as the one construction that passes every energy condition.
- **Open questions the authors list.** An upper limit on the shift before momentum flux exceeds energy density; optimisation of the density, pressure and shift profiles to cut the mass; and any physical acceleration phase, with the "spinning-up" question of whether ADM momentum can be gained without ejecting energy left open **[HIGH] S1**.
- **Standing.** K3: peer reviewed, worked numerically rather than as an exact solution and uncontested in print.

## Sources

- Fuchs, Helmerich, Bobrick, Sellers, Melcher and Martire, "Constant velocity physical warp drive solution", Class. Quantum Grav. 41, 095013 (2024), arXiv:2405.02709. S1.
- Helmerich, Fuchs, Bobrick, Sellers, Melcher and Martire, "Analyzing warp drive spacetimes with Warp Factory", Class. Quantum Grav. 41, 095009 (2024), arXiv:2404.03095. S1.
- Bobrick and Martire, "Introducing physical warp drives", Class. Quantum Grav. 38, 105009 (2021), arXiv:2102.06824. S1.
- Santiago, Schuster and Visser, "Generic warp drives violate the null energy condition", Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079. S1.
- Schuster, Santiago and Visser, "ADM mass in warp drive spacetimes", Gen. Relativ. Gravit. 55, 14 (2023), arXiv:2205.15950. S1.
- Rodal, "A warp drive with predominantly positive invariant energy density and global Hawking–Ellis type I", Gen. Relativ. Gravit. 58, 1 (2026), arXiv:2512.18008. S1.
- Alcubierre, "The warp drive: hyper-fast travel within general relativity", Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. S1.
- Van Den Broeck, "A 'warp drive' with more reasonable total energy requirements", Class. Quantum Grav. 16, 3973 (1999), arXiv:gr-qc/9905084. S1.
- Visser, Bassett and Liberati, "Perturbative superluminal censorship and the null energy condition", AIP Conf. Proc. 493, 301 (1999), arXiv:gr-qc/9908023. S1.
- Discover Magazine, "Why warp drives are about to get better" (2024). S4.
