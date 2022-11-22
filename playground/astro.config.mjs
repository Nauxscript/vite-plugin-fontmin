import { defineConfig } from 'astro/config'
// import Inspect from 'vite-plugin-inspect'
// import vitePluginFontmin from 'vite-plugin-fontmin'
import vitePluginFontmin from '../src'

// https://astro.build/config
export default defineConfig({
  plugins: [
  ],
  vite: {
    plugins: [
      // Inspect(),
      vitePluginFontmin(),
    ],
  },
})
