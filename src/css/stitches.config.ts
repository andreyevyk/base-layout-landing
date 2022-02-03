import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#F25D27',
      secondary: '#DDE9F0',
      secondaryDark: '#115D8C',

      shape: '#FFFFFF',
      shape02: '#DCE2E6',
      background: '#F5F8FA',
      background02: '#E5E5E5',

      title: '#123952',
      text: '#617480',
      complement: '#A0ACB3',
    },
    fonts: {
      primary: 'Heebo, sans-serif',
      secondary: 'Barlow, sans-serif',
    },
  },
});
