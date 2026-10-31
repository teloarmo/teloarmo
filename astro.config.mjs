// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITIO y BASE se definen al publicar (ver .github/workflows/deploy.yml).
// En GitHub Pages sin dominio propio el sitio vive en https://teloarmo.github.io/teloarmo/,
// así que BASE es "/teloarmo". Con dominio propio (teloarmo.cl), BASE queda en "/".
// https://astro.build/config
export default defineConfig({
  site: process.env.SITIO ?? 'https://teloarmo.cl', // TODO: confirmar dominio
  base: process.env.BASE ?? '/',

  vite: {
    plugins: [tailwindcss()]
  },

  // Las demos y mockups son negocios ficticios o de prospectos: no van al sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/demos/') })]
});
