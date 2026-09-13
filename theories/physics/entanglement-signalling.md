# Entanglement signalling and the no-communication theorem

*Every "entanglement radio" and quantum ansible, and the theorem that closes them: measuring one half of an entangled pair changes nothing that the other half can see.*

**Kind:** physics · **Loophole:** L5 · **Standing:** K0 · **Bill:** B-new, B-caus · **Last reviewed:** 2026-09-12

## The claim

Take a pair of particles prepared in an entangled state, for example two spin-half particles in the singlet $(|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)/\sqrt{2}$, and separate them by any distance. Quantum mechanics says that when Alice measures her particle along some axis, the joint state collapses at once, and Bob's particle is thereafter found in the opposite state along that axis. The correlation is perfect, it is set up the instant Alice measures and it does not care how far away Bob is. Bell's theorem and its experimental tests show that this correlation cannot be explained by any local hidden variable carried by the particles from the source: something non-local is happening. The entanglement radio proposal is the natural next thought. If Alice's choice of measurement, or her choice whether to measure at all, alters the state of Bob's particle instantaneously, then Alice can encode a message in her choices and Bob can read it off his particles, with no signal crossing the gap and no delay set by light.

The strongest form of the proposal accepts that any one of Bob's outcomes is random and looks instead for a statistical signature: a change in the distribution of Bob's results, in the visibility of an interference pattern, in the purity of his ensemble, in the outcome of a cloning or amplifying step applied to his particle, or in anything else Bob can compute from his side alone, that depends on what Alice did. Nick Herbert's FLASH proposal of 1982 is the cleanest historical example: amplify Bob's photon into many copies with a laser gain medium, then measure the copies in two bases to learn which basis Alice used. Later proposals replace the amplifier with an interferometer or a quantum eraser; the sibling dossier [retrocausal signalling proposals](retrocausal-signalling-proposals.md) covers that family. The conjecture that entanglement and wormholes are two faces of one thing, covered in [ER = EPR](er-equals-epr.md), is sometimes read as a route around the theorem; it is not, since the wormholes it names are non-traversable. Within quantum mechanics the proposal is one claim with many costumes: that some locally computable statistic on Bob's side is a function of Alice's choice.

## Origin and lineage

The idea is as old as the Einstein, Podolsky and Rosen argument of 1935, which called the instantaneous fixing of a distant state "spooky" precisely because it looked like a signal. Eberhard 1978 and Ghirardi, Rimini and Weber 1980 gave the general proofs that it is not one **[HIGH] S1**. Herbert's FLASH paper of 1982 (Found. Phys. 12, 1171) is the proposal that provoked the no-cloning theorem: Wootters and Zurek (Nature 299, 802) and Dieks (Phys. Lett. A 92, 271) both published in 1982 that a single unknown quantum state cannot be copied, which is exactly the step FLASH needed **[HIGH] S1**. Peres later wrote up how he refereed FLASH and recommended publication so that the error could be found in print (Fortschr. Phys. 51, 458, 2003) **[MED] S1**. Eberhard and Ross extended the no-signalling result to quantum field theory in 1989 (Found. Phys. Lett. 2, 127) **[HIGH] S1**.

In fiction this is the ansible: Le Guin's device of 1966 and the philotic web of Card's Ender novels are both instantaneous links between fixed stations, and the Star Trek subspace radio is the same wish in different clothes. The catalogue lists them as le-guin-ansible, ender-philotic-ansible and star-trek-subspace-radio under L5. None of those works claims entanglement as the mechanism; the entanglement radio is what the ansible became once real physics offered a non-local correlation to hang it on.

