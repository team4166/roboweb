import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/buttons/', // Update this to match your subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
