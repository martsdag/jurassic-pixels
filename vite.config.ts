import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      webp: false,
      jpeg: false,
      jpg: false,
    }),
  ],
  publicDir: 'public',
});
