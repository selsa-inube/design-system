import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";

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
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: 1.2s linear infinite ${spinner};
  animation-play-state: inherit;
  border: solid 5px
    ${(props) =>
      props.isTransparent === true
        ? colors.ref.palette.lightNeutral.ln50
        : colors.ref.palette.lightNeutral.ln500};
  border-bottom-color: ${(props) => colors.sys.actions[props.appearance]};
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
  ${(props) => sizes[props.size]}
`;

export { StyledSpinner };
