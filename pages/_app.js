import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import GlobalStyle from "../styles/global-styles";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
