# Lorentz-violating frameworks (the Standard-Model Extension and Hořava-Lifshitz gravity)

*Effective field theories with a preferred frame, in which a particle species may have its own maximal velocity without an antitelephone; every coefficient measured so far is consistent with zero.*

**Kind:** physics · **Loophole:** L1 · **Standing:** K3 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

The claim is not that anything travels faster than light. It is that Lorentz invariance might be an approximate symmetry, exact in the low-energy world we test and broken at some scale by physics we do not yet have, and that the breaking can be parametrised in a theory that is otherwise ordinary quantum field theory. The Standard-Model Extension (SME) of Colladay and Kostelecký is "a general Lorentz-violating extension of the minimal SU(3) × SU(2) × U(1) standard model including CPT-even and CPT-odd terms", which "can be viewed as the low-energy limit of a physically relevant fundamental theory with Lorentz-covariant dynamics in which spontaneous Lorentz violation occurs" (Colladay and Kostelecký 1998, abstract). It keeps gauge invariance, energy-momentum conservation, hermiticity and power-counting renormalisability, and it keeps covariance under observer transformations while breaking it under particle transformations. Every coefficient in it is a background tensor field, fixed in some frame, that particles feel and observers do not.

Hořava's 2009 proposal does the same thing to gravity from the other end. It is "a candidate quantum field theory of gravity with dynamical critical exponent equal to $z = 3$ in the UV", power-counting renormalisable in 3 + 1 dimensions, in which "the effective speed of light, the Newton constant and the cosmological constant all emerge from relevant deformations of the deeply nonrelativistic $z = 3$ theory at short distances" (Hořava 2009, abstract). Space and time scale differently, spacetime carries a preferred foliation by constant-time slices, and Lorentz invariance is an accidental symmetry of the infrared.

The sense in which these permit an FTL sector is exact and limited. In the SME each species has its own maximal attainable velocity, and nothing forbids a species whose maximum exceeds the photon's. In Hořava gravity the dispersion relation at short distances is $\omega^2 \propto k^6$ and the effective speed of light "approaches infinity" in the deep ultraviolet (Hořava 2009, §4). In both, a signal faster than light in the preferred frame is faster than light in every frame and never backward in time in any, because the preferred frame supplies a global time. That is the [CAU-4](../../constraints/cau-4.md) escape, built into the Lagrangian rather than assumed after the fact.

## Origin and lineage

The SME grows out of Kostelecký and Samuel's 1989 observation that string field theory could break Lorentz symmetry spontaneously through tensor vacuum expectation values, and out of Coleman and Glashow's 1997 to 1999 papers on species-dependent maximal velocities and their cosmic-ray tests. Colladay and Kostelecký, Phys. Rev. D 58, 116002 (1998), wrote the general minimal extension; Kostelecký, Phys. Rev. D 69, 105009 (2004), added gravity in Riemann-Cartan spacetimes and showed that explicit breaking is incompatible with generic such geometries while spontaneous breaking survives; Kostelecký and Mewes extended the photon sector to arbitrary operator dimension (Phys. Rev. D 80, 015020 (2009)) and the neutrino sector (Phys. Rev. D 69, 016005 (2004)). The Kostelecký and Russell data tables, Rev. Mod. Phys. 83, 11 (2011), updated yearly on the arXiv (version 19, February 2026), are the running record of every measured coefficient.

Hořava, Phys. Rev. D 79, 084008 (2009), is the gravitational branch. Its problems were found within months (Charmousis, Niz, Padilla and Saffin, JHEP 08 (2009) 070, on strong coupling) and its consistent form was given by Blas, Pujolàs and Sibiryakov, Phys. Rev. Lett. 104, 181302 (2010), with the low-energy limit identified as a Lorentz-violating scalar-tensor theory that is Einstein-aether theory (Jacobson and Mattingly, Phys. Rev. D 64, 024028 (2001)) with a hypersurface-orthogonal aether, the "khronon". Liberati's 2013 review covers both branches and their constraints. The tachyon this framework replaces is in [Tachyons (Feinberg 1967)](tachyons-feinberg-1967.md), and the one episode in which an FTL sector seemed to have been seen is in [the OPERA dossier](opera-neutrinos-2011.md).

## The mechanism

