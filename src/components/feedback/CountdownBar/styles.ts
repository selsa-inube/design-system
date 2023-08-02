import styled from "styled-components";
import { keyframes } from "styled-components";
import { ICountdownBarProps } from "./index";

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
  height: ${(props: ICountdownBarProps) => props.size};
  transform-origin: left;
  animation: ${CountdownBarAnimation}
    ${(props: ICountdownBarProps) => props.duration}ms linear;
  background-color: ${(props: ICountdownBarProps) => props.appearance};
  animation-fill-mode: forwards;
  animation-play-state: ${(props: ICountdownBarProps) =>
    props.isPaused ? "paused" : "running"};
`;

export { StyledCountdownBar };
