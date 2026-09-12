# The relativistic rocket

*The honest alternative: hold one gravity of acceleration and the crew reaches Proxima in three and a half years, the galactic centre in twenty, by their own clocks; the price is a mass ratio that grows exponentially with the destination.*

**Kind:** physics · **Loophole:** L6 · **Standing:** K4 · **Bill:** B-mass · **Last reviewed:** 2026-09-12

## The claim

A ship that accelerates at a constant one gravity by its own instruments never exceeds the speed of light, yet by its own clock it can cross any distance in the galaxy within a human lifetime, because time dilation grows without bound as the ship approaches $c$. Special relativity does not forbid interstellar travel; it forbids returning to the era you left. This is the control group of the catalogue: every other physics entry either tries to beat this or misreads a real effect as beating it. The proposal is not that the ship is fast for the people left behind, since it arrives later than light would, but that the crew's proper time is short, and that a civilisation willing to spend energy on a heroic scale could send people to the stars with the physics we have.

The strongest form of the claim adds the engineering. Sänger's photon rocket, which converts mass to light and throws it backwards, is the ideal exhaust; the Bussard ramjet, which scoops interstellar hydrogen and fuses it, would remove the need to carry fuel at all; Marx's laser-pushed vehicle, which leaves the engine at home, would remove the reaction mass from the ship. Sagan argued in 1963 that with these, "no fundamental energetic problems exist for relativistic interstellar spaceflight" and that at one gravity all points in the Galaxy are accessible within the lifetime of a human crew **[MED] S1** (abstract, via secondary record).

## Origin and lineage

The kinematics are in Einstein's 1905 paper and were made explicit as hyperbolic motion by Minkowski and Born; Rindler's textbook gives the standard treatment of the uniformly accelerated observer and Misner, Thorne and Wheeler use it as the worked example of an accelerated frame **[MED] S2** (books, not opened for this dossier). Ackeret derived the relativistic rocket equation in 1946 (Helv. Phys. Acta 19, 103) and showed that with fusion exhaust the attainable speed is a small fraction of $c$ **[HIGH] S1** (as cited and summarised in Bussard 1960). Sänger analysed the photon rocket in 1953 (Ing.-Arch. 21, 213) and 1957 **[HIGH] S1** (cited in Bussard). Bussard's 1960 paper in Astronautica Acta 6, 179, proposed the interstellar ramjet **[HIGH] S1**. Sagan's 1963 paper in Planetary and Space Science 11, 485, put the pieces together as an argument that other civilisations could visit us and that we could visit them **[MED] S1**. Marx's 1966 Nature letter proposed a vehicle pushed by a terrestrial laser beam, and Redding replied in 1967 on its efficiency **[MED] S1** (records verified, texts not read). Forward's 1984 laser-pushed lightsail design (J. Spacecraft Rockets 21, 187) is the engineering descendant **[MED] S1**.

In fiction this is the whole of L6: Anderson's *Tau Zero*, Haldeman's relativistic troopships, Reynolds's lighthuggers, Le Guin's NAFAL ships alongside her ansible, and the honest six-year crossings of *Avatar*. The catalogue lists tau-zero-ramjet, revelation-space-lighthuggers and forever-war-collapsars, among others, as the fiction of this class.

## The mechanism

Let the ship hold constant proper acceleration $a$, the acceleration its own accelerometer reads. In the initial rest frame, with $\tau$ the ship's proper time, $t$ the coordinate time and $x$ the distance travelled, hyperbolic motion gives

$$t = \frac{c}{a}\sinh\frac{a\tau}{c}, \qquad x = \frac{c^2}{a}\Big(\cosh\frac{a\tau}{c} - 1\Big), \qquad \frac{v}{c} = \tanh\frac{a\tau}{c}, \qquad \gamma = \cosh\frac{a\tau}{c} = 1 + \frac{a x}{c^2}$$

**[HIGH] S2** (standard; Rindler ch. 3, Misner, Thorne and Wheeler ch. 6). The scale is $c/a$, which for $a = g = 9.81\ \mathrm{m\,s^{-2}}$ is $3.06\times10^7$ s, or 0.969 years: at one gravity the ship reaches $\gamma = 2$ after one year of its own time and its proper time thereafter grows only logarithmically with distance, $\tau \approx (c/a)\ln(2ax/c^2)$ for $ax \gg c^2$. For a journey of distance $d$ made by accelerating to the midpoint and decelerating from it, the crew time and the home time are

