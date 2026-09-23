# Lentz 2021: hyper-fast positive-energy solitons

*The claim that a superluminal warp soliton can be sourced by positive energy and a conducting plasma, and the two independent analyses that found it was never a solution at all.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K0 · **Bill:** B-neg, B-mass, B-caus · **Last reviewed:** 2026-09-12

## The claim

Erik Lentz's paper says that the twenty-five-year link between superluminal warp bubbles and negative energy was an artefact of the shapes people had tried. Alcubierre used a single component of the shift vector; Natário used a divergence-free shift. Both choices force the Eulerian energy density (the energy density seen by observers falling freely normal to the flat time slices) to be negative wherever the bubble wall has structure. Lentz proposes a third family: take the shift vector to be the gradient of a potential, and make that potential obey a hyperbolic wave equation on the spatial slice instead of a linear or elliptic relation. For such "hyperbolic" solitons the energy density can be written as a product of the wave-equation source and its own integrated gradient, and a rule can be stated that keeps it non-negative everywhere: arrange the sources so that the local source density and the source gradient integrated back along the wave cone always share a sign.

He exhibits a configuration of rhomboid-shaped sources in a pentagonal arrangement whose central region carries a level shift vector, so that a payload there rides along at the soliton's speed with proper time equal to coordinate time and negligible tidal force, and reports that the energy density is positive everywhere so the weak energy condition is satisfied, that the Eulerian momentum density vanishes and that the trace of the Einstein equations is consistent with a plasma of massive fluid plus electromagnetic field with equation of state $p \le \rho$. The soliton is superluminal whenever the central shift exceeds 1. He estimates the energy at "(few) $\times 10^{-1} M_\odot$" for a 100 m bubble with a 1 m wall, the same order as the Alcubierre bill without its Planck-thickness problem, and argues that the Olum and Lobo–Crawford theorems do not reach it because their proofs assume a single fastest causal path and his soliton has no point-like limit. The claim, in its strongest form, is that "there exist superluminal solitons in general relativity satisfying both the weak energy condition and the momentum conditions for conventional sources of stress-energy". He does not claim to have specified the plasma, to have addressed horizons or the dominant energy condition at superluminal speed or to know how to create the soliton.

## Origin and lineage

Lentz, then at Göttingen, arXiv:2006.07125, June 2020; Class. Quantum Grav. 38, 075015 (2021) **[HIGH] S1**. It answers [Alcubierre 1994](alcubierre-1994.md) and [Natário 2002](natario-2002.md) directly, as the linear and elliptic cases it means to go beyond. It prompted [Fell and Heisenberg 2021](fell-heisenberg-2021.md), who generalise its potential ansatz, and it drew the reply from [Bobrick and Martire 2021](bobrick-martire-2021.md) that their conclusions do not support it. It is the case study behind [WRP-3](../../constraints/wrp-3.md) and one of the three claims [ENE-5](../../constraints/ene-5.md) answers. The press treated it as the first physical warp drive; the register treats it as the clearest example of why an Eulerian check is not the weak energy condition.

## The mechanism

Lentz works in the ADM form with unit lapse and flat slices,

$$ds^2 = -(N^2 - N^i N_i)\,dt^2 - 2 N_i\,dx^i dt + h_{ij}\,dx^i dx^j, \qquad N = 1,\ h_{ij} = \delta_{ij},$$

so the whole geometry sits in the shift vector $N_i$ and the extrinsic curvature is $K_{ij} = -\tfrac12(\partial_i N_j + \partial_j N_i)$ **[HIGH] S1**. The Hamiltonian constraint gives the Eulerian energy density

$$8\pi E = \tfrac12\big(K^2 - K^i{}_j K^j{}_i\big),$$

and expanding in shift components,

$$K^2 - K^i{}_j K^j{}_i = 2\,\partial_x N_x \partial_y N_y + 2\,\partial_x N_x \partial_z N_z + 2\,\partial_z N_z \partial_y N_y - \tfrac12(\partial_x N_y + \partial_y N_x)^2 - \tfrac12(\partial_x N_z + \partial_z N_x)^2 - \tfrac12(\partial_z N_y + \partial_y N_z)^2,$$

whose last three terms are never positive and whose first three are of either sign, which is the "island" of configurations the paper hopes to find **[HIGH] S1**. The Alcubierre choice $N_x = N_y = 0$ leaves only the negative terms, $E_{Alc} = -\tfrac{1}{32\pi}[(\partial_x N_z)^2 + (\partial_y N_z)^2]$, and Natário's $K = 0$ leaves $E_{Nat} = -\tfrac{1}{16\pi}K^i{}_jK^j{}_i$ **[HIGH] S1**.

