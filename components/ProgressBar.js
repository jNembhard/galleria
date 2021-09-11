import styled from "styled-components";

export default function ProgressBar({ width }) {
  return <Progress width={width}></Progress>;
}

const Progress = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.grey};
  width: 100%;
  height: 1px;

  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.grey};
    height: 100%;
    width: ${(props) => `${props.width}%`};
  }
`;
