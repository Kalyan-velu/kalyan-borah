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
    resolve: {
      tsconfigPaths: true,
    },
  },
  integrations: [markdoc(), sitemap()],
  output: "server",
  adapter: netlify({
    devFeatures: {
      images: true,
      environmentVariables: true,
    },
  }),
});
