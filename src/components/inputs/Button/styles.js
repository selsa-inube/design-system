import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const spacing = {
  compact: {
    height: "28px",
    minWidth: "93px",
    fontSize: typography.sys.typescale.labelLarge.size,
  },
  wide: {
    height: "36px",
    minWidth: "101px",
    fontSize: typography.sys.typescale.titleMedium.size,
  },
};

const cursors = {
  pointer: "pointer",
  notAllowed: "not-allowed",
  progress: "progress",
};

const hoverColors = {
  primary: colors.ref.palette.blue.b300,
  secondary: colors.ref.palette.neutral.n20,
  confirm: colors.ref.palette.green.g300,
  warning: colors.ref.palette.yellow.y300,
  remove: colors.ref.palette.red.r300,
  help: colors.ref.palette.purple.p300,
};

const textColors = {
  filled: {
    normal: {
      primary: colors.ref.palette.neutral.n0,
      secondary: colors.ref.palette.neutral.n300,
      confirm: colors.ref.palette.neutral.n0,
      warning: colors.ref.palette.neutral.n900,
      remove: colors.ref.palette.neutral.n0,
      help: colors.ref.palette.neutral.n0,
      disabled: colors.sys.text.disabled,
    },
    hover: colors.ref.palette.neutral.n0,
  },
  outlined: {
    normal: {
      ...colors.sys.text,
      confirm: colors.sys.text.success,
      remove: colors.sys.text.error,
    },
    hover: {
      ...hoverColors,
      secondary: colors.ref.palette.neutral.n200,
    },
  },
  none: {
    normal: {
      ...colors.sys.text,
      confirm: colors.sys.text.success,
      remove: colors.sys.text.error,
    },
    hover: {
      ...hoverColors,
      secondary: colors.ref.palette.neutral.n200,
    },
  },
};

const backgroundColor = {
  filled: {
    normal: {
      ...colors.sys.actions,
    },
    hover: {
      ...hoverColors,
    },
  },
  outlined: colors.ref.palette.neutralAlpha.n0A,
  none: colors.ref.palette.neutralAlpha.n0A,
};

const borderColors = {
  filled: colors.ref.palette.neutralAlpha.n0A,
  outlined: {
    normal: {
      ...colors.sys.actions,
    },
    hover: {
      ...hoverColors,
      secondary: colors.ref.palette.neutral.n200,
    },
  },
  none: colors.ref.palette.neutralAlpha.n0A,
};

const getPointer = (isDisabled, isLoading = false) => {
  if (isDisabled) {
    return cursors.notAllowed;
  }

  if (isLoading) {
    return cursors.progress;
  }

  return cursors.pointer;
};

const getColor = (isDisabled, variant, appearance, isHover = false) => {
  if (isDisabled) {
    return textColors.filled.normal.disabled;
  }

  if (isHover) {
    return textColors[variant].hover[appearance];
  }

  return textColors[variant].normal[appearance];
};

const getBorderColor = (isDisabled, variant, appearance, isHover = false) => {
  if (variant !== "outlined") {
    return borderColors[variant];
  }

  if (isDisabled) {
    return borderColors[variant].normal.disabled.stroke;
  }

  if (isHover) {
    return borderColors[variant].hover[appearance];
  }

  return borderColors[variant].normal[appearance].stroke;
};

function getBackgroundColor(isDisabled, variant, appearance, isHover = false) {
  if (variant !== "filled") {
    return backgroundColor[variant];
  }

  if (isDisabled) {
    return backgroundColor[variant].normal.disabled.filled;
  }

  if (isHover) {
    return backgroundColor[variant].hover[appearance];
  }

  return backgroundColor[variant].normal[appearance].filled;
}

function getWidth(isFullWidth) {
  if (isFullWidth) {
    return "100%";
  }

  return "fit-content";
}

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  text-decoration: none;
  font-family: ${typography.ref.typeface.brand};
`;

const StyledButton = styled.button`
  padding: 0px 16px;
  ${containerStyles}
  width: ${({ isFullWidth }) => getWidth(isFullWidth)};
  background-color: ${({ isDisabled, variant, appearance }) =>
    getBackgroundColor(isDisabled, variant, appearance)};
  border-style: ${(props) => (props.type !== "link" ? "solid" : "none")};
  ${(props) => spacing[props.spacing]};

  color: ${({ isDisabled, variant, appearance }) =>
    getColor(isDisabled, variant, appearance)};
  border-color: ${({ isDisabled, variant, appearance }) =>
    getBorderColor(isDisabled, variant, appearance)};
  background-color: ${({ isDisabled, variant, appearance }) =>
    getBackgroundColor(isDisabled, variant, appearance)};
  cursor: ${({ isDisabled, isLoading }) => getPointer(isDisabled, isLoading)};

  &:hover {
    color: ${({ isDisabled, variant, appearance }) =>
      getColor(isDisabled, variant, appearance, true)};
    border-color: ${({ isDisabled, variant, appearance }) =>
      getBorderColor(isDisabled, variant, appearance, true)};
    background-color: ${({ isDisabled, variant, appearance }) =>
      getBackgroundColor(isDisabled, variant, appearance, true)};
  }
`;

const StyledLink = styled(Link)`
  margin: 0%;
  padding: 0%;
  ${containerStyles}
  border-style: ${(props) => (props.type === "link" ? "solid" : "none")};
  width: ${({ isfullwidth }) => getWidth(!!isfullwidth)};
  color: ${({ isdisabled, variant, appearance }) =>
    getColor(!!isdisabled, variant, appearance)};
  border-color: ${({ isdisabled, variant, appearance }) =>
    getBorderColor(!!isdisabled, variant, appearance)};
  background-color: ${({ isdisabled, variant, appearance }) =>
    getBackgroundColor(!!isdisabled, variant, appearance)};
  cursor: ${({ isdisabled }) => getPointer(!!isdisabled)};

  &:hover {
    color: ${({ isdisabled, variant, appearance }) =>
      getColor(!!isdisabled, variant, appearance, true)};
    border-color: ${({ isdisabled, variant, appearance }) =>
      getBorderColor(!!isdisabled, variant, appearance, true)};
    background-color: ${({ isdisabled, variant, appearance }) =>
      getBackgroundColor(!!isdisabled, variant, appearance, true)};
  }
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;

export { StyledButton, StyledSpan, StyledIcon, StyledLink };
