import GlobalStyle from "../infrastructure/theme/global";
import styled, { ThemeProvider } from "styled-components";
import theme from "../infrastructure/theme";
import { Provider } from "react-redux";
import store from "../infrastructure/redux/store";
import Auth from "../lib/auth";

import Sidebar from "../components/sidebar/sidebar.component";
import Layout from "../infrastructure/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Auth />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
