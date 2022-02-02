import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import GlobalStyle from "../styles/global-styles";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
