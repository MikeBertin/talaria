# The OPERA superluminal neutrino (2011)

*A 60 nanosecond early arrival over 730 km that became a 6.5 nanosecond null result once a fibre connector was reseated and an oscillator recalibrated; corrected, not retracted.*

**Kind:** physics · **Loophole:** L1 · **Standing:** K0 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

On 22 September 2011 the OPERA collaboration posted a measurement of the time of flight of muon neutrinos from the CERN Neutrino beam to Gran Sasso (CNGS) over a baseline of about 730 km. The abstract of that first version reported "an early arrival time of CNGS muon neutrinos with respect to the one computed assuming the speed of light in vacuum of $(60.7 \pm 6.9\ (\mathrm{stat.}) \pm 7.4\ (\mathrm{sys.}))$ ns", corresponding to $(v - c)/c = (2.48 \pm 0.28\ (\mathrm{stat.}) \pm 0.30\ (\mathrm{sys.})) \times 10^{-5}$ **[HIGH] S1** (arXiv:1109.4897v1). In its strongest form the claim was not "neutrinos are faster than light" but "we have measured this, with systematic and statistical errors we have controlled, and we cannot find the mistake"; the collaboration wrote that it intended to continue investigating possible systematic effects and invited scrutiny. A six-sigma effect in a well-instrumented experiment is a claim of fact about an instrument before it is a claim about nature.

Read as physics, the anomaly would have meant Lorentz invariance violation in the neutrino sector at the level of 25 parts per million, since the neutrino's rest mass gives a deviation below $10^{-19}$ at these energies. Every theoretical response took that as the hypothesis, and one of them (Cohen and Glashow) showed it was inconsistent with the beam having arrived at all.

## Origin and lineage

The measurement was a by-product: OPERA was built to see tau neutrinos appear in a muon neutrino beam, and neutrino velocity was a secondary goal that its timing upgrades made possible. Earlier results were MINOS, $(v - c)/c = (5.1 \pm 2.9) \times 10^{-5}$ at lower energy (Phys. Rev. D 76, 072005 (2007)), an older short-baseline limit of $4 \times 10^{-5}$ above 30 GeV and the SN1987A limit of $|v - c|/c < 2 \times 10^{-9}$ at 10 MeV, all quoted in the OPERA paper's introduction **[HIGH] S1**. The ready-made interpretation was the tachyonic neutrino of Chodos, Hauser and Kostelecký (1985), scored in the [tachyon dossier](tachyons-feinberg-1967.md); the frameworks that could accommodate a species-dependent maximal velocity are in [Lorentz-violating frameworks](lorentz-violating-frameworks.md). The register carries the verified account under [LOR-4](../../constraints/lor-4.md). The episode has no fictional descendant, though it briefly revived the tachyon in popular accounts.

## The mechanism

The quantity measured is

$$\delta t = \mathrm{TOF}_c - \mathrm{TOF}_\nu ,$$

the difference between the time light would take in vacuum over the baseline and the time the neutrinos took, positive meaning early arrival. The relative velocity difference follows from

$$\frac{v - c}{c} = \frac{\delta t}{\mathrm{TOF}_{c0} - \delta t},$$

where $\mathrm{TOF}_{c0}$ is the light time over the effective baseline of 730.085 km from the average meson decay point to the detector **[HIGH] S1** (OPERA, JHEP 10 (2012) 093, §8). The geodesy campaign fixed the distance from the CNGS target focal point to the origin of the OPERA reference frame at $(730534.61 \pm 0.20)$ m, and the distance from the beam current transformer (BCT) at CERN, where proton extraction is timestamped, to that origin at $(731278.0 \pm 0.2)$ m **[HIGH] S1**. The beam is almost pure $\nu_\mu$ with mean energy 17 GeV **[HIGH] S1**. Timing at both ends is GPS common-view, disciplined by caesium clocks and calibrated by the German and Swiss metrology institutes; the main analysis compares the time distribution of 10.5 μs proton extractions, measured by the BCT, with the distribution of neutrino interaction times, by maximum likelihood, since individual neutrinos cannot be matched to individual protons in a long extraction.

