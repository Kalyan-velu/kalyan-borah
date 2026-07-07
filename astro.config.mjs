import markdoc from '@astrojs/markdoc';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://kalyanjyotiborah.pro',
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bebas Neue',
      cssVariable: '--bebas',
      weights: [300, 400, 500, 700],
      styles: ['normal'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Space Grotesk',
      cssVariable: '--space-grotesk',
      weights: [300, 400, 500, 700],
      styles: ['normal'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Alata',
      cssVariable: '--alata',
      weights: [200, 300, 400],
      styles: ['normal'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Inconsolata',
      cssVariable: '--inconsolata',
      weights: [200, 300, 400],
      styles: ['normal'],
      display: 'swap',
    },
  ],
  vite: {
    port:3000,
    plugins: [tailwindcss()],
    resolve: {
      tsconfigPaths: true,
    },
  },
  integrations: [markdoc(), sitemap()],
  output: 'static',
  adapter: netlify({
    devFeatures: {
      images: true,
      environmentVariables: true,
    },
  }),
});
