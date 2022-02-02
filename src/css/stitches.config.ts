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
      primary: "#F25D27",
      secondary: "#DDE9F0",
      secondaryDark: "#115D8C",

      shape: "#FFFFFF",
      shape02: "#DCE2E6",
      background: "#E5E5E5",
      background02: "#F5F8FA",

      title: "#123952",
      text: "#617480",
      complement: "#A0ACB3",
    },
    fonts:{
      primary: 'Heebo, sans-serif'
    }
  },
});