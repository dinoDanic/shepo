import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      font-family: ${({ theme }) => theme.fonts.main}
  }
`;

export default GlobalStyle;
