# NASA Eagleworks warp field interferometer

*A tabletop laser interferometer at Johnson Space Center meant to see a one-part-in-ten-million warp of space from a charged ring; it saw nothing above the noise and never published a result.*

**Kind:** physics · **Loophole:** L2 · **Standing:** K1 · **Bill:** B-neg, B-new · **Last reviewed:** 2026-09-12

## The claim

From 2011 Harold White's Advanced Propulsion Physics Laboratory at NASA Johnson, known as Eagleworks, set out to produce and detect "a very modest instantiation of a warp field" on an optical bench. The reasoning runs in three steps. First, White's 2003 "canonical form" of the Alcubierre metric gives it a scalar potential and a "boost" factor $\gamma = \cosh\phi$, and White proposes that the boost, not the York time (the expansion and contraction of space), is the driving phenomenon: a craft with an initial sublight velocity $v_i$ inside an active field would have an apparent speed $\gamma v_i$, a boost of 100 on $0.1c$ giving $10c$. Second, the energy required falls steeply as the bubble wall is allowed to thicken, and further, on White's reading of the Chung–Freese brane-bulk metric, if the bubble intensity is oscillated, so that the astronomical Alcubierre bill might be reduced from a Jupiter mass toward something a spacecraft could carry. Third, if a boost field can be made at all, a very small one can be made now: a 1 cm toroidal test article "(something as simple as a very high-voltage capacitor ring)" with a boost of 1.0000001 would change the optical path of a helium-neon laser through a 1 cm region by one part in ten million, which a Michelson interferometer with fringe-image processing can see.

The apparatus, later called the White–Juday warp field interferometer, was built and run with capacitor rings cycled at tens of kilovolts, then with a Fabry–Pérot cavity and a time-of-flight experiment planned to follow. The claim, at its strongest, is that a detected fringe shift correlated with the ring's charge cycle would be the first laboratory instance of a warp field, a "Chicago pile" moment. No such detection was ever claimed in a peer-reviewed paper. The programme's own 2014 review reports no signal above noise for the main runs and an ambiguous statistical trend in one series; by 2014 the laboratory's effort had shifted to its "q-thruster" and microwave-cavity thrust tests.

## Origin and lineage

Primary documents, all NASA Technical Reports Server: White, "Warp Field Mechanics 101" (NTRS 20110015936, 2011), published as J. Br. Interplanet. Soc. 66, 242 (2013); White, March, Williams and O'Neill, "Eagleworks Laboratories: Advanced Propulsion Physics Research" (NTRS 20110023492, 2011); White, "Warp Field Mechanics 102: Energy Optimization" (NTRS 20130011213, 2013, slides); White, "Warp Field Physics" (NTRS 20140000851, 2014, slides) **[HIGH] S1**. The canonical form is from White, Gen. Relativ. Gravit. 35, 2025 (2003) **[MED] S1**. The metric is [Alcubierre 1994](alcubierre-1994.md), the energy bill is [ENE-3](../../constraints/ene-3.md), and the extra-dimensional argument uses the Chung–Freese metric of [MAN-1](../../constraints/man-1.md). The programme's later Casimir work is [White et al. 2021](white-casimir-nano-bubble-2021.md). Lentz cites the interferometer as a search that could be recast for a positive-energy soliton, which links it to [Lentz 2021](lentz-solitons-2021.md). The one independent assessment is Lee and Cleaver, arXiv:1407.7772, Physics Essays 29, 201 (2016).

## The mechanism

The Alcubierre line element with the tanh shape function, its York time

$$\theta = v_s\,\frac{x_s}{r_s}\,\frac{df}{dr_s},$$

and its Eulerian energy density

$$T^{00} = -\frac{1}{8\pi}\,\frac{v_s^2\rho^2}{4r_s^2}\Big(\frac{df}{dr_s}\Big)^2$$

are the starting point; White's plots show that for fixed $v_s$ and $R$, a thicker wall (smaller $\sigma$) lowers the peak density "drastically" and the total energy by orders of magnitude while shrinking the flat interior, so that "sloppy warp fields would appear to be 'easier' to engineer than precise warp fields" **[HIGH] S1**. The 2013 slides chart the exotic mass for a 10 m bubble at $10c$ against wall-thickness fraction and against a "bulk velocity" $dU/dt$, with reference masses running from Jupiter at $1.9 \times 10^{27}$ kg through Earth, the Moon, a Nimitz carrier at $9.1 \times 10^7$ kg and the ISS at $4 \times 10^5$ kg **[HIGH] S1**.