$$\tau = \frac{2c}{a}\,\mathrm{arccosh}\Big(1 + \frac{a d}{2c^2}\Big), \qquad t = \frac{2c}{a}\sinh\frac{a\tau}{2c},$$

and the peak Lorentz factor at the midpoint is $\gamma_{\max} = 1 + ad/(2c^2)$. At one gravity, with distances from the standard catalogues:

| Destination | Distance | Crew time | Home time | Peak $\gamma$ |
|---|---|---|---|---|
| Proxima Centauri | 4.25 ly | 3.5 yr | 5.9 yr | 3.2 |
| Vega | 25 ly | 6.4 yr | 26.9 yr | 14 |
| Galactic centre | 26 000 ly | 19.8 yr | 26 000 yr | $1.3\times10^4$ |
| Andromeda | 2.5 Mly | 28.6 yr | 2.5 Myr | $1.3\times10^6$ |

These figures are computed here from the formulae above and agree with Sagan's qualitative claim that the whole Galaxy is within a working lifetime at one gravity **[HIGH] S2** (the arithmetic is the dossier's own; the formulae are textbook). The home time is always longer than the light travel time, by the two years or so needed to get up to speed and back down. This is [LOR-1](../../constraints/lor-1.md) obeyed exactly: $v$ approaches $c$ and never reaches it, and the kinetic energy $(\gamma - 1)mc^2$ grows without bound.

The rocket equation is where the bill is. For a rocket with exhaust speed $w$ relative to the ship, momentum conservation in the instantaneous rest frame gives the relativistic Tsiolkovsky equation

$$\frac{M_0}{M_1} = \Big(\frac{1 + \beta}{1 - \beta}\Big)^{c/2w} = \exp\Big(\frac{a\,\tau_{\rm burn}}{w}\Big),$$

where $M_0/M_1$ is the ratio of initial to final mass, $\beta$ the final speed and $\tau_{\rm burn}$ the proper time under thrust **[HIGH] S2** (Ackeret 1946 as cited by Bussard; Rindler). The best exhaust is light, $w = c$, so that the mass ratio for a one-way trip with acceleration and deceleration is $\exp(a\tau/c)$ with $\tau$ the crew time in the table, and a round trip squares it. At one gravity: Proxima $e^{3.65} \approx 39$ one way and about 1500 for the round trip; Vega about 770 and $6\times10^5$; the galactic centre $7\times10^8$ one way and $5\times10^{17}$ for the round trip. A perfect photon rocket, converting matter and antimatter to collimated light with no losses, needs 39 tonnes of fuel per tonne delivered to Proxima and a mass ratio comparable to the mass of the Earth per tonne to return from the galactic centre. Real exhausts are worse: fusion releases under one percent of rest mass, giving $w \lesssim 0.1c$ and exponents ten times larger, which is Ackeret's result that fusion rockets are limited to a few percent of $c$ **[HIGH] S1** (via Bussard's summary).

Bussard's ramjet removes the fuel from the ship. A scoop of frontal area $A$ moving at speed $v$ through interstellar gas of number density $n$ collects protons at a rate $n A v$, fuses them and exhausts the products. Bussard showed that accelerations of order one gravity are possible only if the frontal-area loading, the ship mass per unit scoop area, is at most about $10^{-8}\ \mathrm{g\,cm^{-2}}$ per reactive nucleon per cm³ of gas density **[MED] S1** (abstract; the exponent's sign is recovered from the reprint typography and checked against the areas it implies). For a 1000-tonne ship in gas of density one atom per cm³ that is a scoop of $10^{17}$ cm², $10^7$ km², a disc some 1800 km in radius; in a dense cloud of $10^3$ atoms per cm³ it falls to $10^4$ km². Nobody has a material for such a scoop, so the proposals use magnetic fields, and there the limits come in. Fishback (1969) computed the stresses on the field coils and found they bound the attainable speed and range **[MED] S1** (record verified via secondary accounts). Heppenheimer (1978) found that bremsstrahlung radiation from the plasma compressed to fusion conditions exceeds the fusion power by a factor of order $10^9$ for the proton-proton reaction, so that the original ramjet cannot produce net thrust **[MED] S1**. Whitmire (1975) proposed catalysing the reaction with carbon in the CNO cycle to raise the rate by many orders of magnitude **[MED] S1**. The most serious objection is drag: the scoop must slow the incoming protons to fuse them, and at high $\gamma$ the momentum drag of the gathered gas exceeds the thrust unless the exhaust leaves faster than the intake arrives, which is the reason later designs are ram-augmented rockets or use the scoop as a brake.

