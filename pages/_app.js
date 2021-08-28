import GlobalStyle from "../infrastructure/theme/global";
import { ThemeProvider } from "styled-components";
import theme from "../infrastructure/theme";
import { Provider } from "react-redux";
import store from "../infrastructure/redux/store";
import Auth from "../lib/auth";
import { Toaster } from "react-hot-toast";

import Layout from "../infrastructure/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
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