Two instrumental effects were found during the CNGS winter shutdown of 2011 to 2012 and are documented in §6.1 of the published paper. First, the delay of the 8.3 km optical fibre carrying the GPS one-pulse-per-second signal from the surface to the OPERA master clock underground was remeasured by the two-way technique in December 2011 and found to be "73.2 ns larger than the one determined in 2006 and 2007", with a larger jitter; the cause was "an optical cable not properly connected thus reducing the amount of light received by the optical/electrical converter of the Master Clock", and reconnection restored the 2006 value: $t_A = 40995.5 \pm 0.3$ ns in 2006, $41068.6 \pm 0.5$ ns before reconnection, $40994.1 \pm 0.3$ ns after **[HIGH] S1**. The extra delay made the reset signal to the target tracker late, "leading to an underestimation of the neutrino TOF" **[HIGH] S1**. An independent handle came from horizontal cosmic muons crossing both OPERA and the neighbouring LVD detector: their relative timing shifted abruptly in August 2008 and again in December 2011, and the extracted $(73.2 \pm 9)$ ns step matches the fibre recalibration **[HIGH] S1**. Second, the 10 MHz Vectron oscillator disciplining the master clock ran 0.124 ppm fast, so event timestamps drifted by up to 74 ns depending on position within the data-acquisition cycle, an effect of the opposite sign **[HIGH] S1**. The residual after both corrections is what the published paper reports.

The corrected result, from the target tracker analysis over 2009 to 2011, is

$$\delta t = \left(6.5 \pm 7.4\ (\mathrm{stat.})\ {}^{+8.3}_{-8.0}\ (\mathrm{sys.})\right)\ \mathrm{ns}, \qquad \frac{v - c}{c} = \left(2.7 \pm 3.1\ (\mathrm{stat.})\ {}^{+3.4}_{-3.3}\ (\mathrm{sys.})\right) \times 10^{-6},$$

consistent with c **[HIGH] S1**. The dominant systematic is the BCT time-response calibration at 5.0 ns; the fibre delay contributes 3.7 ns. The dependence of $\delta t$ on energy was checked and found null **[HIGH] S1**. A dedicated bunched-beam run from 22 October to 6 November 2011, with four 3 ns bunches per extraction separated by 524 ns, allowed single-event time-of-flight: 35 beam-related events, 20 retained, mean $\delta t = (-1.9 \pm 3.7)$ ns from the target tracker **[HIGH] S1**. This test was designed to exclude any artefact of the likelihood method; its result agrees with the main analysis and with ICARUS.

The cross-checks came from the same beam and the same laboratory. ICARUS, a liquid-argon detector in the same hall, measured seven beam-associated events in the bunched beam and found them "compatible with the simultaneous arrival of all events with equal speed, the one of light" **[HIGH] S1** (Antonello et al., Phys. Lett. B 713, 17 (2012), arXiv:1203.3433). Its 2012 dedicated run with 25 events gave $\delta t = (0.10 \pm 0.67\ (\mathrm{stat.}) \pm 2.39\ (\mathrm{syst.}))$ ns **[HIGH] S1** (JHEP 11 (2012) 049, arXiv:1208.2629). OPERA's own 2012 dedicated run gave $\delta t_\nu = (0.6 \pm 0.4\ (\mathrm{stat.}) \pm 3.0\ (\mathrm{syst.}))$ ns and $-1.8 \times 10^{-6} < (v_\nu - c)/c < 2.3 \times 10^{-6}$ at 90% confidence **[HIGH] S1** (JHEP 01 (2013) 153, arXiv:1212.1276).

