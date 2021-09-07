import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import portrait_data from "../public/portrait_data.js";

export default function Slide({
  source,
  artist,
  name,
  subtitle,
  year,
  description,
}) {
  return (
    <Slides>
      <div className="slide-hero">
        <Image
          width={327}
          height={280}
          layout="responsive"
          src={source}
          alt="test"
        />

        <div className="slide-hero__title">
          <h1>{name}</h1>
          <p>{subtitle}</p>
        </div>
        <div className="slide-hero__artist">
          <Image
            width={64}
            height={64}
            layout="intrinsic"
            src={artist}
            alt={name}
          />
        </div>
      </div>
      <div className="slide-description">
        <h1>{year}</h1>
        <p>{description}</p>
        <small>Go To Source</small>
      </div>
    </Slides>
  );
}

const Slides = styled.div`
  .slide-hero {
    position: relative;
    z-index: 0;
  }
  .slide-hero__title {
    position: absolute;
    margin-top: 30px;
    top: 200px;
    bottom: 30px;
    background-color: ${(props) => props.theme.white};
    bottom: 0;
    padding: 0 100px calc(2vw + 25px) 24px;
    z-index: 1;
    align-items: left;

    h1 {
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 8px;
    }
    p {
      margin-top: 0;
      font-size: 15px;
      line-height: auto;
      color: ${(props) => props.theme.grey};
    }
  }

  .slide-hero__artist {
    position: absolute;
    margin-top: 50px;
    margin-left: 24px;
    margin-right: 9px;
  }

  .slide-description {
    margin-bottom: 67px;
    h1 {
      text-align: right;
      position: relative;
      font-size: 100px;
      color: ${(props) => props.theme.whisperGrey};
      margin-bottom: 0;
      z-index: -1;
    }

    p {
      margin-top: -39px;
      font-size: 14px;
      color: ${(props) => props.theme.grey};
      line-height: 28px;
      margin-bottom: 68px;
      font-weight: ${(props) => props.theme.headingWeight};
    }

    small {
      text-transform: uppercase;
      color: ${(props) => props.theme.grey};
      font-size: 9px;
      text-decoration: underline ${(props) => props.theme.grey};
    }
  }
`;
