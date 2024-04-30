import markdoc from "@astrojs/markdoc"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from 'astro/config'

import netlify from "@astrojs/netlify"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), markdoc(), react()],
  output: "server",
  adapter: netlify()
})