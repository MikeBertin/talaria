<p align="center">
  <a href="https://mikebertin.github.io/talaria/"><img src="web/demo.gif" width="800" alt="The antitelephone, the Alcubierre bubble and the atlas"></a>
</p>

# TALARIA

**A hundred and five ways to beat light, 37 from physics and 68 from fiction, each scored line by line against 29 no-go results.**

*The ways people have proposed to beat light, real and invented, catalogued, graded and scored against the physics that says you can't.* Every proposal is stated in its strongest form, sorted by the loophole it uses and scored against a register of the theorems that put a price on it. The site lets you run the arguments yourself: send a message into your own past, build a warp bubble and read the bill, fly one mouth of a wormhole until it becomes a time machine.

**▶ Try it:** https://mikebertin.github.io/talaria/ · start with [the antitelephone](https://mikebertin.github.io/talaria/demos/antitelephone.html)

> [!NOTE]
> The catalogue is built: 37 physics dossiers, 68 fiction dossiers, nine lineage pages and a register of 29 entries, all scored. It is kept up to date as the physics moves; see [ROADMAP.md](ROADMAP.md).

## The site

A static site: a hub, the atlas, every page of the catalogue rendered from its markdown and six demos.

| # | Page | What it shows |
|---|---|---|
| 1 | [The atlas](https://mikebertin.github.io/talaria/atlas.html) | Both scoring matrices, filterable, with the join between physics and fiction and the full register |
| 2 | [The antitelephone](https://mikebertin.github.io/talaria/demos/antitelephone.html) | Send a faster-than-light message to a moving friend and watch the reply land before you sent it |
| 3 | [The register](https://mikebertin.github.io/talaria/atlas.html#register) | Twenty-nine results that put a price on beating light, each with what it forbids, the escape hatches and who it bites |
| 4 | [Lineage](https://mikebertin.github.io/talaria/atlas.html#lineage) | Who was reading whom: Sagan to Thorne, Star Trek to Alcubierre, the word hyperspace, the paper fold |
| 5 | [The timeline](https://mikebertin.github.io/talaria/timeline.html) | Every entry on one strip from 1905 to now, with lineage arcs drawn between them |
| 6 | [Report cards](https://mikebertin.github.io/talaria/cards/index.html) | One shareable image per fictional drive |
| 7 | [The Alcubierre bubble](https://mikebertin.github.io/talaria/demos/alcubierre-bubble.html) | The shape function, the expansion and contraction, the negative-energy shells and the bill in kilograms |
| 8 | [The wormhole](https://mikebertin.github.io/talaria/demos/wormhole.html) | A throat you can walk through, its tidal limits and what one round trip with a mouth does to it |
| 9 | [Pick a drive, pick a frame](https://mikebertin.github.io/talaria/demos/pick-a-drive.html) | Any of the sixty-eight fictional drives, any observer, and whether the round trip lands before departure |
| 10 | [The honest rocket](https://mikebertin.github.io/talaria/demos/rocket.html) | Ship years against home years to the nearby stars at one g, and the fuel bill |
| 11 | [No signalling](https://mikebertin.github.io/talaria/demos/no-signalling.html) | Entangled pairs, any measurement you like, and nothing gets through |

## The idea

Every faster-than-light scheme, whether it came from a physics journal or a screenplay, leans on one of a small number of loopholes. That is the spine of the catalogue:

| Loophole | What it does | Real physics | Fiction |
|---|---|---|---|
| **L1 Faster in the same space** | The ship itself outruns light | Tachyons | Lensman's inertialess drive, ludicrous speed |
| **L2 Move the space, not the ship** | Spacetime carries you; locally you never exceed c | Alcubierre, Natário, Lentz, Krasnikov tubes | Star Trek warp |
| **L3 Take a shortcut** | Connect two distant points through a tunnel or fold | Morris-Thorne wormholes | Interstellar, Stargate, the Expanse ring gates, Dune's fold-space |
| **L4 Leave the manifold** | Step into another space with different rules | Extra-dimensional proposals | Hyperspace, subspace, slipspace, the Warp |
| **L5 Send the message, not the ship** | Information beats light even if matter can't | Entanglement signalling, tunnelling, the Scharnhorst effect | The ansible |
| **L6 Not actually FTL** | Everything that gets filed here by mistake | Time dilation, the EM drive | Cryosleep, generation ships, the ship that stays still |

Against those sits the **constraint register**: every theorem, inequality and no-go result that puts a price on the loophole. Causality first, because any FTL signal in a Lorentz-invariant world is a message to your own past. Then the energy conditions, the quantum inequalities that cap how much negative energy you can borrow and for how long, the horizon that stops a warp-bubble crew steering, the bootstrap problem and semiclassical instability. And the result that a warp bubble drops out of warp with a shotgun blast of everything it swept up on the way.

Two scoring matrices come out of that:

1. **Physics matrix.** Every real proposal against every constraint: satisfies, violates, dodges or silent. Plus the bill: what each one needs that we do not have.
2. **Fiction matrix.** Every notable invented drive by loophole, notability and coherence: does the story engage with the physics, follow its own rules or wave its hands? And what does it do about the time-travel implication?

The two matrices join on the loophole column. That join is the point of the project: it shows which fictional drives have a real cousin, and what that cousin costs.

## Editorial stance

Neutral scoring, with the consensus stated as it stands. Every real proposal is stated in its strongest form before it is scored, and every score cites the theorem it comes from. Fiction is never marked down for being fiction; it is graded on what it does with the physics it chose to invoke. Fringe and refuted proposals are included because the shape of what has been tried is part of the map.

*Any quotes used in this project are real, sourced attributions. No invented quotes.*

## Run it locally

The site is static. Render the pages from the catalogue, then serve `web/`:

```bash
python3 tools/build_web.py
python3 -m http.server 8191 --directory web
```

then open <http://localhost:8191/>. Tool order after any content change: `bite.py`, `backlink.py`, `build_matrix.py`, `wiki.py`, `check_prose.py`, `build_web.py`, `build_search.py`.

## How it is built

```
constraints/     the constraint register: one page per no-go result, with citations
theories/        one dossier per proposal; physics/ and fiction/ from separate templates
lineage/         who begat whom: Alcubierre was answering Star Trek, Thorne was answering Sagan
matrix/          the two scoring matrices, generated from the dossiers
web/             the site: hub, atlas, timeline, report cards, six demos, rendered pages
web/vendor/stoa/ small shared parts copied in from STOA
tools/           health checks, index, matrix, site, search, timeline and card builders
og-card.html     source for the social card (web/og.png)
demo-capture.js  script that re-records the hero GIF (web/demo.gif)
```

The palette is minted in OKLCH and validated (`web/palette.js` carries the provenance). Site search is client-side over `web/data/search.json`, the hub cards carry live miniature versions of the demos and the only external asset is KaTeX from a CDN for the maths on the rendered pages. `tools/timeline.py` builds the timeline data and `tools/cards/make-cards.py` renders the report cards.

## Why TALARIA

The talaria were the winged sandals of Hermes, the oldest faster-than-anything device in Western storytelling. Nobody in the myths asks how they work. That is the interesting part: three thousand years later we still want the sandals, and physics still hasn't decided whether they are impossible or merely very expensive. This project keeps both halves in one room. The real proposals get the scrutiny of the actual theorems that constrain them. The fictional ones get sorted by which loophole they are quietly using, and graded on whether the story noticed the bill.

## Going further

Start at [GRADING.md](GRADING.md) for the vocabulary, then [constraints/REGISTER.md](constraints/REGISTER.md) for the register with every citation, then the [theory catalogue](theories/CATALOGUE.md). The matrices are in [matrix/MATRIX.md](matrix/MATRIX.md), and every dossier ends with its own sources.

## License

MIT. See [LICENSE](LICENSE).

---
<sub>Part of a collection of interactive builds · [mikebertin.github.io](https://mikebertin.github.io/)</sub>
