// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://teloarmo.cl', // TODO: confirmar dominio

  vite: {
    plugins: [tailwindcss()]
  },

  // Las demos y mockups son negocios ficticios o de prospectos: no van al sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes('/demos/') })]
});
