import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import styled from "styled-components";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
// import Lightbox from "../../components/Lightbox";
import Arrows from "../../components/Arrows";

export default function Slideshow() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A Galleria Slideshow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Stop Slideshow" href="/" />

      <main className={styles.main}>
        {/* <Lightbox /> */}
        <Slide />
      </main>
      <Arrows />
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