The hyperbolic ansatz sets $N_i = \partial_i\phi$ with

$$\partial_x^2\phi + \partial_y^2\phi - \frac{2}{v_h^2}\,\partial_z^2\phi = \rho,$$

where $\rho$ is the wave-equation source (not a mass density) and $v_h/\sqrt2$ the front speed on the slice **[HIGH] S1**. Restricting $\rho$ and $\phi$ to depend on $(x,y)$ only through $s = |x| + |y|$, the energy density in the $(z,x)$ plane becomes

$$E = \frac{1}{16\pi}\Big(2\,\partial_z^2\phi\,\rho + \frac{2}{v_h^2}(\partial_z^2\phi)^2 - 4(\partial_z\partial_x\phi)^2\Big),$$

and with the Green's function solution $\phi = \int dx'dz'\,\tfrac{1}{4v_h}\Theta\big(z - z' - |\Delta x|/v_h\big)\rho$ he claims the bound $|\partial_z^2\phi| \ge v_h|\partial_z\partial_x\phi|$, hence $E \ge 2\rho\,\partial_z^2\phi$, from which the sign rule follows **[HIGH] S1**. The total energy scales as $E_{tot} \sim C v_s^2 R^2/w$ for a central region of radius $R$ and wall thickness $w$; for $R = 100$ m and $w = 1$ m this is a few tenths of a solar mass times $v_s$, the paper's headline number **[HIGH] S1**. The trace of the Einstein equations, $-16\pi E + 2\theta^2 + 16\pi\big((N_z - v_s)J_z + 2N_xJ_x\big) = 8\pi(\rho_m - 3p)$, is used to argue the source can be a plasma with $p \le \rho$; the dominant energy condition is said to hold for subluminal solitons while $N_iN^i < 1$, and "for higher speeds, the soliton begins to form horizons between its domains and the external vacuum" **[HIGH] S1**.

Three things went wrong, in the order they were found.

**The Eulerian check does not establish the weak energy condition.** Santiago, Schuster and Visser show that for the whole Natário class the Eulerian density is a spatial divergence minus a non-positive vorticity term,

$$\rho = \frac{1}{16\pi}\Big(\nabla\cdot\{\vec v K - (\vec v\cdot\nabla)\vec v\} - \tfrac12\,\vec\omega\cdot\vec\omega\Big),$$

so that for a zero-vorticity drive like Lentz's it is a pure divergence and, under mild fall-off, integrates to zero over each slice: positive somewhere means negative somewhere else **[HIGH] S1**. They further prove that any drive in the class that is switched on and later off violates the null energy condition along the worldlines of Eulerian observers it passes over, which drags the weak, strong and dominant conditions down with it **[HIGH] S1**.

**The Einstein equations were never solved.** The same paper's appendix D: the author "has only solved part of the Einstein equations", for the density, flux and trace of the stress, and by imposing both a metric and a plasma stress-energy "without ever verifying if they are indeed an equation or not", "they haven't only not found a solution which satisfies the WEC, they haven't found a solution at all" **[HIGH] S1**.

**The energy density is not positive even for Eulerian observers.** Celmaster and Rubin rebuilt the rhomboidal source from the paper's figure, computed the shift and the Eulerian density directly, and found regions of both signs, so the geometry violates the weak energy condition outright **[MED] S1**. They trace the published positive plot to two errors: the potential $\phi_L$ "is not a solution to Eq. (6), and not even approximately", so equation (17) does not give the energy density of the geometry that was actually built, and an overall sign error in $\phi_L$ produced "the illusion of a positive energy density"; displayed with less gamma compression the paper's own formula shows negative regions **[MED] S1**. They also find that the density does not stay confined to the source region but extends along two 45 degree bands to large $z$, so the total energy is infinite and that the paper's plot of $N_x$ has the sign opposite to its own equation (20) **[MED] S1**. A modified geometry that does satisfy the hyperbolic equation almost everywhere still violates the weak energy condition in the Eulerian frame, as does a rectangular-source variant **[MED] S1**.

## What it costs

