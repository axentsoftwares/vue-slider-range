import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [dts({ rollupTypes: true }), libInjectCss(), vue()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
    },
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueSliderRange',
      fileName: 'vue-slider-range',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: `vue-slider-range.[ext]`,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
