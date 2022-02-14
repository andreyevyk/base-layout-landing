// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any;

    fonts: {
      primary: string;
      secondary: string;
    };

    colors: {
      primary: string;

      secondary: string;
      secondaryDark: string;

      title: string;
      text: string;
      complement: string;

      background: string;
      background02: string;
      shape: string;
      shape02: string;
      [key: string]: string;
    };
  }
}
