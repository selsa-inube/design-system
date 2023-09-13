import styled from "styled-components";

import { inube } from "@shared/tokens";
import { IIconProps } from ".";
import { Themed } from "@shared/types/types";

const filledAppearancesWithGrayIcon = ["gray", "light"];

interface IStyledIconProps extends IIconProps {
  theme?: Themed;
}

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
    variant,
  }: IStyledIconProps) => {
    if (disabled)
      return (
        theme?.color?.stroke?.[appearance]?.disabled ||
        inube.color.stroke[appearance].disabled
      );
    if (parentHover && variant !== "filled")
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
  }: IStyledIconProps) => {
    if (variant === "filled") {
      if (disabled)
        return (
          theme?.color?.surface?.[appearance]?.disabled ||
          inube.color.surface[appearance].disabled
        );
      if (parentHover)
        return (
          theme?.color?.surface?.[appearance]?.hover ||
          inube.color.surface[appearance].hover
        );
      return (
        theme?.color?.surface?.[appearance]?.regular ||
        inube.color.surface[appearance].regular
      );
    }
  }};

  color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: IStyledIconProps) => {
    if (disabled)
      return (
        theme?.color?.text?.[appearance]?.disabled ||
        inube.color.text[appearance].disabled
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
    cursor: ${({ cursorHover, disabled, variant }: IIconProps) => {
      if (!disabled && cursorHover && variant !== "filled") return "pointer";
    }};

    border-color: ${({
      theme,
      cursorHover,
      appearance,
      disabled,
      variant,
    }: IStyledIconProps) => {
      if (!disabled && cursorHover && variant !== "filled")
        return (
          theme?.color?.text?.[appearance]?.hover ||
          inube.color.text[appearance].hover
        );
    }};

    color: ${({
      theme,
      cursorHover,
      appearance,
      disabled,
      variant,
    }: IStyledIconProps) => {
      if (!disabled && cursorHover && variant !== "filled")
        return (
          theme?.color?.stroke?.[appearance]?.hover ||
          inube.color.stroke[appearance].hover
        );
    }};

    background-color: ${({
      theme,
      variant,
      appearance,
      cursorHover,
      disabled,
    }: IStyledIconProps) => {
      if (!disabled && variant === "filled" && cursorHover)
        return (
          theme?.color?.surface?.[appearance]?.hover ||
          inube.color.surface[appearance].hover
        );
    }};
  }
`;

export { StyledIcon };
