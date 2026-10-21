// vite.config.js
// ---------------------------------------------------------------------------
// Vite + React. Dev server on port 3000.
// Proxies /api/* to the Express backend (port 5000) so the form works locally
// without CORS headaches.
// ---------------------------------------------------------------------------
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: { outDir: 'dist' },
})
