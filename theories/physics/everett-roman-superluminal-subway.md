# Everett and Roman 1997: the superluminal subway

*The Krasnikov tube in four dimensions: its negative-energy bill, its Planck-thin walls and the time machine two tubes make.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

The [Alcubierre](alcubierre-1994.md) bubble has a flaw that has nothing to do with energy: for $v_s > 1$ the observer at its centre is causally separated from the outer edge of the wall, so the crew "can neither create a warp bubble on demand nor control one once it has been created". Everett and Roman's claim is that [Krasnikov's](krasnikov-tube.md) two-dimensional metric, which was built to respect causality in exactly this sense, extends to a four-dimensional "tube" laid along the path of an outbound ship; that inside the tube spacetime is flat with the light cones opened so that travel in one direction is superluminal as seen from outside; that a one-way trip can never be shortened but a round trip can be made arbitrarily short by Earth's clocks; and that a network of such tubes would be an interstellar subway allowing effectively instantaneous communication between the points it connects. The tube is static once made, which the bubble is not.

The claim is deliberately double-edged. The same paper shows that a system of two non-overlapping tubes is a time machine, so the subway carries closed timelike curves as a corollary; that the stress-energy of the tube necessarily violates the weak energy condition near its axis; that the quantum inequalities confine the negative energy to walls no thicker than about $10^4$ Planck lengths; and that the total negative energy for a tube one metre long and one metre wide is of order $10^{16}$ galactic masses, rising to $10^{32}$ for a tube to the nearest star. Their conclusion is that the tube "suffers from some of the same drawbacks" as bubbles and wormholes "and is hence also a very unlikely possibility". The steelman is that the causal objection to the bubble is answered, cleanly and by construction, and the energy objection is the same one every other superluminal geometry faces.

## Origin and lineage

Allen E. Everett and Thomas A. Roman, Tufts Institute of Cosmology, "A superluminal subway: the Krasnikov tube", Phys. Rev. D 56, 2100 (1997), arXiv:gr-qc/9702049 (February 1997) **[HIGH] S1**. It answers Krasnikov's 1995 preprint, which was not published until 1998, and it applies the machinery of Ford and Roman's quantum inequalities ([ENE-3](../../constraints/ene-3.md)) and Everett's 1996 two-bubble time machine ([CAU-3](../../constraints/cau-3.md)) to the new geometry. The register carries it in three places: the control argument in [CON-1](../../constraints/con-1.md), the tube's bill and the two-tube machine in [CON-3](../../constraints/con-3.md), and the Krasnikov tube as CON-2's escape. Krasnikov's 2003 reply on the quantum inequalities is the one direct response. Lobo and Crawford (2003) and Alcubierre and Lobo (2017) carry the tube into the review literature as one of the three known superluminal geometries.

## The mechanism

Units $G = c = 1$. **Why the bubble cannot be steered.** A photon emitted forward from a ship at rest at the bubble centre has $dx/dt = v + 1$ there, since the primed coordinates $x' = x - x_0(t)$ are locally inertial. In the wall, where $0 < f < 1$, there is a point $x'_c$ where $dx/dt = v$, that is $dx'/dt = 0$: the photon is at rest relative to the bubble and simply carried along. Forward photons never reach the outer edge of the wall, which therefore lies outside the ship's forward light cone. "The bubble thus cannot be created (or controlled) by any action of the spaceship crew, excluding the use of [tachyonic](tachyons-feinberg-1967.md) signals" **[HIGH] S1**. The actions that create it must be taken beforehand by an observer whose forward light cone contains the entire trajectory, and a ship "appropriately located with respect to the bubble trajectory could then choose to enter the bubble, rather like a passenger catching a passing trolley car".

**The two-dimensional tube.** Krasnikov's metric, in factored and expanded form,

$$ds^2 = -(dt - dx)\bigl(dt + k(x,t)\,dx\bigr) = -dt^2 + \bigl(1 - k(x,t)\bigr)\,dx\,dt + k(x,t)\,dx^2,$$

