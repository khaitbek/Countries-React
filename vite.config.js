import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      styl: {
        additionalData: `$injectedColor ?= orange`
      }
    },
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
  build:{
    assetsInlineLimit:5000
  }
})