Marx's laser-pushed sail leaves the energy source at home and beams it. A sail of reflectivity near one under beam power $P$ feels thrust $2P/c$, so a gigawatt gives 6.7 newtons; a one-gravity acceleration of a tonne needs 1.5 terawatts on the sail and a beam that stays focused over light years, which is the diffraction problem Forward addressed with lenses hundreds of kilometres across **[MED] S1**. Redding's reply to Marx disputed the efficiency of energy transfer to a relativistic sail; the exchange is recorded here rather than adjudicated **[MED] S1**.

## What it costs

The bill is **B-mass** and nothing else. The rocket needs no negative energy, no new field, no pre-laid route and no preferred frame, and it produces no closed timelike curve. What it needs is energy on a scale beyond any conceivable engineering: the kinetic energy of a 1000-tonne ship at $\gamma = 3.2$ is $2\times10^{23}$ J, about four hundred years of present world energy use, and a photon rocket must carry that as annihilating matter with a mass ratio of 39. The ramjet trades the fuel for a scoop the size of a small planet and an unsolved plasma problem; the laser sail trades it for a terawatt beam and a lens the size of a country. Each of these is a matter of scale, not of principle, which is why the standing is K4: exact kinematics, established for a century, with no contested step. The finding of this dossier, and the reason it is the control group, is that the honest route to the stars costs energy and time and nothing else, and that every entry in the register above is a proposal to avoid paying it.

## Constraint scoring

Every row here is SATISFIES or N/A because the relativistic rocket is the case the register's theorems assume: a timelike worldline in flat or weakly curved spacetime, positive energy throughout, nothing faster than light. It is the control group.

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SATISFIES | The ship's worldline is timelike; it arrives after light would in every frame, so no frame sees effect before cause. This is the case CAU-1 leaves untouched |
| CAU-2 | N/A | No closed timelike curves are generated by subluminal motion in flat spacetime; there is nothing for chronology protection to act on |
| CAU-3 | N/A | No wormhole or warp bubble to convert; the relativistic round trip is the ingredient CAU-3 uses to make a time machine from a wormhole, but with no wormhole it makes only a twin paradox, which is not a paradox |
| CAU-4 | N/A | No preferred frame is needed because nothing exceeds c |
| CAU-5 | N/A | No entanglement |
| ENE-1 | SATISFIES | Fuel, ship, exhaust and interstellar gas all obey the null and weak energy conditions; the energy density seen by every observer is positive |
| ENE-2 | SATISFIES | The rocket never arrives earlier than light through flat space, so the theorems of Olum, Visser, Bassett and Liberati, and Gao and Wald are respected exactly; they price the schemes that would beat this ship |
| ENE-3 | N/A | No negative energy, so the quantum inequalities have nothing to bound |
| ENE-4 | N/A | Warp-class |
| ENE-5 | N/A | Warp-class; the ship is not a shift-vector metric |
| ENE-6 | N/A | The Casimir effect is not invoked |
| ENE-7 | N/A | Sublight flight through ordinary space with no handle and no shortcut; the theorem prices the things that would beat this ship, not the ship. |
| CON-1 | N/A | No horizon forms around a subluminal ship; the pilot controls it from inside, which is the situation CON-1 says a superluminal bubble denies |
| CON-2 | N/A | Nothing need be laid along the route; a laser sail needs a beam from home, which is infrastructure at the origin, not a tachyonic bootstrap, and the ramjet needs only the gas that is already there |
| CON-3 | N/A | No Krasnikov tube; the rocket is what the tube would be laid by |
| STA-1 | N/A | No bubble; the ship is a ship |
| STA-2 | N/A | No throat |
| STA-3 | N/A | No chronology horizon |
| HAZ-1 | N/A | HAZ-1's swept-up particles are a horizon effect of a superluminal bubble. The rocket's analogue is ordinary: interstellar gas and dust strike the hull at up to $\gamma \sim 10^4$ at the galactic centre, an erosion and radiation problem with no register entry, noted here as a real cost without a theorem |
| HAZ-2 | N/A | No horizon, no Hawking flux |
| HAZ-3 | N/A | No throat; the tidal load on the crew is the one gravity they asked for |
| LOR-1 | SATISFIES | This is the constraint the rocket lives inside. Its speed approaches c asymptotically and the kinetic energy grows without bound, which is why the mass ratio is exponential in the crew time and the bill is B-mass |
| LOR-2 | N/A | No [tachyons](tachyons-feinberg-1967.md); the ship starts below c and stays there |
| LOR-3 | N/A | No group velocity or tunnelling claim |
| LOR-4 | N/A | Neither Scharnhorst nor OPERA |
| WRP-1 | N/A | Not a warp drive |
| WRP-2 | N/A | Not a warp shell, though Bobrick and Martire's finding that positive energy buys a subluminal shell that is a spaceship lands exactly here |
| WRP-3 | N/A | Not in the warp class |
| MAN-1 | N/A | No extra dimension |

