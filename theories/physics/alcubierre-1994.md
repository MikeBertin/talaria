# Alcubierre 1994: the warp drive metric

*A bubble of contracted and expanded space that carries a ship past light speed, paid for in negative energy.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K4 · **Bill:** B-neg, B-mass, B-boot, B-caus · **Last reviewed:** 2026-09-12

## The claim

Within general relativity, and without wormholes or any change of topology, there is a spacetime in which a ship travels between two stars a distance $D$ apart and comes home in a time that can be made as short as you like, as measured by clocks on the ship and by clocks on the stars alike. The ship never moves faster than light locally. It sits at rest inside a small region of flat space, a "bubble", and the bubble is carried along by a distortion of spacetime itself: space contracts ahead of it and expands behind it, in the same way that comoving observers in an inflating universe separate faster than light without either of them ever leaving its light cone. The ship's world line is a timelike geodesic. Its proper time equals coordinate time, so there is no time dilation relative to home, no proper acceleration and, if the bubble wall is sharp and larger than the ship, negligible tidal force at the ship. The spacetime is globally hyperbolic, so it contains no closed causal curves.

The proposal does not claim that this spacetime can be built. Alcubierre says plainly that the metric violates the weak, dominant and strong energy conditions, that the matter needed is "exotic" in the same sense as the matter that holds a wormhole open, and that the only known licence for negative energy density is quantum field theory, for instance the Casimir effect. The claim is narrower and stronger than the press has ever made it: general relativity, taken as a theory of geometry, permits effective faster-than-light travel with trivial topology, and the whole obstruction is in the source.

A careful reader needs three things before going further. First, "faster than light" here means faster than light through the flat space outside the bubble; inside its local light cone the ship is subluminal, and light itself is carried by the same distortion. Second, the bubble's speed $v_s(t)$ is a free function, not a dynamical variable: the metric is written down, and the Einstein equations are then read backwards to find what stress-energy it demands. Third, the paper is a four-page letter in Classical and Quantum Gravity and contains no engineering, no field theory and no proposal for a source. Everything else in the literature on this drive is a reply to it.

## Origin and lineage

Miguel Alcubierre, then at Cardiff, published "The warp drive: hyper-fast travel within general relativity" as a letter in Classical and Quantum Gravity 11, L73 (1994); the arXiv copy gr-qc/0009013 was posted in 2000 **[HIGH] S1**. The question it answers is whether general relativity, which forbids local superluminal motion, also forbids a round trip in less than $2D/c$ by the clocks of someone who stayed home. The answer is no, and the construction borrows two things: the superluminal separation of comoving observers in inflation, which supplies the idea, and the 3+1 formalism of York, which supplies the language. The name is borrowed from science fiction; the lineage runs from Star Trek to the paper, not the other way, and the fictional drive predates the physics by three decades.

Everything downstream is on the register. Everett's two-bubble time machine ([CAU-3](../../constraints/cau-3.md)); Pfenning and Ford's quantum-inequality bill ([ENE-3](../../constraints/ene-3.md)); Hiscock's horizon and semiclassical divergence ([CON-1](../../constraints/con-1.md), [STA-1](../../constraints/sta-1.md)); Everett and Roman's control argument and the tube that answers it ([Everett and Roman 1997](everett-roman-superluminal-subway.md)); Krasnikov's and Coule's bootstrap ([CON-2](../../constraints/con-2.md), [Krasnikov 1998](krasnikov-tube.md)); Van Den Broeck's pocket ([Van Den Broeck 1999](van-den-broeck-1999.md), [ENE-4](../../constraints/ene-4.md)); Natário's class definition and zero-expansion drive ([Natário 2002](natario-2002.md), [WRP-1](../../constraints/wrp-1.md)); the 2021 positive-energy claims of [Lentz](lentz-solitons-2021.md), [Bobrick and Martire](bobrick-martire-2021.md) and [Fell and Heisenberg](fell-heisenberg-2021.md) and their 2022 refutation ([ENE-5](../../constraints/ene-5.md), [WRP-3](../../constraints/wrp-3.md)). Attempts to move the bill off the matter side of the field equations are surveyed in [warp drives in modified gravity](warp-drives-in-modified-gravity.md).

Lineage: [Star Trek to Alcubierre and back out](../../lineage/star-trek-alcubierre-outward.md).

## The mechanism

Units $G = c = 1$. In the 3+1 language spacetime is sliced into hypersurfaces of constant $t$ with 3-metric $\gamma_{ij}$, lapse $\alpha$ and shift $\beta^i$:

