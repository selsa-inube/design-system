import styled, { keyframes } from "styled-components";

import { colors } from "../../shared/colors/colors";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const StyledSpinner = styled.svg`
  animation: ${rotate} 1.4s linear infinite;
  z-index: 2;
  position: absolute;
  width: 50px;
  height: 50px;
  stroke: ${(props) => colors.sys.actions[props.colorToken]};
`;

const StyledCircle = styled.circle`
  stroke: hsl(210, 70, 75);
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke-width: ${(props) => props.thickness};
`;
export { StyledSpinner, StyledCircle };