$$k(x,t) \equiv 1 - (2 - \delta)\,\theta_\varepsilon(t - x)\bigl[\theta_\varepsilon(x) - \theta_\varepsilon(x + \varepsilon - D)\bigr],$$

with $\theta_\varepsilon$ smooth and monotone, 0 for $\xi < 0$ and 1 for $\xi > \varepsilon$. For $k = 1$ this is Minkowski space; for $t > x$ and $\varepsilon < x < D - \varepsilon$ it has $k = \delta - 1$. The ship leaves Earth ($x = 0$) at $t = 0$ at essentially light speed, arrives at Deneb ($x = D$) at $t \approx D$, and changes $k$ from 1 to $\delta - 1$ along its path, leaving transition regions of width $\varepsilon$ at each end and along its own world line, the last because it cannot modify the metric at $x$ before $t = x$ **[HIGH] S1**. Setting $ds^2 = 0$, the two branches of the forward light cone are $dt/dx = 1$ and $dt/dx = -k$: as $k$ falls through zero to $\delta - 1$ the left-hand branch tips over and "opens out" until for $k \approx -1$ the forward and backward cones together cover almost all of spacetime. Inside, the transformation $dt' = dt + (\delta/2 - 1)\,dx$, $dx' = (\delta/2)\,dx$ makes the metric Minkowski, and

$$\frac{dt}{dt'} = 1 + \frac{2 - \delta}{\delta}\,\frac{dx'}{dt'} .$$

A causal object has $|dx'/dt'| < 1$, $dt' > 0$; moving in the $+x$ direction it always has $dt > 0$, but for $\delta < 1$ an object moving close enough to the left-hand branch has $dt/dt' < 0$ and "appear[s] to propagate backward in time as seen by observers in the external region" **[HIGH] S1**. The return from Deneb at $dx'/dt' \approx -1$ has $v_r = dx/dt \approx -1/k = 1/(1 - \delta)$ with $dt < 0$; the return takes $\Delta t_r = -D/v_r = D(\delta - 1)$ and the ship is home at

$$t_E = D + \Delta t_r = D\delta,$$

positive, since the cone is opened only for $t > 0$, so a single tube "does not lead to CTCs", but arbitrarily small by choice of $\delta$. For $\delta < 1$ the choice $dx'/dt' = -\delta/(2 - \delta)$ gives $dt/dt' = 0$: an instantaneous return by outside clocks **[HIGH] S1**.

**Four dimensions.** The disturbance propagates radially from the $x$ axis, cannot reach beyond $\rho = t - x$ with $\rho = \sqrt{y^2 + z^2}$, and is cut off at a maximum radius $\rho_{\max} \ll D$:

$$k(t, x, \rho) \equiv 1 - (2 - \delta)\,\theta_\varepsilon(\rho_{\max} - \rho)\,\theta_\varepsilon(t - x - \rho)\bigl[\theta_\varepsilon(x) - \theta_\varepsilon(x + \varepsilon - D)\bigr],$$

$$ds^2 = -dt^2 + \bigl(1 - k(t,x,\rho)\bigr)\,dx\,dt + k(t,x,\rho)\,dx^2 + d\rho^2 + \rho^2 d\phi^2 .$$

For $t \gg D + \rho_{\max}$ this is a static tube of radius $\rho_{\max}$ about the $x$ axis with a flat core ($k = \delta - 1$) of radius $\rho_{\max} - \varepsilon$, surrounded by curved walls and end caps of thickness $\varepsilon$ **[HIGH] S1**. The coordinate slices $t = \mathrm{const}$ carry the metric $k\,dx^2 + d\rho^2 + \rho^2 d\phi^2$, which is not spacelike where $k < 0$; the geometry is outside the warp-drive class of [WRP-1](../../constraints/wrp-1.md).

**The time machine.** In three space dimensions the ship can return outside the first tube along a parallel path at distance $\rho_0$ with $D \gg \rho_0 > 2\rho_{\max}$, laying a second tube with $x \to D - x$ and $t \to t - D$. The two tubes do not overlap. A ship leaving Earth at $t = 2D$ takes the second tube to Deneb, arriving at $t = D$, then the first tube back to Earth, arriving at $t \approx 0$: a closed timelike curve, by the same argument as Everett's for two bubbles and [Morris, Thorne and Yurtsever's](morris-thorne-yurtsever-time-machine.md) for two wormholes. A subway network "allowing instantaneous communication between points connected by the tubes" has "as a necessary corollary" backward time travel and closed timelike curves; they could be avoided "only if, for some reason, there existed a preferred axis" along which every tube's superluminal direction had a positive component. Pairs of oppositely directed tubes of laboratory dimensions would already form time machines **[HIGH] S1**.