$$ds^2 = -(\alpha^2 - \beta_i\beta^i)\,dt^2 + 2\beta_i\,dx^i dt + \gamma_{ij}\,dx^i dx^j .$$

Alcubierre's choice, for a ship moving along $x$ on an arbitrary trajectory $x_s(t)$, is $\alpha = 1$, $\gamma_{ij} = \delta_{ij}$, $\beta^y = \beta^z = 0$ and

$$\beta^x = -v_s(t)\, f(r_s), \qquad v_s = \frac{dx_s}{dt}, \qquad r_s = \sqrt{(x - x_s(t))^2 + y^2 + z^2},$$

so that the line element is

$$ds^2 = -dt^2 + \bigl(dx - v_s f(r_s)\,dt\bigr)^2 + dy^2 + dz^2 .$$

The shaping function is

$$f(r_s) = \frac{\tanh\bigl(\sigma(r_s + R)\bigr) - \tanh\bigl(\sigma(r_s - R)\bigr)}{2\tanh(\sigma R)},$$

with $R > 0$ the bubble radius and $\sigma > 0$ the wall steepness; as $\sigma \to \infty$ it becomes a top hat, equal to 1 inside $r_s < R$ and 0 outside **[HIGH] S1**. Because the slices are flat and the lapse is unity, the Eulerian observers (four-velocity normal to the slices) are in free fall, and all the curvature lives in the extrinsic curvature

$$K_{ij} = \tfrac{1}{2}\bigl(\partial_i \beta_j + \partial_j \beta_i\bigr).$$

The expansion of the Eulerian volume elements, York's expansion, is $\theta = -\alpha\,\mathrm{Tr}\,K$, which evaluates to

$$\theta = v_s\,\frac{x - x_s}{r_s}\,\frac{df}{dr_s}$$

(the letter prints the numerator as $x_s$, meaning the displacement from the ship). Since $df/dr_s < 0$ across the wall, $\theta$ is negative ahead of the ship and positive behind it: space contracts in front and expands behind, which is the whole picture of the drive **[HIGH] S1**. Alcubierre's Figure 1 plots $\theta$ for $\sigma = 8$ and $R = v_s = 1$.

Substituting $x = x_s(t)$ into the line element gives $d\tau = dt$ on the ship's world line for any $v_s(t)$: the path is timelike, proper time equals coordinate time, and since coordinate time is the proper time of distant observers in the flat region, the ship suffers no time dilation. The path is also a geodesic, so the proper acceleration is zero however violently the coordinate acceleration changes **[HIGH] S1**. For a one-way trip with a short rocket leg to distance $d$, then coordinate acceleration $a$ to the midpoint and $-a$ after it, with $R \ll d \ll D$, both the coordinate time and the ship's proper time are

$$\tau \simeq T \simeq 2\sqrt{D/a},$$

which can be made as small as desired by increasing $a$ **[HIGH] S1**.

The price appears when the Einstein tensor is computed. The Eulerian observers, $n^\alpha = (1, -\beta^i)/\alpha$, see an energy density

$$T^{\alpha\beta} n_\alpha n_\beta = \frac{1}{8\pi} G^{00} = -\frac{1}{8\pi}\,\frac{v_s^2\,\rho^2}{4\,r_s^2}\left(\frac{df}{dr_s}\right)^2, \qquad \rho^2 = y^2 + z^2 .$$

This is negative everywhere the wall has a gradient, and zero only on the axis $\rho = 0$ and in the flat regions. The weak and dominant energy conditions both require non-negative energy density for every observer, so both fail; the strong condition fails likewise **[HIGH] S1**. This is the expression that every later bill is built on. Natário's later general formula, $\rho = (\theta^2 - K_{ij}K^{ij})/16\pi$ on flat slices, reproduces it as $\rho = -v_s^2 f'^2 (y^2+z^2)/(32\pi r_s^2)$ **[HIGH] S1**.

The headline number is not in the letter but follows from it once quantum inequalities are imposed. Pfenning and Ford, sampling the negative energy along Eulerian world lines on a scale shorter than the local curvature radius, find the wall can be no thicker than about a hundred Planck lengths, $\Delta \lesssim 10^2\, v_s\, \ell_P$ for $v_s$ of order one, and a total negative energy for a bubble of radius $R$

$$E = -\frac{v_s^2}{12}\left[\frac{(R + \Delta/2)^2}{\Delta} + \frac{\Delta}{12}\right],$$