The canonical form is

$$ds^2 = \big(v_s^2 f^2 - 1\big)\Big(dt - \frac{v_s f}{v_s^2 f^2 - 1}\,dx\Big)^2 - dx^2 + dy^2 + dz^2,$$

from which White reads off $\phi = \tfrac12\ln|1 - v_s^2 f(r_s)^2|$ and $\gamma = \cosh\phi$, and proposes that the York time "may not be the driving phenomenon, rather a secondary result", a Doppler strain on space as the boosted region moves **[HIGH] S1**. The extra-dimensional step compares the null geodesics of the Chung–Freese metric $ds^2 = -c^2dt^2 + \big(a^2(t)/e^{2kU}\big)dX^2 + dU^2$, for which $dX/dt = (e^{kU}/a)\sqrt{1 - (dU/dt)^2}$, with the boost, and relates them "informally" by $\gamma \sim e^U$; the 2013 slides then argue that oscillating $dU/dt$ "reduces stiffness of spacetime" and so the exotic mass **[HIGH] S1**. None of this is derived from the Einstein equations; it is an analogy between two line elements.

The interferometer as specified in 2011: a 633 nm helium-neon Michelson interferometer, one arm passing through a roughly 1 cm spherical test region; "Across 1cm, the experimental rig should be able to measure space perturbations down to ~1 part in 10,000,000"; the test article "a 1cm diameter toroidal test article (something as simple as a very high-voltage capacitor ring) with a boost on the order of 1.0000001"; detection by comparing fringe images with the device off and on using two-dimensional analytic-signal processing **[HIGH] S1**. The 2011 laboratory overview promises an instrument "able to measure spacetime disturbances down to 150nm" and to "measure York Time effects of test devices" **[HIGH] S1**. One part in $10^7$ over 1 cm is a path change of about 1 nm, a six-hundredth of a wave.

What a boost of 1.0000001 would mean in the paper's own formula is worth setting out, because the paper does not. With $\gamma - 1 = 10^{-7}$, $\phi \approx \sqrt{2 \times 10^{-7}} \approx 4.5 \times 10^{-4}$, and $\phi = \tfrac12\ln|1 - v_s^2f^2|$ gives $v_s f \approx 0.03$: the interior of the 1 cm region would be moving at three percent of light speed relative to the bench **[MED] S1**, a derivation made here. By the Alcubierre density formula, a bubble of that speed with a millimetre wall needs a peak $|T^{00}|$ of order $(c^4/8\pi G)(0.03)^2(1/4)(10^3\,\text{m}^{-1})^2 \approx 10^{45}$ J m$^{-3}$, about $10^{28}$ kg m$^{-3}$, and negative **[MED] S1**, again derived here. The charged ring supplies a positive electrostatic energy density; for the $10^6$ V m$^{-1}$ that Lee and Cleaver generously assume it is $u_E = \epsilon_0 E^2/2 \approx 4.4$ J m$^{-3}$ **[HIGH] S2**.

What was measured. The 2014 review slides describe the mitigation (a floated table, a floated room, an optical hood, signal averaging), then the runs. Single-patch modal analysis with the test article cycled at 0.25 Hz and 3149 frames at 2.5 Hz: "Nothing around that frequency stands out above the noise for this run. No evidence that the test article caused fringes to shift at this measurement precision" **[HIGH] S1**. Multiple-position analysis, 88 image positions, the article cycled every 4 s at 20 kV: the slides show bumps in the phase spectrum and ask "Are these bumps actual differences w.r.t. test article 'off'? Or are they always present, but affected differently by noise between runs?" **[HIGH] S1**. A run with a high-voltage device partly in the beam, table floated but room not, hood off, is shown without a conclusion **[HIGH] S1**. A student series at South Dakota State with a DC toroidal capacitor at 19 kV, 2200 charge-discharge data points analysed by image subtraction, reports that "the observed shifts tended to increase during charge/discharge cycles, and remain constant in the control runs", with a Hough-transform attempt to give the shift a direction **[HIGH] S1**. The forward plan was larger samples, image averaging, a Fabry–Pérot cavity "to below 1/100 of a wavelength", a time-of-flight experiment and radio-frequency test devices guided by the laboratory's q-thruster models, on the stated ground that "the idea of an optimized space warp needs negative vacuum energy" and a large rate of change of the boost potential, both said to be present in that technology **[HIGH] S1**. No further interferometer results were released after 2014 **[MED] S1**.

