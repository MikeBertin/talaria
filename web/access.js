// TALARIA demo access layer (TAXIS R14). One call per demo page:
//
//   accessDemo(canvas, 'What the canvas shows, in one sentence');
//
// It gives the canvas role="img" and a label, ties each control label to its
// input (so the slider's name is the label, not the label plus its number),
// keeps every slider's aria-valuetext equal to its visible readout with the
// units spelled out ("0.60 c" is read as "0.60 times the speed of light"),
// and mirrors the demo's readout box into a visually hidden polite live
// region, throttled so a moving slider or a running animation does not
// flood a screen reader. The readout and value spans are watched, not
// wrapped, so the demos' own drawing code stays as it was.
import { describe, liveReadout } from './vendor/stoa/access.js';

// Trailing unit tokens as the demos print them, and how to say them.
const UNITS = [
  [/\s*°$/, ' degrees'],
  [/ c$/, ' times the speed of light'],
  [/ km$/, ' kilometres'],
  [/ mm$/, ' millimetres'],
  [/ µm$/, ' micrometres'],
  [/ nm$/, ' nanometres'],
  [/ fm$/, ' femtometres'],
  [/ m$/, ' metres'],
  [/ ℓP$/, ' Planck lengths'],
  [/ ly$/, ' light-years'],
  [/ g$/, ' times Earth gravity'],
  [/ R$/, ' bubble radii'],
];

// "1.2 × 10-35 m" (a <sup> flattened by textContent) or "1.2 × 10⁻³⁵ m".
const SUPER = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };

export function spell(text) {
  let s = String(text).replace(/\s+/g, ' ').trim();
  s = s.replace(/[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/g, m => [...m].map(c => SUPER[c]).join(''));
  s = s.replace(/ × 10(-?\d+)/g, ' times ten to the power $1');
  for (const [re, words] of UNITS) if (re.test(s)) { s = s.replace(re, words); break; }
  return s;
}

function labelName(label) {
  const copy = label.cloneNode(true);
  for (const v of copy.querySelectorAll('.val')) v.remove();
  return copy.textContent.replace(/\s+/g, ' ').trim();
}

function watch(el, fn) {
  new MutationObserver(fn).observe(el, { childList: true, characterData: true, subtree: true });
}

// The readout as a sentence a screen reader can say: one line per block
// (innerText keeps the breaks textContent loses), joined with full stops,
// and flattened powers of ten ("10<sup>62</sup>" reads as "1062") spelled out.
function spoken(box) {
  return (box.innerText || box.textContent)
    .split(/\n+/).map(l => l.replace(/\s+/g, ' ').trim()).filter(Boolean)
    .map(l => /[.!?:;]$/.test(l) ? l : l + '.').join(' ')
    .replace(/ × 10(-?\d+)/g, ' times ten to the power $1');
}

export function accessDemo(canvas, label, { readout = 'readout', throttleMs = 1000 } = {}) {
  describe(canvas, label);

  for (const lab of document.querySelectorAll('.panel label')) {
    const next = lab.nextElementSibling;
    if (!next) continue;
    const name = labelName(lab);
    if (next.matches('input, select') && next.id) {
      lab.htmlFor = next.id;
      if (!next.hasAttribute('aria-label')) next.setAttribute('aria-label', name);
    } else if (next.classList.contains('seg')) {
      next.setAttribute('role', 'group');
      if (!next.hasAttribute('aria-label')) next.setAttribute('aria-label', name);
    }
  }

  for (const r of document.querySelectorAll('input[type="range"]')) {
    const out = document.getElementById(r.id + 'Val');
    if (!out) continue;
    const sync = () => r.setAttribute('aria-valuetext', spell(out.textContent));
    sync();
    watch(out, sync);
  }

  const box = typeof readout === 'string' ? document.getElementById(readout) : readout;
  if (box) {
    // Nothing is announced on load; the first change the reader makes is.
    const say = liveReadout(null, { throttleMs });
    watch(box, () => say(spoken(box)));
  }
}
