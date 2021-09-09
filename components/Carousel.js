import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIncrease, setDecrease } from "../redux/actions";
import portrait_data from "../public/portrait_data";
import styled from "styled-components";
import Slide from "./Slide";

export default function Carousel() {
  const breakPoint767 = useMediaQuery(767);
  const position = useSelector((state) => state);
  const dispatch = useDispatch();

  const next = () => dispatch(setIncrease(position + 1));
  const prev = () => dispatch(setDecrease(position - 1));

  return (
    <TestFlex>
      <div className="carousel">
        {portrait_data.map((data) => (
          <Slide
            key={data.id[position]}
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
      </div>
      <div>
        <div className="leftarrow" onClick={prev}>
          &#60;
        </div>
        <div className="rightarrow" onClick={next}>
          &#62;
        </div>
      </div>
    </TestFlex>
  );
}

const TestFlex = styled.div`
  .carousel {
    /* display: flex; */
    flex-direction: row;
  }
`;

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
