/* Escape 18 platform: QR generator extracted unchanged from the lesson engine (repo verzekerd/index.html). Exposes window.E18QR = { qr(text) -> matrix, qrPath(matrix) -> SVG path }. */
/* QR code: byte mode, error correction level M, versions 1 to 40. Copied from Escape 18 d32 src/teacher.js (written from ISO/IEC 18004). */
(function (g) {
  'use strict';
  const ECC = [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28]; // per block, level M
  const BLOCKS = [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49];
  const mul = (x, y) => { let z = 0; for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; } return z; };
  function divisor(n) { const r = Array(n - 1).fill(0).concat(1); let root = 1; for (let i = 0; i < n; i++) { for (let j = 0; j < n; j++) { r[j] = mul(r[j], root); if (j + 1 < n) r[j] ^= r[j + 1]; } root = mul(root, 2); } return r; }
  function remainder(data, div) { const r = div.map(() => 0); for (const b of data) { const f = b ^ r.shift(); r.push(0); div.forEach((c, i) => { r[i] ^= mul(c, f); }); } return r; }
  const rawBits = v => { let r = (16 * v + 128) * v + 64; if (v >= 2) { const n = Math.floor(v / 7) + 2; r -= (25 * n - 10) * n - 55; if (v >= 7) r -= 36; } return r; };
  const dataBytes = v => Math.floor(rawBits(v) / 8) - ECC[v - 1] * BLOCKS[v - 1];
  const alignAt = (v, size) => { if (v === 1) return []; const n = Math.floor(v / 7) + 2, step = Math.floor((v * 8 + n * 3 + 5) / (n * 4 - 4)) * 2, r = [6]; for (let p = size - 7; r.length < n; p -= step) r.splice(1, 0, p); return r; };
  const MASKS = [(x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, x => x % 3 === 0, (x, y) => (x + y) % 3 === 0, (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0,
    (x, y) => x * y % 2 + x * y % 3 === 0, (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0];
  function penalty(M) {
    const n = M.length, rows = M.map(r => r.map(b => (b ? 1 : 0)).join('')), lines = rows.concat(rows.map((_, x) => rows.map(r => r[x]).join('')));
    let p = 0, dark = 0;
    for (const s of lines) {
      for (const run of s.match(/0+|1+/g)) if (run.length >= 5) p += run.length - 2;
      const t = '0000' + s + '0000'; for (const pat of ['00001011101', '10111010000']) for (let i = t.indexOf(pat); i >= 0; i = t.indexOf(pat, i + 1)) p += 40;
    }
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { if (M[y][x]) dark++; if (x < n - 1 && y < n - 1 && M[y][x] === M[y][x + 1] && M[y][x] === M[y + 1][x] && M[y][x] === M[y + 1][x + 1]) p += 3; }
    return p + (Math.ceil(Math.abs(dark * 20 - n * n * 10) / (n * n)) - 1) * 10;
  }
  function qr(text) {
    const bytes = Array.from(new TextEncoder().encode(String(text)));
    let v = 1; while (v <= 40 && 4 + (v < 10 ? 8 : 16) + bytes.length * 8 > dataBytes(v) * 8) v++;
    if (v > 40) return null;
    const cap = dataBytes(v) * 8, bits = [], put = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4); put(bytes.length, v < 10 ? 8 : 16); bytes.forEach(b => put(b, 8)); put(0, Math.min(4, cap - bits.length)); put(0, (8 - bits.length % 8) % 8);
    for (let pad = 0xEC; bits.length < cap; pad ^= 0xEC ^ 0x11) put(pad, 8);
    const data = []; for (let i = 0; i < bits.length; i += 8) data.push(bits.slice(i, i + 8).reduce((a, b) => a * 2 + b, 0));
    // Blocks with their error correction, then interleaved.
    const nb = BLOCKS[v - 1], ec = ECC[v - 1], raw = Math.floor(rawBits(v) / 8), short = nb - raw % nb, len = Math.floor(raw / nb), div = divisor(ec), blocks = [];
    for (let i = 0, k = 0; i < nb; i++) { const d = data.slice(k, k + len - ec + (i < short ? 0 : 1)); k += d.length; const e = remainder(d, div); if (i < short) d.push(0); blocks.push(d.concat(e)); }
    const cw = []; for (let i = 0; i < blocks[0].length; i++) blocks.forEach((b, j) => { if (i !== len - ec || j >= short) cw.push(b[i]); });
    // Function patterns: timing, finders, alignment, format and version information.
    const size = v * 4 + 17, M = [...Array(size)].map(() => Array(size).fill(false)), F = [...Array(size)].map(() => Array(size).fill(false));
    const set = (x, y, d) => { M[y][x] = d; F[y][x] = true; };
    for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
    for (const [cx, cy] of [[3, 3], [size - 4, 3], [3, size - 4]]) for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
      const x = cx + dx, y = cy + dy, d = Math.max(Math.abs(dx), Math.abs(dy)); if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, d !== 2 && d !== 4); }
    const ap = alignAt(v, size), last = ap.length - 1;
    ap.forEach((ax, i) => ap.forEach((ay, j) => { if ((i === 0 && (j === 0 || j === last)) || (i === last && j === 0)) return;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1); }));
    const format = m => { let r = m; for (let i = 0; i < 10; i++) r = (r << 1) ^ ((r >>> 9) * 0x537); const b = ((m << 10) | r) ^ 0x5412, bit = i => ((b >>> i) & 1) === 1; // level M = 00
      for (let i = 0; i <= 5; i++) set(8, i, bit(i)); set(8, 7, bit(6)); set(8, 8, bit(7)); set(7, 8, bit(8)); for (let i = 9; i < 15; i++) set(14 - i, 8, bit(i));
      for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(i)); for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(i)); set(8, size - 8, true); };
    format(0);
    if (v >= 7) { let r = v; for (let i = 0; i < 12; i++) r = (r << 1) ^ ((r >>> 11) * 0x1F25); const b = (v << 12) | r;
      for (let i = 0; i < 18; i++) { const d = ((b >>> i) & 1) === 1, a = size - 11 + i % 3, c = Math.floor(i / 3); set(a, c, d); set(c, a, d); } }
    // Data in the zigzag, two columns at a time from the bottom right.
    for (let right = size - 1, i = 0; right >= 1; right -= 2) { if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) for (let j = 0; j < 2; j++) { const x = right - j, y = ((right + 1) & 2) === 0 ? size - 1 - vert : vert;
        if (!F[y][x] && i < cw.length * 8) { M[y][x] = ((cw[i >>> 3] >>> (7 - (i & 7))) & 1) === 1; i++; } } }
    // The mask with the lowest penalty.
    const flip = m => { for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!F[y][x] && MASKS[m](x, y)) M[y][x] = !M[y][x]; };
    let best = 0, low = Infinity;
    for (let m = 0; m < 8; m++) { flip(m); format(m); const p = penalty(M); if (p < low) { low = p; best = m; } flip(m); }
    flip(best); format(best);
    return M;
  }
  // SVG path of the dark modules (one rectangle per horizontal run), with a quiet zone of 4 modules.
  function qrPath(M, quiet = 4) {
    let d = '';
    M.forEach((row, y) => { for (let x = 0; x < row.length; x++) if (row[x]) { let w = 1; while (row[x + w]) w++; d += `M${x + quiet} ${y + quiet}h${w}v1h-${w}z`; x += w - 1; } });
    return d;
  }

  g.E18QR = { qr, qrPath };
})(typeof window !== 'undefined' ? window : globalThis);
