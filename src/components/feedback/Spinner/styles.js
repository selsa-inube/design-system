import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";

const sizes = {
  large: {
    width: "60px",
    height: "60px",
  },
  medium: {
    width: "52px",
    height: "52px",
  },
  small: {
    width: "44px",
    height: "44px",
  },
};

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
  animation: ${rotate} 2s linear infinite;
  position: absolute;
  width: 50px;
  height: 50px;
  stroke: ${(props) => colors.sys.actions[props.appearance]};
  ${(props) => sizes[props.size]}
`;

const StyledCircle = styled.circle`
  stroke: hsl(210, 70, 75);
  stroke-linecap: round;
  stroke-width: 3;
  animation: ${dash} 1.5s ease-in-out infinite;
`;

export { StyledSpinner, StyledCircle };
