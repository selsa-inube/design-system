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
    if (disabled)
      return (
        theme?.color?.stroke?.[appearance]?.disabled ||
        inube.color.stroke[appearance].disabled
      );
    if (parentHover)
      return (
        theme?.color?.stroke?.[appearance]?.hover ||
        inube.color.stroke[appearance].hover
      );
    return (
      theme?.color?.stroke?.[appearance]?.regular ||
      inube.color.stroke[appearance].regular
    );
  }};

  background-color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: IIconProps) => {
    if (variant === "filled") {
      if (disabled)
        return (
          theme?.color?.text?.[appearance]?.disabled ||
          inube.color.text[appearance].disabled
        );
      if (parentHover)
        return (
          theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover
        );
      return (
        theme?.color?.text?.[appearance]?.regular ||
        inube.color.text[appearance].regular
      );
    }
  }};

  color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: IIconProps) => {
    if (disabled)
      return (
        theme?.color?.text?.light?.disabled || inube.color.text.light.disabled
      );
    if (variant !== "filled") {
      if (parentHover)
        return (
          theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover
        );
      return (
        theme?.color?.text?.[appearance]?.regular ||
        inube.color.text[appearance].regular
      );
    }
    if (!filledAppearancesWithGrayIcon.includes(appearance))
      return (
        theme?.color?.text?.light?.regular || inube.color.text.light.regular
      );
    return theme?.color?.text?.gray?.regular || inube.color.text.gray.regular;
  }};

  & svg {
    display: block;
    width: ${({ size }: IIconProps) => size};
    height: ${({ size }: IIconProps) => size};
    padding: ${({ spacing }: IIconProps) => {
      if (spacing === "wide") return inube.spacing.s100;
      if (spacing === "compact") return inube.spacing.s050;
      return inube.spacing.s025;
    }};
  }

  &:hover {
    cursor: ${({ cursorHover, disabled }: IIconProps) => {
      if (!disabled && cursorHover) return "pointer";
    }};

    border-color: ${({
      theme,
      cursorHover,
      appearance,
      disabled,
    }: IIconProps) => {
      if (!disabled && cursorHover)
        return (
          theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover
        );
    }};

    background-color: ${({
      theme,
      variant,
      appearance,
      cursorHover,
      disabled,
    }: IIconProps) => {
      if (!disabled && variant === "filled" && cursorHover)
        return (
          theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover
        );
    }};
  }
`;

export { StyledIcon };
