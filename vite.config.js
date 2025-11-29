import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt"],
      manifest: {
        name: "My Todo PWA",
        short_name: "IRCTC Rail Connect",
        description: "Simple Todo app built with Vite + React",
        theme_color: "#ff9501ff",
        icons: [
          {
            src: "/irctc.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/irctc.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
})
