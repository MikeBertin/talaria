# Retrocausal signalling proposals

*Delayed-choice and quantum-eraser schemes in which switching a distant interference pattern on and off would send a message backwards in time; the fringes and the anti-fringes always add to nothing.*

**Kind:** physics · **Loophole:** L5 · **Standing:** K0 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

Quantum mechanics has delayed-choice experiments. In Wheeler's version an experimenter's later choice of measurement decides whether a photon that has already passed a two-slit screen behaved as a wave or a particle. In the entangled versions of the 1990s the choice is made on the photon's twin. Dopfer's 1998 Innsbruck experiment showed that the interference pattern behind a double slit for photon 1 appears or disappears depending on where the detector for its momentum-entangled twin, photon 2, is placed: at the focal plane of a lens, where the twin's momentum is measured and which-slit information is erased, fringes appear; at the image plane, where the twin's position reveals which slit, they do not. Kim, Yu, Kulik, Shih and Scully's delayed-choice quantum eraser of 2000 does the same with the erasing choice made after photon 1 has been detected. In all of these the fringes appear only in the coincidence counts, that is, in photon 1's data after it has been sorted by photon 2's results.

The retrocausal signalling proposal is the observation that photon 2's detector can be anywhere, arbitrarily far away and arbitrarily late, and the question whether the coincidence sorting can be dispensed with. If Alice, holding photon 2, can decide by moving her detector whether Bob, holding photon 1, sees fringes or not, and if Bob can see this in his raw singles counts without waiting for Alice's data, then Alice's choice is a bit that Bob reads at once, and, because Alice can choose after Bob's photons have landed, a bit that Bob reads before Alice sends it. John Cramer proposed a test of exactly this from 2006, first at the STAIF conference alongside Raymond Jensen's related momentum-uncertainty scheme, then as a laboratory programme at the University of Washington from 2007 to 2014. The strongest form of the claim, in Cramer and Herbert's own words, is that the "presence or absence of an interference pattern in a path-entangled two photon system with variable entanglement, controlled by measurement choice, would seem to permit retrocausal signaling from one observer to another" **[HIGH] S1**. The refinement that kept the programme alive was to reduce the entanglement to about 71 percent, so that some one-photon coherence would survive alongside the two-photon correlation and the fringes might leak into the singles.

## Origin and lineage

Cramer is the author of the transactional interpretation of quantum mechanics (Rev. Mod. Phys. 58, 647, 1986), a time-symmetric account in which offer and confirmation waves meet across spacetime, and his interest in retrocausal signalling grew out of it. Jensen presented "Is faster-than-light communication possible?" at STAIF 2006 (AIP Conf. Proc. 813, 1409), proposing a scheme based on measuring the momentum uncertainty of one photon of each pair, and a GHZ three-particle variant in 2010 **[HIGH] S1** (bibliographic records; content from the abstracts). Cramer's programme was described on his University of Washington pages and in his Analog columns, and its conclusion was written up with Nick Herbert, the author of the 1982 FLASH proposal covered in [entanglement signalling](entanglement-signalling.md), as "An inquiry into the possibility of nonlocal quantum communication", arXiv:1409.5098, submitted to Foundations of Physics in September 2014 and revised in February 2015 **[HIGH] S1**. Cramer's 2016 book *The Quantum Handshake* (Springer) carries the material as its chapter 7, "Nonlocal signaling?" **[MED] S2**. The broader family includes Peres's 1999 delayed-choice entanglement swapping, in which entanglement is produced "a posteriori, after the entangled particles have been measured and may no longer exist" (J. Mod. Opt. 47, 139, 2000), realised by Ma et al. in 2012 (Nature Phys. 8, 479) **[HIGH] S1**, and a steady stream of eraser-based proposals since, each answered by the same argument.

In fiction the retrocausal signal is Benford's tachyon telegram in *Timescape* and every story in which the reply arrives before the question; the catalogue lists timescape-tachyon-message under L5. Cramer, a physicist who also writes fiction, is one of the few people to have proposed the experiment and then run it.

## The mechanism

Let the source emit pairs in the path-entangled state

$$|\Psi\rangle = \frac{1}{\sqrt2}\big(|a\rangle_1|a'\rangle_2 + |b\rangle_1|b'\rangle_2\big),$$

where $|a\rangle$ and $|b\rangle$ are photon 1's two slit paths and $|a'\rangle$, $|b'\rangle$ are the correlated states of photon 2, orthogonal because they carry which-slit information. Bob detects photon 1 at position $x$ on a screen, where the slit amplitudes are $\psi_a(x)$ and $\psi_b(x)$. His singles distribution is the marginal

