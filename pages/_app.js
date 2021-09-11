import "../styles/globals.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";

const theme = {
  black: "#000000",
  grey: "#7d7d7d",
  whisperGrey: "#e5e5e5",
  whiteSmoke: "#f3f3f3",
  white: "#ffffff",
  headingWeight: "700",
  bodyWeight: "400",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
