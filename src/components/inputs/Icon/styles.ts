import styled from "styled-components";
import { IIconProps } from "./interfaces/Icon.interface";
import { inube } from "../../../shared/tokens";

const StyledIcon = styled.figure`
  display: inline-block;
  cursor: ${(props: IIconProps) => (props.cursorHover ? "pointer" : "default")};

  pointer-events: ${(props: IIconProps) =>
    props.isDisabled ? "none" : "auto"};

  border-style: ${(props: IIconProps) =>
    props.variant === "filled" ? "none" : "solid"};
  border-width: 2px;
  border-radius: ${(props: IIconProps) =>
    props.shape === "circle" ? "50%" : "5px"};

  border-color: ${({
    theme,
    isDisabled,
    variant,
    appearance,
    cursorHover,
  }: any) => {
    const colorKey = cursorHover ? "hover" : "regular";
    const themeColorDescriptor =
      theme.color &&
      theme.color.text &&
      Object.getOwnPropertyDescriptor(theme.color.text, appearance);
    const inubeColorDescriptor =
      inube.color &&
      inube.color.text &&
      Object.getOwnPropertyDescriptor(inube.color.text, appearance);

    if (variant !== "outlined") {
      return (
        theme?.color?.text?.light?.regular || inube.color.text.light.regular
      );
    }

    if (isDisabled) {
      return (
        themeColorDescriptor?.value?.disabled ||
        inubeColorDescriptor?.value?.disabled
      );
    }

    return (
      themeColorDescriptor?.value?.[colorKey] ||
      inubeColorDescriptor?.value?.[colorKey]
    );
  }};

  color: ${({ theme, isDisabled, variant, appearance, cursorHover }: any) => {
    const colorKey = cursorHover ? "hover" : "regular";
    const themeColorDescriptor =
      theme.color &&
      theme.color.text &&
      Object.getOwnPropertyDescriptor(theme.color.text, appearance);
    const inubeColorDescriptor =
      inube.color &&
      inube.color.text &&
      Object.getOwnPropertyDescriptor(inube.color.text, appearance);

    if (isDisabled) {
      return (
        themeColorDescriptor?.value?.disabled ||
        inubeColorDescriptor?.value?.disabled
      );
    }

    if (variant === "filled") {
      return (
        theme?.color?.text?.light?.regular || inube.color.text.light.regular
      );
    }

    return (
      themeColorDescriptor?.value?.[colorKey] ||
      inubeColorDescriptor?.value?.[colorKey]
    );
  }};

  background-color: ${({
    theme,
    isDisabled,
    variant,
    appearance,
    cursorHover,
  }: any) => {
    const colorKey = cursorHover ? "hover" : "regular";
    const themeColorDescriptor =
      theme.color &&
      theme.color.text &&
      Object.getOwnPropertyDescriptor(theme.color.text, appearance);
    const inubeColorDescriptor =
      inube.color &&
      inube.color.text &&
      Object.getOwnPropertyDescriptor(inube.color.text, appearance);

    if (variant !== "filled") {
      return (
        theme?.color?.text?.light?.regular || inube.color.text.light.regular
      );
    }

    if (isDisabled) {
      return (
        themeColorDescriptor?.value?.disabled ||
        inubeColorDescriptor?.value?.disabled
      );
    }

    return (
      themeColorDescriptor?.value?.[colorKey] ||
      inubeColorDescriptor?.value?.[colorKey]
    );
  }};

  &:hover {
    color: ${({ theme, isDisabled, variant, appearance, cursorHover }: any) => {
      if (!cursorHover) return;
      const colorKey = "hover";
      const themeColorDescriptor =
        theme.color &&
        theme.color.text &&
        Object.getOwnPropertyDescriptor(theme.color.text, appearance);
      const inubeColorDescriptor =
        inube.color &&
        inube.color.text &&
        Object.getOwnPropertyDescriptor(inube.color.text, appearance);

      if (isDisabled) {
        return (
          themeColorDescriptor?.value?.disabled ||
          inubeColorDescriptor?.value?.disabled
        );
      }

      if (variant === "filled") {
        return (
          theme?.color?.text?.light?.regular || inube.color.text.light.regular
        );
      }

      return (
        themeColorDescriptor?.value?.[colorKey] ||
        inubeColorDescriptor?.value?.[colorKey]
      );
    }};

    background-color: ${({
      theme,
      isDisabled,
      variant,
      appearance,
      cursorHover,
    }: any) => {
      if (!cursorHover) return;
      const colorKey = "hover";
      const themeColorDescriptor =
        theme.color &&
        theme.color.text &&
        Object.getOwnPropertyDescriptor(theme.color.text, appearance);
      const inubeColorDescriptor =
        inube.color &&
        inube.color.text &&
        Object.getOwnPropertyDescriptor(inube.color.text, appearance);

      if (variant !== "filled") {
        return (
          theme?.color?.text?.light?.regular || inube.color.text.light.regular
        );
      }

      if (isDisabled) {
        return (
          themeColorDescriptor?.value?.disabled ||
          inubeColorDescriptor?.value?.disabled
        );
      }

      return (
        themeColorDescriptor?.value?.[colorKey] ||
        inubeColorDescriptor?.value?.[colorKey]
      );
    }};

    border-color: ${({
      theme,
      isDisabled,
      variant,
      appearance,
      cursorHover,
    }: any) => {
      if (!cursorHover) return;
      const colorKey = "hover";
      const themeColorDescriptor =
        theme.color &&
        theme.color.text &&
        Object.getOwnPropertyDescriptor(theme.color.text, appearance);
      const inubeColorDescriptor =
        inube.color &&
        inube.color.text &&
        Object.getOwnPropertyDescriptor(inube.color.text, appearance);

      if (variant !== "outlined") {
        return (
          theme?.color?.text?.light?.regular || inube.color.text.light.regular
        );
      }

      if (isDisabled) {
        return (
          themeColorDescriptor?.value?.disabled ||
          inubeColorDescriptor?.value?.disabled
        );
      }

      return (
        themeColorDescriptor?.value?.[colorKey] ||
        inubeColorDescriptor?.value?.[colorKey]
      );
    }};
  }

  & > svg {
    padding: ${({ spacing }: IIconProps) => {
      if (spacing === "wide") {
        return inube.spacing.s100;
      }

      if (spacing === "compact") {
        return inube.spacing.s050;
      }

      return inube.spacing.s025;
    }};

    width: ${({ size }: any) => {
      if (size === "large") {
        return "40px";
      }

      if (size === "medium") {
        return "32px";
      }

      return "24px";
    }};

    height: ${({ size }: any) => {
      if (size === "large") {
        return "40px";
      }

      if (size === "medium") {
        return "32px";
      }

      return "24px";
    }};
  }
`;

export { StyledIcon };
