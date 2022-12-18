import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from "path";
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
  },
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src'),
      '@components':path.resolve(__dirname,"src","components"),
      '@lib':path.resolve(__dirname,"src","lib"),
      '@styles':path.resolve(__dirname,"src","styles"),
      '@pages':path.resolve(__dirname,"src","pages"),
    }
  }
})