import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import portrait_data from "../public/portrait_data.js";
import { useMediaQuery } from "./hooks/useMediaQuery.js";
import { useDispatch, useSelector } from "react-redux";
import { openLightBox } from "../redux/lightboxReducer";
import ModalArt from "./ModalArt";
import {
  currentSlide,
  currentSlideIndex,
  slidesDirection,
} from "../redux/slideshowReducer";

export default function Slide({
  artist,
  description,
  gallery,
  height,
  name,
  source,
  subtitle,
  wikipedia,
  year,
}) {
  const current = useSelector(currentSlide);
  const currentIndex = useSelector(currentSlideIndex);
  const direction = useSelector(slidesDirection);
  const dispatch = useDispatch();

  const breakPoint767 = useMediaQuery(767);

  return (
    <Slides>
      <div className="slide-hero">
        <ModalArt />
        <Image
          priority
          width={327}
          height={280}
          layout="responsive"
          src={
            breakPoint767
              ? current.images.hero.large
              : current.images.hero.small
          }
          alt={current.name}
        />

        <div className="slide-hero__title">
          <h1>{current.name}</h1>
          <p>{current.artist.name}</p>
        </div>
        <div className="slide-hero__artist">
          <Image
            priority
            width={64}
            height={64}
            layout="intrinsic"
            src={current.artist.image}
            alt={current.name}
          />
        </div>
      </div>
      <div className="slide-description">
        <h1>{current.year}</h1>
        <p>{current.description}</p>
        <a target="_blank" href={current.source} rel="noopener noreferrer">
          Go To Source
        </a>
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
    padding: 0 0 24px 24px;
    /* margin-bottom: 24px; */
    width: 280px;
    height: 133px;
    z-index: 0;
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
    padding-top: 58px;
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

    a {
      text-transform: uppercase;
      color: ${(props) => props.theme.grey};
      font-size: 9px;
      text-decoration: underline ${(props) => props.theme.grey};

      &:hover {
        color: ${(props) => props.theme.black};
        text-decoration: underline ${(props) => props.theme.black};
      }
    }
  }
`;
