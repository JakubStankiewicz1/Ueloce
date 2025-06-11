import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4011,
  },
  preview: {
    port: 4011,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