Independent assessment. Lee and Cleaver compute that a $10^6$ V m$^{-1}$ field between plates gives a stress-energy whose curvature, from $G_{\mu\nu} = (8\pi G/c^4)T_{\mu\nu}$, is $9.2 \times 10^{-43}$ m$^{-2}$, which "cannot be resolved by any known experimental technique"; treated as a microlensing problem the angular deflection is $1.8 \times 10^{-6}$ arcseconds, three orders below the best resolution, and a field of order $10^{12}$ V m$^{-1}$ would be needed to reach threshold **[MED] S2**. They add that the Alcubierre bubble needs negative energy density or pressure, which a capacitor does not supply, and that a 1 °C difference between parcels of air along the arm refracts the beam laterally by 31.7 Å, so that air-index fluctuations "could result in occasional spurious interference fringes" **[MED] S2**. Their conclusion: any non-zero difference between charged and uncharged states "are due to local effects rather than spacetime perturbations" **[MED] S2**. Secondary accounts report that White announced at a 2013 conference a "vanishing but non-zero" difference after processing, held to be inconclusive because of noise and processing limits **[LOW] S3**.

## What it costs

B-neg: the bubble sought is Alcubierre's, which White's own paper says "violates all three energy conditions" and does so "because of the need for negative energy density", and the test article is a source of positive electrostatic energy, so the experiment's premise needed either negative energy from somewhere or a coupling between a charged ring and the metric that general relativity does not contain **[HIGH] S1**. B-new is that coupling: the boost-as-multiplier picture, the claim that a capacitor ring produces a "boost" perturbation of the metric at a part in $10^7$, the "hyperspace oscillation" energy reduction and the later q-thruster "quantum vacuum" models are White's own constructions, not general relativity or the Standard Model, and no derivation is given for any of them. No B-mass because the programme never states the mass its lab bubble would need; the derivation above puts the required density some forty-four orders of magnitude above what the ring provides, and of the opposite sign. B-caus would apply to the $10c$ craft of the mission-planning sections but nothing on the bench approaches it.

## Constraint scoring

Every entry in [the register](../../constraints/REGISTER.md), one row each, verdict from the physics vocabulary in [GRADING.md](../../GRADING.md), and a note that says why.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SILENT | The documents plan a $10c$ craft and a bench bubble and never mention causality |
| CAU-2 | SILENT | Never mentioned |
| CAU-3 | SILENT | Never mentioned |
| CAU-4 | SILENT | No frame discussed, though the boost-on-initial-velocity picture implicitly privileges the frame in which $v_i$ is measured |
| CAU-5 | N/A | No entanglement signalling |
| ENE-1 | VIOLATES | Alcubierre's metric, which the 2011 paper says violates the strong, weak and dominant conditions; the test article's energy is positive, so the programme needs the conditions to fail somewhere it has no source for |
| ENE-2 | SATISFIES | Accepts that the bubble needs negative energy and says so |
| ENE-3 | DODGES | Claims the bill falls "drastically" with thicker walls and further with bulk oscillation; the entry's quantum inequality is what forces the wall to be Planck-thin if the negative energy is quantum, and the documents assume classical negative energy in bulk without saying where it comes from |
| ENE-4 | N/A | No pocket geometry |
| ENE-5 | SATISFIES | No positive-energy claim; the null-condition violation of the Alcubierre bubble is accepted |
| ENE-6 | SILENT | The only negative energy on offer, the Casimir floor, is not invoked; the documents speak of "negative vacuum energy" from q-thruster physics without a formula that general relativity recognises |
| ENE-7 | N/A | A tabletop warp-field claim with trivial topology; there is no wormhole for the censorship theorem to bear on. The negative energy any superluminal bubble needs is ENE-2's business, and ENE-7 is ENE-2 for wormholes. |
| CON-1 | SILENT | Horizons appear once, as a "pseudo-horizon" in the boost plot; control is never discussed |
| CON-2 | SILENT | How a bubble is created or laid ahead of a craft is never discussed; the mission-planning section treats the field as a subsystem switched on at will |
| CON-3 | N/A | Not a tube |
| STA-1 | SILENT | Never discussed |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No time machine |
| HAZ-1 | SILENT | Never discussed |
| HAZ-2 | SILENT | Never discussed |
| HAZ-3 | N/A | No throat |
| LOR-1 | SATISFIES | The documents insist the craft "never locally breaks the speed of light"; the mechanism claimed is geometric |
| LOR-2 | N/A | No tachyons |
| LOR-3 | SILENT | The planned time-of-flight experiment would time pulses through a test article; the entry's front-velocity result is what any such advance would have to answer, and it is never mentioned |
| LOR-4 | N/A | Not Casimir light or a particle measurement |
| WRP-1 | SATISFIES | The Alcubierre metric verbatim, plus White's canonical rewriting of it |
| WRP-2 | SILENT | Never engages the shell picture; a charged ring is positive-energy matter, which the entry says buys at most a subluminal shell |
| WRP-3 | N/A | No positive-energy claim |
| MAN-1 | DODGES | Leans on the Chung–Freese bulk as an informal analogue of the boost, $\gamma \sim e^U$, and on oscillating $dU/dt$ to cut the energy bill; the entry's finding is that bulk shortcuts are a form of L3 inside the bulk light cone, not a dial on the warp bill, and no calculation connects the two |

