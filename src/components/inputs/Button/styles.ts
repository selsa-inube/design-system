import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { typography } from "@shared/typography/typography";
import { IButtonProps } from ".";
import { inube } from "@shared/tokens";

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

const cursors = {
  pointer: "pointer",
  notAllowed: "not-allowed",
  progress: "progress",
};

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
  border-style: ${(props: IButtonProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IButtonProps) => spacing[props.spacing!]};

  background-color: ${({
    theme,
    appearance,
    variant,
    disabled,
  }: IButtonProps) => {
    if (variant === "filled") {
      if (disabled) {
        return (
          theme?.color?.surface?.[appearance!]?.disabled ||
          inube.color.surface[appearance!].disabled
        );
      }
      return (
        theme?.color?.surface?.[appearance!]?.regular ||
        inube.color.surface[appearance!].regular
      );
    }

    return "transparent";
  }};

  border-color: ${({ theme, appearance, variant, disabled }: IButtonProps) => {
    if (disabled) {
      return (
        theme?.color?.stroke?.[appearance!]?.disabled ||
        inube.color.stroke[appearance!].disabled
      );
    }
    if (variant === "none") {
      return "transparent";
    }

    return (
      theme?.color?.stroke?.[appearance!]?.regular ||
      inube.color.stroke[appearance!].regular
    );
  }};

  cursor: ${({ disabled, loading }: IButtonProps) => {
    if (disabled) {
      return cursors.notAllowed;
    }

    if (loading) {
      return cursors.progress;
    }

    return cursors.pointer;
  }};

  &:hover {
    border-color: ${({
      theme,
      appearance,
      variant,
      disabled,
    }: IButtonProps) => {
      if (!disabled) {
        if (variant === "none") {
          return "transparent";
        }
        return (
          theme?.color?.stroke?.[appearance!]?.hover ||
          inube.color.stroke[appearance!].hover
        );
      }
    }};

    background-color: ${({
      theme,
      appearance,
      variant,
      disabled,
    }: IButtonProps) => {
      if (!disabled) {
        if (variant === "filled") {
          return (
            theme?.color?.surface?.[appearance!]?.hover ||
            inube.color.surface[appearance!].hover
          );
        }
        if (variant === "none") {
          return "transparent";
        }
      }
    }};
  }
`;

const StyledLink = styled(Link)`
  margin: 0%;
  padding: 0%;
  ${containerStyles}
  border-style: ${(props: IButtonProps) =>
    props.type === "link" ? "solid" : "none"};
  width: ${({ fullwidth }: IButtonProps) => getWidth(!!fullwidth)};

  ${StyledButton}
  cursor: ${({ disabled, loading }: IButtonProps) => {
    if (disabled) {
      return cursors.notAllowed;
    }

    if (loading) {
      return cursors.progress;
    }

    return cursors.pointer;
  }};
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
`;

export { StyledButton, StyledSpan, StyledLink };
