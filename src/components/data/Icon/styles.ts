import styled from "styled-components";

import { inube } from "../../../shared/tokens";
import { IIconProps } from "./interfaces/Icon.interface";

const filledAppearancesWithGrayIcon = ["gray", "light"];

const StyledIcon = styled.figure`
  display: inline-block;

  padding: ${inube.spacing.s0};
  margin: ${inube.spacing.s0};
  border-radius: ${({ shape }: IIconProps) =>
    shape === "circle" ? "50%" : "8px"};
  border-width: ${({ variant }: IIconProps) =>
    variant === "outlined" ? "1px" : "0px"};
  border-style: solid;
  border-color: ${({
    theme,
    appearance,
    parentHover,
    disabled,
  }: IIconProps) => {
    if (disabled) {
      return theme?.color?.stroke?.[appearance]?.disabled;
    }

    if (parentHover) {
      return theme?.color?.stroke?.[appearance]?.hover;
    }

    return theme?.color?.stroke?.[appearance]?.regular;
  }};

  background-color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: IIconProps) => {
    if (variant === "filled") {
      if (disabled) {
        return theme?.color?.text?.[appearance]?.disabled;
      }

      if (parentHover) {
        return theme?.color?.text?.[appearance]?.hover;
      }

      return theme?.color?.text?.[appearance]?.regular;
    }
  }};

  color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: IIconProps) => {
    if (disabled) {
      return theme?.color?.text?.light?.disabled;
    }

    if (variant === "filled") {
      if (!filledAppearancesWithGrayIcon.includes(appearance)) {
        return theme?.color?.text?.light?.regular;
      }
      return theme?.color?.text?.gray?.regular;
    }

    if (parentHover) {
      return theme?.color?.text?.[appearance]?.hover;
    }

    return theme?.color?.text?.[appearance]?.regular;
  }};

  & svg {
    display: block;
    width: ${({ size }: IIconProps) => size};
    height: ${({ size }: IIconProps) => size};
    padding: ${({ spacing }: IIconProps) => {
      if (spacing === "wide") {
        return inube.spacing.s100;
      }
      if (spacing === "compact") {
        return inube.spacing.s050;
      }
      return inube.spacing.s025;
    }};
  }

  &:hover {
    cursor: ${({ cursorHover, disabled }: IIconProps) => {
      if (!disabled) {
        if (cursorHover) {
          return "pointer";
        }
      }
    }};

    border-color: ${({
      theme,
      cursorHover,
      appearance,
      disabled,
    }: IIconProps) => {
      if (!disabled) {
        if (cursorHover) {
          return theme?.color?.text?.[appearance]?.hover;
        }
      }
    }};

    background-color: ${({
      theme,
      variant,
      appearance,
      cursorHover,
      disabled,
    }: IIconProps) => {
      if (!disabled) {
        if (variant === "filled") {
          if (cursorHover) {
            return theme?.color?.text?.[appearance]?.hover;
          }
        }
      }
    }};

    &:hover svg {
      color: ${({
        theme,
        cursorHover,
        variant,
        appearance,
        disabled,
      }: IIconProps) => {
        if (!disabled) {
          if (cursorHover) {
            if (variant === "filled") {
              if (!filledAppearancesWithGrayIcon.includes(appearance)) {
                return theme?.color?.text?.light?.hover;
              }
              return theme?.color?.text?.gray?.hover;
            } else {
              return theme?.color?.text?.[appearance]?.hover;
            }
          }
        }
      }};
    }
  }
`;

export { StyledIcon };
