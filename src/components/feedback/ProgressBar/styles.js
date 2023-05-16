import styled, { keyframes } from "styled-components";

const ProgressBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(0.5);
  }
  100% {
    transform: scaleX(0);
  } 
`;

const StyledProgressBar = styled.div`
  width: 100%;
  height: ${(props) => props.size};
  background-color: ${(props) => props.appearance};
  transform-origin: right;
  animation: ${ProgressBarAnimation} ${(props) => props.durations}ms linear;
`;

export { StyledProgressBar };