Lineage: [Le Guin's ansible goes out into the field](../../lineage/le-guin-ansible-outward.md).

## The mechanism

Write the joint state of the pair as a density matrix $\rho_{AB}$ on the tensor product of Alice's and Bob's Hilbert spaces. Everything Bob can measure, alone, is a function of his reduced density matrix

$$\rho_B = \mathrm{Tr}_A\,\rho_{AB},$$

the partial trace over Alice's system. Any operation Alice can perform, including a measurement whose result she discards, a measurement she conditions on, a unitary rotation or doing nothing, is described by a set of Kraus operators $A_m$ acting on her factor alone, with $\sum_m A_m^\dagger A_m = 1$. After her operation the joint state is $\rho'_{AB} = \sum_m (A_m \otimes 1)\,\rho_{AB}\,(A_m^\dagger \otimes 1)$. Bob's new reduced state is

$$\rho'_B = \mathrm{Tr}_A \sum_m (A_m \otimes 1)\rho_{AB}(A_m^\dagger \otimes 1) = \mathrm{Tr}_A\Big[\Big(\sum_m A_m^\dagger A_m \otimes 1\Big)\rho_{AB}\Big] = \mathrm{Tr}_A\,\rho_{AB} = \rho_B,$$

using the cyclic property of the trace inside Alice's factor and completeness of the Kraus set. That is the whole proof. Bob's reduced density matrix, and therefore the probability of every outcome of every experiment he can do on his side, is the same whatever Alice does. Peres and Terno present this as the statement that a superoperator built from operators of Alice's system alone leaves Bob's statistics untouched: "The statistics of Bob's result are not affected at all by what Alice may simultaneously do somewhere else" **[HIGH] S1**. This is the content of [CAU-5](../../constraints/cau-5.md).

Two remarks make the proof bite on the proposals. First, the argument does not assume that Alice's measurement is complete, projective or even a measurement: any completely positive trace-preserving map on her side is covered, so "measure gently", "measure weakly" or "do not measure at all" are all inside the theorem. Second, Bob's side is unrestricted too. Cloning, amplifying, interfering or erasing on Bob's side is a map on $\rho_B$, and a map applied to the same input gives the same output. FLASH fails because the amplifier it needs would have to be a linear map that clones an unknown state, which Wootters, Zurek and Dieks showed cannot exist; the no-communication theorem says that whatever map replaces it, the answer is the same **[HIGH] S1**.

The correlations are real. Conditioned on Alice's result, Bob's ensemble is different: if she found spin up along $z$, his subensemble is spin down. But the sorting of Bob's data into those subensembles needs Alice's results, which arrive by classical channel at or below $c$. Unsorted, Bob's ensemble is the maximally mixed state $\rho_B = 1/2$ for the singlet, whichever axis Alice chose and whether she measured at all. The register's phrase "the statistics of one party's results are unaffected by anything the other party does" is exactly this.

The escape hatch the register names is nonlinear quantum mechanics. Weinberg proposed in 1989 (Ann. Phys. 194, 336) a general framework for small nonlinear corrections to the Schrödinger equation, as something experiment could test **[HIGH] S1**. Gisin showed in 1990 that Weinberg's framework permits arbitrarily fast communication: the abstract states that it "allows for arbitrarily fast communications" by example **[HIGH] S1**. Polchinski showed in 1991 that the trouble is structural: Weinberg's nonlinear quantum mechanics "leads either to communication via Einstein-Podolsky-Rosen correlations, or to communications between branches of the wave function" **[HIGH] S1**. The second horn is the so-called Everett phone, in which a nonlinear evolution lets different branches of the wavefunction affect one another. Mielnik's comment of 2001 argues that the difficulty is not special to Weinberg's scheme but afflicts any attempt to enlarge the set of observables while keeping the usual structure of pure and mixed states **[MED] S1**. Simon, Bužek and Gisin closed the circle in 2001: assuming only that states are rays in a Hilbert space, that outcome probabilities follow the trace rule and that superluminal communication is excluded, the dynamics must be a linear completely positive map on density matrices, which "also constrains possible nonlinear modifications of quantum physics" **[HIGH] S1**. Bassi and Hejazi re-derived the same implication in 2015 for a teaching audience **[MED] S1**. So the linearity of quantum mechanics and the impossibility of the entanglement radio are the same fact seen from two sides.

Both of the register's unverified escape-hatch citations check out. Gisin, Phys. Lett. A 143, 1 (1990) and Polchinski, Phys. Rev. Lett. 66, 397 (1991) exist under those references, say what CAU-5 says they say, and are complemented by Simon, Bužek and Gisin 2001, which turns the observation into a theorem that no-signalling forces linearity.

## What it costs

Nothing about the entanglement radio is expensive in the sense of energy or matter. What it needs is that quantum mechanics be wrong in a specific way: the evolution of states must be nonlinear, so that Bob's reduced state can depend on Alice's operation. That is new physics outside the Standard Model and general relativity, hence **B-new**, and it is new physics of a kind that the no-signalling condition rules out in any theory that keeps Hilbert-space states and the trace rule (Simon, Bužek and Gisin). If the radio nonetheless worked, its signal would be instantaneous in some frame with no fixed speed in any frame, which is the tachyonic antitelephone of [CAU-1](../../constraints/cau-1.md); avoiding that would need a preferred frame in which "collapse" is simultaneous, which is the price named in [CAU-4](../../constraints/cau-4.md). Hence **B-caus**. Neither bill can be paid from inside quantum mechanics, which is why the standing is K0 and not K1: the proposal is not merely unworked, it is refuted by a theorem about the theory it invokes.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | VIOLATES | An instantaneous signal with no invariant speed is exactly the case CAU-1 covers: in some other inertial frame Bob's reading precedes Alice's choice, and two radios give the Benford, Book and Newcomb antitelephone. No entanglement-radio proposal supplies the Lorentz-breaking that CAU-1 says is the only way out |
| CAU-2 | N/A | Chronology protection is about closed timelike curves in a semiclassical spacetime; the entanglement radio proposes no geometry and its causal loops would be built from signals, not curves |
| CAU-3 | N/A | No wormhole or warp bubble to convert into a time machine |
| CAU-4 | SILENT | A working radio would need the preferred-frame escape (the frame in which collapse is simultaneous), and the proposals never say what picks it; relativistic quantum mechanics has no such frame and Peres and Terno show none is needed. The one worked case of the escape, the [Scharnhorst effect](scharnhorst-effect.md), has plates to pick the frame; a radio has nothing |
| CAU-5 | VIOLATES | This is the entry that closes the proposal. The radio requires Bob's statistics to depend on Alice's operation; the partial-trace argument shows they cannot. Nonlinear quantum mechanics would reopen it (Gisin 1990, Polchinski 1991, both verified here) and is excluded for that reason (Simon, Bužek and Gisin 2001) |
| ENE-1 | N/A | No stress-energy is involved; the energy conditions price geometric FTL, not quantum state updates |
| ENE-2 | N/A | ENE-2 forbids gravitational time advance without negative energy; no gravitational field is proposed |
| ENE-3 | N/A | No negative energy is claimed, so the quantum inequalities have nothing to bound |
| ENE-4 | N/A | The pocket geometry belongs to the warp class |
| ENE-5 | N/A | Warp-class energy result; not a warp drive |
| ENE-6 | N/A | The Casimir effect is not invoked |
| ENE-7 | N/A | An information claim on flat spacetime with no geometry at all; the theorem forbids topological shortcuts and none is proposed. Its one point of contact is ER = EPR, scored in its own dossier. |
| CON-1 | N/A | No horizon; nothing is piloted |
| CON-2 | N/A | No route is laid; the proposal needs only a shared entangled pair, distributed at or below c, which is a bootstrap of a different and unobjectionable kind |
| CON-3 | N/A | No Krasnikov tube |
| STA-1 | N/A | No bubble to be unstable |
| STA-2 | N/A | No throat to hold open |
| STA-3 | N/A | No chronology horizon in a spacetime sense |
| HAZ-1 | N/A | Nothing is swept up |
| HAZ-2 | N/A | No horizon, no Hawking flux |
| HAZ-3 | N/A | No throat, no tides |
| LOR-1 | SATISFIES | No massive body is pushed towards c; the particles travel to their stations at ordinary speeds |
| LOR-2 | N/A | No tachyonic particle is proposed as the carrier; the claimed carrier is the state update itself |
| LOR-3 | N/A | The claim rests on collapse, not on a group velocity or a tunnelling time |
| LOR-4 | N/A | Neither the Scharnhorst effect nor OPERA is invoked |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell |
| WRP-3 | N/A | The positive-energy warp argument does not bear on a signalling scheme |
| MAN-1 | N/A | No extra dimension is invoked |

## Status of the argument

- 1978 to 1980: Eberhard, then Ghirardi, Rimini and Weber, prove that the quantum measurement process cannot transmit a signal faster than light **[HIGH] S1**.
- 1982: Herbert's FLASH is published; Wootters and Zurek and, independently, Dieks reply within the year with the no-cloning theorem, which removes the amplifier FLASH needs **[HIGH] S1**.
- 1989 to 1991: Weinberg's nonlinear framework; Gisin shows it signals; Polchinski shows any such theory either signals across EPR pairs or across Everett branches **[HIGH] S1**.
- 2001: Simon, Bužek and Gisin derive linear completely positive dynamics from the no-signalling condition plus the static structure of quantum mechanics **[HIGH] S1**. Mielnik's comment of the same year broadens Polchinski's conclusion rather than contesting it **[MED] S1**.
- 2004: Peres and Terno's review states the theorem in the operational form used above and situates it inside relativistic quantum information **[HIGH] S1**.
- 2006 to 2016: the interferometric and eraser variants are proposed and closed; see [retrocausal signalling proposals](retrocausal-signalling-proposals.md).
- As of 2026-09-12 there is no peer-reviewed proposal for entanglement signalling inside linear quantum mechanics that has survived review, and no experimental claim of a signal. Proposals continue to appear in low-tier venues at a rate of a few a year, each answered by the same partial trace. Absence of a surviving counterexample after forty-eight years is the finding.

## Sources

- Eberhard, "Bell's theorem and the different concepts of locality", Nuovo Cimento B 46, 392 (1978), doi:10.1007/BF02728628. S1
- Ghirardi, Rimini and Weber, "A general argument against superluminal transmission through the quantum mechanical measurement process", Lett. Nuovo Cimento 27, 293 (1980), doi:10.1007/BF02817189. S1
- Peres and Terno, "Quantum information and relativity theory", Rev. Mod. Phys. 76, 93 (2004), arXiv:quant-ph/0212023, §II. S1
- Gisin, "Weinberg's non-linear quantum mechanics and supraluminal communications", Phys. Lett. A 143, 1 (1990), doi:10.1016/0375-9601(90)90786-N. S1
- Polchinski, "Weinberg's nonlinear quantum mechanics and the Einstein-Podolsky-Rosen paradox", Phys. Rev. Lett. 66, 397 (1991). S1
- Weinberg, "Testing quantum mechanics", Ann. Phys. 194, 336 (1989). S1
- Simon, Bužek and Gisin, "No-signaling condition and quantum dynamics", Phys. Rev. Lett. 87, 170405 (2001), arXiv:quant-ph/0102125. S1
- Mielnik, "Comments on: Weinberg's nonlinear quantum mechanics and Einstein-Podolsky-Rosen paradox, by Joseph Polchinski", arXiv:quant-ph/0012041 (2001). S1
- Herbert, "FLASH: a superluminal communicator based upon a new kind of quantum measurement", Found. Phys. 12, 1171 (1982). S1
- Wootters and Zurek, "A single quantum cannot be cloned", Nature 299, 802 (1982). S1
- Dieks, "Communication by EPR devices", Phys. Lett. A 92, 271 (1982). S1
- Eberhard and Ross, "Quantum field theory cannot provide faster-than-light communication", Found. Phys. Lett. 2, 127 (1989). S1
- Peres, "How the no-cloning theorem got its name", Fortschr. Phys. 51, 458 (2003), arXiv:quant-ph/0205076. S1
- Bassi and Hejazi, "No-faster-than-light-signaling implies linear evolution. A re-derivation", Eur. J. Phys. 36, 055027 (2015), arXiv:1411.1768. S1
