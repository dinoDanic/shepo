import GlobalStyle from "../infrastructure/theme/global";
import { Provider } from "react-redux";
import { store } from "../infrastructure/redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