The theoretical refutation is Cohen and Glashow, Phys. Rev. Lett. 107, 181803 (2011). A neutrino with $\delta \equiv v_\nu^2 - 1 > 0$ (with $c = 1$) can emit electron-positron pairs in vacuum through the neutral current, $\nu \to \nu + e^- + e^+$, above the threshold $E_0 = 2m_e/\sqrt{\delta}$, about 140 MeV for the OPERA value $\delta = 5 \times 10^{-5}$ **[HIGH] S1**. The rate and energy loss in the high-energy limit are

$$\Gamma = k' \frac{G_F^2}{192\pi^3} E^5 \delta^3, \qquad \frac{dE}{dx} = -k \frac{G_F^2}{192\pi^3} E^6 \delta^3, \qquad k = \frac{25}{448},\ k' = \frac{1}{14},$$

so each emission removes about 78% of the neutrino's energy, and integrating over a path $L$ gives a terminal energy

$$E^{-5} - E_0^{-5} = 5k\delta^3 \frac{G_F^2}{192\pi^3} L \equiv E_T^{-5},$$

which for the OPERA $\delta$ and 730 km is $E_T \approx 12.5$ GeV **[HIGH] S1**. The CNGS beam, with mean energy 17 GeV and a tail beyond 50 GeV, would have arrived "profoundly depleted and spectrally distorted", which it did not. The same argument applied to Super-Kamiokande atmospheric neutrinos gives $\delta < 1.4 \times 10^{-8}$, to IceCube showers above 16 TeV gives $\delta < 3.75 \times 10^{-10}$ and to IceCube events above 100 TeV gives $\delta < 1.7 \times 10^{-11}$ **[HIGH] S1**. ICARUS searched its 2010 and 2011 data for the pair-emission signature and found none, setting $\delta < 2.5 \times 10^{-8}$ at 90% confidence **[HIGH] S1** (Antonello et al., Phys. Lett. B 711, 270 (2012), arXiv:1110.3763). Stecker and Scully later pushed the pair-emission bound to about $10^{-20}$ using the IceCube PeV events **[MED] S1** (Phys. Rev. D 90, 043012 (2014)). Bi, Yin, Yu and Yuan showed independently that the pion decay $\pi \to \mu + \nu_\mu$ would be kinematically forbidden above about 5 GeV for the claimed velocity, so 40 GeV neutrinos in the beam already bounded the violation below $3 \times 10^{-7}$ **[HIGH] S1** (Phys. Rev. Lett. 107, 241802 (2011)).

The one loophole to Cohen and Glashow that was argued in print is that their calculation assumes a preferred frame; Amelino-Camelia, Freidel, Kowalski-Glikman and Smolin showed that in a "deformed" relativity that keeps the relativity of inertial frames the anomalous processes are forbidden **[MED] S1** (Mod. Phys. Lett. A 27, 1250063 (2012)). The instrument made the point moot.

## What it costs

The corrected measurement claims nothing faster than light and pays nothing. The bill below is what the anomaly, had it been real, would have carried, and it justifies the marks in the metadata line.

**B-new.** A neutrino maximal attainable velocity 25 ppm above c, energy independent between about 3 and 200 GeV and yet below $10^{-9}$ at 10 MeV, is a new term in the Lagrangian of the neutrino sector, not a Standard Model effect. Giudice, Sibiryakov and Strumia found that reconciling OPERA with SN1987A and with oscillation data "requires stringent conditions": minimal flavour dependence, a sharp fall at low energy and a departure from any simple power law, and that electroweak corrections would leak the violation into the electron and muon sectors where it is excluded **[HIGH] S1** (Nucl. Phys. B 861, 1 (2012)).

