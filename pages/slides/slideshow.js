import Head from "next/head";
import styles from "../../styles/Home.module.scss";
import styled from "styled-components";
import Header from "../../components/Header";
import Slide from "../../components/Slide";
import portrait_data from "../../public/portrait_data.js";

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
        {portrait_data.slice(0, 1).map((data) => (
          <Slide
            key={data.id}
            source={data.images.hero.small}
            name={data.name}
            subtitle={data.artist.name}
            artist={data.artist.image}
            year={data.year}
            description={data.description}
            gallery={data.gallery}
          />
        ))}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
