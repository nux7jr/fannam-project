import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
    })
  ],
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
    // __API_URL__: 'window.__backend_api_url',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
