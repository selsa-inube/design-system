import styled, { keyframes, css } from "styled-components";

import { colors } from "../../shared/colors/colors";

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
  position: absolute;
  width: 50px;
  height: 50px;
  stroke: ${(props) => colors.sys.actions[props.colorToken]};
  ${(props) => sizes[props.size]}
  ${(props) => props.classes}
  ${(props) =>
    props.progressValue !== undefined
      ? css`
          animation: dash 5s linear forwards;
          transform: rotate(270deg);
        `
      : css`
          animation: ${rotate} 1.4s linear infinite;
        `};
`;

const StyledCircle = styled.circle`
  stroke: hsl(210, 70, 75);
  stroke-linecap: round;
  stroke-width: ${(props) => props.thickness};
  ${(props) =>
    props.progressValue !== undefined
      ? css`
          stroke-dasharray: ${props.progressValue}, 100;
          animation: "none";
        `
      : css`
          animation: ${dash} 1.5s ease-in-out infinite;
        `};
`;

const StyledText = styled.text`
  transform: rotate(90deg);
  font-size: 0.6em;
`;

export { StyledSpinner, StyledCircle, StyledText };
