import { defineConfig } from 'astro/config'
import vitePluginFontmin from 'vite-plugin-fontmin'

// https://astro.build/config
export default defineConfig({
  plugins: [
    vitePluginFontmin(),
  ],
})
