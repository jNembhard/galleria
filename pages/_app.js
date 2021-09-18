import "../styles/globals.scss";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimatePresence, motion } from "framer-motion";

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
      <ThemeProvider theme={theme}>
        <AnimatePresence
          oneExitComplete={() => window.scrollTo(0, 0)}
          exitBeforeEnter
        >
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