**The stress-energy.** Computed with MathTensor from the four-dimensional metric, the energy density seen by a static observer is

$$T_{tt} = \frac{1}{32\pi (1 + k)^2}\left[-\frac{4(1 + k)}{\rho}\,\frac{\partial k}{\partial\rho} + 3\left(\frac{\partial k}{\partial\rho}\right)^2 - 4(1 + k)\,\frac{\partial^2 k}{\partial\rho^2}\right],$$

involving only $\rho$ derivatives of $k$. Since $k$ rises monotonically from $\delta - 1$ on the axis to 1 beyond $\rho_{\max}$, $\partial k/\partial\rho$ and $1 + k$ are positive, and analyticity at the axis gives $\partial k/\partial\rho \approx \beta\rho^m$ with $m \geq 1$ near $\rho = 0$; the first and third terms are then negative and dominate the positive second term by a factor $\rho^{-m-1}$, so "there is necessarily a range of $\rho$ near the axis of the tube where the energy density seen by a static observer is negative" **[HIGH] S1**. With the explicit choice $\theta_\varepsilon(\xi) = \tfrac{1}{2}[\tanh(2(2\xi/\varepsilon - 1)) + 1]$, $T_{tt}$ is negative on the inner side of the wall and positive on the outer side (Figure 5, with $\delta = 0.01$, $\varepsilon = 10$, $\rho_{\max} = 1000\varepsilon$); the case $k = -1$, $\delta = 0$, is excluded because $T_{tt}$ diverges there.

**The quantum inequality.** For a static geodesic observer in the middle of the left end cap at $\rho = \rho_{\max} - \varepsilon$, with $\rho_{\max} = n\varepsilon$, $n \gg 1$ and small $\delta$,

$$T_{\hat t\hat t} \approx -\frac{1}{8\pi\varepsilon^2}, \qquad \hat R_{\max} \approx \frac{1}{\varepsilon^2}, \qquad r_c \approx \varepsilon,$$

and the same holds at the midpoint of the tube. The flat-space inequality $\frac{\tau_0}{\pi}\int_{-\infty}^{\infty}\frac{\langle T_{\mu\nu}u^\mu u^\nu\rangle\,d\tau}{\tau^2 + \tau_0^2} \geq -\frac{3}{32\pi^2\tau_0^4}$, applied with sampling time $\tau_0 = \sigma\varepsilon$, $\sigma \ll 1$, gives

$$\varepsilon \lesssim \frac{\ell_P}{\sigma^2}, \qquad \text{so for } \sigma \approx 0.01, \quad \varepsilon \lesssim 10^4\,\ell_P \approx 10^{-31}\ \mathrm{m}.$$

A thick tube with $\rho_{\max} \approx \varepsilon$ is bounded instead by $\rho_{\max} \lesssim \ell_P/\sigma^2$, "similar to that found in the case of traversable wormholes" **[HIGH] S1**.

