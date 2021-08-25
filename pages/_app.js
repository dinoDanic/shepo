import GlobalStyle from "../infrastructure/theme/global";
import { ThemeProvider } from "styled-components";
import theme from "../infrastructure/theme";
import { Provider } from "react-redux";
import store from "../infrastructure/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
