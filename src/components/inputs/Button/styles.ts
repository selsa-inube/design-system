import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";
import { IButtonProps } from ".";
import { Appearance, Variant } from "./props";

export interface ICursors {
  pointer: string;
  notAllowed: string;
  progress: string;
}

export interface ISpacingDetail {
  height: string;
  minWidth: string;
}

export interface ISpacing {
  compact: ISpacingDetail;
  wide: ISpacingDetail;
}

export interface IHoverColors {
  primary: string;
  secondary: string;
  confirm: string;
  warning: string;
  remove: string;
  help: string;
}

export interface IColorPalette {
  primary: string;
  secondary: string;
  confirm: string;
  warning: string;
  remove: string;
  help: string;
  disabled?: string;
}

export interface IVariantStyle {
  normal: IColorPalette;
  hover: Partial<IColorPalette> | any;
}

export interface ITextColors {
  filled: IVariantStyle;
  outlined: IVariantStyle;
  none: IVariantStyle;
}

export interface IActionStyle {
  filled: string;
  stroke: string;
}

export interface IActions {
  primary: IActionStyle;
  secondary: IActionStyle;
  confirm: IActionStyle;
  warning: IActionStyle;
  remove: IActionStyle;
  help: IActionStyle;
  disabled: IActionStyle;
}

export interface IBackgroundColorVariant {
  normal: Partial<IActions> | any;
  hover: Partial<IActions> | any;
}

export interface IBorderColorVariant {
  normal: Partial<IActions> | any;
  hover: Partial<IActions> | any;
}

export interface IBackgroundColors {
  filled: IBackgroundColorVariant;
  outlined: string;
  none: string;
}
export interface IBorderColors {
  filled: IVariantStyle | string;
  outlined: IVariantStyle | IBorderColorVariant;
  none: IVariantStyle | string;
}

const spacing: ISpacing = {
  compact: {
    height: "28px",
    minWidth: "93px",
  },
  wide: {
    height: "36px",
    minWidth: "101px",
  },
};

const cursors: ICursors = {
  pointer: "pointer",
  notAllowed: "not-allowed",
  progress: "progress",
};

const hoverColors: IHoverColors = {
  primary: colors.ref.palette.blue.b300,
  secondary: colors.ref.palette.neutral.n20,
  confirm: colors.ref.palette.green.g300,
  warning: colors.ref.palette.yellow.y300,
  remove: colors.ref.palette.red.r300,
  help: colors.ref.palette.purple.p300,
};

const textColors: ITextColors = {
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

const backgroundColor: IBackgroundColors = {
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

const borderColors: IBorderColors = {
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

const getPointer = (
  disabled: boolean | undefined,
  loading: boolean = false
) => {
  if (disabled) {
    return cursors.notAllowed;
  }

  if (loading) {
    return cursors.progress;
  }

  return cursors.pointer;
};

const getColor = (
  disabled: boolean | undefined,
  variant: Variant,
  appearance: Appearance,
  isHover: boolean = false
) => {
  if (disabled) {
    return textColors.filled.normal.disabled;
  }

  if (isHover) {
    return textColors[variant].hover[appearance];
  }

  return textColors[variant].normal[appearance];
};

const getBorderColor = (
  disabled: boolean | undefined,
  variant: Variant,
  appearance: Appearance,
  isHover: boolean = false
) => {
  if (variant !== "outlined") {
    return borderColors[variant];
  }

  if (disabled) {
    return borderColors[variant].normal.disabled.stroke;
  }

  if (isHover) {
    return borderColors[variant].hover[appearance];
  }

  return borderColors[variant].normal[appearance].stroke;
};

function getBackgroundColor(
  disabled: boolean | undefined,
  variant: Variant,
  appearance: Appearance,
  isHover: boolean = false
) {
  if (variant !== "filled") {
    return backgroundColor[variant];
  }

  if (disabled) {
    return backgroundColor[variant].normal.disabled.filled;
  }

  if (isHover) {
    return backgroundColor[variant].hover[appearance];
  }

  return backgroundColor[variant].normal[appearance].filled;
}

function getWidth(fullwidth: boolean | undefined) {
  if (fullwidth) {
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
  width: ${({ fullwidth }: IButtonProps) => getWidth(fullwidth)};
  background-color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getBackgroundColor(disabled, variant!, appearance!)};
  border-style: ${(props: IButtonProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IButtonProps) => spacing[props.spacing!]};

  color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getColor(disabled, variant!, appearance!)};
  border-color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getBorderColor(disabled, variant!, appearance!)};
  background-color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getBackgroundColor(disabled, variant!, appearance!)};
  cursor: ${({ disabled, loading }: IButtonProps) =>
    getPointer(disabled, loading)};
  pointer-events: ${({ disabled }: IButtonProps) => disabled && "none"};

  &:hover {
    color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getColor(disabled, variant!, appearance!, true)};
    border-color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getBorderColor(disabled, variant!, appearance!, true)};
    background-color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getBackgroundColor(disabled, variant!, appearance!, true)};
  }
`;

const StyledLink = styled(Link)`
  margin: 0%;
  padding: 0%;
  ${containerStyles}
  border-style: ${(props: IButtonProps) =>
    props.type === "link" ? "solid" : "none"};
  width: ${({ fullwidth }: IButtonProps) => getWidth(!!fullwidth)};
  color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getColor(!!disabled, variant!, appearance!)};
  border-color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getBorderColor(!!disabled, variant!, appearance!)};
  background-color: ${({ disabled, variant, appearance }: IButtonProps) =>
    getBackgroundColor(!!disabled, variant!, appearance!)};
  cursor: ${({ disabled }: IButtonProps) => getPointer(!!disabled)};
  pointer-events: ${({ disabled }: IButtonProps) => disabled && "none"};

  &:hover {
    color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getColor(!!disabled, variant!, appearance!, true)};
    border-color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getBorderColor(!!disabled, variant!, appearance!, true)};
    background-color: ${({ disabled, variant, appearance }: IButtonProps) =>
      getBackgroundColor(!!disabled, variant!, appearance!, true)};
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
