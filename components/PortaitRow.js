import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function PortraitRow({ thumbnail, height, name, author }) {
  return (
    <Link href="slides/slideshow" passHref>
      <Portrait>
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
    </Link>
  );
}

const Portrait = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  align-items: left;
  animation: fadeOut 1s;
  margin-bottom: 24px;
  cursor: pointer;

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

    h1 {
      z-index: 10;
      font-size: 24px;
      color: ${(props) => props.theme.white};
      margin-bottom: 7px;
      line-height: auto;
    }

    p {
      margin-top: 0;
      font-size: 13px;
      z-index: 10;
      color: ${(props) => props.theme.white};
    }
  }

  .portrait-image {
    display: block;
  }
`;
