# EVE Online: the warp drive (CCP Games, 2003)

*A bubble of vacuum emptier than empty carries a ship across a solar system in seconds, but only toward something heavy enough to steer by; stargates do the rest.*

**Kind:** fiction · **Loophole:** L2 · **Notability:** N2 · **Coherence:** F2 · **Causality:** C-silent · **Last reviewed:** 2026-09-12

## The drive as depicted

EVE Online defines its drive twice: in the official lore articles that CCP publishes as in-world documentation, and in the game mechanics that every one of its ships obeys. The lore article "Warp Drives" on the EVE Universe site gives the mechanism. The drive creates "depleted vacuum" by repeatedly compressing vacuum between two polar discs, draining it of energy and particles; a laser-locked field holds the growing bubble of depleted vacuum until it envelops the whole ship, and once enclosed the ship can move faster than light **[HIGH] S1**. The article then describes the drive's problem and its fix. A ship at warp can barely act on or perceive the world, communication and scanning fail, and the quantum unpredictability of the bubble makes speed and therefore timing unreliable; the solution was to adapt the gravity capacitors of stargate control systems, which can sense gravity signals from normal space from inside the bubble, so that a ship locks onto a gravity source, warps toward it and disperses its bubble automatically at the right distance **[HIGH] S1**. The consequence is the rule the game is built on: a ship can warp only toward an object of sufficient mass, a small moon or asteroid cluster at least, or toward the artificial gravity wells that stations and stargates generate for the purpose, and the drive is confined to travel within a solar system **[HIGH] S1**.

The mechanics agree. A ship must align to its destination and reach a fraction of its top speed before the drive engages; it then covers about one astronomical unit accelerating and about three decelerating, cruising between at a speed fixed by hull class from about 1.5 astronomical units per second for freighters and titans to 8 for interceptors and covert-ops frigates; warp cannot be initiated to a point closer than 150 kilometres, and the ship emerges within a few kilometres of the target **[HIGH] S3** (EVE University Wiki, matching play). Warp can be prevented: warp scramblers and disruptors are modules that pin a target's drive, warp core stabilisers resist them, and interdiction spheres, the game's "bubbles", pull any ship that warps into them out of warp **[MED] S3**.

Interstellar travel is by stargate, which the lore article "Stargates" calls the primary means of interstellar travel while declining to explain: it speaks of a boson sphere, vented plasma, dimensional interconnections and hyperspace, and says that no theory fully explains how the universe is divided into dimensions **[HIGH] S1**. Capital ships also carry jump drives, which take them a few light years to a beacon lit at the destination, with fuel, a cooldown and a fatigue timer that grows with distance **[MED] S3**.

## Origin and lineage

EVE Online was released by CCP Games of Reykjavík in May 2003 and has run continuously since, with its lore maintained in chronicles and articles collected on the EVE Universe site **[MED] S3**. The warp lore article is undated on the site and reads as an early-2000s chronicle; the game's mechanics have been retuned many times, and the 150-kilometre minimum, the alignment rule and the warp-speed tiers date from later expansions **[MED] S3**. No real proposal is credited. The depleted-vacuum bubble is, however, a recognisable idea in the register's terms and is discussed below; no evidence was found that the writers had the Casimir vacuum or Scharnhorst in mind, and no influence is claimed. Nothing in physics descends from EVE, though it is a common reference point for the "warp only to gravity" rule in later games.

## Which loophole, and why

L2, move the space, with L3 secondary for the gates. The ship sits inside a bubble whose vacuum has been altered, and the bubble, not the ship, is what moves faster than light; that is the shape of a warp bubble, and the physics cousin is [Alcubierre 1994](../physics/alcubierre-1994.md), with the register's bill: negative energy of order $10^{62}$ kg for a ship-sized wall under the quantum inequalities ([ENE-3](../../constraints/ene-3.md)), a horizon that makes the drive uncontrollable from inside ([CON-1](../../constraints/con-1.md)) and a route that must be laid in advance ([CON-2](../../constraints/con-2.md)). EVE's lore is unusually close to the second of those: its own text says the ship at warp cannot see or act, and fixes it with an external gravity beacon it must warp toward, which is [CON-2](../../constraints/con-2.md)'s pre-laid infrastructure stated as a rule.

The "depleted vacuum" deserves its own cousin. A region of vacuum with less energy than ordinary vacuum is the Casimir vacuum, the only negative energy density anyone has ever made ([ENE-6](../../constraints/ene-6.md)), and light crossing such a region does travel faster than c, by the [Scharnhorst effect](../physics/scharnhorst-effect.md), by one part in $10^{32}$ for micron plates. EVE's drive is the Scharnhorst effect scaled up to astronomical units per second with the plates replaced by polar discs. The register's bill is the magnitude: the Casimir density at a micron is $-4 \times 10^{-4}$ joules per cubic metre, tens of orders of magnitude short of any warp wall, and the Scharnhorst speed-up is unmeasurable. Stargates are L3 and are priced, insofar as the lore lets them be priced at all, against [Morris and Thorne 1988](../physics/morris-thorne-1988.md): a throat held open by exotic matter scaling with its size.

## The rules it keeps

- **Warp only to mass.** Celestials, stations, gates and bookmarked points near them; the lore gives the reason and the game enforces it without exception **[HIGH] S1**.
- **In-system only.** Warp never crosses between stars; gates and jump drives do **[HIGH] S1**.
- **Align first.** The drive needs the ship pointed and moving before it engages, which is the tactical heart of the game's combat **[HIGH] S3**.
- **Speed by hull.** Warp speed is a hull statistic, modifiable by equipment and skills, and is honoured to the second **[HIGH] S3**.
- **Warp can be denied.** Scramblers, disruptors and interdiction spheres; warp core strength as the counter **[MED] S3**.
- **Gates are fixed.** Stargates connect fixed pairs of systems and define the map **[HIGH] S1**.

