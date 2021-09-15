import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import Arrows from "../../components/Arrows";
import { AnimatePresence } from "framer-motion";

export default function Slideshow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A Galleria Slideshow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>{" "}
      <Header name="Stop Slideshow" href="/" />
      <AnimatePresence exitBeforeEnter>
        <main className={styles.slideshowMain}>
          <Slide />
        </main>
        <Arrows />
      </AnimatePresence>
    </div>
  );
}
