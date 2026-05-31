// One-off: rasterize the OG card SVG -> public/og-image.png using sharp (bundled with Astro).
// Run: node scripts/make-og.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ecca7a"/>
      <stop offset="1" stop-color="#c2944a"/>
    </linearGradient>
    <radialGradient id="aura" cx="78%" cy="18%" r="80%">
      <stop offset="0" stop-color="#5a4422" stop-opacity="0.55"/>
      <stop offset="55%" stop-color="#23303a" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#140f0a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#140f0a"/>
  <rect width="${W}" height="${H}" fill="url(#aura)"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="28" fill="none" stroke="#e8c473" stroke-opacity="0.18"/>

  <!-- gold monogram -->
  <g transform="translate(90,86)">
    <rect width="74" height="74" rx="18" fill="#1a140f" stroke="#e8c473" stroke-opacity="0.5"/>
    <path d="M24 20 H52 V29 H35 V36 H49 V45 H35 V56 H24 Z" fill="url(#gold)"/>
  </g>
  <text x="184" y="138" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="6" fill="#efe7d6">FINENDRA</text>
  <text x="186" y="166" font-family="Helvetica, Arial, sans-serif" font-size="16" letter-spacing="8" fill="#b59e7a">CONSULTING</text>

  <!-- headline -->
  <text x="90" y="350" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="600" fill="#f3ecdd">Bespoke software,</text>
  <text x="90" y="448" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-style="italic" fill="url(#gold)">shaped to your process.</text>

  <text x="90" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#b7a888">Custom development · automation · applied AI</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(new URL('../public/og-image.png', import.meta.url), png);
console.log('Wrote public/og-image.png', png.length, 'bytes');