which for $R = 100$ m gives $E \simeq -6.2 \times 10^{62}\, v_s$ kg, ten orders of magnitude more than the mass of the visible universe **[HIGH] S1** (Pfenning and Ford 1997; the formula and figure as reproduced in Van Den Broeck 1999).

Two further properties fixed by the metric alone. For $v_s > 1$ the surface in the wall where the flow speed $v_s f$ equals 1 is a horizon: light emitted forward from the ship is carried along with the bubble at that surface and never reaches the outer edge, so the crew are causally cut off from the front of the wall (Everett and Roman 1997; Hiscock 1997; Natário 2002) **[HIGH] S1**. And the world line of the leading edge of the wall matter, $(t, x_s(t) + R)$, is spacelike exactly when $v_s > 1$, so the matter that shapes the metric ahead of a superluminal bubble moves [tachyonically](tachyons-feinberg-1967.md) unless it was put there in advance (Krasnikov 1998) **[HIGH] S1**.

Alcubierre closes with the remark that although this spacetime is globally hyperbolic and contains no closed causal curves, "it is probably not very difficult to construct a spacetime that does contain such curves using a similar idea" **[HIGH] S1**. Everett did so two years later.

## What it costs

**B-neg.** The energy density seen by every Eulerian observer is negative throughout the wall, by the closed-form expression above. This is the paper's own finding, and Santiago, Schuster and Visser later showed the null energy condition fails as well, which is the weakest of the pointwise conditions ([ENE-1](../../constraints/ene-1.md), [ENE-5](../../constraints/ene-5.md)).

**B-mass.** Under the quantum inequalities the wall is Planck-thin and the total negative energy for a hundred-metre bubble is $-6.2 \times 10^{62}\, v_s$ kg, larger than the visible universe ([ENE-3](../../constraints/ene-3.md)). Even a metre-thick wall, forbidden by the inequalities, would need about a quarter of a solar mass of negative energy. The Van Den Broeck pocket cuts this to a few solar masses, which is still B-mass ([ENE-4](../../constraints/ene-4.md)).

**B-boot.** The bubble cannot be created or steered from inside once $v_s > 1$: the front wall is outside the crew's light cone, and the wall matter's leading edge is spacelike. The metric must be laid down ahead of the ship by someone whose light cone contains the whole route, or by tachyonic matter ([CON-1](../../constraints/con-1.md), [CON-2](../../constraints/con-2.md)). Warp travel on this metric is infrastructure.

