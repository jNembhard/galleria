import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Modal from "react-modal";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { currentSlide } from "../redux/slideshowReducer";

Modal.setAppElement("#__next");

export default function ModalArt() {
  const current = useSelector(currentSlide);
  const router = useRouter();
  const backDropHandler = (event) => {
    if (!modalWrapperRef?.current?.contains(event.target)) {
      onclose();
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.85)",
    },
    content: {
      backgroundColor: "transparent",
      border: "transparent",
      maxHeight: "80%",
      overflow: "hidden",
    },
  };

  return (
    <div>
      <Link
        href={`/slides/slideshow/?modalArtwork=${current.images.gallery}`}
        as={`/gallery/${current.name}`}
        passHref
      >
        <ViewImage>
          <h2>View Image</h2>
          <div className="image-icon">
            <Image
              width={12}
              height={12}
              layout="responsive"
              src="/assets/shared/icon-view-image.svg"
              alt="view"
            />
          </div>
        </ViewImage>
      </Link>
      <Modal
        isOpen={!!router.query.modalArtwork}
        onRequestClose={() => router.push("/slides/slideshow")}
        style={customStyles}
      >
        <Gallery>
          <Link href="/slides/slideshow" passHref>
            <Close>
              <a>close</a>
            </Close>
          </Link>
          <Lightbox>
            <Image
              priority
              layout="fill"
              objectFit={"contain"}
              src={current.images.gallery}
              alt="view"
            />
          </Lightbox>
        </Gallery>
      </Modal>
    </div>
  );
}

const ViewImage = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row-reverse;
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.headingWeight};
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  opacity: 0.75;
  z-index: 5;
  margin: 16px 159px 224px 16px;
  cursor: pointer;
  h2 {
    font-size: 10px;
    letter-spacing: 2.14px;
    margin: 14px 0;
    padding-right: 14px;
  }
  .image-icon {
    background: transparent;
    width: 12px;
    height: 12px;
    margin: 14px;
    left: 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.grey};
  }
  @media ${(props) => props.theme.tablet} {
    width: 152px;
    height: 40px;
  }
`;

const Lightbox = styled.div`
  opacity: 1;
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.6s;
  margin-top: 0;

  @media ${(props) => props.theme.tablet} {
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &:after {
    content: "";
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 0.6s;
    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;

const Close = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 80%;
  letter-spacing: 3px;
  cursor: pointer;
  z-index: 5;

  @media ${(props) => props.theme.tablet} {
    margin-left: 90%;
  }
`;

const Gallery = styled.div`
  display: flex;
  z-index: 5;
  text-align: center;
`;