The bill is what the paper set out to avoid. Once the negative-energy regions are restored by direct computation, and once the Natário-class theorem is applied, the soliton needs negative energy density like every other superluminal warp bubble: B-neg. Its own estimate of the magnitude is a few tenths of a solar mass for a 100 m bubble even with everything positive, and Lentz's own conference reply calls the required savings "tens of orders of magnitude": B-mass. It is a superluminal vehicle with no preferred frame and no discussion of causality, and it lies in the class for which Everett's two-bubble construction and the Shoshany–Snodgrass gluing produce closed timelike curves: B-caus. No new field is invoked; the plasma is ordinary physics, which was the point.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | A timelike payload carried at $v_s > 1$ relative to the fixed stars with no frame singled out is, by the entry, a signal into some observer's past; the paper never mentions causality |
| CAU-2 | SILENT | Chronology protection is not raised in the paper or in the conference reply |
| CAU-3 | VIOLATES | The soliton is a unit-lapse flat-slice metric of exactly the kind Everett modifies to close a causal loop with two bubbles; Celmaster and Rubin note that Shoshany has shown a Lentz drive, if built, "could be configured for time travel" |
| CAU-4 | SILENT | No preferred frame is chosen and the possibility is not discussed |
| CAU-5 | N/A | No entanglement signalling |
| ENE-1 | VIOLATES | Claims the weak energy condition; Celmaster and Rubin find negative Eulerian density in the published geometry, and Santiago, Schuster and Visser show a positive Eulerian density would not have been enough in any case |
| ENE-2 | VIOLATES | A superluminal bubble that claims to evade Olum by lacking a single fastest causal path; the entry's Visser–Bassett–Liberati and Gao–Wald forms do not need that assumption, and the null energy condition is violated for the whole class |
| ENE-3 | DODGES | Argues that "no such naturality conditions are known to restrict the stress-energy driving the positive energy solutions", so the Planck-thin-wall bound would not apply to a classically sourced bubble; once negative regions are present the bound returns and the paper has no answer to it |
| ENE-4 | SILENT | Cites Van Den Broeck as a saving that "may provide significant savings in energy for the positive-energy soliton" and never applies it |
| ENE-5 | VIOLATES | Named in the entry: the Eulerian density was checked for one class of observers, and the Einstein equations were not solved |
| ENE-6 | SILENT | The paper's purpose was not to need a negative-energy source; with negative regions restored it names none, and the Casimir floor is the only one there is |
| ENE-7 | N/A | A soliton of trivial topology; no wormhole, so the censorship theorem does not apply. The superluminal bill is charged under ENE-2, of which ENE-7 is the wormhole-specific form. |
| CON-1 | SILENT | States that at higher speeds "the soliton begins to form horizons" and defers "the horizon problems endemic to this and all other known superluminal solitons" to future computation; the Everett–Roman consequence, that the payload cannot steer, is not engaged |
| CON-2 | SILENT | No creation mechanism; the conference reply lists "the identification of a creation mechanism" as an open challenge and admits every accelerating drive in the literature violates covariant conservation |
| CON-3 | N/A | Not a tube laid along a route |
| STA-1 | SILENT | Horizon instabilities are acknowledged as a concern and left for future work |
| STA-2 | N/A | No wormhole throat |
| STA-3 | N/A | No time machine assembled |
| HAZ-1 | SILENT | Interstellar matter swept up by the wall is never discussed |
| HAZ-2 | SILENT | "Bombardment of the inside observers by Hawking radiation" is listed as a known concern in the introduction and not addressed |
| HAZ-3 | N/A | No throat |
| LOR-1 | SATISFIES | Nothing is pushed through $c$; the Eulerian observers in the central region are in free fall with $d\tau = dt$ and the motion is geometric |
| LOR-2 | N/A | No tachyonic particle is proposed |
| LOR-3 | N/A | No group-velocity claim |
| LOR-4 | N/A | Neither Scharnhorst light nor a superluminal particle measurement |
| WRP-1 | SATISFIES | Unit lapse, flat slices, a shift vector: a Natário-class metric, as the conference reply itself says |
| WRP-2 | VIOLATES | Claims a superluminal shell of positive-energy plasma, which the entry says needs exotic matter; the claim did not survive |
| WRP-3 | VIOLATES | The entry's case study: found never to have solved the Einstein equations, then independently found to contain negative-energy regions and derivation errors, with a reply only in proceedings |
| MAN-1 | N/A | No extra dimensions |

## Status of the argument

