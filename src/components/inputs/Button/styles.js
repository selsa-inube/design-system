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

const getPointer = (props) => {
  const { isdisabled, isLoading } = props;

  if (isdisabled) {
    return cursors.notAllowed;
  }

  if (isLoading) {
    return cursors.progress;
  }

  return cursors.pointer;
};

const getColor = (props) => {
  const { isdisabled, variant, appearance, isHover } = props;

  if (isdisabled) {
    return textColors[variant].normal.disabled;
  }

  if (isHover) {
    return textColors[variant].hover[appearance];
  }

  return textColors[variant].normal[appearance];
};

const getBorderColor = (props) => {
  const { isdisabled, variant, appearance, isHover } = props;

  if (variant !== "outlined") {
    return borderColors[variant];
  }

  if (isdisabled) {
    return borderColors[variant].normal.disabled.stroke;
  }

  if (isHover) {
    return borderColors[variant].hover[appearance];
  }

  return borderColors[variant].normal[appearance].stroke;
};

function getBackgroundColor(props) {
  const { isdisabled, variant, appearance, isHover } = props;

  if (variant !== "filled") {
    return backgroundColor[variant];
  }

  if (isdisabled) {
    return backgroundColor[variant].normal.disabled.filled;
  }

  if (isHover) {
    return backgroundColor[variant].hover[appearance];
  }

  return backgroundColor[variant].normal[appearance].filled;
}

function getWidth(props) {
  const { isfullwidth } = props;

  if (isfullwidth) {
    return "100%";
  }

  return "fit-content";
}

const containerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
  border-style: solid;
  border-width: 1px;
  font-family: ${typography.ref.typeface.brand};
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border-color: ${getBorderColor};
  cursor: ${getPointer};
  width: ${getWidth};
  ${(props) => spacing[props.spacing]}
  text-decoration: none;

  &:hover {
    color: ${(props) => getColor({ ...props, isHover: true })};
    border-color: ${(props) => getBorderColor({ ...props, isHover: true })};
    background-color: ${(props) =>
      getBackgroundColor({ ...props, isHover: true })};
  }
`;

const StyledButton = styled.button`
  ${containerStyles}
  padding: 0px 16px;
`;

const StyledLink = styled(Link)`
  margin: 0%;
  padding: 0%;
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