**The bill.** Because the slices are not everywhere spacelike, the total is estimated in a thin band $\Delta\rho = \alpha\varepsilon$, $\alpha \ll 1$, where $k$ is nearly constant and the density most negative, with proper volume $V \approx 2\pi\rho_{\max}\,\alpha\varepsilon\,D$:

$$E \approx T_{\hat t\hat t}\,V \approx -\frac{\alpha\,\rho_{\max}\,D}{\varepsilon} .$$

With $D = \rho_{\max} = 1\ \mathrm{m} = 10^{35}\,\ell_P$ and $\varepsilon = 100\,\ell_P$,

$$E \approx -\alpha\,10^{68}\,m_{\mathrm{Planck}} = -\alpha\,10^{63}\ \mathrm{g} = -\alpha\,10^{18}\,M_{\mathrm{galaxy}},$$

taking $M_{\mathrm{galaxy}} \approx 10^{12}$ solar masses; for $\alpha = 0.01$, "one requires negative energies of the order of $10^{16}$ galactic masses just to make a Krasnikov tube 1 meter long and 1 meter wide", and for $D \approx 4 \times 10^{16}$ m, the nearest star, $E \approx -10^{32}\,M_{\mathrm{galaxy}}$ **[HIGH] S1**. The positive energy on the outer wall is not expected to cancel this, since the cancellation would have to be exact to extraordinary accuracy. The density scales as $1/\varepsilon^2$ and the total as $1/\varepsilon$, as for the Alcubierre bubble.

**The loophole they close themselves.** Writing $\eta = 2 - \delta$, the light cone opens by an amount proportional to $\eta$ and the wall density scales as $\eta/\varepsilon^2$; for $\eta \ll 1$ the inequality can be satisfied with macroscopic walls, for example $\tau_0 = \varepsilon \approx 1$ cm with $\eta \approx 10^{-66}$, but then the speed of a backward light ray inside the tube exceeds 1 "by only one part in $10^{66}$" and the superluminality is "completely unobservable" **[HIGH] S1**.

## What it costs

**B-neg.** The energy density near the axis is negative by a general argument that uses only the monotonicity and analyticity of $k$, and negative on the inner wall for the explicit profile; the paper's stated purpose in section 5 is to show the weak energy condition "is necessarily violated in some regions" ([ENE-1](../../constraints/ene-1.md), [ENE-2](../../constraints/ene-2.md)).

**B-mass.** Walls no thicker than $10^4$ Planck lengths and a total of $10^{16}$ galactic masses of negative energy per metre of tube, $10^{32}$ to the nearest star ([ENE-3](../../constraints/ene-3.md)). The only way to thicken the walls, $\eta \approx 10^{-66}$, makes the effect unmeasurable.

**B-boot.** The tube is laid at light speed on the outbound trip and used on the way back; the one-way time "cannot be shortened". The proposal accepts the bootstrap and turns it into a design ([CON-2](../../constraints/con-2.md), [CON-3](../../constraints/con-3.md)).

