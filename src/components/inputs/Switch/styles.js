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

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.disabled
      ? colors.ref.palette.neutral.n40
      : colors.ref.palette.neutral.n200};
  transition: 0.3s;
  border-radius: 30px;
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? colors.ref.palette.neutral.n40
        : colors.ref.palette.neutral.n70};
  }
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
    background-color: ${colors.ref.palette.neutral.n0};
    border-radius: 50%;
    transition: 0.3s;
  }
`;

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
    background-color: ${(props) =>
      props.disabled
        ? colors.ref.palette.green.g75
        : colors.ref.palette.green.g400};
    &:hover {
      background-color: ${(props) =>
        props.disabled
          ? colors.ref.palette.green.g75
          : colors.ref.palette.green.g300};
    }
  }
  &:checked + span:before {
    ${(props) =>
      props.size === "small"
        ? "transform: translateX(16px);"
        : "transform: translateX(20px);"};
  }
`;

const StyledIcon = styled.div`
  & > #mdIcon {
    position: absolute;
    color: ${colors.ref.palette.neutral.n0};
    ${(props) =>
      props.size === "small"
        ? css`
            width: 10px;
            height: 10px;
            top: 3px;
            left: ${(props) => (props.checked ? "5px" : "17px")};
          `
        : css`
            width: 14px;
            height: 14px;
            top: 3px;
            left: ${(props) => (props.checked ? "5px" : "22px")};
          `};
  }
`;

export { StyledContainer, StyledInput, StyledSpan, StyledIcon };
