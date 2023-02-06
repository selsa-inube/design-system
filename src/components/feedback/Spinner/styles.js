import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";

const colorHomologation = {
  blue: colors.ref.palette.blue.b400,
  green: colors.ref.palette.green.g400,
  yellow: colors.ref.palette.yellow.y400,
  red: colors.ref.palette.red.r400,
  purple: colors.ref.palette.purple.p400,
  white: colors.ref.palette.lightNeutral.ln50,
  darkNeutral: colors.ref.palette.darkNeutral.dn500,
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
    ${(props) =>
      props.isTransparent === true
        ? colors.ref.palette.lightNeutral.ln200 + "00"
        : colors.ref.palette.lightNeutral.ln200};
  border-bottom-color: ${(props) => colorHomologation[props.appearance]};
  border-radius: 50%;
  ${(props) => sizes[props.size]}
  box-sizing: border-box;
`;

export { StyledSpinner };
