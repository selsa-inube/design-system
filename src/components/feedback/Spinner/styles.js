import styled, { keyframes } from "styled-components";

import { colors } from "../../../shared/colors/colors";

const getParent = (colorKey) => {
  let parentKey = "";
  const colorsReference = colors.ref.palette;
  Object.keys(colorsReference).forEach((key) => {
    if (colorsReference[key][colorKey]) {
      parentKey = key;
    }
  });
  return parentKey;
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
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  animation: 0.8s linear infinite ${spinner};
  animation-play-state: inherit;
  border: solid 5px
    ${(props) =>
      props.isTransparent === true
        ? colors.ref.palette.lightNeutral.ln50 + "00"
        : colors.ref.palette.lightNeutral.ln200};
  border-bottom-color: ${(props) =>
    colors.ref.palette[getParent(props.appearance)][props.appearance]};
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0);
  ${(props) => sizes[props.size]}
`;

export { StyledSpinner };
