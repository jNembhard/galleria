import { useRouter } from "next/router";
import Link from "next/link";
import Modal from "react-modal";
import Image from "next/image";
import styled from "styled-components";

Modal.setAppElement("#__next");

const artworks = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"];

export default function ModalArt({ gallery, height, name, source }) {
  const router = useRouter();

  const customStyles = {
    overlay: {
      backgroundColor: "black",
      opacity: ".9",
    },
    content: {
      backgroundColor: "black",
      border: "none",
      opacity: "1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
  };

  return (
    <div>
      {" "}
      <Link
        href={`/slides/slideshow/?modalArtwork=${gallery}`}
        as={`/gallery/${name}`}
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
            <a>{gallery}</a>
          </div>
        </ViewImage>
      </Link>
      <Modal
        isOpen={!!router.query.modalArtwork}
        onRequestClose={() => router.push("/slides/slideshow")}
        style={customStyles}
      >
        <Test>
          <Link href="/slides/slideshow" passHref>
            <div className="test__close">close</div>
          </Link>
          <Image
            width={327}
            height={300}
            layout="responsive"
            src={source}
            alt="view"
          />{" "}
        </Test>
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
`;

const Test = styled.div`
  background-color: black;
  text-align: right;

  .test__close {
    background-color: transparent;
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 187px;
    margin-bottom: 38px;
    letter-spacing: 3px;
  }
`;
