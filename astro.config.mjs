import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), react()],
  output: "server",
  adapter: netlify()
});