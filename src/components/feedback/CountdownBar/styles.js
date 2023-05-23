import styled, { keyframes } from "styled-components";

const CountdownBarAnimation = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const StyledCountdownBar = styled.div`
  width: 100%;
  height: ${(props) => props.size};
  transform-origin: left;
  animation: ${CountdownBarAnimation} ${(props) => props.duration}ms linear;
  background-color: ${(props) => props.appearance};
  animation-fill-mode: forwards;
`;

export { StyledCountdownBar };
