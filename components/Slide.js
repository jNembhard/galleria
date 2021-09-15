import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "./hooks/useMediaQuery.js";
import { useDispatch, useSelector } from "react-redux";
import ModalArt from "./ModalArt";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import {
  currentSlide,
  currentSlideIndex,
  slidesDirection,
  paginate,
} from "../redux/slideshowReducer";

export default function Slide() {
  const current = useSelector(currentSlide);
  const currentIndex = useSelector(currentSlideIndex);
  const direction = useSelector(slidesDirection);
  const dispatch = useDispatch();

  const breakPoint767 = useMediaQuery(767);

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => dispatch(paginate(1)),
    onSwipedRight: () => dispatch(paginate(-1)),
  });

  return (
    <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
      <Slides
        {...swipeHandler}
        key={currentIndex}
        custom={direction}
        variants={slideAnimation}
        initial="in"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="slide-hero"
        >
          <div className="slide-hero__modal">
            <ModalArt />
          </div>
          <div className="slide-hero__painting">
            <Image
              priority
              width={327}
              height={280}
              layout="responsive"
              objectFit={"contain"}
              src={
                breakPoint767
                  ? current.images.hero.large
                  : current.images.hero.small
              }
              alt={current.name}
              className="slide-hero__painting"
            />
          </div>

          <div className="slide-hero__title">
            <h1>{current.name}</h1>
            <p>{current.artist.name}</p>
          </div>
          <div className="slide-hero__artist">
            <Image
              priority
              width={64}
              height={64}
              layout="responsive"
              src={current.artist.image}
              alt={current.name}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="slide-description"
        >
          <h1>{current.year}</h1>
          <p>{current.description}</p>
          <a target="_blank" href={current.source} rel="noopener noreferrer">
            Go To Source
          </a>
        </motion.div>
      </Slides>
    </AnimatePresence>
  );
}

const Slides = styled(motion.div)`
  @media ${(props) => props.theme.laptop} {
    display: flex;
    @media ${(props) => props.theme.desktop} {
    }
  }

  .slide-hero {
    position: relative;
    z-index: 0;

    @media ${(props) => props.theme.tablet} {
      height: 560px;
    }

    .slide-hero__painting {
      @media ${(props) => props.theme.tablet} {
        height: 560px;
        margin: 0 100px 64px -100px;

        @media ${(props) => props.theme.laptop} {
          margin: 50px 0 60px -60px;
          width: 475px;

          @media ${(props) => props.theme.desktop} {
            margin: 100px 410px 60px -60px;
          }
        }
      }
    }

    .slide-hero__modal {
      @media ${(props) => props.theme.tablet} {
        position: absolute;
        top: 544px;

        @media ${(props) => props.theme.laptop} {
          top: 380px;
          @media ${(props) => props.theme.desktop} {
            left: 5px;
            top: 430px;
          }
        }
      }
    }

    .slide-hero__title {
      position: absolute;
      margin-top: 30px;
      top: 200px;
      bottom: 30px;
      background-color: ${(props) => props.theme.white};
      bottom: 0;
      padding: 0 0 24px 24px;
      width: 280px;
      height: 133px;
      z-index: 0;
      align-items: left;

      @media ${(props) => props.theme.tablet} {
        width: 390px;
        height: 280px;
        top: -31px;
        left: 20rem;

        @media ${(props) => props.theme.laptop} {
          width: 445px;
          height: 280px;
          top: 18px;
          left: 15rem;

          @media ${(props) => props.theme.desktop} {
            top: 70px;
            height: 280px;
            left: 18rem;
          }
        }
      }

      h1 {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 8px;

        @media ${(props) => props.theme.tablet} {
          font-size: 56px;
          line-height: 64px;
          right: 50px;
          @media ${(props) => props.theme.tablet} {
            font-size: 50px;
            @media ${(props) => props.theme.desktop} {
              padding-right: 60px;
              margin-left: 10px;
              font-size: 56px;
            }
          }
        }
      }
      p {
        margin-top: 0;
        font-size: 15px;
        line-height: auto;
        color: ${(props) => props.theme.grey};

        @media ${(props) => props.theme.laptop} {
          @media ${(props) => props.theme.desktop} {
            margin-left: 12px;
          }
        }
      }
    }

    .slide-hero__artist {
      position: absolute;
      padding-top: 58px;
      margin-left: 24px;
      margin-right: 9px;
      width: 64px;
      height: 64px;

      @media ${(props) => props.theme.tablet} {
        width: 128px;
        height: 128px;
        padding: 0;
        top: 280px;
        right: 95px;
        bottom: 785px;
        left: 545px;

        @media ${(props) => props.theme.laptop} {
          top: 396px;
          right: 727px;
          bottom: 171px;
          left: 360px;

          @media ${(props) => props.theme.desktop} {
            top: 436px;
          }
        }
      }
    }
  }

  .slide-description {
    margin-bottom: 67px;

    @media ${(props) => props.theme.desktop} {
      /* margin-left: 410px; */
    }

    h1 {
      text-align: right;
      position: relative;
      font-size: 100px;
      color: ${(props) => props.theme.whisperGrey};
      margin-bottom: 0;
      z-index: -1;

      @media ${(props) => props.theme.tablet} {
        font-size: 200px;
        line-height: 150px;
        text-align: left;
        margin-left: 40px;

        @media ${(props) => props.theme.laptop} {
          margin: 50px 0 0 300px;
          @media ${(props) => props.theme.desktop} {
            margin: 100px 40px 0 100px;
          }
        }
      }
    }

    p {
      margin-top: -39px;
      font-size: 14px;
      color: ${(props) => props.theme.grey};
      line-height: 28px;
      margin-bottom: 68px;
      font-weight: ${(props) => props.theme.headingWeight};

      @media ${(props) => props.theme.tablet} {
        margin: -39px 156px 40px;
        width: 457px;
        height: 252px;

        @media ${(props) => props.theme.laptop} {
          margin: unset;
          margin: -39px 0 81px 360px;
          width: 350px;
          height: 364px;

          @media ${(props) => props.theme.desktop} {
            margin: -39px 100px 81px;
          }
        }
      }
    }

    a {
      text-transform: uppercase;
      color: ${(props) => props.theme.grey};
      font-size: 9px;
      text-decoration: underline ${(props) => props.theme.grey};
      letter-spacing: 1.93px;
      font-weight: ${(props) => props.theme.headingWeight};

      @media ${(props) => props.theme.tablet} {
        margin: 75px 156px 53px;

        @media ${(props) => props.theme.laptop} {
          margin: 0 0 53px 360px;

          @media ${(props) => props.theme.desktop} {
            margin: 0 186px 0 100px;
          }
        }
      }

      &:hover {
        color: ${(props) => props.theme.black};
        text-decoration: underline ${(props) => props.theme.black};
      }
    }
  }
`;

export const slideAnimation = {
  enter: (direction) => {
    return {
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    };
  },
};
