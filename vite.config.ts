import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'



export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src'],
      extensions: ['vue'],
      directoryAsNamespace: true,
      dts: true,
    }),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'vue-router', 'pinia'],

      dirs: [
        './src/shared/**',
        './src/app/**'
      ],
    }),
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
