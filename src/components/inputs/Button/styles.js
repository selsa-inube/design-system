import styled from "styled-components";

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

const colorActionsSysHover = {
  primaryHover: colors.ref.palette.blue.b300,
  secondaryHover: colors.ref.palette.neutral.n20,
  confirmHover: colors.ref.palette.green.g300,
  warningHover: colors.ref.palette.yellow.y300,
  removeHover: colors.ref.palette.red.r300,
  helpHover: colors.ref.palette.purple.p300,
};

const transparentColorActionsSysHover = Object.keys(
  colorActionsSysHover
).reduce((accumulator, key) => {
  accumulator[key] = "transparent";
  return accumulator;
}, {});

const transparentColorActionsSys = Object.keys(colors.sys.actions).reduce(
  (accumulator, key) => {
    accumulator[key] = "transparent";
    return accumulator;
  },
  {}
);

const commonColorActionsSys = Object.keys(colors.sys.actions).reduce(
  (accumulator, key) => {
    accumulator[key] = colors.ref.palette.neutral.n0;
    return accumulator;
  },
  {}
);

const commonColorActionsSysHover = Object.keys(colorActionsSysHover).reduce(
  (accumulator, key) => {
    accumulator[key] = colors.ref.palette.neutral.n0;
    return accumulator;
  },
  {}
);

const appearanceColors = {
  filled: {
    ...commonColorActionsSys,
    secondary: colors.ref.palette.neutral.n900,
    warning: colors.ref.palette.neutral.n900,
    disabled: colors.ref.palette.neutral.n30,
    ...colorActionsSysHover,
    ...commonColorActionsSysHover,
    secondaryHover: colors.ref.palette.neutral.n900,
    warningHover: colors.ref.palette.neutral.n900,
  },
  outlined: {
    ...colors.sys.actions,
    secondary: colors.ref.palette.neutral.n900,
    disabled: "transparent",
    ...colorActionsSysHover,
    secondaryHover: colors.ref.palette.neutral.n500,
  },
  none: {
    ...colors.sys.actions,
    secondary: colors.ref.palette.neutral.n900,
    disabled: "transparent",
    ...colorActionsSysHover,
    secondaryHover: colors.ref.palette.neutral.n500,
  },
};

const backgroundColor = {
  filled: {
    ...colors.sys.actions,
    disabled: colors.ref.palette.neutral.n30,
    ...colorActionsSysHover,
  },
  outlined: {
    color: "transparent",
    disabled: "transparent",
    ...transparentColorActionsSys,
    ...transparentColorActionsSysHover,
  },
  none: {
    color: "transparent",
    disabled: "transparent",
    ...transparentColorActionsSys,
    ...transparentColorActionsSysHover,
  },
};

const appearanceBorders = {
  filled: {
    ...transparentColorActionsSys,
    disabled: "transparent",
    ...colorActionsSysHover,
  },
  outlined: {
    ...colors.sys.actions,
    secondary: colors.ref.palette.neutral.n900,
    disabled: colors.ref.palette.neutral.n30,
    ...colorActionsSysHover,
    secondaryHover: colors.ref.palette.neutral.n500,
  },
  none: {
    ...colors.sys.actions,
    disabled: "transparent",
    ...colorActionsSysHover,
    ...transparentColorActionsSys,
    ...transparentColorActionsSysHover,
  },
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
  const { isDisabled, appearance, variant, isHover } = props;

  if (isDisabled) {
    return colors.ref.palette.neutral.n60;
  }

  if (isHover) {
    return appearanceColors[variant][appearance + "Hover"];
  }

  return appearanceColors[variant][appearance];
};

const getBorderColor = (props) => {
  const { isDisabled, appearance, variant, isHover } = props;

  if (isDisabled) {
    return appearanceBorders[variant].disabled;
  }

  if (isHover) {
    return appearanceBorders[variant][appearance + "Hover"];
  }

  return appearanceBorders[variant][appearance];
};

const getBackgroundColor = (props) => {
  const { isDisabled, variant, appearance, isHover } = props;

  if (isDisabled) {
    return backgroundColor[variant].disabled;
  }

  if (isHover) {
    return backgroundColor[variant][appearance + "Hover"];
  }

  return backgroundColor[variant][appearance];
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
  border-style: solid;
  border-width: 1px;

  font-family: ${typography.ref.typeface.brand};
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border-color: ${getBorderColor};
  width: ${(props) => (props.isFullWidth === true ? "100%" : "auto")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
  cursor: ${getPointer};
  ${(props) => spacing[props.spacing]}

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
export { StyledButton, StyledSpan, StyledIcon };
