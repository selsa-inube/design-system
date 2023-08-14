import styled from "styled-components";
import { keyframes } from "styled-components";
import { ICountdownBarProps } from ".";
import { inube } from "@shared/tokens";

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
  height: ${(props: ICountdownBarProps) => props.height};
  transform-origin: left;
  animation: ${CountdownBarAnimation}
    ${(props: ICountdownBarProps) => props.duration}ms linear;
  background-color: ${({ theme, appearance }: ICountdownBarProps) => {
    return (
      theme?.color?.stroke?.[appearance!]?.regular ||
      inube.color.stroke[appearance!].regular
    );
  }};
  animation-fill-mode: forwards;
  animation-play-state: ${(props: ICountdownBarProps) =>
    props.paused ? "paused" : "running"};
`;

export { StyledCountdownBar };
