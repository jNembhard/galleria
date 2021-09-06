import Head from "next/head";
import Image from "next/image";
import PortraitRow from "../components/PortaitRow";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Galleria</title>
        <meta name="description" content="A virtual art gallery." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <div>
          {/* <div><PortraitRow /></div> */}
          <div>Row 2</div>
          <div>Row 3</div>
          <div>Row 4</div>
        </div>

        <div className={styles.grid}></div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
