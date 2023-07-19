import styled from "styled-components";

import { inube } from "../../../shared/tokens";

const filledAppearancesWithGrayIcon = ["gray", "light"];

const StyledIcon = styled.figure`
  display: inline-block;
  padding: 0;
  margin: 0;

  border-radius: ${({ shape }: any) => (shape === "circle" ? "50%" : "8px")};
  border-width: ${({ variant }: any) =>
    variant === "outlined" ? "1px" : "0px"};
  border-style: solid;
  border-color: ${({ theme, appearance, parentHover, isDisabled }: any) => {
    if (isDisabled) {
      return (
        theme.color?.stroke?.[appearance]?.disabled ||
        inube.color.stroke[appearance].disabled
      );
    }

    if (parentHover) {
      return (
        theme.color?.stroke?.[appearance]?.hover ||
        inube.color.stroke[appearance].hover
      );
    }

    return (
      theme.color?.stroke?.[appearance]?.regular ||
      inube.color.stroke[appearance].regular
    );
  }};

  background-color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    isDisabled,
  }: any) => {
    if (variant === "filled") {
      if (isDisabled) {
        return (
          theme.color?.surface?.[appearance]?.disabled ||
          inube.color.surface[appearance].disabled
        );
      }

      if (parentHover) {
        return (
          theme.color?.surface?.[appearance]?.hover ||
          inube.color.surface[appearance].hover
        );
      }

      return (
        theme.color?.surface?.[appearance]?.regular ||
        inube.color.surface[appearance].regular
      );
    }
  }};

  color: ${({ theme, variant, appearance, parentHover, isDisabled }: any) => {
    if (isDisabled) {
      return (
        theme.color?.text?.light?.disabled || inube.color.text.light.disabled
      );
    }

    if (variant === "filled") {
      if (!filledAppearancesWithGrayIcon.includes(appearance)) {
        return (
          theme.color?.text?.light?.regular || inube.color.text.light.regular
        );
      }
      return theme.color?.text?.gray?.regular || inube.color.text.gray.regular;
    }

    if (parentHover) {
      return (
        theme.color?.text?.[appearance]?.hover ||
        inube.color.text[appearance].hover
      );
    }

    return (
      theme.color?.text?.[appearance]?.regular ||
      inube.color.text[appearance].regular
    );
  }};

  & svg {
    display: block;
    width: ${({ size }: any) => size};
    height: ${({ size }: any) => size};
    padding: ${({ spacing }: any) => {
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
    cursor: ${({ cursorHover, isDisabled }: any) => {
      if (!isDisabled) {
        if (cursorHover) {
          return "pointer";
        }
      }
    }};

    border-color: ${({ theme, cursorHover, appearance, isDisabled }: any) => {
      if (!isDisabled) {
        if (cursorHover) {
          return (
            theme.color?.text?.[appearance]?.hover ||
            inube.color.text[appearance].hover
          );
        }
      }
    }};

    background-color: ${({
      theme,
      variant,
      appearance,
      cursorHover,
      isDisabled,
    }: any) => {
      if (!isDisabled) {
        if (variant === "filled") {
          if (cursorHover) {
            return (
              theme.color?.surface?.[appearance]?.hover ||
              inube.color.surface[appearance].hover
            );
          }
        }
      }
    }};
  }

  &:hover svg {
    color: ${({ theme, cursorHover, variant, appearance, isDisabled }: any) => {
      if (!isDisabled) {
        if (cursorHover) {
          if (variant === "filled") {
            if (!filledAppearancesWithGrayIcon.includes(appearance)) {
              return (
                theme.color?.text?.light?.hover || inube.color.text.light.hover
              );
            }
            return (
              theme.color?.text?.gray?.hover || inube.color.text.gray.hover
            );
          } else {
            return (
              theme.color?.text?.[appearance]?.hover ||
              inube.color.text[appearance].hover
            );
          }
        }
      }
    }};
  }
`;

export { StyledIcon };
