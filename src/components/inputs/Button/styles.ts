import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";
import { IButtonProps } from "./interfaces/Button.interface";
import { Variant } from "./types/Button.Variants.type";
import { Appearance } from "./types/Button.Appearances.type";

const spacing = {
  compact: {
    height: "28px",
    minWidth: "93px",
  },
  wide: {
    height: "36px",
    minWidth: "101px",
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

const getPointer = (isDisabled: boolean | undefined, isLoading = false) => {
  if (isDisabled) {
    return cursors.notAllowed;
  }

  if (isLoading) {
    return cursors.progress;
  }

  return cursors.pointer;
};

const getColor = (
  isDisabled: boolean | undefined,
  variant: Variant,
  appearance: Appearance,
  isHover = false
) => {
  if (isDisabled) {
    return textColors.filled.normal.disabled;
  }

  if (isHover) {
    return textColors[variant].hover;
  }

  return textColors[variant].normal[appearance];
};

const getBorderColor = (
  isDisabled: boolean,
  variant: Variant,
  appearance: Appearance,
  isHover = false
) => {
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

function getBackgroundColor(
  isDisabled: boolean,
  variant: Variant,
  appearance: Appearance,
  isHover = false
) {
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

function getWidth(isFullWidth: boolean) {
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
  font-size: ${typography.sys.typescale.labelLarge.size};
  font-weight: ${typography.sys.typescale.labelLarge.weight};
  line-height: ${typography.sys.typescale.labelLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
`;

const StyledButton = styled.button`
  padding: 0px 16px;
  ${containerStyles}
  width: ${(props: IButtonProps) =>
    props.isFullWidth && getWidth(props.isFullWidth)};
  background-color: ${(props: IButtonProps) =>
    props &&
    getBackgroundColor(props.isDisabled!, props.variant!, props.appearance!)};
  border-style: ${(props: IButtonProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IButtonProps) => props.spacing && spacing[props.spacing]};

  color: ${(props: IButtonProps) =>
    props && getColor(props.isDisabled!, props.variant!, props.appearance!)};
  border-color: ${(props: IButtonProps) =>
    props &&
    getBorderColor(props.isDisabled!, props.variant!, props.appearance!)};
  background-color: ${(props: IButtonProps) =>
    props &&
    getBackgroundColor(props.isDisabled!, props.variant!, props.appearance!)};
  cursor: ${({ isDisabled, isLoading }: IButtonProps) =>
    getPointer(isDisabled, isLoading)};

  &:hover {
    color: ${(props: IButtonProps) =>
      props &&
      getColor(props.isDisabled, props.variant!, props.appearance!, true)};
    border-color: ${(props: IButtonProps) =>
      props &&
      getBorderColor(
        props.isDisabled!,
        props.variant!,
        props.appearance!,
        true
      )};
    background-color: ${(props: IButtonProps) =>
      props &&
      getBackgroundColor(
        props.isDisabled!,
        props.variant!,
        props.appearance!,
        true
      )};
  }
`;

const StyledLink = styled(Link)`
  margin: 0%;
  padding: 0%;
  ${containerStyles}
  border-style: ${(props: IButtonProps) =>
    props.type === "link" ? "solid" : "none"};
  width: ${(props: IButtonProps) =>
    props.isFullWidth && getWidth(props.isFullWidth)};
  color: ${(props: IButtonProps) =>
    props && getColor(props.isDisabled, props.variant!, props.appearance!)};
  border-color: ${(props: IButtonProps) =>
    props &&
    getBorderColor(props.isDisabled!, props.variant!, props.appearance!)};
  background-color: ${(props: IButtonProps) =>
    props &&
    getBackgroundColor(props.isDisabled!, props.variant!, props.appearance!)};
  cursor: ${({ isDisabled }: IButtonProps) => getPointer(isDisabled)};

  &:hover {
    color: ${(props: IButtonProps) =>
      props &&
      getColor(props.isDisabled, props.variant!, props.appearance!, true)};
    border-color: ${(props: IButtonProps) =>
      props &&
      getBorderColor(
        props.isDisabled!,
        props.variant!,
        props.appearance!,
        true
      )};
    background-color: ${(props: IButtonProps) =>
      props &&
      getBackgroundColor(
        props.isDisabled!,
        props.variant!,
        props.appearance!,
        true
      )};
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
