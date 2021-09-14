import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Image from "next/image";
import {
  currentSlide,
  currentSlideIndex,
  numberOfSlides,
  paginate,
} from "../redux/slideshowReducer";
import ProgressBar from "./ProgressBar";
import { AnimatePresence, motion } from "framer-motion";

export default function Arrow() {
  const current = useSelector(currentSlide);
  const currentIndex = useSelector(currentSlideIndex);
  const slidesLength = useSelector(numberOfSlides);
  const dispatch = useDispatch();

  const progressBar = Math.round(((currentIndex + 1) / slidesLength) * 100);

  return (
    <AnimatePresence>
      <ArrowWrap key={currentIndex} animate="center">
        <ProgressBar width={progressBar}></ProgressBar>

        <div className="arrow-container">
          <div className="arrow-container__description">
            <h3>{current.name}</h3>
            <p>{current.artist.name}</p>
          </div>

          <div className="arrow">
            <div onClick={() => dispatch(paginate(-1))} className="arrow__left">
              <Image
                priority
                src="/assets/shared/icon-back-button.svg"
                width={16}
                height={16}
                layout="responsive"
                alt="previous arrow"
              />
            </div>

            <div onClick={() => dispatch(paginate(1))} className="arrow__right">
              <Image
                priority
                src="/assets/shared/icon-next-button.svg"
                width={16}
                height={16}
                layout="responsive"
                alt="next arrow"
              />
            </div>
          </div>
        </div>
      </ArrowWrap>
    </AnimatePresence>
  );
}

const ArrowWrap = styled(motion.div)`
  width: 100%;
  .arrow-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .arrow-container__description {
      padding: 17px 24px;
      h3 {
        font-size: 14px;

        @media ${(props) => props.theme.tablet} {
          font-size: 18px;
        }
      }
      p {
        font-size: 10px;
        opacity: 0.7;
        @media ${(props) => props.theme.tablet} {
          font-size: 13px;
        }
      }
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-right: 24px; */
    height: 16px;
    width: 56px;
    margin-right: 24px;
    position: relative;
    overflow: hidden;

    @media ${(props) => props.theme.tablet} {
      height: 24px;
      width: 90px;
      margin-right: 40px;
    }

    .arrow__left {
      cursor: pointer;
      width: 16px;
      height: 16px;

      @media ${(props) => props.theme.tablet} {
        height: 24px;
        width: 24px;
      }
    }

    .arrow__right {
      cursor: pointer;
      width: 16px;
      height: 16px;

      @media ${(props) => props.theme.tablet} {
        height: 24px;
        width: 24px;
      }
    }
  }
`;
