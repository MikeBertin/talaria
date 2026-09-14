// Shared canvas helpers, HiDPI-aware.
//
// Two ways in:
//   setup(canvas, w, h)  when the demo decides the CSS size
//   fit(canvas)          when CSS decides and the buffer follows the element
// Both clamp devicePixelRatio to 2 so 3x displays do not pay for pixels
// nobody can see.

const MAX_DPR = 2;

export function dpr() {
  return Math.max(1, Math.min(MAX_DPR, window.devicePixelRatio || 1));
}

export function setup(canvas, cssWidth, cssHeight) {
  const r = dpr();
  canvas.width = cssWidth * r;
  canvas.height = cssHeight * r;
  canvas.style.width = cssWidth + 'px';
  canvas.style.maxWidth = '100%';
  const ctx = canvas.getContext('2d');
  ctx.scale(r, r);
  return ctx;
}

export function fit(canvas) {
  const r = dpr();
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w * r;
  canvas.height = h * r;
  const ctx = canvas.getContext('2d');
  ctx.setTransform(r, 0, 0, r, 0, 0);
  return { ctx, w, h };
}

export function clear(ctx, w, h, bg = '#14161f') {
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
}

export function arrow(ctx, x0, y0, x1, y1, colourStr, width = 2.5, glow = false) {
  ctx.save();
  if (glow) { ctx.shadowColor = colourStr; ctx.shadowBlur = 12; }
  ctx.strokeStyle = colourStr;
  ctx.fillStyle = colourStr;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
  const ang = Math.atan2(y1 - y0, x1 - x0);
  const hl = 9;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1 - hl * Math.cos(ang - 0.42), y1 - hl * Math.sin(ang - 0.42));
  ctx.lineTo(x1 - hl * Math.cos(ang + 0.42), y1 - hl * Math.sin(ang + 0.42));
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export function label(ctx, text, x, y, colourStr, size = 15, italic = true) {
  ctx.save();
  ctx.fillStyle = colourStr;
  ctx.font = `${italic ? 'italic ' : ''}600 ${size}px Georgia, serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
  ctx.restore();
}

export function bar(ctx, x, y, w, h, colourStr, glow = false) {
  ctx.save();
  if (glow) { ctx.shadowColor = colourStr; ctx.shadowBlur = 10; }
  ctx.fillStyle = colourStr;
  ctx.fillRect(x, y, w, h);
  ctx.restore();
}

// Pointer position in CSS pixels relative to the canvas.
export function pointer(canvas, ev) {
  const r = canvas.getBoundingClientRect();
  return [ev.clientX - r.left, ev.clientY - r.top];
}

// Word chips laid out in a centred row. Returns one rect per token.
export function layoutChips(ctx, tokens, y, x0, x1, h = 30) {
  ctx.font = '600 15px ui-monospace, Menlo, monospace';
  const pad = 12, gap = 8;
  const widths = tokens.map(t => ctx.measureText(t.word).width + pad * 2);
  const total = widths.reduce((a, b) => a + b, 0) + gap * (tokens.length - 1);
  let x = Math.max(x0, x0 + ((x1 - x0) - total) / 2);
  return tokens.map((t, i) => {
    const r = { x, y, w: widths[i], h, i };
    x += widths[i] + gap;
    return r;
  });
}

export function drawChip(ctx, rect, word, { fill, ring, text, dashed = false, glow = false } = {}) {
  ctx.save();
  if (glow && ring) { ctx.shadowColor = ring; ctx.shadowBlur = 10; }
  ctx.fillStyle = fill || '#1a1d29';
  ctx.strokeStyle = ring || '#272b38';
  ctx.lineWidth = ring ? 2 : 1;
  if (dashed) ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(rect.x, rect.y, rect.w, rect.h, 7);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = text || '#dde1ec';
  ctx.font = '600 15px ui-monospace, Menlo, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(word, rect.x + rect.w / 2, rect.y + rect.h / 2 + 1);
  ctx.restore();
}

export function inRect(r, x, y) {
  return x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h;
}
