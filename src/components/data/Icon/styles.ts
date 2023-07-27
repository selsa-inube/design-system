import styled from "styled-components";

import { inube } from "../../../shared/tokens";

const filledAppearancesWithGrayIcon = ["gray", "light"];
const homologationColorSurfaceTokens: any = inube.color.surface;

const StyledIcon = styled.figure`
  display: inline-block;
  padding: ${inube.spacing.s0};
  margin: ${inube.spacing.s0};

  border-radius: ${({ shape }: any) => (shape === "circle" ? "50%" : "8px")};
  border-width: ${({ variant }: any) =>
    variant === "outlined" ? "1px" : "0px"};
  border-style: solid;
  border-color: ${({ theme, appearance, parentHover, disabled }: any) => {
    if (disabled) {
      return (
        theme.color?.stroke?.[appearance]?.disabled ||
        inube.color.stroke[appearance as keyof typeof inube.color.text].disabled
      );
    }

    if (parentHover) {
      return (
        theme.color?.stroke?.[appearance]?.hover ||
        inube.color.stroke[appearance as keyof typeof inube.color.text].hover
      );
    }

    return (
      theme.color?.stroke?.[appearance]?.regular ||
      inube.color.stroke[appearance as keyof typeof inube.color.text].regular
    );
  }};

  background-color: ${({
    theme,
    variant,
    appearance,
    parentHover,
    disabled,
  }: any) => {
    if (variant === "filled") {
      if (disabled) {
        return (
          theme.color?.surface?.[appearance]?.disabled ||
          homologationColorSurfaceTokens[appearance].disabled
        );
      }

      if (parentHover) {
        return (
          theme.color?.surface?.[appearance]?.hover ||
          homologationColorSurfaceTokens[appearance].hover
        );
      }

      return (
        theme.color?.surface?.[appearance]?.regular ||
        inube.color.surface[appearance as keyof typeof inube.color.surface]
          .regular
      );
    }
  }};

  color: ${({ theme, variant, appearance, parentHover, disabled }: any) => {
    if (disabled) {
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
        inube.color.text[appearance as keyof typeof inube.color.text].hover
      );
    }

    return (
      theme.color?.text?.[appearance]?.regular ||
      inube.color.text[appearance as keyof typeof inube.color.text].regular
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
    cursor: ${({ cursorHover, disabled }: any) => {
      if (!disabled) {
        if (cursorHover) {
          return "pointer";
        }
      }
    }};

    border-color: ${({ theme, cursorHover, appearance, disabled }: any) => {
      if (!disabled) {
        if (cursorHover) {
          return (
            theme.color?.text?.[appearance]?.hover ||
            inube.color.text[appearance as keyof typeof inube.color.text].hover
          );
        }
      }
    }};

    background-color: ${({
      theme,
      variant,
      appearance,
      cursorHover,
      disabled,
    }: any) => {
      if (!disabled) {
        if (variant === "filled") {
          if (cursorHover) {
            return (
              theme.color?.surface?.[appearance]?.hover ||
              homologationColorSurfaceTokens[appearance].hover
            );
          }
        }
      }
    }};

    &:hover svg {
      color: ${({ theme, cursorHover, variant, appearance, disabled }: any) => {
        if (!disabled) {
          if (cursorHover) {
            if (variant === "filled") {
              if (!filledAppearancesWithGrayIcon.includes(appearance)) {
                return (
                  theme.color?.text?.light?.hover ||
                  inube.color.text.light.hover
                );
              }
              return (
                theme.color?.text?.gray?.hover || inube.color.text.gray.hover
              );
            } else {
              return (
                theme.color?.text?.[appearance]?.hover ||
                inube.color.text[appearance as keyof typeof inube.color.text]
                  .hover
              );
            }
          }
        }
      }};
    }
  }
`;

export { StyledIcon };
