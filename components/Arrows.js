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

export default function Arrow() {
  const current = useSelector(currentSlide);
  const currentIndex = useSelector(currentSlideIndex);
  const slidesLength = useSelector(numberOfSlides);
  const dispatch = useDispatch();

  const progressBar = Math.round(((currentIndex + 1) / slidesLength) * 100);

  return (
    <ArrowWrap>
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
              layout="intrinsic"
              alt="back arrow"
            />
          </div>

          <div onClick={() => dispatch(paginate(1))} className="arrow__right">
            <Image
              priority
              src="/assets/shared/icon-next-button.svg"
              width={16}
              height={16}
              layout="intrinsic"
              alt="back arrow"
            />
          </div>
        </div>
      </div>
    </ArrowWrap>
  );
}

const ArrowWrap = styled.div`
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
      }
      p {
        font-size: 10px;
      }
    }
  }

  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 24px;
    height: 16px;

    .arrow__left {
      cursor: pointer;
      padding-right: 24px;
    }

    .arrow__right {
      cursor: pointer;
    }
  }
`;
