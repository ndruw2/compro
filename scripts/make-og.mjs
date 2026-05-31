// One-off: rasterize the OG card SVG -> public/og-image.png using sharp (bundled with Astro).
// Run: node scripts/make-og.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3b6fd4"/>
      <stop offset="1" stop-color="#2f57ad"/>
    </linearGradient>
    <radialGradient id="aura" cx="88%" cy="6%" r="70%">
      <stop offset="0" stop-color="#dfe8fb" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#fbfcfe"/>
  <rect width="${W}" height="${H}" fill="url(#aura)"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" rx="28" fill="none" stroke="#e3e8f0"/>

  <!-- monogram + name -->
  <g transform="translate(90,84)">
    <rect width="74" height="74" rx="18" fill="url(#accent)"/>
    <text x="37" y="50" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="32" font-weight="700" fill="#ffffff">IB</text>
  </g>
  <text x="184" y="124" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="700" fill="#1d2a44">Indra Bayu</text>
  <text x="186" y="154" font-family="Helvetica, Arial, sans-serif" font-size="17" fill="#5b6b84">Software Consultant &amp; Engineer</text>

  <!-- headline -->
  <text x="90" y="345" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="800" fill="#1d2a44">Custom software &amp; AI,</text>
  <text x="90" y="425" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="800" fill="#1d2a44">built around <tspan fill="#3b6fd4">your business.</tspan></text>

  <text x="90" y="535" font-family="Helvetica, Arial, sans-serif" font-size="25" fill="#5b6b84">AI integration · agents &amp; automation · full-stack development</text>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(new URL('../public/og-image.png', import.meta.url), png);
console.log('Wrote public/og-image.png', png.length, 'bytes');