$$P_1(x) = \mathrm{Tr}_2\,|\langle x|\Psi\rangle|^2 = \tfrac12\big(|\psi_a(x)|^2 + |\psi_b(x)|^2\big),$$

with no cross term, because the cross term is multiplied by $\langle a'|b'\rangle = 0$. This is [CAU-5](../../constraints/cau-5.md) in one line: Bob's reduced state is a mixture of the two slit states and shows no fringes, whatever Alice does to photon 2.

Now let Alice measure photon 2 in the erasing basis $|\pm\rangle = (|a'\rangle \pm |b'\rangle)/\sqrt2$, which is what placing her detector at the focal plane of the lens does. Conditioned on her result, Bob's subensembles are

$$P_1(x\,|\,\pm) = \tfrac12\,|\psi_a(x) \pm \psi_b(x)|^2,$$

fringes and anti-fringes, shifted by half a period. Their sum, weighted by the equal probabilities of $\pm$, is the smooth marginal again. Bob sees the fringes only after Alice tells him which of his photons belong to which subensemble, and that message travels at $c$ or slower. If instead Alice measures in the which-slit basis, the image plane, Bob's subensembles are $|\psi_a|^2$ and $|\psi_b|^2$, each smooth, and their sum is the same marginal. The pattern in the coincidences is switched on and off by Alice's choice; the pattern in the singles is never there. The delay in Alice's choice is irrelevant, because the marginal never depended on it.

Cramer and Herbert's contribution was to work this through for the cases where a signal looked most likely: a four-detector polarisation-entangled system, a four-detector path-entangled system and a three-detector path-entangled system with an optical mixer that combines photon paths, including the case of partial entanglement in which one-photon coherence and two-photon entanglement are both present. Their finding is that "even when interference patterns can be switched off and on, there is always a 'signal' interference pattern and an 'anti-signal' interference pattern that mask any observable interference when they are added, even when entanglement and coherence are simultaneously present", a behaviour they attribute to what Jaeger, Horne and Shimony called the complementarity of one-particle and two-particle interference **[HIGH] S1**. For the path-entangled case they show that "for any value of $\alpha$", the parameter setting the degree of entanglement, "no nonlocal signal can be sent by inserting and removing" the beam splitter on Alice's side or by varying her phase, and that Bob's singles rates are unchanged even when Alice's photons are intercepted by a black absorber before reaching her apparatus **[HIGH] S1**. The 71 percent conjecture, which they cite as their own earlier suggestion, "has proved to be incorrect" **[HIGH] S1**. Their conclusion: "In the context of the standard quantum formalism, Nature appears to be well protected from the possibility of nonlocal signaling" **[HIGH] S1**.

The one-particle and two-particle complementarity is a quantitative statement. For a two-photon state the visibility $V_1$ of single-photon fringes and the visibility $V_{12}$ of coincidence fringes obey $V_1^2 + V_{12}^2 \le 1$ (Jaeger, Horne and Shimony 1993) **[MED] S1** (cited through Cramer and Herbert). Full entanglement gives perfect coincidence fringes and no singles fringes; partial entanglement buys singles fringes whose visibility does not depend on the distant choice. The singles pattern that survives at 71 percent entanglement is Bob's own, fixed by his own apparatus, and Alice cannot move it.

## What it costs