## Status of the argument

- **2011.** "Warp Field Mechanics 101" (NTRS, later JBIS 2013) and the Eagleworks laboratory overview describe the planned interferometer, its sensitivity and its capacitor-ring test article; no results **[HIGH] S1**.
- **2012 to 2013.** "Warp Field Mechanics 102" adds the energy-optimisation chart and the bulk-oscillation argument; a 2012 laboratory update and a 2013 conference talk report early runs, described in secondary accounts as a vanishing but non-zero difference held to be inconclusive **[LOW] S3**.
- **2014.** "Warp Field Physics" slides: no evidence of fringe shift above noise in the main runs, unresolved bumps in the multi-position analysis, a statistical trend in a student series and a forward plan toward a Fabry–Pérot cavity and time of flight. Lee and Cleaver's preprint (arXiv:1407.7772) argues the instrument cannot resolve the curvature of any obtainable electric field and that air refraction can mimic a signal; published in Physics Essays 29, 201 (2016) **[HIGH] S1** for the slides, **[MED] S2** for the assessment.
- **2014 onward.** The laboratory's public output turns to microwave-cavity and q-thruster thrust measurements; no further warp interferometer data and no peer-reviewed detection claim as of 2026-09-12 **[MED] S1**. Lentz in 2021 refers to "previous interferometric searches for hyperfast solitons" that "could be recast to search for the much larger signal of a positive-energy-efficient soliton", citing White 2013 and Lee and Cleaver **[HIGH] S1**. White's subsequent warp work is the 2021 Casimir paper.
- **Standing.** K1: no peer-reviewed result exists, the premise that a charged ring perturbs the metric at a part in $10^7$ has no worked derivation and the one independent assessment finds the deflection sought three orders of magnitude below the best angular resolution, needing a field a million times stronger than any obtainable, and of the wrong sign in energy. The interferometer itself was a competent optical bench; the claim it served is the misreading.

## Sources

- White, "Warp field mechanics 101", J. Br. Interplanet. Soc. 66, 242 (2013); NASA NTRS 20110015936 (2011). S1.
- White, March, Williams and O'Neill, "Eagleworks Laboratories: Advanced Propulsion Physics Research", NASA NTRS 20110023492 (2011). S1.
- White, "Warp Field Mechanics 102: Energy Optimization", NASA NTRS 20130011213 (2013), presentation. S1.
- White, "Warp Field Physics", NASA NTRS 20140000851 (2014), presentation. S1.
- White, "A discussion of space-time metric engineering", Gen. Relativ. Gravit. 35, 2025 (2003). S1.
- Lee and Cleaver, "The inability of the White–Juday warp field interferometer to spectrally resolve spacetime distortions", Physics Essays 29, 201 (2016), arXiv:1407.7772. S2.
- Alcubierre, "The warp drive: hyper-fast travel within general relativity", Class. Quantum Grav. 11, L73 (1994), arXiv:gr-qc/0009013. S1.
- Chung and Freese, "Can geodesics in extra dimensions solve the cosmological horizon problem?", Phys. Rev. D 62, 063513 (2000), arXiv:hep-ph/9910235. S1.
- Pfenning and Ford, "The unphysical nature of 'warp drive'", Class. Quantum Grav. 14, 1743 (1997), arXiv:gr-qc/9702026. S1.
- Lentz, "Breaking the warp barrier: hyper-fast solitons in Einstein–Maxwell-plasma theory", Class. Quantum Grav. 38, 075015 (2021), arXiv:2006.07125. S1.
- Wikipedia, "Advanced Propulsion Physics Laboratory", as a pointer to the NTRS records and the 2013 announcement. S3.
