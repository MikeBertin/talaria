#!/usr/bin/env python3
"""Render one shareable 1200x630 report card per fictional drive.

Reads web/data/talaria.js, fills tools/cards/card-template.html per drive,
renders each with headless Chrome (2x by default, downsampled with sips, the
og-card recipe) into web/cards/<slug>.png, then writes web/cards/index.html.

Usage: python3 tools/cards/make-cards.py [--scale 1|2] [--only slug] [--index-only]
"""
import argparse, html, json, os, re, shutil, subprocess, sys, tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / 'web' / 'data' / 'talaria.js'
PALETTE = ROOT / 'web' / 'palette.js'
TEMPLATE = Path(__file__).with_name('card-template.html')
OUT = ROOT / 'web' / 'cards'
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
W, H = 1200, 630

COHERENCE = {
    'F4': 'engages the physics',
    'F3': 'acknowledges a limit and keeps to it',
    'F2': 'rule-bound, no physics inside',
    'F1': 'handwaves it',
    'F0': 'the drive is the joke',
}
CAUSALITY = {
    'C-owns': 'owns the time-travel bill',
    'C-dodges': 'dodges it with a stated rule',
    'C-silent': 'never raises it',
}
NOTABILITY = {'N1': 'canonical', 'N2': 'significant', 'N3': 'notable niche'}


def load_data():
    s = DATA.read_text(encoding='utf-8')
    s = s[s.index('{'):].rstrip().rstrip(';')
    return json.loads(s)


def load_loopholes():
    s = PALETTE.read_text(encoding='utf-8')
    pat = re.compile(r"(L\d):\s*\{\s*mark:\s*'(#[0-9a-fA-F]{6})',\s*text:\s*'(#[0-9a-fA-F]{6})',\s*name:\s*'([^']+)'")
    return {m.group(1): {'mark': m.group(2), 'text': m.group(3), 'name': m.group(4)} for m in pat.finditer(s)}


def title_size(t):
    n = len(t)
    if n <= 34: return 62
    if n <= 48: return 54
    if n <= 64: return 46
    return 40


def hook_size(h):
    n = len(h)
    if n <= 120: return 27
    if n <= 170: return 25
    if n <= 220: return 23
    return 21


def register_words(verdicts):
    total = len(verdicts)
    engaged = sum(1 for v in verdicts.values() if v == 'ENGAGES')
    ruled = sum(1 for v in verdicts.values() if v == 'RULE')
    if engaged == 0 and ruled == 0:
        return f'engages none of the {total} register entries'
    if engaged == 0:
        return f'engages none of the {total} register entries, {ruled} answered by rule'
    e = f'engages {engaged} of the {total} register entries'
    return e + (f', {ruled} more answered by rule' if ruled else '')


def fill(template, drive, loops):
    L = loops[drive['loophole']]
    e = html.escape
    subs = {
        'TITLE': e(drive['title']),
        'TITLE_SIZE': str(title_size(drive['title'])),
        'SLUG': e(drive['slug']),
        'HOOK': e(drive['hook']),
        'HOOK_SIZE': str(hook_size(drive['hook'])),
        'LOOP_CODE': drive['loophole'],
        'LOOP_NAME': e(L['name']),
        'LOOP_TEXT': L['text'],
        'LOOP_MARK': L['mark'],
        'NOTABILITY': f"{drive['notability']} {NOTABILITY.get(drive['notability'], '')}".strip(),
        'COHERENCE': drive['coherence'],
        'COHERENCE_WORDS': COHERENCE.get(drive['coherence'], drive['coherence']),
        'CAUSALITY': drive['causality'],
        'CAUSALITY_WORDS': CAUSALITY.get(drive['causality'], drive['causality']),
        'REGISTER_WORDS': register_words(drive['verdicts']),
    }
    out = template
    for k, v in subs.items():
        out = out.replace('{{' + k + '}}', v)
    left = re.findall(r'\{\{\w+\}\}', out)
    if left:
        sys.exit(f'unfilled placeholders in template: {left}')
    return out


