# Indra Bayu — Consulting Site

Personal company-profile / consulting site for **Indra Bayu**, an independent software
consultant (custom software, automation, applied AI). Built with **Astro + Tailwind v4**,
deployed as a static site to **Cloudflare Pages**.

> Design direction: clean, light, corporate (reference: badr.co.id). First-person voice.
> All content lives in `src/config/site.ts` — edit there, not in components.

## Stack & characteristics

- **Astro 5** static output (`output: 'static'`) — zero client JS (one tiny inline
  IntersectionObserver for scroll reveals).
- **Tailwind v4** (CSS-first) + design tokens in `src/styles/tokens.css`.
- Light palette (near-white + ink/navy + one blue accent), single sans family
  (**Plus Jakarta Sans**).
- Budgets met: CSS ≈ 5 KB gzipped, 0 KB JS.

## Sections

Header → Hero → Services → Process → About → Contact → Footer.
(No team and no client/case-study work shown yet — see "Add work later" below.)

## Project structure

```
src/
├── config/site.ts        # SINGLE source of truth: brand, services, approach, about, contact, SEO
├── styles/               # tokens.css (light tokens), global.css (base + utilities)
├── layouts/Base.astro    # head/meta/OG, JSON-LD (Person), font, reveal observer
├── components/
│   ├── brand/Wordmark.astro
│   ├── hero/ services/ approach/ about/ contact/
│   └── ui/               # Button, SectionHeading
└── pages/index.astro
public/                   # favicon.svg, og-image.png, robots.txt, sitemap.xml, _headers
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

## Before launch — checklist

- [ ] Real contact handles in `site.ts` (`contact.email`, `contact.whatsapp`, socials).
- [ ] Confirm/adjust the Services and About copy.
- [ ] Update `site.seo.url` + `astro.config.mjs` `site` to the final domain, then
      regenerate the OG image.

## Add work later

Work/case studies and client logos are intentionally hidden for now. To add them back:
add a `work` array (and/or `clients`) to `src/config/site.ts`, create a section component
(see git history for the previous `Work.astro`), and include it in `src/pages/index.astro`.

## Deploy (Cloudflare Pages)

Connected via **Git integration**: framework preset **Astro**, build `npm run build`,
output `dist`. Auto-deploys on push to `main`.
Direct upload alternative: `npx wrangler pages deploy dist --project-name=finendra-compro`.