Nothing material, and everything theoretical. The scheme is built from lenses, slits, down-conversion crystals and single-photon counters, all of which exist. What it needs is that the marginal of an entangled state depend on the distant measurement, which is false in any linear quantum theory; making it true requires nonlinear evolution of the kind Gisin and Polchinski showed does permit signalling and Simon, Bužek and Gisin showed is excluded by no-signalling plus the trace rule (see the entanglement signalling dossier). That is **B-new**: physics outside quantum mechanics as it stands. If the signal existed it would be retrocausal by construction, a message to the past with no preferred frame to tame it, and so **B-caus** under [CAU-1](../../constraints/cau-1.md). Standing K0: the proposal was worked, tested against the formalism by its own proponent and found to fail, and the proponent published the negative result.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | The proposal is retrocausal on its face: Alice's delayed choice would be read by Bob before it was made. That is the antitelephone without needing a second device, and no Lorentz-breaking is offered |
| CAU-2 | N/A | No spacetime geometry; the loop is made of signals, not curves |
| CAU-3 | N/A | No wormhole or bubble |
| CAU-4 | SILENT | A working retrocausal signal could not be rescued by a preferred frame, since the ordering is reversed in the laboratory frame itself; the proposals do not address the point |
| CAU-5 | VIOLATES | The scheme requires Bob's singles statistics to depend on Alice's choice. The partial trace shows they do not; Cramer and Herbert's case-by-case analysis finds the fringes and anti-fringes always cancel |
| ENE-1 | N/A | No stress-energy is involved |
| ENE-2 | N/A | No gravitational time advance |
| ENE-3 | N/A | No negative energy |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class |
| ENE-6 | N/A | Casimir effect not invoked |
| ENE-7 | N/A | No geometry and no topology are proposed; the theorem does not bear. |
| CON-1 | N/A | Nothing is piloted |
| CON-2 | N/A | The entangled pairs must be shared in advance, at or below c, which is not the bootstrap CON-2 describes |
| CON-3 | N/A | No tube |
| STA-1 | N/A | No bubble |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | Nothing is swept up |
| HAZ-2 | N/A | No horizon |
| HAZ-3 | N/A | No throat |
| LOR-1 | N/A | Photons; nothing is accelerated |
| LOR-2 | N/A | No tachyon; the carrier would be the state update |
| LOR-3 | N/A | No group velocity or tunnelling time is invoked |
| LOR-4 | N/A | Neither Scharnhorst nor OPERA |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 1993: Jaeger, Horne and Shimony state the complementarity of one- and two-particle interference **[MED] S1**. 1998: Dopfer's thesis; 2000: Kim, Yu, Kulik, Shih and Scully's delayed-choice quantum eraser (Phys. Rev. Lett. 84, 1), both showing fringes only in coincidence **[HIGH] S1**.
- 2006: Jensen at STAIF proposes a faster-than-light scheme; Cramer proposes the Dopfer-based test in the same period **[HIGH] S1** for Jensen's record, **[MED] S3** for the dating of Cramer's first talks (his own web account).
- 2007 to 2014: Cramer's laboratory and theoretical programme at the University of Washington, supported in part by the US Department of Energy and by public donations. Cramer reported year by year that the apparatus was not yet able to test the claim, and in 2014 reported the theoretical "show stopper" **[MED] S3** (his web summary).
- 2014 to 2015: Cramer and Herbert, arXiv:1409.5098, the negative result, with the 71 percent conjecture withdrawn **[HIGH] S1**. The paper was submitted to Foundations of Physics; no journal version has been located as of 2026-09-12.
- 2016: Cramer's *The Quantum Handshake*, chapter 7, restates the negative conclusion **[MED] S2**.
- Since then: further eraser-based proposals appear, mostly as preprints or in low-tier journals, and are answered by the same argument; Ghirardi and Romano's 2013 reply to one such proposal is representative **[MED] S1**. No peer-reviewed proposal for retrocausal signalling within linear quantum mechanics has survived review as of 2026-09-12, and the field's own most committed experimenter is on record that none can.

## Sources

- Cramer and Herbert, "An inquiry into the possibility of nonlocal quantum communication", arXiv:1409.5098 (2014, v2 2015). S1
- Jensen, "Is faster-than-light communication possible?", AIP Conf. Proc. 813, 1409 (2006), doi:10.1063/1.2169326; Jensen, "On using Greenberger-Horne-Zeilinger three-particle states for superluminal communication", AIP Conf. Proc. 1208, 2010, doi:10.1063/1.3326255. S1
- Cramer, "The transactional interpretation of quantum mechanics", Rev. Mod. Phys. 58, 647 (1986). S1
- Cramer, *The Quantum Handshake: Entanglement, Nonlocality and Transactions* (Springer, 2016), ch. 7. S2
- Peres, "Delayed choice for entanglement swapping", J. Mod. Opt. 47, 139 (2000), arXiv:quant-ph/9904042. S1
- Ma et al., "Experimental delayed-choice entanglement swapping", Nature Phys. 8, 479 (2012), arXiv:1203.4834. S1
- Kim, Yu, Kulik, Shih and Scully, "Delayed 'choice' quantum eraser", Phys. Rev. Lett. 84, 1 (2000). S1
- Jaeger, Horne and Shimony, "Complementarity of one-particle and two-particle interference", Phys. Rev. A 48, 1023 (1993). S1
- Dopfer, PhD thesis, University of Innsbruck (1998), as cited by Cramer and Herbert and by Zeilinger, Rev. Mod. Phys. 71, S288 (1999). S1
- Ghirardi and Romano, "On a quite recent proposal of faster than light quantum communication", arXiv:1305.5716 (2013). S1
- Peres and Terno, "Quantum information and relativity theory", Rev. Mod. Phys. 76, 93 (2004), arXiv:quant-ph/0212023, for the general theorem. S1
- Cramer, "Nonlocal quantum communication" programme summary, faculty.washington.edu/jcramer/NLS/NL_signal.htm (accessed 2026-09-12). S3
