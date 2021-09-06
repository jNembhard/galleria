import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function PortraitRow({ thumbnail, height, name, author }) {
  return (
    <Portrait>
      <div className="portrait-image">
        <Image
          priority
          src={thumbnail}
          width={327}
          height={height}
          layout="intrinsic"
          objectFit={"contain"}
          alt={name}
        />
      </div>
      <div className="portrait-description">
        <h1>{name}</h1>
        <p>{author}</p>
      </div>
    </Portrait>
  );
}

const Portrait = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: flex-end;
  /* padding-bottom: 4vw; */
  .portrait-description {
    position: absolute;
    z-index: 10;
    padding: 25px;
    padding-bottom: calc(2vw + 25px);

    h1 {
      /* margin-top: 120%; */
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
    padding-bottom: 24px;
  }
`;