**B-caus.** Two bubbles, one of them boosted, give closed causal loops with no additional assumptions ([CAU-3](../../constraints/cau-3.md)). The single bubble is globally hyperbolic; the drive as a transport system is a time machine with an assembly step.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | The bubble delivers a ship between two points in flat space faster than light through that space, which is exactly the signal CAU-1 prices; nothing in the metric breaks Lorentz invariance or picks the exterior rest frame as special, so a second bubble in a boosted frame carries the ship into its own past. The single spacetime is globally hyperbolic, as Alcubierre stresses, but the constraint is about the class of signal, not one instance. |
| CAU-2 | SILENT | The letter does not mention chronology protection. Hawking's conjecture would forbid the two-bubble time machine of CAU-3 by semiclassical back reaction, and whether it does is unsettled; no analysis of the Alcubierre chronology horizon exists. |
| CAU-3 | VIOLATES | Everett (1996) shows that a simple modification of this exact model with two bubbles gives closed causal loops with no extra assumptions. Alcubierre himself anticipated that a spacetime with closed causal curves could be built on the same idea. |
| CAU-4 | SILENT | No preferred frame is proposed. The metric is written in the rest frame of the stars, but nothing in the construction says what picks that frame, and full general covariance is kept; CAU-4 says such a proposal must either pick a frame or accept the time machine, and the letter does neither. |
| CAU-5 | N/A | No entanglement or quantum signalling is involved; the proposal moves matter through geometry. |
| ENE-1 | VIOLATES | The Eulerian energy density is negative everywhere in the wall by Alcubierre's own equation, so the weak and dominant conditions fail; he states the strong condition fails too, and the null condition fails by the generic theorem of ENE-5. |
| ENE-2 | VIOLATES | This is the spacetime Olum's theorem and Visser, Bassett and Liberati's superluminal censorship were written about: a signal arrives earlier than light through flat space, so the WEC and NEC must fail somewhere along the way, and they do, in the wall. |
| ENE-3 | VIOLATES | Pfenning and Ford applied the quantum inequalities to this metric: the wall is at most about a hundred Planck lengths thick and a hundred-metre bubble needs $-6.2 \times 10^{62}\, v_s$ kg. Alcubierre invokes quantum field theory as the licence for negative energy, and the inequalities are the terms of that licence. |
| ENE-4 | SILENT | The pocket geometry postdates the letter and is a modification of it; the original bubble has its interior and its wall at the same radius and pays the full ENE-3 bill. The reduction is scored in the Van Den Broeck dossier. |
| ENE-5 | VIOLATES | Alcubierre's metric is the founding member of the Natário class (unit lapse, flat slices, shift along $x$), and Santiago, Schuster and Visser prove the NEC is violated for any such flow with nonzero velocity; their section on the Alcubierre case does it explicitly. |
| ENE-6 | SILENT | The letter names the Casimir effect as the reason negative energy is not forbidden outright, and never prices it. ENE-6 puts the only negative energy ever produced at about $-4 \times 10^{-4}$ J per cubic metre at a micron gap, against wall densities that the inequalities push to Planck scale; the gap is tens of orders of magnitude and the proposal does not address it. |
| ENE-7 | N/A | The bubble keeps trivial topology, which Alcubierre states as a design goal, so a theorem about causal curves through a wormhole handle has nothing to deform. The time advance it does produce is priced by ENE-2, and ENE-7 is the wormhole-specific form of that entry. |
| CON-1 | VIOLATES | Hiscock finds the horizon at the wall for $v_s > 1$, Everett and Roman draw the consequence that the crew can neither create nor control the bubble, and Krasnikov shows the leading edge of the wall matter is spacelike. All three are results about this metric. |
| CON-2 | VIOLATES | Krasnikov and Coule show, for this metric, that the disturbance ahead of the ship cannot be created from the ship on a first flight without tachyonic matter; Alcubierre's itinerary has the disturbance "first appear" at the ship, which is the step that fails. The escape is to lay devices along the route in advance. |
| CON-3 | N/A | The Krasnikov tube is a different geometry, built to answer CON-1 and CON-2 for a return trip; the Alcubierre bubble does not use it and is not a tube. |
| STA-1 | VIOLATES | Hiscock's two-dimensional calculation on this metric finds the renormalised stress-energy diverging at the horizon for any wall profile once $v_s > 1$; Finazzi, Liberati and Barceló find exponential growth on the front wall of a dynamically formed bubble. The proposal has no answer. |
| STA-2 | N/A | There is no wormhole throat; Alcubierre's point is to do without one. |
| STA-3 | SILENT | The chronology-horizon divergence would arise only at the two-bubble time machine of CAU-3, which the letter does not construct; whether the Kim and Thorne cutoff or Hawking's divergence wins there is unsettled and uncomputed for warp bubbles. |
| HAZ-1 | VIOLATES | McMonigal, Lewis and O'Byrne computed on this metric that particles swept up by a superluminal bubble become time locked in the wall and are released as a high-energy burst ahead of a decelerating ship; Alcubierre's own itinerary decelerates from superluminal to rest at a distance $d \ll D$ from the destination star, which is the case they price. |
| HAZ-2 | VIOLATES | Finazzi, Liberati and Barceló find that an observer at the centre of a superluminal bubble sees Hawking radiation from the horizons at a temperature set by the wall thickness; with the ENE-3 wall the interior is a Planck-temperature bath. The ship sits at the centre. |
| HAZ-3 | N/A | The tidal bound is for a wormhole throat. Alcubierre notes that tidal forces are small near the ship for large $\sigma$ and large only in the wall, which the ship does not enter. |
| LOR-1 | SATISFIES | Nothing is accelerated to $c$; the ship is on a timelike geodesic with $d\tau = dt$ and zero proper acceleration, and the loophole is that the geometry moves, not the ship. |
| LOR-2 | VIOLATES | For $v_s > 1$ the world line of the leading edge of the wall matter is spacelike (Krasnikov), so a bubble created on demand is sourced by tachyonic matter, which LOR-2 says is an instability rather than a courier. The only way out is CON-2's pre-laid route. |
| LOR-3 | N/A | No wave in a medium is involved; there is no group or front velocity to confuse. |
| LOR-4 | N/A | Neither the [Scharnhorst effect](scharnhorst-effect.md) nor the [OPERA anomaly](opera-neutrinos-2011.md) bears on a geometric drive. |
| WRP-1 | SATISFIES | This is the entry's first citation: the class-defining example, with unit lapse, flat slices and shift $-v_s f(r_s)$ along the direction of travel. |
| WRP-2 | SATISFIES | In Bobrick and Martire's classification the Alcubierre bubble is a superluminal shell of exotic material moving inertially; the letter agrees on every point, including that the matter is exotic. |
| WRP-3 | SATISFIES | The proposal makes no positive-energy claim; the 1994 letter is where the negative energy requirement was first stated, and the absence WRP-3 records is consistent with it. |
| MAN-1 | N/A | Trivial topology, four dimensions, no bulk; the construction is explicitly an alternative to wormholes and hyperspace. |

