import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import PortraitRow from "../components/PortaitRow";
import styles from "../styles/Home.module.scss";
import portrait_data from "../public/portrait_data.js";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A virtual art gallery." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Start Slideshow" />
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <Picture>
          <div className="picture-row">
            {portrait_data.map((data) => (
              <PortraitRow
                key={data.id}
                name={data.name}
                thumbnail={data.images.thumbnail.source}
                height={data.images.thumbnail.height}
                author={data.artist.name}
              />
            ))}
          </div>
          {/* <div>Row 2</div>
          <div>Row 3</div>
          <div>Row 4</div> */}
        </Picture>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

const Picture = styled.div`
  max-width: 100%;
  padding-bottom: 5.5vw;

  .picture-row {
    /* margin: -12px 0; */
  }
`;
