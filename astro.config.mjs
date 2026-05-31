// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static company-profile site, deployed to Cloudflare Pages.
// `output: 'static'` => emits dist/ with no server adapter required.
export default defineConfig({
  output: 'static',
  site: 'https://finendra.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
