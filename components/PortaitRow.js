import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCurrentSlide } from "../redux/slideshowReducer";
import { motion } from "framer-motion";

export default function PortraitRow({ id, thumbnail, height, name, author }) {
  const dispatch = useDispatch();

  return (
    <Link href="/slides/slideshow" passHref>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.4,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
      >
        <Portrait onClick={() => dispatch(setCurrentSlide(id ? id : 0))}>
          <div className="portrait-image">
            <Image
              priority
              src={thumbnail}
              width={327}
              height={height}
              layout="responsive"
              objectFit={"contain"}
              alt={name}
            />
          </div>
          <div className="portrait-description">
            <h1>{name}</h1>
            <p>{author}</p>
          </div>
        </Portrait>
      </motion.div>
    </Link>
  );
}

const Portrait = styled.div`
  position: relative;
  animation: fadeOut 1s;
  margin-bottom: 24px;
  cursor: pointer;

  @supports (grid-template-rows: masonry) {
    @media ${(props) => props.theme.tablet} {
      margin-bottom: 0;
    }
  }

  &:hover {
    opacity: 0.75;
    animation: fadeIn 1s;

    @keyframes fadeIn {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0.75;
        background-color: linear-gradient(
          ${(props) => props.theme.white},
          ${(props) => props.theme.grey}
        );
      }
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 0.75;
      background-color: linear-gradient(
        ${(props) => props.theme.white},
        ${(props) => props.theme.grey}
      );
    }
    100% {
      opacity: 1;
    }
  }

  .portrait-description {
    position: absolute;
    z-index: 10;
    bottom: 5px;
    padding: 0 25px calc(1vw + 10px);
    cursor: pointer;

    @media ${(props) => props.theme.tablet} {
      bottom: 0;
    }

    h1 {
      z-index: 10;
      font-size: 24px;
      color: ${(props) => props.theme.white};
      margin-bottom: 7px;
      line-height: auto;

      @media ${(props) => props.theme.laptop} {
        font-size: 20px;
        @media ${(props) => props.theme.desktop} {
          font-size: 24px;
        }
      }
    }
    p {
      margin-top: 0;
      font-size: 13px;
      z-index: 10;
      color: ${(props) => props.theme.whiteSmoke};
    }

    .portrait-image {
      display: block;
    }
  }
`;
