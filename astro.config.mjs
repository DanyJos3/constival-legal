// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://constival.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react()],
  redirects: {
    // Soporte para dominios alternativos
    '/crearsasecuador': '/crear-sas-ecuador',
    '/sasfacil': '/crear-sas-ecuador',
  }
});
