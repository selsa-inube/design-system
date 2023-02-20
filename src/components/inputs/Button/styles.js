import styled, { css } from "styled-components";

import { colors } from "../../../shared/colors/colors";

const colorActionsSysHover = {
  primaryHover: colors.ref.palette.blue.b300,
  secondaryHover: colors.ref.palette.neutral.n20,
  confirmHover: colors.ref.palette.green.g300,
  warningHover: colors.ref.palette.yellow.y300,
  removeHover: colors.ref.palette.red.r300,
  helpHover: colors.ref.palette.purple.p300,
};
const StyledSpan = styled.span`
  color: ${(props) =>
    props.variant !== "filled"
      ? colors.sys.actions[props.appearance]
      : colors.ref.palette.neutral.n0};
`;

const StyledButton = styled.button`
  padding: 0px 16px;
  border-radius: 8px;
  height: 36px;
  width: 100%;
  max-width: 101px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  background-color: ${(props) => colors.sys.actions[props.appearance]};
  &:hover {
    background-color: ${(props) =>
      colorActionsSysHover[props.appearance + "Hover"]};
  }
  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      color: ${(props) => colors.sys.actions[props.appearance]};
      border: 1px solid ${(props) => colors.sys.actions[props.appearance]};
      &:hover {
        background-color: transparent;
        color: ${(props) => colorActionsSysHover[props.appearance + "Hover"]};
        border: 1px solid
          ${(props) => colorActionsSysHover[props.appearance + "Hover"]};
      }
    `}

  ${(props) =>
    props.variant === "none" &&
    css`
      background-color: transparent;
      color: ${(props) => colors.sys.actions[props.appearance]};
      border: none;
      &:hover {
        background-color: transparent;
        color: ${(props) => colorActionsSysHover[props.appearance + "Hover"]};
        border: none;
      }
    `}

${(props) =>
    props.spacing === "small" &&
    css`
      margin: 4px;
    `}

${(props) =>
    props.spacing === "medium" &&
    css`
      margin: 8px;
    `}

${(props) =>
    props.spacing === "large" &&
    css`
      margin: 16px;
    `}

${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
    `}

${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}

${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export { StyledButton, StyledSpan };