## Status of the argument

- 1905 to 1909: the kinematics of uniform acceleration are established by Einstein, Minkowski and Born **[HIGH] S2**.
- 1946: Ackeret's relativistic rocket equation and the fusion limit **[HIGH] S1** (via Bussard).
- 1953 to 1959: Sänger's photon rocket papers **[HIGH] S1** (via Bussard).
- 1960: Bussard's ramjet **[HIGH] S1**. 1963: Sagan's synthesis and the claim of galactic accessibility at one gravity **[MED] S1**.
- 1966 to 1967: Marx's laser beam proposal and Redding's reply **[MED] S1**.
- 1969 to 1978: Fishback on scoop stresses, Whitmire's catalytic ramjet, Heppenheimer's bremsstrahlung objection **[MED] S1**. The unaugmented proton-proton ramjet is generally held to be infeasible on that basis; catalysed and ram-augmented variants remain proposals.
- 1984: Forward's laser-pushed lightsail with a Fresnel lens for the return trip **[MED] S1**.
- The kinematics have never been contested. The engineering has never been attempted. There is no refutation to record and no revival needed; as of 2026-09-12 the relativistic rocket is the only entry in the physics catalogue that could be built with known physics, given resources no civilisation has.

## Sources

- Bussard, "Galactic matter and interstellar flight", Astronautica Acta 6, 179 (1960). S1
- Sagan, "Direct contact among galactic civilizations by relativistic interstellar spaceflight", Planet. Space Sci. 11, 485 (1963), doi:10.1016/0032-0633(63)90072-2. S1
- Marx, "Interstellar vehicle propelled by terrestrial laser beam", Nature 211, 22 (1966), doi:10.1038/211022a0; Redding, Nature 213, 588 (1967). S1
- Ackeret, "Zur Theorie der Raketen", Helv. Phys. Acta 19, 103 (1946); English translation J. Brit. Interplanet. Soc. 6, 116 (1947). S1 (cited through Bussard)
- Sänger, "Zur Theorie der Photonenraketen", Ing.-Arch. 21, 213 (1953); "Zur Flugmechanik der Photonenraketen", Astronautica Acta 3, 89 (1957). S1 (cited through Bussard)
- Rindler, *Relativity: Special, General, and Cosmological*, 2nd ed. (Oxford, 2006), ch. 3 on hyperbolic motion. S2
- Misner, Thorne and Wheeler, *Gravitation* (Freeman, 1973), ch. 6, accelerated observers. S2
- Fishback, "Relativistic interstellar spaceflight", Astronautica Acta 15, 25 (1969). S1
- Whitmire, "Relativistic spaceflight and the catalytic nuclear ramjet", Acta Astronautica 2, 497 (1975), doi:10.1016/0094-5765(75)90063-6. S1
- Heppenheimer, "On the infeasibility of interstellar ramjets", J. Brit. Interplanet. Soc. 31, 222 (1978). S1
- Forward, "Roundtrip interstellar travel using laser-pushed lightsails", J. Spacecraft Rockets 21, 187 (1984), doi:10.2514/3.8632. S1
