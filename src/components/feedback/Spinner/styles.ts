import styled, { keyframes } from "styled-components";
import { ISpinnerProps } from "./interfaces/interface.Spinner";

import { colors } from "../../../shared/colors/colors";

const colorHomologation = {
  blue: colors.ref.palette.blue.b400,
  green: colors.ref.palette.green.g400,
  yellow: colors.ref.palette.yellow.y400,
  red: colors.ref.palette.red.r400,
  purple: colors.ref.palette.purple.p400,
  white: colors.ref.palette.neutral.n0,
  dark: colors.ref.palette.neutral.n900,
};

const sizes = {
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
        ? colors.ref.palette.neutralAlpha.n0A
        : colors.ref.palette.neutral.n30};
  border-bottom-color: ${(props: ISpinnerProps) =>
    props.appearance && colorHomologation[props.appearance]};
  border-radius: 50%;
  ${(props: ISpinnerProps) => props.size && sizes[props.size]}
  box-sizing: border-box;
`;

export { StyledSpinner };
