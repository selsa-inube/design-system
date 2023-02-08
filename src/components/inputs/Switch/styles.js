import styled, { css } from "styled-components";

import { colors } from "../../../shared/colors/colors";

const sizes = {
  large: {
    width: "40px",
    height: "20px",
  },
  small: {
    width: "32px",
    height: "16px",
  },
};

const StyledContainer = styled.label`
  position: relative;
  display: inline-block;
  ${(props) => sizes[props.size]}
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: ${colors.ref.palette.green.g400};
  }
  &:checked + span:before {
    ${(props) =>
      props.size === "small"
        ? "transform: translateX(16px);"
        : "transform: translateX(20px);"};
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.ref.palette.neutral.n200};
  transition: 0.3s;
  border-radius: 30px;
  &:before {
    position: absolute;
    content: "";
    ${(props) =>
      props.size === "small"
        ? css`
            width: 12px;
            height: 12px;
            bottom: 2.2px;
          `
        : css`
            width: 16px;
            height: 16px;
            bottom: 1.9px;
          `};
    left: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: 0.3s;
  }
`;

export { StyledContainer, StyledInput, StyledSpan };