**B-caus.** A superluminal neutrino in a Lorentz-invariant world is a backward-in-time signal in some frame ([CAU-1](../../constraints/cau-1.md)); every framework that could accommodate it does so by a preferred frame ([CAU-4](../../constraints/cau-4.md)), which is the definition of B-caus.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | The anomaly as claimed was a superluminal signal with no frame picked; in special relativity that is a message to the past in some inertial frame, and the corrected result removes the violation by removing the signal. |
| CAU-2 | N/A | No closed timelike curves of the geometry are involved in a particle time-of-flight measurement. |
| CAU-3 | N/A | No wormhole or bubble to carry on a round trip. |
| CAU-4 | SILENT | The paper says any deviation beyond $10^{-19}$ "would point to Lorentz invariance violation in the neutrino sector" and stops there; it never says what would pick the frame, leaving that to the theoretical responses. |
| CAU-5 | N/A | No entanglement. |
| ENE-1 | N/A | A velocity measurement of a beam of particles has no stress-energy configuration for the energy conditions to constrain. |
| ENE-2 | N/A | The theorems concern time advances through curved geometry; the neutrino travelled through the Earth's crust on the ordinary metric. |
| ENE-3 | N/A | No negative energy density is proposed. |
| ENE-4 | N/A | No bubble. |
| ENE-5 | N/A | Not a warp metric. |
| ENE-6 | N/A | The Casimir floor is irrelevant to a beam measurement. |
| ENE-7 | N/A | A beam timing measurement on the ordinary metric; no topology is involved, so the theorem does not bear. |
| CON-1 | N/A | No bubble, no horizon. |
| CON-2 | N/A | No route to lay. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No horizon. |
| STA-2 | N/A | No throat. |
| STA-3 | N/A | No chronology horizon. |
| HAZ-1 | N/A | No bubble wall. |
| HAZ-2 | N/A | No horizon flux. |
| HAZ-3 | N/A | No throat. |
| LOR-1 | DODGES | The neutrino is massive and starts below c, so the claim could not be a body accelerated through c; the responses read it as a maximal attainable velocity above c (Coleman and Glashow kinematics), which is outside the Lorentz-invariant argument LOR-1 states. |
| LOR-2 | SATISFIES | The tachyonic-neutrino reading predicts $(v - c)/c \propto 1/E^2$; the observed energy independence of $\delta t$ disfavours a special-relativistic tachyon (Amelino-Camelia et al. 2011) and the corrected null result removes the need for one. |
| LOR-3 | SATISFIES | The bunched-beam runs of OPERA and ICARUS measure arrival of individual interactions against individual proton bunches, a front measurement not a group-velocity inference, and they agree with c. |
| LOR-4 | SATISFIES | This is the entry carrying the verified account: fibre connection plus oscillator offset, corrected not retracted, consistent with c; its other half, the [Scharnhorst effect](scharnhorst-effect.md), is the calculated superluminal velocity that nobody can measure. |
| WRP-1 | N/A | Not a warp drive. |
| WRP-2 | N/A | No shell of material. |
| WRP-3 | N/A | No positive-energy warp claim. |
| MAN-1 | N/A | Extra-dimensional neutrino shortcuts (Päs, Pakvasa and Weiler, Phys. Rev. D 72, 095017 (2005)) were floated as an explanation in the weeks after the announcement, but the measurement itself proposes no mechanism and the register entry does not bear on it. |

## Status of the argument

- 22 September 2011: arXiv:1109.4897v1 reports the 60.7 ns early arrival; a CERN seminar the next day.
- 29 September 2011: Cohen and Glashow (arXiv:1109.6562) show the beam could not have arrived with its energy spectrum if superluminal; Bi et al. show pion decay would have been forbidden; Giudice, Sibiryakov and Strumia catalogue what any model would need; Amelino-Camelia et al. note that the refutations assume a preferred frame.
- 17 November 2011: v2 adds the bunched-beam test of 22 October to 6 November, consistent with the anomaly at that stage (the fibre error was common to both).
- December 2011 to February 2012: the fibre connector and the oscillator offset are found during the winter shutdown; the LVD cosmic-muon cross-check dates the fibre problem to August 2008.
- March 2012: ICARUS reports seven bunched-beam events consistent with c (Phys. Lett. B 713, 17) and no pair-emission signature in its earlier data (Phys. Lett. B 711, 270).
- July 2012: the OPERA paper is revised (v3 and v4) and published in JHEP 10 (2012) 093 with the corrected result; nothing is retracted, the published paper is the corrected paper.
- 2012 to 2013: dedicated runs by ICARUS (JHEP 11 (2012) 049) and OPERA (JHEP 01 (2013) 153) confirm consistency with c at the few-nanosecond level; Borexino, LVD and MINOS report the same.
- 2013: Liberati's review (Class. Quantum Grav. 30, 133001, §8) reads the corrected OPERA value together with ICARUS and MINOS "as constraints on neutrino velocities in the GeV range rather than a signal of beyond standard model physics"; the review uses the word "retracted" for the initial claim, which the arXiv record does not support (the paper was revised and published), and the register's wording is the accurate one.
- 2014 onward: Stecker and Scully use IceCube PeV neutrinos to bound the superluminal fraction below about $10^{-20}$; the Kostelecký and Russell data tables carry the neutrino-sector coefficients.
- No peer-reviewed defence of the original anomaly exists as of 2026-09-12; the collaboration's own published paper is the refutation.

