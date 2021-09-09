import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import styled from "styled-components";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import portrait_data from "../../public/portrait_data.js";
import { useCallback, useEffect, useState } from "react";
import Carousel from "../../components/Carousel";

export default function Slideshow() {
  console.log(portrait_data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A Galleria Slideshow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Stop Slideshow" href="/" />

      <main className={styles.main}>
        <Carousel />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
