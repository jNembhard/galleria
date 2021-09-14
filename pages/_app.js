import "../styles/globals.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const size = {
  tablet: "767px",
  laptop: "992px",
  desktop: "1440px",
};

const theme = {
  black: "#000000",
  grey: "#7d7d7d",
  whisperGrey: "#e5e5e5",
  whiteSmoke: "#f3f3f3",
  white: "#ffffff",
  headingWeight: "700",
  bodyWeight: "400",
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <SwitchTransition mode="in-out">
        <CSSTransition key={router.pathname} classNames="page" timeout={400}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default MyApp;
