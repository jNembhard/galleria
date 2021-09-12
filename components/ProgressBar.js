import styled from "styled-components";

function ProgressBar({ width }) {
  return <Progress width={width} />;
}

const Progress = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.whisperGrey};
  width: 100%;
  height: 1px;

  &::after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.black};
    height: 100%;
    width: ${(props) => `${props.width}%`};
  }
`;

export default ProgressBar;