**The SME.** For a single Dirac fermion the minimal SME Lagrangian is

$$\mathcal L = \tfrac12 i\,\bar\psi\,\Gamma^\nu \overleftrightarrow{D}_\nu \psi - \bar\psi M \psi ,$$

$$\Gamma^\nu = \gamma^\nu + c^{\mu\nu}\gamma_\mu + d^{\mu\nu}\gamma_5\gamma_\mu + e^\nu + i f^\nu\gamma_5 + \tfrac12 g^{\lambda\mu\nu}\sigma_{\lambda\mu}, \qquad M = m + a_\mu\gamma^\mu + b_\mu\gamma_5\gamma^\mu + \tfrac12 H_{\mu\nu}\sigma^{\mu\nu},$$

with $a_\mu$, $b_\mu$ (dimension of mass, CPT-odd) and $c_{\mu\nu}$, $d_{\mu\nu}$, $H_{\mu\nu}$ (dimensionless or of mass dimension one, CPT-even) as constant background coefficients; the paper's extended QED of electrons and photons writes the CPT-odd part as $-a_\mu\bar\psi\gamma^\mu\psi - b_\mu\bar\psi\gamma_5\gamma^\mu\psi$ and the CPT-even part as $-\tfrac12 H_{\mu\nu}\bar\psi\sigma^{\mu\nu}\psi + \tfrac12 i c_{\mu\nu}\bar\psi\gamma^\mu \overleftrightarrow{D}^\nu\psi + \ldots$ **[HIGH] S1** (Colladay and Kostelecký 1998, eqs. 27 to 28). The photon sector is

$$\mathcal L_{\rm photon} = -\tfrac14 F_{\mu\nu}F^{\mu\nu} - \tfrac14 (k_F)_{\kappa\lambda\mu\nu}F^{\kappa\lambda}F^{\mu\nu} + \tfrac12 (k_{AF})^\kappa \epsilon_{\kappa\lambda\mu\nu}A^\lambda F^{\mu\nu},$$