## Status of the argument

- **1994.** The letter. Energy conditions violated, exotic matter needed, no closed causal curves in the single-bubble spacetime **[HIGH] S1**.
- **1996.** Everett, Phys. Rev. D 53, 7365: two bubbles give closed timelike curves with no additional assumptions **[HIGH] S1** (via the register, CAU-3).
- **1997.** Pfenning and Ford: the wall is a few hundred Planck lengths thick under the quantum inequalities and the total negative energy is physically unattainable **[HIGH] S1**. Hiscock: the renormalised stress-energy of a conformal scalar diverges at the horizon of a two-dimensional reduction for $v_s > 1$ **[HIGH] S1**. Everett and Roman: the crew are causally separated from the outer wall and can neither create nor control the bubble; the Krasnikov tube is offered as the geometry that answers this **[HIGH] S1**.
- **1998.** Krasnikov: the first flight cannot be hastened in a globally hyperbolic spacetime without tachyons; the leading edge of the wall matter is spacelike for $v_s > 1$ **[HIGH] S1**. Coule: "you need one to make one" **[HIGH] S1** (via the register, CON-2). Olum: superluminal travel requires negative energy under the generic condition **[HIGH] S1** (via the register, ENE-2).
- **1999.** Van Den Broeck: the pocket geometry cuts the total negative energy to about two solar masses while satisfying the quantum inequality **[HIGH] S1**. Visser, Bassett and Liberati: superluminal censorship, perturbatively **[HIGH] S1** (via the register). Van Den Broeck's STAIF talk (gr-qc/9906050, unpublished) reviews the objections and concludes superluminal bubbles are unlikely within general relativity and quantum field theory while subluminal bubbles may remain possible **[LOW] S1**.
- **2000.** Gao and Wald: no gravitational time advance under the null energy and generic conditions **[HIGH] S1** (via the register, ENE-2).
- **2002.** Natário: the expansion and contraction are incidental; a zero-expansion drive exists and violates the energy conditions just the same; horizons and infinite blueshifts for $v_s > 1$ **[HIGH] S1**.
- **2003.** Krasnikov, Phys. Rev. D 67, 104013: argues by explicit examples that the quantum inequalities do not always imply Planck-scale densities, that large densities need not mean large total energy, and that the total negative energy is physically meaningless in some relevant situations, so shortcuts including the Alcubierre bubble are not thereby excluded **[HIGH] S1**. This is the standing objection to reading ENE-3 as a no-go, and it has not been answered in print as far as this catalogue can find.
- **2004.** Lobo and Visser: in linearised gravity the energy condition violations persist at arbitrarily low bubble speeds and the negative energy in the warp field must be a considerable fraction of the ship's own mass-energy; the violation is generic to the geometry, not a side effect of superluminality **[HIGH] S1**.
- **2009.** Finazzi, Liberati and Barceló: dynamically formed superluminal bubbles are semiclassically unstable on the front wall, and the crew see a Hawking flux at Planck temperature if the exotic matter obeys the quantum inequalities; subluminal bubbles have neither problem **[HIGH] S1**.
- **2012.** McMonigal, Lewis and O'Byrne: swept-up particles are released as a beam when the bubble decelerates **[HIGH] S1**.
- **2018.** DeBenedictis and Ilijic: in Einstein-Cartan gravity the same metric can be sourced by matter obeying the weak and null conditions, at spin densities of order $10^{68}\,\hbar$ per cubic metre; see the modified gravity survey **[HIGH] S1**.
- **2021 to 2022.** Three positive-energy warp claims (Lentz; Bobrick and Martire; Fell and Heisenberg), answered by Santiago, Schuster and Visser: every generic Natário warp drive, Alcubierre's included, violates the NEC, and the positive-energy claims checked only Eulerian observers **[HIGH] S1**. See WRP-3 for the dated score.
- **2026-09-12.** No peer-reviewed construction has removed the negative energy from this metric within general relativity. The energy bill has been reduced (Van Den Broeck), disputed as a criterion (Krasnikov 2003) and moved to a different theory (Einstein-Cartan), but not paid.