**B-caus.** Two non-overlapping tubes are a time machine, and a subway network implies one as a "necessary corollary"; the only escape the authors can name is a preferred axis ([CAU-3](../../constraints/cau-3.md), [CAU-4](../../constraints/cau-4.md)).

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | One tube is superluminal in one direction between two fixed endpoints and returns the traveller at $t_E = D\delta > 0$; CAU-1 names one-directional, fixed-endpoint FTL as an escape hatch and the paper proves the single tube uses it. The paper also proves the hatch closes with a second tube. |
| CAU-2 | SILENT | Hawking's result that closed timelike curves require WEC violation is cited, but whether chronology protection forbids the two-tube machine is not adjudicated; the authors say it forces one "to confront all the associated problems". |
| CAU-3 | VIOLATES | Section 4 constructs the time machine from two non-overlapping tubes explicitly, with the ship leaving Earth at $t = 2D$ and returning at $t \approx 0$, and notes the analogy to Everett's two bubbles and the two-wormhole system. |
| CAU-4 | SILENT | The authors state that closed timelike curves could be avoided only by a preferred axis fixing the orientation of every tube, which is a CAU-4 frame; they propose no mechanism that would pick it. |
| CAU-5 | N/A | No quantum signalling. |
| ENE-1 | VIOLATES | The static-observer energy density is negative in a range near the axis by the general argument of section 5 and on the inner wall for the explicit profile; the weak energy condition fails. |
| ENE-2 | VIOLATES | The return leg is a causal path between flat-space points that beats light through flat space, which is Olum's definition; the negative energy the theorem demands is exhibited in the wall. |
| ENE-3 | VIOLATES | The quantum inequality is applied in section 6: walls at most $\ell_P/\sigma^2 \approx 10^4\,\ell_P$ thick, and a total of order $10^{16}$ galactic masses per metre of tube. The paper is one of the entry's citations. |
| ENE-4 | SILENT | No pocket-style reduction is attempted for the tube, and the paper predates Van Den Broeck; whether the trick transfers is unexamined here. |
| ENE-5 | N/A | The tube's slices are not flat and not everywhere spacelike, so it lies outside the Natário class the theorem covers. |
| ENE-6 | SILENT | The negative energy is assumed to come from a quantum field in some state (footnote 21 says the conclusion is unchanged for massive scalar or electromagnetic fields); no source at Casimir scale is proposed and the gap is not addressed. |
| ENE-7 | N/A | The tube is four-dimensional with trivial topology, so it is not the object the censorship theorem constrains. The time advance on the return leg is the geometric kind ENE-2 prices, and ENE-7 restates that entry for wormholes only. |
| CON-1 | SATISFIES | The paper is the source of the control argument against the bubble, and the tube is analysed precisely because every modification of the metric "necessarily occurs in the causal future of the launch point of the spaceship". No horizon separates crew from structure. |
| CON-2 | SATISFIES | The one-way trip is limited by "all the usual restrictions of special relativity"; the tube is laid on the outbound leg and used on the return. The bootstrap is accepted as the design. |
| CON-3 | SATISFIES | This paper is the entry: arbitrarily short round trips, Planck-thin negative-energy layers, large total negative energies and the two-tube time machine, all verified against the text. |
| STA-1 | SILENT | The tube has no horizon and is static after formation, so the Hiscock mechanism is absent, but the authors compute no renormalised stress-energy; their footnote that the short-sampling-time limit should "kill off" effects of the formation-time metric dependence is an assumption about the quantum state, not a stability analysis. |
| STA-2 | N/A | No throat; the wormhole comparison is only for the scaling of the energy bill (footnote 25). |
| STA-3 | SILENT | The two-tube machine has a chronology horizon whose semiclassical behaviour the paper does not compute; the Kim and Thorne versus Hawking question is unsettled there. |
| HAZ-1 | N/A | The tube is static and sweeps up nothing; the ship inside moves at near light speed in a flat core with ordinary relativistic hazards only. |
| HAZ-2 | N/A | No horizon and no Hawking flux; the core is Minkowski space with tilted cones. |
| HAZ-3 | N/A | Not a throat; curvature is confined to walls of width $\varepsilon$ that the ship does not cross. |
| LOR-1 | SATISFIES | Inside the tube the ship propagates causally with $|dx'/dt'| < 1$ in the local Minkowski frame; the superluminality is a property of the opened cone as seen from outside. |
| LOR-2 | SATISFIES | The construction excludes tachyonic signals by design; the forward light cone of the launch contains every modification. |
| LOR-3 | N/A | No medium. |
| LOR-4 | N/A | Not relevant. |
| WRP-1 | N/A | Not in the class: $g_{xx} = k$ varies and can be negative, so the slices are neither flat nor everywhere spacelike. The paper says what the object is instead, a static tube with opened light cones. |
| WRP-2 | N/A | Not a shell moving inertially; the tube does not move. |
| WRP-3 | N/A | No positive-energy claim and not a bubble; the dated score is unaffected. |
| MAN-1 | N/A | Four dimensions, trivial topology. |

