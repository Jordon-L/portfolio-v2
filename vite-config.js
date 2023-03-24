// vite.config.js
import { VitePluginRadar } from 'vite-plugin-radar'

export default {
  plugins: [
    VitePluginRadar({
      // Google Analytics tag injection
      analytics: {
        id: 'G-MBT6WXE2PN',
      },
    })
  ],
}