import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Darker Grotesque';
    src: url('./fonts/DarkerGrotesque-Regular.ttf') format('truetype');
    /* Add more src declarations for other file formats if needed */
  }

  @font-face {
    font-family: 'DM Sans';
    src: url('../fonts/DMSans_Regular.ttf') format('truetype');
    /* Add more src declarations for other file formats if needed */
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Darker Grotesque', sans-serif;
    margin: 0;
    padding: 0;
  }
`;
