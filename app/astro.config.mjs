// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// * BUG: https://github.com/withastro/astro/issues/12824
const alias = import.meta.env.PROD ? {
  "react-dom/server": "react-dom/server.edge",
} : undefined;

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: { alias },
  },

  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
});