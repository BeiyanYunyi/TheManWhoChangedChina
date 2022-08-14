import Unocss from 'unocss/vite';
import { presetWind, presetAttributify, presetWebFonts } from 'unocss';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [
        presetWind(),
        presetAttributify({ prefix: 'w:' }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            cardo: 'Cardo:400',
            simsun: { name: 'Noto Serif SC', weights: ['700'] },
            author: { name: 'Noto Sans SC', weights: ['400'] },
          },
        }),
      ],
      theme: {
        colors: {
          coverColor: '#f50f11',
          englishFont: '#170006',
          authorFont: '#3c0423',
          titleFont: '#fde329',
          subtitleFont: '#fefeff',
        },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
});
