import Head from "next/head";
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
      <Header name="Start Slideshow" href="slides/slideshow" />
      <main className={styles.main}>
        <h1 className={styles.title}></h1>
        <Picture>
          {portrait_data.map((data) => (
            <PortraitRow
              key={data.id}
              id={data.id}
              name={data.name}
              thumbnail={data.images.thumbnail.source}
              height={data.images.thumbnail.height}
              author={data.artist.name}
            />
          ))}
        </Picture>
      </main>
    </div>
  );
}

const Picture = styled.div`
  padding-bottom: 5.5vw;

  @media ${(props) => props.theme.tablet} {
    display: column;
    margin: 0 auto;
    columns: 2;

    & > * {
      break-inside: avoid;
      margin-bottom: 1em;
    }
    @media ${(props) => props.theme.laptop} {
      display: column;
      margin: 0 auto;
      columns: 4;

      & > * {
        break-inside: avoid;
      }
    }
  }

  @supports (grid-template-rows: masonry) {
    @media ${(props) => props.theme.tablet} {
      display: grid;
      gap: 1em;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: masonry;
      align-tracks: space-between;

      & > * {
        margin-bottom: 0em;
      }

      @media ${(props) => props.theme.laptop} {
        display: grid;
        gap: 1em;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: masonry;
        align-tracks: unset;

        & > * {
          margin-bottom: 0em;
        }
      }
    }
  }
`;
