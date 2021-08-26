import GlobalStyle from "../infrastructure/theme/global";
import styled, { ThemeProvider } from "styled-components";
import theme from "../infrastructure/theme";
import { Provider } from "react-redux";
import store from "../infrastructure/redux/store";
import Auth from "../lib/auth";

import Menu from "../components/menu/menu.component";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Auth />
        <Container>
          <Menu />
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default MyApp;
