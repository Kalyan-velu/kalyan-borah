import markdoc from "@astrojs/markdoc";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://kalyanjyotiborah.pro",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [markdoc(), sitemap()],
  output: "server",
  adapter: netlify({
    devFeatures: {
      // Enable Netlify Image CDN support in dev. Defaults to true.
      images: false,
      // Inject Netlify environment variables in dev. Defaults to false.
      environmentVariables: true,
    },
  }),
});