## Sources

- OPERA collaboration (Adam et al.), "Measurement of the neutrino velocity with the OPERA detector in the CNGS beam", JHEP 10 (2012) 093, arXiv:1109.4897 (v1 22 September 2011, v4 12 July 2012). S1. Read in full, including §6.1, §8 and §9.
- OPERA collaboration, "Measurement of the neutrino velocity with the OPERA detector in the CNGS beam using the 2012 dedicated data", JHEP 01 (2013) 153, arXiv:1212.1276. S1.
- Antonello et al. (ICARUS), "Measurement of the neutrino velocity with the ICARUS detector at the CNGS beam", Phys. Lett. B 713, 17 (2012), arXiv:1203.3433. S1.
- Antonello et al. (ICARUS), "A search for the analogue to Cherenkov radiation by high energy neutrinos at superluminal speeds in ICARUS", Phys. Lett. B 711, 270 (2012), arXiv:1110.3763. S1.
- Antonello et al. (ICARUS), "Precision measurement of the neutrino velocity with the ICARUS detector in the CNGS beam", JHEP 11 (2012) 049, arXiv:1208.2629. S1.
- Cohen and Glashow, "Pair creation constrains superluminal neutrino propagation", Phys. Rev. Lett. 107, 181803 (2011), arXiv:1109.6562. S1. Read in full.
- Bi, Yin, Yu and Yuan, "Constraints and tests of the OPERA superluminal neutrinos", Phys. Rev. Lett. 107, 241802 (2011), arXiv:1109.6667. S1.
- Giudice, Sibiryakov and Strumia, "Interpreting OPERA results on superluminal neutrino", Nucl. Phys. B 861, 1 (2012), arXiv:1109.5682. S1.
- Amelino-Camelia, Freidel, Kowalski-Glikman and Smolin, "OPERA neutrinos and relativity", Mod. Phys. Lett. A 27, 1250063 (2012), arXiv:1110.0521. S1.
- Amelino-Camelia, Gubitosi, Loret, Mercati, Rosati and Lipari, "OPERA-reassessing data on the energy dependence of the speed of neutrinos", Int. J. Mod. Phys. D 20, 2623 (2011), arXiv:1109.5172. S1.
- Cacciapaglia, Deandrea and Panizzi, "Superluminal neutrinos in long baseline experiments and SN1987a", JHEP 11 (2011) 137, arXiv:1109.4980. S1.
- Stecker and Scully, "Propagation of superluminal PeV IceCube neutrinos", Phys. Rev. D 90, 043012 (2014), arXiv:1404.7025. S1.
- MINOS collaboration (Adamson et al.), "Measurement of neutrino velocity with the MINOS detectors and NuMI neutrino beam", Phys. Rev. D 76, 072005 (2007), arXiv:0706.0437. S1 (as cited by OPERA and by Cohen and Glashow).
- Liberati, "Tests of Lorentz invariance: a 2013 update", Class. Quantum Grav. 30, 133001 (2013), arXiv:1304.5795, §8. S2.
