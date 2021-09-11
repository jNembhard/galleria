import { useSelector, useDispatch } from "react-redux";
import portrait_data from "../public/portrait_data";
import styled from "styled-components";
import Image from "next/image";
import {
  currentSlide,
  currentSlideIndex,
  numberOfSlides,
  paginate,
} from "../redux/slideshowReducer";

export default function Arrow() {
  const current = useSelector(currentSlide);
  const currentIndex = useSelector(currentSlideIndex);
  const slidesLength = useSelector(numberOfSlides);
  const dispatch = useDispatch();

  const progressBar = Math.round(((currentIndex + 1) / slidesLength) * 100);

  return (
    <ArrowWrap>
      <div>Insert a ProgressBar</div>

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
  .arrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 58px;
    height: 16px;

    .arrow__left {
      cursor: pointer;
    }

    .arrow__right {
      cursor: pointer;
    }
  }

  border: 1px solid red;
  margin: 28px 24px 100px;
`;
