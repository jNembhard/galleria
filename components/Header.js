import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function Header({ name, href }) {
  return (
    <Heading>
      <Link href="/">
        <a className="heading__container">
          <Image
            priority
            src="/assets/shared/logo.svg"
            alt="logo"
            width={113.04}
            height={32}
            layout="responsive"
          />
        </a>
      </Link>
      <Link href={href} passHref>
        <div className="heading__slideshow">{name}</div>
      </Link>
    </Heading>
  );
}

const Heading = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .heading__container {
    width: 113.04px;
    height: 32px;

    @media ${(props) => props.theme.laptop} {
      width: 170px;
      height: 48px;
    }
  }

  .heading__slideshow {
    text-transform: uppercase;
    font-size: 9px;
    color: ${(props) => props.theme.grey};
    letter-spacing: 1.93px;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.black};
    }

    @media ${(props) => props.theme.laptop} {
      font-size: 12px;
      letter-spacing: 2.57px;
      width: 172px;
      height: 15px;
    }
  }
`;
