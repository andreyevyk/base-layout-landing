import { createGlobalStyle } from 'styled-components';
import { resetCss } from './resetCss';

const GlobalStyles = createGlobalStyle`
  ${resetCss}

  body{
    line-height: 1;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;

    background:  ${({ theme }) => theme.colors.background};
    color:  ${({ theme }) => theme.colors.text};
  }

  body, div#app {
    height: 100vh;
  }
`;

export default GlobalStyles;
