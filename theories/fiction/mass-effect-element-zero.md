# Mass Effect: element zero and the FTL drive (BioWare, 2007)

*A ship whose mass is dialled down by a dark-energy field can be pushed past light by ordinary thrusters, and pays for it in static charge that must be grounded on a planet.*

**Kind:** fiction · **Loophole:** L1 · **Notability:** N2 · **Coherence:** F3 · **Causality:** C-silent · **Last reviewed:** 2026-09-12

## The drive as depicted

Mass Effect defines its drive in the in-game Codex, a set of entries unlocked as the player meets each technology and read aloud by a narrator; the entries below are from the first game (2007) and are carried unchanged into the sequels. The Codex entry "Element Zero" says that when the rare material "eezo" is subjected to an electric current it emits a dark energy field that raises or lowers the mass of everything within it, a mass effect used for artificial gravity and construction and most prominently for faster-than-light travel; humanity found refined eezo at a Prothean research station on Mars **[HIGH] S1**. The entry "Mass Effect Fields" adds the sign convention: positive current raises mass, negative current lowers it, and the stronger the current the larger the effect **[HIGH] S1**.

The entry "FTL Drive" is the mechanism. An eezo drive core reduces the mass of the ship, allowing higher acceleration, which the Codex says "effectively raises the speed of light within the mass effect field", so that the ship travels fast with negligible relativistic time dilation **[HIGH] S1**. A ship still needs conventional thrusters, chemical, fusion, ion or antiproton, because a core alone provides no motive power; the eezo and power required grow exponentially with the mass moved and the degree of lightening, so very massive ships and very high speeds are prohibitively expensive; and if the field collapses at superluminal speed the ship snaps back to sublight and sheds the excess energy as lethal Cherenkov radiation **[HIGH] S1**. A companion entry on drive charge supplies the operating limit: passing current through the core builds a static charge, a drive can run about fifty hours before saturation, sooner for a heavier or faster ship, and an undischarged core arcs into the hull, kills ungrounded crew, burns out electronics and fuses bulkheads; the cure is to land and ground the ship like a lightning rod, or for ships too large to land, to discharge into a planetary magnetic field in sheets of lightning and auroras **[HIGH] S1**.

The drive is the setting's short-range transport. Interstellar distance is covered by the mass relays, Prothean (later revealed as Reaper) structures that create "corridors of virtually mass-free space" for near-instantaneous transit between fixed pairs or within a few hundred light years **[HIGH] S1**; they are the second move and have their own dossier, [Mass Effect relays](mass-effect-relays.md). The Normandy and every other ship in the trilogy is shown using the drive to cross systems and the relays to cross the galaxy.

## Origin and lineage

Mass Effect was developed by BioWare and released for the Xbox 360 in November 2007, with Drew Karpyshyn as lead writer and Casey Hudson as project director; the Codex was written as a self-contained technical bible for the setting **[MED] S3**. The name of the series is the name of the physics. The design borrows the real phrase "dark energy" for a field that does something dark energy does not, and the Cherenkov radiation of the collapse entry is a real effect, light emitted when a charged particle outruns light in a medium, used here as decoration. No real faster-than-light proposal is named and none is credited; the drive's logic, that the light barrier is a matter of mass rather than of spacetime, is the [Lensman](lensman-inertialess-drive.md) logic with a control knob. Nothing in physics descends from it.

## Which loophole, and why

L1, faster in the same space, with L3 as the secondary move through the relays. The ship stays in ordinary spacetime and is pushed by ordinary thrusters; the claim is that reducing its mass lets the same thrust take it past c. The physics cousin is [LOR-1](../../constraints/lor-1.md): the kinetic energy of a body of mass m grows as $(\gamma - 1) m c^2$, and while lowering m lowers the bill at every speed, the divergence at v = c is in $\gamma$, not in m, and survives any finite reduction. Only m = 0 removes it, and a massless body is confined to c, not freed from it. The Codex's own phrasing, that the field raises the speed of light locally, points at a different cousin: the [Scharnhorst effect](../physics/scharnhorst-effect.md), in which a modified vacuum between Casimir plates raises the speed of light by one part in $10^{32}$, and the [Lorentz-violating frameworks](../physics/lorentz-violating-frameworks.md) in which different sectors may have different maximal speeds. Their bill is the register's [CAU-4](../../constraints/cau-4.md): a locally raised light speed is causally safe only if something picks a frame, and the Standard-Model Extension's coefficients, which would do the picking, are all measured consistent with zero. The relays are priced separately against [Morris and Thorne 1988](../physics/morris-thorne-1988.md) in their own dossier.

## The rules it keeps

Mass Effect earns F3 by stating limits and applying them across three games.

- **Thrusters required.** A core lightens; it does not push. Ships carry conventional engines and the Codex lists them **[HIGH] S1**.
- **Exponential cost.** Eezo and power scale exponentially with mass and lightening, which is the setting's reason that dreadnoughts are rare and speeds are bounded **[HIGH] S1**.
- **Drive charge.** About fifty hours between discharges, faster for heavy or fast ships; discharge by grounding or by a magnetic field; failure kills the crew. The rule is used as story: ships must make planetfall, fleets must plan discharge stops, and the Normandy's stealth systems have a similar heat budget **[HIGH] S1**.
- **Collapse is fatal.** A field failure at superluminal speed dumps the excess as Cherenkov radiation **[HIGH] S1**.
- **Relays only between relays.** Interstellar travel is fixed to the network; primary relays are one-to-one, secondaries omnidirectional within a few hundred light years, and dormant relays are left dormant for fear of what is on the other side **[HIGH] S1**.
- **No time dilation.** Stated as a property of the field rather than asserted silently **[HIGH] S1**.

