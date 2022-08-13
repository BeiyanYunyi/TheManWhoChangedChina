/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        coverColor: '#f50f11',
        englishFont: '#170006',
        authorFont: '#3c0423',
        titleFont: '#fde329',
        subtitleFont: '#fefeff',
      },
      fontFamily: { simsun: ['思源宋体 SemiBold'], english: 'Songti SC Light' },
    },
  },
  plugins: [require('windicss/plugin/typography')({ dark: true })],
  darkMode: 'class',
});
