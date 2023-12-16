import { createGlobalStyle } from "styled-components";
import TitleFont from "./assets/fonts/DarkerGrotesque-Regular.ttf"
import ContentsFont from "./assets/fonts/DMSans_Regular.ttf"

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Darker Grotesque';
    src: url(${TitleFont}) format('truetype');
    /* Add more src declarations for other file formats if needed */
  }

  @font-face {
    font-family: 'DM Sans';
    src: url(${ContentsFont}) format('truetype');
    /* Add more src declarations for other file formats if needed */
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'DM Sans', Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .grecaptcha-badge {
    visibility: hidden;
  }
`;
