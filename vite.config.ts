import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ielts: resolve(__dirname, 'apps/ielts/index.html'),
        gre: resolve(__dirname, 'apps/gre/index.html'),
        gmat: resolve(__dirname, 'apps/gmat/index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@shared': resolve(__dirname, './shared'),
      '@ielts': resolve(__dirname, './apps/ielts/src'),
      '@gre': resolve(__dirname, './apps/gre/src'),
      '@gmat': resolve(__dirname, './apps/gmat/src')
    }
  }
})