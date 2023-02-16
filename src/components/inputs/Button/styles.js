import styled, { css } from "styled-components";

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

const StyledButton = styled.button`
  /* common styles */
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  /* conditional styles */
  ${(props) =>
    props.appearance === "primary" &&
    css`
      background-color: #0077ff;
      color: #fff;
      border: none;
    `}

  ${(props) =>
    props.appearance === "secondary" &&
    css`
      background-color: #fff;
      color: #0077ff;
      border: 1px solid #0077ff;
    `}

${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      color: #0077ff;
      border: 1px solid #0077ff;
    `}

${(props) =>
    props.variant === "none" &&
    css`
      background-color: #0077ff;
      color: #fff;
      border: none;
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
      opacity: 0.5;
      pointer-events: none;
    `}

${(props) =>
    props.isDisabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export { StyledButton };