Consistent rules with no physical content beyond the lore article's one paragraph: F2. The lore's navigation problem is the nearest thing to physical engagement, and it is a reason for a game mechanic rather than a statement about a constraint.

## What it ignores

The frame question. EVE runs on one clock, "EVE time", which is Coordinated Universal Time on the server, and every warp, gate transit and jump lands on it; the lore's remark that a ship at warp cannot keep precise time is about instrument noise, not about relativity, and nothing in the chronicles asks what a faster-than-light bubble does to the order of events. There is no stated rule that prevents the antitelephone, only the medium's single server clock. C-silent, dated 2026-09-12.

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SILENT | Bubbles cross a system faster than light and gates cross between stars instantly; the frame-dependence of arrival order is never raised in lore or mechanics. |
| CAU-2 | SILENT | No causal loops are built; the conjecture is not engaged. |
| CAU-3 | SILENT | A stargate network of fixed pairs is the case in which one boosted mouth makes a time machine; never considered. |
| CAU-4 | SILENT | EVE time is a single clock for the whole cluster and is never named as a rule of the fiction's physics. |
| CAU-5 | N/A | No entanglement; fleet communications are unexplained. |
| ENE-1 | ENGAGES | The lore article says the bubble is vacuum drained of energy, which is a below-vacuum energy density stated on the page; it does not name the energy conditions but it describes their violation as the drive's working principle. |
| ENE-2 | SILENT | Olum's theorem says a bubble that arrives early needs negative energy somewhere; the lore's depleted vacuum is that somewhere, but the connection is never drawn and the quantity is never stated. |
| ENE-3 | SILENT | A ship-sized wall of depleted vacuum is the case Pfenning and Ford priced; the lore gives no thickness or energy. |
| ENE-4 | N/A | No pocket geometry. |
| ENE-5 | SILENT | The bubble is Natário-class in everything but name; the NEC theorem is never touched. |
| ENE-6 | ENGAGES | The depleted vacuum between two polar discs is the Casimir geometry described in the lore's own words: vacuum with its energy drawn out between two plates. The lore does not name Casimir and does not price the effect, which the register puts at $-4 \times 10^{-4}$ joules per cubic metre. |
| ENE-7 | SILENT | Stargates are traversable shortcuts through flat asymptotics, which topological censorship forbids without achronal ANEC violation; the lore says it cannot explain the gates and stops. |
| CON-1 | ENGAGES | The lore says a ship at warp can barely see or act, and that navigation had to be solved from outside; this is the control problem stated in the fiction's own terms. |
| CON-2 | RULE | Warp only toward a gravity source, natural or artificial, is the CON-2 answer as a rule: the destination must already be there, and stations and gates broadcast fake gravity wells for ships to warp to. |
| CON-3 | N/A | No tube. |
| STA-1 | SILENT | Bubbles are dispersed on arrival and disrupted by modules; the semiclassical divergence at the wall is not engaged. |
| STA-2 | SILENT | Stargates hold something open and the lore declines to say what. |
| STA-3 | N/A | No chronology horizon. |
| HAZ-1 | RULE | The lore has the bubble disperse automatically at a set distance from the target, and the mechanics decelerate a ship over about three astronomical units before it emerges; a stated rule that answers the deceleration hazard without naming it. |
| HAZ-2 | SILENT | The pilot sits at the centre of a superluminal bubble with no Hawking flux; wall thickness is never a concept. |
| HAZ-3 | SILENT | Ships of every size pass through gates without any statement of tidal limits. |
| LOR-1 | RULE | The lore places the ship inside a bubble that moves, rather than pushing the ship past light; the barrier is honoured by the stated mechanism. |
| LOR-2 | N/A | Nothing is a particle above c. |
| LOR-3 | N/A | No wave in a medium is claimed as a signal. |
| LOR-4 | ENGAGES | A vacuum emptied of energy in which things move faster than light is the Scharnhorst effect by description; the lore does not name it and the register puts the real effect at one part in $10^{32}$. Engaged in substance, not by name. |
| WRP-1 | RULE | A ship at rest inside a bubble of altered vacuum that carries it matches the class definition as a stated mechanism. |
| WRP-2 | SILENT | Bobrick and Martire's classification puts superluminal warp in exotic matter; the lore's depleted vacuum is exotic in the right direction and the quantity is never addressed. |
| WRP-3 | SILENT | The lore asserts a working superluminal bubble sourced by depleted vacuum; the absence WRP-3 records is never engaged. |
| MAN-1 | SILENT | The stargate article invokes hyperspace and dimensional interconnections without a mechanism; the register's finding that no such space exists is not engaged. |

## Sources

- **S1** CCP Games, "Warp Drives", EVE Universe lore article (universe.eveonline.com/lore/warp-drives), read 2026-09-12. Official in-world documentation of the drive.
- **S1** CCP Games, "Stargates", EVE Universe lore article (universe.eveonline.com/lore/stargates), read 2026-09-12.
- **S1** EVE Online (CCP Games, 2003 onward): the warp, gate and jump mechanics as played.
- **S3** EVE University Wiki (wiki.eveuniversity.org), "Warp" and "Jump drives", read 2026-09-12, for the numerical mechanics.
- **S3** Wikipedia, "EVE Online", for release history.
