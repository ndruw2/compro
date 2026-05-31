# FINENDRA — Company Profile

Marketing/company-profile site for **FINENDRA Consulting** (working name), a bespoke
software development consultancy. Built with **Astro + Tailwind v4**, deployed as a static
site to **Cloudflare Pages**.

> The brand name is a working placeholder (FINENDRA = **Fin**a + In**dra**, via the Javanese
> "-endra" royal suffix). To change it, edit `src/config/site.ts` only.

## Stack & characteristics

- **Astro 5** static output (`output: 'static'`) — zero client JS shipped (one tiny inline
  IntersectionObserver for scroll reveals).
- **Tailwind v4** (CSS-first) + custom design tokens (`src/styles/tokens.css`).
- Design direction: **bento / modern-tech**, "kraton night" palette (warm dark + gold +
  jade) with an **Aksara Jawa** (Javanese script) brand motif.
- Budgets met: CSS ≈ 5.6 KB gzipped, 0 KB JS.

## Project structure

```
src/
├── config/site.ts        # SINGLE source of truth: brand, services, founders, contact, SEO
├── styles/               # tokens.css (design tokens), global.css (base + utilities)
├── layouts/Base.astro    # head/meta/OG, JSON-LD, fonts, reveal observer
├── components/
│   ├── brand/            # Wordmark, AksaraMark
│   ├── hero/ services/ approach/ work/ team/ contact/
│   └── ui/               # Button, SectionHeading
└── pages/index.astro
public/                   # favicon.svg, og-image.png, robots.txt, sitemap.xml
scripts/make-og.mjs       # regenerate public/og-image.png (sharp)
```

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview    # serve the production build
node scripts/make-og.mjs   # regenerate the OG image after a brand/tagline change
```

## Before launch — review checklist

- [ ] Final brand name + its **Aksara Jawa** glyphs in `site.ts` (`brand.name`,
      `brand.nameAksara`) — have the Javanese script reviewed by a native reader.
- [ ] Real contact handles in `site.ts` (`contact.email`, `contact.whatsapp`, socials).
- [ ] Confirm founder roles/focus in `site.ts`.
- [ ] Real case studies in `site.work` when available.
- [ ] Update `site.seo.url` + `astro.config.mjs` `site` to the final domain, then
      regenerate the OG image.

## Deploy (Cloudflare Pages)

**Git integration (recommended):** connect the `compro` repo in the Cloudflare dashboard →
framework preset **Astro**, build command `npm run build`, output directory `dist`.
Auto-deploys on push to `main`.

**Direct upload:** `npx wrangler pages deploy dist --project-name=finendra-compro`.