- **June 2020.** Preprint; press coverage as the first positive-energy warp drive. Bobrick and Martire, February 2021, note it is presented "without providing means to reproduce the study" and that their conclusions "do not support" it **[HIGH] S1**.
- **March 2021.** Published, Class. Quantum Grav. 38, 075015 **[HIGH] S1**.
- **April 2021.** Fell and Heisenberg adopt the potential ansatz without the hyperbolic constraint and find, for their own configuration, that the weak energy condition fails in compact regions through the principal pressures even though the Eulerian density is positive; they add that "if the configuration in [13] indeed satisfies the WEC, as claimed, then it may still be possible" for theirs **[HIGH] S1**.
- **May 2021 to March 2022.** Santiago, Schuster and Visser, Phys. Rev. D 105, 064038: the Eulerian density of a zero-vorticity drive is a pure divergence; generic Natário drives violate the null energy condition; Lentz solved only part of the Einstein equations and "haven't found a solution at all" **[HIGH] S1**.
- **December 2021.** Lentz's reply in the MG16 proceedings, arXiv:2201.00652: the divergence theorem argument fails because his sources are only continuous on the planes $x = 0$ and $y = 0$ so the integration must be done as a patchwork; the Olum and Lobo–Crawford proofs assume a single fastest causal path and his soliton "cannot undergo this limit without being destroyed"; and the energy cost, "currently measured in solar masses where kilograms is closer to the threshold of human technology", needs savings of "tens of orders of magnitude" **[HIGH] S1**. The reply does not answer the point that the trace-free stresses were never computed. No peer-reviewed reply from the author has been found as of 2026-09-12 **[MED] S1**.
- **2024.** Helmerich et al. evaluate a "Lentz-inspired" metric in Warp Factory among the classic solutions, and the register records their statement that existing solutions have all required energy-condition violation **[MED] S1**. Shoshany and Snodgrass, Class. Quantum Grav. 41 (2024), show how two warp drives with non-unit lapse can be glued into a closed timelike geodesic, a construction Celmaster and Rubin say covers Lentz's drive **[MED] S1**.
- **November 2025.** Celmaster and Rubin, arXiv:2511.18251: direct recomputation finds negative Eulerian energy density; the published potential does not satisfy its own wave equation; a sign error produced the positive plot; the total energy is infinite; corrected variants still violate the weak energy condition. Their closing sentence on the paradox between the no-go theorems and the claim: "Lentz's demonstration is incorrect" **[MED] S1**. Preprint, not yet peer reviewed as of 2026-09-12.
- **Standing.** K0 rather than K3 because the claim that gives the paper its title, non-negative energy density everywhere, has been shown false by recomputation of the same geometry, the peer-reviewed finding that no solution of the Einstein equations was produced has stood unanswered in peer review for four years and the author's own reply concedes the energy bill is astronomical. A peer-reviewed rebuttal of Celmaster and Rubin would move this back to K3.

## Sources

- Lentz, "Breaking the warp barrier: hyper-fast solitons in Einstein–Maxwell-plasma theory", Class. Quantum Grav. 38, 075015 (2021), arXiv:2006.07125. S1.
- Lentz, "Hyper-fast positive energy warp drives", MG16 proceedings (2021), arXiv:2201.00652. S1.
- Santiago, Schuster and Visser, "Generic warp drives violate the null energy condition", Phys. Rev. D 105, 064038 (2022), arXiv:2105.03079, sections 4, 7 and appendices C and D. S1.
- Celmaster and Rubin, "Violations of the weak energy condition for Lentz warp drives", arXiv:2511.18251 (2025), preprint. S1.
- Bobrick and Martire, "Introducing physical warp drives", Class. Quantum Grav. 38, 105009 (2021), arXiv:2102.06824. S1.
- Fell and Heisenberg, "Positive energy warp drive from hidden geometric structures", Class. Quantum Grav. 38, 155020 (2021), arXiv:2104.06488. S1.
- Helmerich, Fuchs, Bobrick, Sellers, Melcher and Martire, "Analyzing warp drive spacetimes with Warp Factory", Class. Quantum Grav. 41, 095009 (2024), arXiv:2404.03095. S1.
- Shoshany and Snodgrass, "Warp drives and closed timelike curves", Class. Quantum Grav. 41, no. 20 (2024), doi:10.1088/1361-6382/ad74d1, arXiv:2309.10072. S1.
- Olum, "Superluminal travel requires negative energies", Phys. Rev. Lett. 81, 3567 (1998), arXiv:gr-qc/9805003. S1.
- Everett, "Warp drive and causality", Phys. Rev. D 53, 7365 (1996). S1.
- Pfenning and Ford, "The unphysical nature of 'warp drive'", Class. Quantum Grav. 14, 1743 (1997), arXiv:gr-qc/9702026. S1.
