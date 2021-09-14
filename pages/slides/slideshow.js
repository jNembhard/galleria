import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import Arrows from "../../components/Arrows";
import { AnimatePresence, motion } from "framer-motion";

export default function Slideshow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A Galleria Slideshow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <AnimatePresence exitBeforeEnter>
        <Header name="Stop Slideshow" href="/" />

        <main className={styles.main}>
          <Slide />
        </main>
        <Arrows />
      </AnimatePresence>
    </div>
  );
}

export const pageAnimation = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
