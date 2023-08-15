import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Darker Grotesque';
    src: url('./fonts/DarkerGrotesque-Light.ttf') format('ttf');
    /* Add more src declarations for other file formats if needed */
  }

  body {
    font-family: 'Darker Grotesque', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
