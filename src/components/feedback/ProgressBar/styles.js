import styled, { keyframes } from "styled-components";

const ProgressBarAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  } 
`;

const StyledProgressBar = styled.div`
  width: 100%;
  height: ${(props) => props.size};
  background-color: ${(props) => props.appearance};
  transform-origin: left;
  animation: ${ProgressBarAnimation} ${(props) => props.durations}ms linear;
`;

export { StyledProgressBar };
