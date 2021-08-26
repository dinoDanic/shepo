import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: ${({ theme }) => theme.fonts.main};
      box-sizing: border-box;
  }
  body {
    color: ${({ theme }) => theme.colors.font.default}
  }
`;

export default GlobalStyle;
