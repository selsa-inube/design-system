import styled, { keyframes } from "styled-components";
import { inube } from "@src/shared/tokens";
import { ISpinnerProps } from ".";

const colorHomologation: any = {
  blue: inube.color.palette.blue.B400,
  green: inube.color.palette.green.G400,
  yellow: inube.color.palette.yellow.Y400,
  red: inube.color.palette.red.R400,
  purple: inube.color.palette.purple.P400,
  white: inube.color.palette.neutral.N0,
  dark: inube.color.palette.neutral.N900,
};

const sizes: any = {
  large: {
    width: "40px",
    height: "40px",
  },
  medium: {
    width: "32px",
    height: "32px",
  },
  small: {
    width: "24px",
    height: "24px",
  },
};

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  display: inline-block;
  animation: 0.8s linear infinite ${spinner};
  border: solid 4px
    ${(props: ISpinnerProps) =>
      props.isTransparent === true
        ? inube.color.palette.neutralAlpha.N0A
        : inube.color.palette.neutral.N30};
  border-bottom-color: ${(props: ISpinnerProps) =>
    props.appearance && colorHomologation[props.appearance]};
  border-radius: 50%;
  ${(props: ISpinnerProps) => props.size && sizes[props.size]}
  box-sizing: border-box;
`;

export { StyledSpinner };
