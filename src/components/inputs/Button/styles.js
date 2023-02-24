import styled, { css } from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const colorActionsSysHover = {
  primaryHover: colors.ref.palette.blue.b300,
  secondaryHover: colors.ref.palette.neutral.n20,
  confirmHover: colors.ref.palette.green.g300,
  warningHover: colors.ref.palette.yellow.y300,
  removeHover: colors.ref.palette.red.r300,
  helpHover: colors.ref.palette.purple.p300,
};
const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.isDisabled
      ? css`
          color: ${colors.ref.palette.neutral.n60};
        `
      : css`
          color: ${(props) =>
            props.variant !== "filled"
              ? colors.sys.actions[props.appearance]
              : colors.ref.palette.neutral.n0};
        `}
  ${(props) =>
    (props.appearance === "secondary" || props.appearance === "warning") &&
    css`
      color: ${colors.ref.palette.neutral.n900};
    `}
  background-color: ${(props) => colors.sys.actions[props.appearance]};
  &:hover {
    background-color: ${(props) =>
      colorActionsSysHover[props.appearance + "Hover"]};
  }

  ${(props) =>
    props.spacing === "wide"
      ? css`
          height: 36px;
          min-width: 101px;
          font-size: 16px;
          ${typography.sys.typescale.titleMedium}
        `
      : css`
          height: 28px;
          min-width: 93px;
          ${typography.sys.typescale.labelLarge}
        `}

  ${(props) =>
    props.isFullWidth &&
    css`
      width: 100%;
      max-width: none;

      && > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-width: inherit;
        max-width: 200px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        span {
          width: 100%;
          max-width: 100px;
        }
      }
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: ${colors.ref.palette.neutral.n30};
      pointer-events: none;
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      color: ${(props) => colors.sys.actions[props.appearance]};
      ${(props) =>
        props.appearance === "secondary" &&
        css`
          color: ${colors.ref.palette.neutral.n900};
        `}
      border: 1px solid ${(props) =>
        props.appearance === "secondary"
          ? colors.ref.palette.neutral.n900
          : colors.sys.actions[props.appearance]};

      ${(props) =>
        props.isDisabled &&
        css`
          border: 1px solid ${colors.ref.palette.neutral.n30};
        `}

      &:hover {
        background-color: transparent;
        color: ${(props) =>
          props.appearance === "secondary"
            ? colors.ref.palette.neutral.n500
            : colorActionsSysHover[props.appearance + "Hover"]};
        border: 1px solid
          ${(props) =>
            props.appearance === "secondary"
              ? colors.ref.palette.neutral.n500
              : colorActionsSysHover[props.appearance + "Hover"]};
      }
    `}

  ${(props) =>
    props.variant === "none" &&
    css`
      background-color: transparent;
      color: ${(props) =>
        props.appearance === "secondary"
          ? colors.ref.palette.neutral.n900
          : colors.sys.actions[props.appearance]};
      border: none;
      &:hover {
        background-color: transparent;
        color: ${(props) =>
          props.appearance === "secondary"
            ? colors.ref.palette.neutral.n700
            : colorActionsSysHover[props.appearance + "Hover"]};
        border: none;
      }
    `}

  ${(props) =>
    props.isLoading &&
    css`
      pointer-events: none;
    `}
`;

const StyledIcon = styled.div`
  color: ${(props) =>
    props.variant !== "filled"
      ? colors.sys.actions[props.appearance]
      : colors.ref.palette.neutral.n0};
`;
export { StyledButton, StyledSpan, StyledIcon };
