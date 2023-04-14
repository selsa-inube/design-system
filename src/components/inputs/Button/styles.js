import styled from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";
import { Link } from "react-router-dom";

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

const getPointer = (props) => {
  const { isDisabled, isLoading } = props;

  if (isDisabled) {
    return cursors.notAllowed;
  }

  if (isLoading) {
    return cursors.progress;
  }

  return cursors.pointer;
};

const getColor = (props) => {
  const { isDisabled, variant, appearance, isHover } = props;

  if (isDisabled) {
    return textColors[variant].normal.disabled;
  }

  if (isHover) {
    return textColors[variant].hover[appearance];
  }

  return textColors[variant].normal[appearance];
};

const getBorderColor = (props) => {
  const { isDisabled, variant, appearance, isHover } = props;

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

function getBackgroundColor(props) {
  const { isDisabled, variant, appearance, isHover } = props;

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
  border-style: solid;
  border-width: 1px;
  font-family: ${typography.ref.typeface.brand};
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border-color: ${getBorderColor};
  width: ${(props) => (props.isFullWidth === true ? "100%" : "fit-content")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
  cursor: ${getPointer};
  ${(props) => spacing[props.spacing]}
  text-decoration: none;

  &:hover {
    color: ${(props) => getColor({ ...props, isHover: true })};
    border-color: ${(props) => getBorderColor({ ...props, isHover: true })};
    background-color: ${(props) =>
      getBackgroundColor({ ...props, isHover: true })};
  }
`;

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${getColor};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

export { StyledButton, StyledSpan, StyledIcon, StyledLink };