def render(html_path, png_path, scale):
    tmp = png_path.with_suffix('.raw.png')
    subprocess.run([CHROME, '--headless', '--disable-gpu', '--hide-scrollbars',
                    f'--force-device-scale-factor={scale}', f'--window-size={W},{H}',
                    f'--screenshot={tmp}', f'file://{html_path}'],
                   check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if scale == 1:
        shutil.move(tmp, png_path)
    else:
        subprocess.run(['sips', '-z', str(H), str(W), str(tmp), '--out', str(png_path)],
                       check=True, stdout=subprocess.DEVNULL)
        tmp.unlink()


def write_index(drives, loops):
    e = html.escape
    tiles = []
    for d in sorted(drives, key=lambda d: d['title'].lower()):
        L = loops[d['loophole']]
        tiles.append(
            f'<a class="rc" href="../pages/fiction/{e(d["slug"])}.html" style="--c:{L["text"]}">'
            f'<img src="{e(d["slug"])}.png" alt="Report card: {e(d["title"])}" loading="lazy" width="1200" height="630">'
            f'<span class="t">{e(d["title"])}</span>'
            f'<span class="m"><span class="chip {d["loophole"]}">{d["loophole"]}</span> {d["coherence"]} · {d["causality"]}</span></a>')
    page = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TALARIA report cards</title>
<link rel="stylesheet" href="../vendor/stoa/theme.css">
<link rel="stylesheet" href="../palette.css">
<link rel="stylesheet" href="../site.css">
<link rel="icon" href="../favicon.svg">
<style>
  .rcgrid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; margin: 18px 0 30px; }}
  a.rc {{ display: flex; flex-direction: column; gap: 8px; text-decoration: none; color: var(--ink); border: 1px solid var(--line); border-radius: 12px; padding: 10px; background: var(--panel); transition: border-color .15s, transform .15s; }}
  a.rc:hover {{ border-color: var(--c); transform: translateY(-2px); }}
  a.rc img {{ width: 100%; height: auto; border-radius: 8px; display: block; background: var(--bg); }}
  a.rc .t {{ font-size: 14px; font-weight: 600; line-height: 1.35; }}
  a.rc .m {{ font-size: 12px; color: var(--muted); font-family: var(--mono); }}
  .rchint {{ color: var(--muted); font-size: 13px; margin: 6px 0 0; }}
</style>
</head><body>
<nav class="top"><a href="../index.html">TALARIA</a><span>/</span><span class="kind">report cards</span></nav>
<header class="hero">
  <h1 style="font-size:34px">Report cards</h1>
  <p class="sub">One card per fictional drive: its loophole, its coherence and causality marks in plain words, how much of the register it engages and the one-line verdict. Click a card for the dossier. Save the image to share it.</p>
</header>
<main>
  <p class="rchint">{len(drives)} cards, ordered by title. Grades are explained in <a href="../pages/about/grading.html">the grading scheme</a>.</p>
  <div class="rcgrid">
{chr(10).join(tiles)}
  </div>
</main>
<footer>TALARIA · report cards are 1200 by 630 PNGs rendered from the dossier data · grades in <a href="https://github.com/mikebertin/talaria/blob/main/GRADING.md">GRADING.md</a></footer>
</body></html>
'''
    (OUT / 'index.html').write_text(page, encoding='utf-8')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--scale', type=int, default=2, choices=[1, 2])
    ap.add_argument('--only', help='render a single slug')
    ap.add_argument('--index-only', action='store_true')
    args = ap.parse_args()

    data = load_data()
    drives = data['fiction']
    loops = load_loopholes()
    OUT.mkdir(parents=True, exist_ok=True)
    if not args.index_only:
        if not os.path.exists(CHROME):
            sys.exit(f'Chrome not found at {CHROME}')
        template = TEMPLATE.read_text(encoding='utf-8')
        work = Path(tempfile.mkdtemp(prefix='talaria-cards-'))
        todo = [d for d in drives if not args.only or d['slug'] == args.only]
        for i, d in enumerate(todo, 1):
            page = work / f"{d['slug']}.html"
            page.write_text(fill(template, d, loops), encoding='utf-8')
            render(page, OUT / f"{d['slug']}.png", args.scale)
            print(f"[{i}/{len(todo)}] {d['slug']}.png", flush=True)
        shutil.rmtree(work, ignore_errors=True)
    write_index(drives, loops)
    total = sum(p.stat().st_size for p in OUT.glob('*.png'))
    n = len(list(OUT.glob('*.png')))
    print(f'{n} cards, {total / 1e6:.1f} MB total, index at {OUT / "index.html"}')
    if total > 25e6 and args.scale == 2:
        print('over 25 MB: rerun with --scale 1', file=sys.stderr)


if __name__ == '__main__':
    main()

# Quantise in place with pngquant when available: the cards are flat dark
# panels and lose nothing visible, and the set drops from about 19 MB to a
# few. Run after the renders; skipped silently if pngquant is not installed.
import shutil, subprocess as _sp
if shutil.which("pngquant"):
    _sp.run(["pngquant", "--quality", "70-95", "--speed", "1", "--force", "--ext", ".png",
             *[str(f) for f in sorted((Path(__file__).resolve().parent.parent.parent / "web" / "cards").glob("*.png"))]], check=False)