These are consistent limitations with physical vocabulary, which is F3. They are not F4: the constraint the drive actually breaks, that the light-speed pole is in $\gamma$ and not in m, is never named, and the Codex's claim that the field raises the speed of light within it is an assertion, not a mechanism.

## What it ignores

Order of events. The Codex says time dilation is negligible and stops there. In three games and the Andromeda sequel no message, ship or relay transit is ever seen to arrive before it left in any frame, no character mentions frames, and the galaxy runs on a single Citadel clock that every drive and relay respects. The quantum entanglement communicators of the second game are a separate L5 device and are silent on the no-communication theorem in the same way. There is no stated rule that prevents the antitelephone, only the absence of anyone building one; that is C-silent, dated to the trilogy and to Mass Effect: Andromeda (2017).

## Constraint scoring

| Constraint | Verdict | Note |
|---|---|---|
| CAU-1 | SILENT | Ships outrun light in flat space between relays; no game raises the frame-dependence of arrival order. |
| CAU-2 | SILENT | No closed causal loops are constructed; the question does not arise. |
| CAU-3 | SILENT | Relays are a fixed network of shortcuts and the drive is a ship; the two-device time machine of CAU-3 would apply to relay pairs, and no instalment considers it. |
| CAU-4 | SILENT | The Codex's locally raised light speed is exactly the kind of sector-specific maximal velocity CAU-4 prices, and the setting never says what frame the field's speed is fixed in; the Citadel's single clock is assumed, not stated. |
| CAU-5 | SILENT | The quantum entanglement communicator of Mass Effect 2 sends messages instantly by entanglement; the Codex entry does not address the no-communication theorem. Scored here because the device is part of the same setting, not the drive. |
| ENE-1 | N/A | The drive lowers mass with positive energy; the energy conditions price geometric shortcuts, and the drive is not one. The relays are scored in their own dossier. |
| ENE-2 | N/A | The drive does not alter spacetime; Olum's theorem does not reach it. |
| ENE-3 | N/A | No negative energy density in the drive. |
| ENE-4 | N/A | No bubble. |
| ENE-5 | N/A | Not a warp drive. |
| ENE-6 | N/A | No Casimir energy, though the raised-light-speed phrasing is Scharnhorst-shaped; that is scored under LOR-4. |
| ENE-7 | N/A | Trivial topology for the drive. |
| CON-1 | N/A | No horizon; the pilot controls an ordinary lightened body. |
| CON-2 | RULE | The drive needs nothing laid ahead, but the setting's long-range travel does: relays only between relays, built by someone else in advance, is a stated rule of the fiction that happens to be the CON-2 answer. |
| CON-3 | N/A | No tube. |
| STA-1 | N/A | No bubble wall. |
| STA-2 | N/A | No throat in the drive. |
| STA-3 | N/A | No chronology horizon. |
| HAZ-1 | ENGAGES | The Codex describes what happens when the field collapses at superluminal speed: the ship snaps to sublight and the excess energy is shed as lethal Cherenkov radiation. It is the setting's own deceleration hazard, addressed on the page. |
| HAZ-2 | N/A | No horizon to radiate. |
| HAZ-3 | N/A | No throat tides in the drive. |
| LOR-1 | ENGAGES | The whole drive is an answer to LOR-1: the Codex says the light barrier is beaten by lowering mass and states the exponential cost. The answer is wrong in the way the register says, since the pole is in the Lorentz factor, but the constraint is named and built around. |
| LOR-2 | SILENT | Ships cross c from below with the field on; tachyon kinematics forbids the crossing for any particle and the games never examine the moment of crossing. |
| LOR-3 | N/A | No wave in a medium is claimed as a signal. |
| LOR-4 | SILENT | The claim that the field raises the speed of light within it is a Scharnhorst-type claim made without a mechanism; the setting never says how a vacuum's light speed is changed. |
| WRP-1 | N/A | Not a warp drive; the ship moves through space, space does not move the ship. |
| WRP-2 | N/A | Not a shell moving inertially. |
| WRP-3 | N/A | No positive-energy warp claim. |
| MAN-1 | N/A | Four dimensions, no bulk; the relays' mass-free corridors are scored in their own dossier. |

## Sources

- **S1** Mass Effect (BioWare, 2007), in-game Codex: entries "Element Zero", "Mass Effect Fields", "FTL Drive", the secondary entry on drive charge and "Mass Relays". Text as reproduced verbatim on the Mass Effect Wiki Codex pages (Technology; Ships and Vehicles), read in full; the reproduction is a fan transcription of primary text.
- **S3** Mass Effect Wiki (masseffect.fandom.com), Codex/Technology and Codex/Ships and Vehicles, for the transcription and the game-by-game attribution of entries.
- **S3** Wikipedia, "Mass Effect (video game)", for release date and credits.
