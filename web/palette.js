// TALARIA palette. Ours, not a borrow.
//
// Minted 2026-09-14 in OKLCH (L, C, hue) and stored as hex. Dark ground #0a0a0f.
// Two tiers per entity: mark (canvas fills, L 0.50 to 0.66) and text (coloured
// type, L about 0.14 higher, chroma 0.85 of the mark).
//
// Validation: the dataviz skill's validate_palette.js, --mode dark
// --surface #0a0a0f --pairs adjacent, in the slot order below. The loophole
// set passes every check; the demo set passes with one WARN, signal against
// reply at deutan ΔE 7.1, inside the 6 to 8 floor band, which is legal only
// with direct labels, and every diagram labels both:
//   loopholes: [PASS] CVD separation         worst adjacent #9b3b6e↔#29a987 ΔE 15.4 (deutan) · tritan 9.7 / [PASS] Normal-vision floor    worst adjacent #814ea4↔#9f7100 ΔE 24.4 (normal)
//   demo:      [PASS] Normal-vision floor    worst adjacent #a1942f↔#c64e31 ΔE 17.7 (normal)
// All-pairs safety past three slots is not achievable by the skill's own
// reference, so both sets rely on direct labels wherever two entities meet:
// every loophole carries its L-code and every diagram actor carries its name.
//
// LOOPHOLES colour the catalogue (atlas, chips, hub cards). DEMO colours the
// antitelephone and the other spacetime diagrams: the same five actors
// recur across the demos and keep the same colours everywhere.

export const LOOPHOLES = {
  L1: { mark: '#c96736', text: '#f09870', name: 'faster in the same space', oklch: [0.62, 0.14, 45] },
  L2: { mark: '#3d68ca', text: '#6d96ec', name: 'move the space', oklch: [0.54, 0.16, 264] },
  L3: { mark: '#9f7100', text: '#c69d56', name: 'take a shortcut', oklch: [0.58, 0.12, 80] },
  L4: { mark: '#814ea4', text: '#a97dc9', name: 'leave the manifold', oklch: [0.52, 0.14, 310] },
  L5: { mark: '#29a987', text: '#74d3b4', name: 'send the message', oklch: [0.66, 0.12, 170] },
  L6: { mark: '#9b3b6e', text: '#c16c96', name: 'not FTL', oklch: [0.5, 0.14, 350] }
};

export const DEMO = {
  a: { mark: '#4c5ca7', text: '#7688ca', name: 'observer at rest', oklch: [0.5, 0.12, 272] },
  b: { mark: '#c64e31', text: '#ed8368', name: 'moving observer', oklch: [0.58, 0.16, 35] },
  light: { mark: '#a1942f', text: '#cbc071', name: 'light cone', oklch: [0.66, 0.12, 102] },
  signal: { mark: '#cf5684', text: '#f68aaf', name: 'outbound signal', oklch: [0.62, 0.16, 359] },
  reply: { mark: '#54a859', text: '#8cd28e', name: 'the reply', oklch: [0.66, 0.14, 145] }
};

export const PALETTE = { ...LOOPHOLES, ...DEMO };
export const INK = '#e7e7ef';
export const BOARD = '#0a0a0f';
export const PANEL = '#13131c';
export const GRID = '#23232f';
export const MUTED = '#8a8a9c';

export function colour(ent) { const p = PALETTE[ent]; return p ? p.mark : INK; }
export function text(ent) { const p = PALETTE[ent]; return p ? p.text : INK; }