## Sources

- **S1** Alcubierre, M., "The warp drive: hyper-fast travel within general relativity", Class. Quantum Grav. 11, L73–L77 (1994), arXiv:gr-qc/0009013. Read in full.
- **S1** Everett, A. E., "Warp drive and causality", Phys. Rev. D 53, 7365–7368 (1996). No arXiv version; record confirmed via INSPIRE and the register.
- **S1** Pfenning, M. J. and Ford, L. H., "The unphysical nature of 'warp drive'", Class. Quantum Grav. 14, 1743–1751 (1997), arXiv:gr-qc/9702026. Abstract read; formula and figure as reproduced in Van Den Broeck 1999.
- **S1** Hiscock, W. A., "Quantum effects in the Alcubierre warp drive spacetime", Class. Quantum Grav. 14, L183–L188 (1997), arXiv:gr-qc/9707024. Abstract read.
- **S1** Everett, A. E. and Roman, T. A., "A superluminal subway: the Krasnikov tube", Phys. Rev. D 56, 2100–2108 (1997), arXiv:gr-qc/9702049. Read in full.
- **S1** Krasnikov, S. V., "Hyperfast interstellar travel in general relativity", Phys. Rev. D 57, 4760–4766 (1998), arXiv:gr-qc/9511068. Read in full.
- **S1** Coule, D. H., "No warp drive", Class. Quantum Grav. 15, 2523–2527 (1998). Via the register, CON-2.
- **S1** Olum, K. D., Phys. Rev. Lett. 81, 3567 (1998), arXiv:gr-qc/9805003; Visser, M., Bassett, B. and Liberati, S., Nucl. Phys. B Proc. Suppl. 88, 267 (2000), arXiv:gr-qc/9810026; Gao, S. and Wald, R. M., Class. Quantum Grav. 17, 4999 (2000), arXiv:gr-qc/0007021. Via the register, ENE-2.
- **S1** Van Den Broeck, C., "A 'warp drive' with more reasonable total energy requirements", Class. Quantum Grav. 16, 3973–3979 (1999), arXiv:gr-qc/9905084. Read in full.
- **S1** Van Den Broeck, C., "On the (im)possibility of warp bubbles", arXiv:gr-qc/9906050 (1999), unpublished summary of a STAIF-2000 talk. Abstract read.
- **S1** Natário, J., "Warp drive with zero expansion", Class. Quantum Grav. 19, 1157–1165 (2002), arXiv:gr-qc/0110086. Read in full.
- **S1** Krasnikov, S., "The quantum inequalities do not forbid spacetime shortcuts", Phys. Rev. D 67, 104013 (2003), arXiv:gr-qc/0207057. Abstract read.
- **S1** Lobo, F. S. N. and Visser, M., "Fundamental limitations on 'warp drive' spacetimes", Class. Quantum Grav. 21, 5871–5892 (2004), arXiv:gr-qc/0406083. Abstract read.
- **S1** Finazzi, S., Liberati, S. and Barceló, C., "Semiclassical instability of dynamical warp drives", Phys. Rev. D 79, 124017 (2009), arXiv:0904.0141. Abstract read.
- **S1** McMonigal, B., Lewis, G. F. and O'Byrne, P., "The Alcubierre warp drive: on the matter of matter", Phys. Rev. D 85, 064024 (2012), arXiv:1202.5708. Abstract read.
- **S1** DeBenedictis, A. and Ilijic, S., "Energy condition respecting warp drives: the role of spin in Einstein-Cartan theory", Class. Quantum Grav. 35, 215001 (2018), arXiv:1807.09745. Read in full.
- **S1** Santiago, J., Schuster, S. and Visser, M., "Generic warp drives violate the null energy condition", Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079. Read in part (introduction, sections 6 to 7, conclusions).
- **S2** Alcubierre, M. and Lobo, F. S. N., "Warp drive basics", in *Wormholes, Warp Drives and Energy Conditions*, Fundam. Theor. Phys. 189, 257–279 (2017), arXiv:2103.05610. Abstract read.
- **S2** Lobo, F. S. N. and Crawford, P., "Weak energy condition violation and superluminal travel", Lect. Notes Phys. 617, 277–291 (2003), arXiv:gr-qc/0204038. Abstract read.
