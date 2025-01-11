import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/roboweb/buttons/', // Updated to match full path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
