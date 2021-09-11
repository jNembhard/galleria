import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import styled from "styled-components";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import portrait_data from "../../public/portrait_data.js";
import { useCallback, useEffect, useState } from "react";
import Arrows from "../../components/Arrows";

export default function Slideshow() {
  const breakPoint767 = useMediaQuery(767);
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
        {portrait_data.slice(0, 1).map((data) => (
          <Slide
            key={data.id}
            source={
              breakPoint767 ? data.images.hero.large : data.images.hero.small
            }
            name={data.name}
            subtitle={data.artist.name}
            artist={data.artist.image}
            year={data.year}
            description={data.description}
            gallery={data.gallery}
          />
        ))}
        <Arrows />
      </main>
      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}

export function useMediaQuery(width) {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((event) => {
    if (event.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
}