with $k_F$ real, dimensionless, carrying the symmetries of the Riemann tensor (19 independent components) and $k_{AF}$ real with dimension of mass (4 components) **[HIGH] S1** (eqs. 24, 25, 31). The distinction that makes the theory consistent is between observer Lorentz transformations (rotating or boosting the observer's coordinates, under which every term is a scalar because the coefficients transform as tensors) and particle Lorentz transformations (rotating or boosting the fields in a fixed background, under which the coefficients do not transform and the symmetry is broken) **[HIGH] S1**. Some coefficients ($a_\mu$ for a single fermion, part of $c_{\mu\nu}$) can be removed by field redefinitions and are unobservable; the observable ones can be taken as $b_\mu$, $H_{\mu\nu}$, the symmetric parts of $c_{\mu\nu}$ and $d_{\mu\nu}$, $k_F$ and $k_{AF}$ **[HIGH] S1**.

The FTL content lives in the $c$-type and $k_F$ coefficients. In Coleman and Glashow's language each species $a$ has its own dispersion relation $E^2 = p^2c_a^2 + m^2c_a^4$ with a maximal attainable velocity $c_a$, and "effects of these perturbations increase rapidly with energy in the preferred frame" **[HIGH] S1** (Phys. Rev. D 59, 116008 (1999)); in the SME the isotropic part of $c^{\mu\nu}$ shifts a fermion's maximal velocity linearly in the coefficient, and the isotropic part of $k_F$, written $\tilde\kappa_{tr}$ in the Kostelecký and Mewes decomposition into $\tilde\kappa_{e+}, \tilde\kappa_{e-}, \tilde\kappa_{o+}, \tilde\kappa_{o-}, \tilde\kappa_{tr}$, shifts the speed of light itself **[HIGH] S1** (Phys. Rev. D 66, 056005 (2002)). If a species has $c_a > c_\gamma$ it is superluminal relative to photons above a threshold, and it radiates: vacuum Čerenkov emission for charged particles, pair emission for neutrinos ([the Cohen and Glashow calculation](opera-neutrinos-2011.md)), with rates that grow as high powers of energy. These processes, and the thresholds they impose on observed cosmic rays, are what produce the strongest bounds.

The bounds are the headline numbers, and they are numbers consistent with zero. From the Kostelecký and Russell summary tables (version 19): the isotropic photon coefficient $\tilde\kappa_{tr}$ is bounded at the $10^{-20}$ level and the equivalent $c^{(4)}_{(I)00}$ at $10^{-19}$; birefringent photon coefficients $k^{(4)}_{(E),(B)}$ at $10^{-35}$ from cosmological polarimetry; the neutrino $d = 4$ flavour-mixing coefficients $(c_L)$ at $10^{-21}$ to $10^{-23}$ for the $e\mu$ and $\mu\tau$ sectors and the $d = 3$ $(a_L)$ at $10^{-20}$ to $10^{-24}$ GeV; the flavour-blind isotropic neutrino coefficient $\mathring c^{(4)}$ at $10^{-9}$ in the two-sided tables **[HIGH] S1** (arXiv:0801.0287v19, Tables S3 and S4). The weaker two-sided neutrino number is not the whole story: pair-emission arguments are one-sided (they bound only the superluminal direction) and are not entered in the two-sided tables; Cohen and Glashow's IceCube bound is $\delta < 1.7 \times 10^{-11}$ **[HIGH] S1** and Stecker and Scully's PeV bound is about $10^{-20}$ **[MED] S1**. Kostelecký and Mewes's 2002 photon bounds from galactic and extragalactic sources reach $3 \times 10^{-16}$ for the non-birefringent coefficients and $2 \times 10^{-32}$ for the birefringent ones **[HIGH] S1**.

Consistency of an FTL sector inside the SME is not free. Kostelecký and Lehnert, Phys. Rev. D 63, 065008 (2001), find that "no difficulty arises for low energies if the parameters controlling the breaking are small", but that at high energies either energy positivity or microcausality fails in some observer frames unless the theory is the sub-Planck limit of a nonlocal theory with spontaneous breaking **[HIGH] S1**. The SME as an effective theory is therefore consistent below the scale of the breaking and needs its ultraviolet completion to be consistent above it, which is the normal condition of an effective field theory and is also the condition under which the CAU-4 escape holds.

**Hořava-Lifshitz gravity.** The theory is built on a spacetime with a codimension-one foliation by constant-time slices, with the anisotropic scaling

$$\mathbf x \to b\,\mathbf x, \qquad t \to b^z\, t, \qquad z = 3 \text{ in } 3 + 1 \text{ dimensions},$$

and gauge symmetry restricted to foliation-preserving diffeomorphisms $\tilde x^i = \tilde x^i(x^j, t)$, $\tilde t = \tilde t(t)$ **[HIGH] S1** (Hořava 2009, eqs. 2.2, 2.5). In ADM-like variables (spatial metric $g_{ij}$, shift $N_i$, lapse $N$) the kinetic term is

$$S_K = \frac{2}{\kappa^2}\int dt\, d^3x\, \sqrt g\, N \left(K_{ij}K^{ij} - \lambda K^2\right), \qquad K_{ij} = \frac{1}{2N}\left(\dot g_{ij} - \nabla_i N_j - \nabla_j N_i\right),$$

where general relativity's full diffeomorphism invariance "forces $\lambda = 1$" while here "$\lambda$ represents a dynamical coupling constant, susceptible to quantum corrections" **[HIGH] S1** (eqs. 2.10, 2.11 and the text after 2.14). With detailed balance the $z = 3$ potential is built from the Cotton tensor, $-\frac{\kappa^2}{2w^4}C_{ij}C^{ij}$, giving six spatial derivatives against two time derivatives **[HIGH] S1** (eq. 2.30). At the free fixed point the transverse traceless gravitons obey "a nonrelativistic gapless dispersion relation" $\omega^2 = \frac{\gamma^4}{4}(k^2)^3$ **[HIGH] S1** (eq. 2.48). Relevant deformations flow the theory to $z = 1$ at long distances with an emergent speed of light

$$c = \frac{\kappa^2\mu}{4}\sqrt{\frac{\Lambda_W}{1 - 3\lambda}},$$

an effective Newton constant $G_N = \kappa^2/32\pi c$ and cosmological constant $\Lambda = \tfrac32\Lambda_W$ **[HIGH] S1** (eqs. 2.55 to 2.58). Hořava is explicit about the causal structure: "the spacetime manifold exhibits the preferred foliation by constant time slices" and "the effective speed of light in gravity models with anisotropic scaling approaches infinity" in the high-energy regime **[HIGH] S1** (§4).

The theory's difficulties are in the literature within the year. Charmousis, Niz, Padilla and Saffin showed "Horava gravity suffers from two different strong coupling problems, extending all the way into the deep infra-red", one from detailed balance and one from the broken diffeomorphism invariance itself, so that "the original Horava model, and its 'phenomenologically viable' extensions do not have a perturbative General Relativity limit at any scale" **[HIGH] S1** (JHEP 08 (2009) 070). Blas, Pujolàs and Sibiryakov's extension adds terms in $a_i = \partial_i \ln N$, "endows the scalar graviton mode with a regular quadratic action and remains power-counting renormalizable", and "at low energies, it reduces to a Lorentz-violating scalar-tensor gravity theory" **[HIGH] S1** (Phys. Rev. Lett. 104, 181302 (2010)); their 2011 survey concludes that "the only model which is free from instabilities and strong coupling is the non-projectable one", with the preferred foliation encoded by a khronon field **[HIGH] S1** (JHEP 04 (2011) 018). The low-energy action has three parameters $(\alpha, \beta, \lambda)$, or equivalently the Einstein-aether $(c_1, c_2, c_3, c_4)$ with a hypersurface-orthogonal aether, and $\beta$ sets the speed of tensor gravitational waves: GW170817 gives $-3 \times 10^{-15} \le c_T - 1 \le 7 \times 10^{-16}$ and hence $|\beta| \lesssim 10^{-15}$ **[HIGH] S1** (Gümrükçüoğlu, Saravani and Sotiriou, Phys. Rev. D 97, 024032 (2018), eqs. 13 and 14), which collapses the previously allowed $\alpha = 2\beta$ plane to a sliver.

**The escape, stated.** In a Lorentz-invariant theory a superluminal signal has no invariant sense of "forward", so two transmitters in relative motion make a loop. In the SME the coefficients pick a concordant frame in which all of them are small; a species whose maximal velocity exceeds $c$ in that frame moves forward in that frame's time, and because the preferred frame is physical (a property of the vacuum, not a coordinate choice), observers in other frames see the same forward-in-time ordering of the same events, described with different coordinates. This is the argument Liberati, Sonego and Visser made for the [Scharnhorst case](scharnhorst-effect.md) and generalised with the warning that statements of general validity need the propagation specified ([CAU-4](../../constraints/cau-4.md)). In Hořava gravity the foliation is a global time function, and no causal curve, however fast, can return to an earlier leaf. The price, as the register says, is that special relativity is no longer the whole story for the FTL sector, and the experimental record says the price has not been paid: every coefficient that would let anything outrun light is bounded at $10^{-15}$ to $10^{-20}$ or better.

## What it costs

**B-new.** The SME coefficients are background tensor fields with fixed vacuum values; the khronon or aether is a new field with a timelike gradient; Hořava's foliation is a new structure on the manifold. None of these is in the Standard Model or general relativity, and each is what "a preferred frame" means once it is written down.

**B-caus.** The register's mark for "requires a preferred frame to avoid" closed timelike curves fits these frameworks by construction. They are the honest way to have an FTL sector, and honesty costs the relativity of inertial frames.

There is no negative energy and no infrastructure. What there is, instead of a bill, is a table of bounds: Table S3 and S4 of Kostelecký and Russell, in which the coefficient that would have to be nonzero for a superluminal photon or neutrino sits at $10^{-19}$ to $10^{-20}$, consistent with zero.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | DODGES | The register's own text says "unless Lorentz invariance is broken", and breaking it is the whole content of these frameworks: a superluminal species moves forward in the preferred frame's time and no boost of a particle changes that ordering. |
| CAU-2 | SATISFIES | Hořava's preferred foliation is a global time function, which excludes closed timelike curves outright; in the flat-space SME the causal structure is fixed by the concordant-frame light cones of the fastest species and closes on nothing. |
| CAU-3 | N/A | No wormhole mouth or warp bubble exists to be carried on a round trip; the FTL content is a particle property, not a device. |
| CAU-4 | SATISFIES | The entry demands that any scheme avoiding the time machine say what picks the frame; the SME says the vacuum expectation values of tensor fields (spontaneous breaking) and Hořava says the foliation, and Kostelecký and Lehnert give the conditions (small coefficients, a nonlocal completion above the breaking scale) under which the answer is consistent. |
| CAU-5 | N/A | No entanglement signalling is involved. |
| ENE-1 | SILENT | Kostelecký and Lehnert find energy positivity can fail in some observer frames at high energy without a completion; that is a statement about the Hamiltonian of quanta, not the curvature-sourcing energy conditions, and neither framework addresses the NEC or WEC of its own background fields. |
| ENE-2 | DODGES | Olum, Visser and Gao-Wald assume general relativity with energy conditions and compare with the flat light cone; the SME's FTL sector is a matter-sector property with no geometric time advance and Hořava gravity is a different theory of gravity, the register's listed escape. |
| ENE-3 | N/A | No negative energy density is required. |
| ENE-4 | N/A | No bubble. |
| ENE-5 | N/A | Not in the Natário class. |
| ENE-6 | N/A | The Casimir floor is irrelevant; the Scharnhorst shift it produces is itself an example of the $\tilde\kappa_{tr}$-type coefficient, at $10^{-32}$. |
| ENE-7 | N/A | A matter-sector or preferred-frame modification with unchanged topology; the theorem concerns handles in an asymptotically flat spacetime and none is invoked. |
| CON-1 | N/A | No bubble and no horizon; nothing to pilot. |
| CON-2 | N/A | A species with its own maximal velocity needs no route laid in advance. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No bubble horizon; Hořava gravity's own scalar-mode instability is a problem of the theory, scored under its standing, not a warp instability. |
| STA-2 | N/A | No throat. |
| STA-3 | N/A | No chronology horizon can form under a global time function. |
| HAZ-1 | N/A | No bubble wall. |
| HAZ-2 | N/A | No horizon flux. |
| HAZ-3 | N/A | No throat tides. |
| LOR-1 | DODGES | Each species has its own maximal attainable velocity $c_a$ and its energy diverges as $v \to c_a$, not as $v \to c$; a body with $c_a > c$ passes $c$ with finite energy, which Einstein's argument does not cover because it assumes one invariant speed. |
| LOR-2 | DODGES | The register lists "Lorentz-violating frameworks" as the escape hatch; these frameworks use positive $m^2$ and modified maximal velocities, never a tachyonic mass term, so the instability argument does not arise. |
| LOR-3 | DODGES | Front velocity equals the species' maximal velocity $c_a$, and the Sommerfeld-Brillouin argument goes through with $c$ replaced by $c_a$; the settled result is respected in form and evaded in value. |
| LOR-4 | SATISFIES | The frameworks contain the Scharnhorst shift as a coefficient and absorbed the OPERA episode as a bound; every measured coefficient in the Kostelecký and Russell tables is consistent with zero, which is what the entry's two cases say. |
| WRP-1 | N/A | Not a warp drive; the FTL content is kinematic. |
| WRP-2 | N/A | No shell. |
| WRP-3 | N/A | No positive-energy warp claim. |
| MAN-1 | N/A | Both frameworks are four-dimensional; asymmetrically warped branes (Csáki, Erlich and Grojean, Nucl. Phys. B 604, 312 (2001)) produce gravitational Lorentz violation from a bulk and are scored under the brane-shortcut dossier. |

## Status of the argument

- 1989 to 1999: Kostelecký and Samuel (spontaneous Lorentz breaking in string field theory), Coleman and Glashow (species-dependent maximal velocities, Phys. Lett. B 405, 249 (1997) and Phys. Rev. D 59, 116008 (1999)), Colladay and Kostelecký (the SME, 1998).
- 2001: Kostelecký and Lehnert establish the stability and causality conditions; Jacobson and Mattingly propose Einstein-aether theory.
- 2002 to 2009: Kostelecký and Mewes work out the photon sector to arbitrary dimension; the data tables begin in 2008 and are updated yearly; Liberati, Sonego and Visser's 2002 paper is the register's CAU-4.
- 2009: Hořava's proposal; within months Charmousis et al. find strong coupling and the projectable theory's scalar mode is found to be pathological.
- 2010 to 2011: Blas, Pujolàs and Sibiryakov's healthy extension; Sotiriou's status report (J. Phys. Conf. Ser. 283, 012034 (2011)) on low-energy viability and the link to Einstein-aether.
- 2011 to 2013: the OPERA anomaly is read in these frameworks (Giudice, Sibiryakov and Strumia; Cohen and Glashow's pair emission) and refuted; Liberati's 2013 review takes stock of both.
- 2017 to 2018: GW170817 bounds the tensor speed and hence $|\beta| \lesssim 10^{-15}$ in Hořava gravity, cutting the parameter space to a line.
- 2026: the data tables (v19, February 2026) show no coefficient significantly different from zero.
- The frameworks are alive as tests of relativity and dead as sources of an FTL sector; no peer-reviewed measurement of a nonzero superluminal coefficient survives as of 2026-09-12.

## Sources

- Colladay and Kostelecký, "Lorentz-violating extension of the standard model", Phys. Rev. D 58, 116002 (1998), arXiv:hep-ph/9809521. S1. Read in full.
- Hořava, "Quantum gravity at a Lifshitz point", Phys. Rev. D 79, 084008 (2009), arXiv:0901.3775. S1. Read in full.
- Kostelecký and Russell, "Data tables for Lorentz and CPT violation", Rev. Mod. Phys. 83, 11 (2011), arXiv:0801.0287 (v19, 5 February 2026). S1. Summary tables S2 to S5 read.
- Kostelecký and Mewes, "Signals for Lorentz violation in electrodynamics", Phys. Rev. D 66, 056005 (2002), arXiv:hep-ph/0205211. S1.
- Kostelecký and Mewes, "Lorentz and CPT violation in neutrinos", Phys. Rev. D 69, 016005 (2004), arXiv:hep-ph/0309025. S1.
- Kostelecký and Mewes, "Electrodynamics with Lorentz-violating operators of arbitrary dimension", Phys. Rev. D 80, 015020 (2009), arXiv:0905.0031. S1.
- Kostelecký, on gravity, Lorentz violation and the Standard Model, Phys. Rev. D 69, 105009 (2004), arXiv:hep-th/0312310. S1.
- Kostelecký and Lehnert, on stability, causality and Lorentz and CPT violation, Phys. Rev. D 63, 065008 (2001), arXiv:hep-th/0012060. S1.
- Coleman and Glashow, "High-energy tests of Lorentz invariance", Phys. Rev. D 59, 116008 (1999), arXiv:hep-ph/9812418. S1.
- Jacobson and Mattingly, "Gravity with a dynamical preferred frame", Phys. Rev. D 64, 024028 (2001), arXiv:gr-qc/0007031. S1.
- Charmousis, Niz, Padilla and Saffin, "Strong coupling in Horava gravity", JHEP 08 (2009) 070, arXiv:0905.2579. S1.
- Blas, Pujolàs and Sibiryakov, "Consistent extension of Hořava gravity", Phys. Rev. Lett. 104, 181302 (2010), arXiv:0909.3525. S1.
- Blas, Pujolàs and Sibiryakov, "Models of non-relativistic quantum gravity: the good, the bad and the healthy", JHEP 04 (2011) 018, arXiv:1007.3503. S1.
- Gümrükçüoğlu, Saravani and Sotiriou, "Hořava gravity after GW170817", Phys. Rev. D 97, 024032 (2018), arXiv:1711.08845. S1.
- Cohen and Glashow, Phys. Rev. Lett. 107, 181803 (2011), arXiv:1109.6562. S1.
- Stecker and Scully, Phys. Rev. D 90, 043012 (2014), arXiv:1404.7025. S1.
- Liberati, Sonego and Visser, on faster-than-c signals, special relativity and causality, Ann. Phys. 298, 167 (2002), arXiv:gr-qc/0107091. S1 (the register's CAU-4).
- Liberati, "Tests of Lorentz invariance: a 2013 update", Class. Quantum Grav. 30, 133001 (2013), arXiv:1304.5795. S2.
- Sotiriou, "Hořava-Lifshitz gravity: a status report", J. Phys. Conf. Ser. 283, 012034 (2011), arXiv:1010.3218. S2.
- Csáki, Erlich and Grojean, "Gravitational Lorentz violations and adjustment of the cosmological constant in asymmetrically warped spacetimes", Nucl. Phys. B 604, 312 (2001), arXiv:hep-th/0012143. S1.