## Status of the argument

- **1997.** The paper. Four-dimensional tube, WEC violation, quantum-inequality wall bound, energy estimate, two-tube time machine **[HIGH] S1**.
- **1998.** Krasnikov's original is published, citing this paper for the $10^{32}$ galactic-mass figure and proposing that spacetimes where the flat-space inequality fails, near an almost-formed time machine, are the ones worth searching for **[HIGH] S1**.
- **1999.** Van Den Broeck cites the tube as an earlier attempt to improve on Alcubierre and attacks the bubble's bill instead **[HIGH] S1**.
- **2003.** Krasnikov, Phys. Rev. D 67, 104013: by explicit examples in a class including the tube, the quantum inequality does not always imply large densities, large densities need not mean large total energy, and large total negative energy is physically meaningless in some relevant situations **[HIGH] S1**. This is the one direct published challenge to the bill; no rebuttal found as of 2026-09-12.
- **2003 and 2017.** Lobo and Crawford, then Alcubierre and Lobo, carry the tube into the review literature as the geometry that answers the horizon problem and still pays in negative energy **[HIGH] S2**.
- **2026-09-12.** The control argument against the bubble is uncontested. The two-tube time machine is uncontested. The energy bill is contested in its interpretation (Krasnikov 2003) and not in its arithmetic. No one has proposed a source, a smaller number or a way to lay a tube.

## Sources

- **S1** Everett, A. E. and Roman, T. A., "A superluminal subway: the Krasnikov tube", Phys. Rev. D 56, 2100–2108 (1997), arXiv:gr-qc/9702049. Read in full.
- **S1** Krasnikov, S. V., "Hyperfast interstellar travel in general relativity", Phys. Rev. D 57, 4760–4766 (1998), arXiv:gr-qc/9511068. Read in full.
- **S1** Krasnikov, S., "The quantum inequalities do not forbid spacetime shortcuts", Phys. Rev. D 67, 104013 (2003), arXiv:gr-qc/0207057. Abstract read.
- **S1** Alcubierre, M., Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. Read in full.
- **S1** Everett, A. E., "Warp drive and causality", Phys. Rev. D 53, 7365 (1996). Via INSPIRE and the register, CAU-3.
- **S1** Ford, L. H. and Roman, T. A., Phys. Rev. D 51, 4277 (1995), arXiv:gr-qc/9410043; Phys. Rev. D 53, 5496 (1996); Phys. Rev. D 55, 2082 (1997), arXiv:gr-qc/9607003. The inequalities applied here; via the register, ENE-3.
- **S1** Pfenning, M. J. and Ford, L. H., Class. Quantum Grav. 14, 1743 (1997), arXiv:gr-qc/9702026. The parallel bubble analysis; abstract read.
- **S1** Hawking, S. W., Phys. Rev. D 46, 603 (1992). Cited for WEC violation at closed timelike curves; via the register, CAU-2.
- **S1** Morris, M. S., Thorne, K. S. and Yurtsever, U., Phys. Rev. Lett. 61, 1446 (1988). The two-wormhole analogue; via the register, CAU-3.
- **S1** Van Den Broeck, C., Class. Quantum Grav. 16, 3973 (1999), arXiv:gr-qc/9905084. Read in full.
- **S2** Lobo, F. S. N. and Crawford, P., Lect. Notes Phys. 617, 277–291 (2003), arXiv:gr-qc/0204038. Abstract read.
- **S2** Alcubierre, M. and Lobo, F. S. N., Fundam. Theor. Phys. 189, 257–279 (2017), arXiv:2103.05610. Abstract read.
- **S2** Visser, M., *Lorentzian Wormholes: from Einstein to Hawking* (AIP, 1995). Cited for the two-wormhole time machine diagram and the Jupiter-mass wormhole figure; not read directly.
