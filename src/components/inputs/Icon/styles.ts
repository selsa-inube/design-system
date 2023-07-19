import styled from "styled-components";
import { IIconProps } from "./interfaces/Icon.interface";
import { inube } from "../../../shared/tokens";

const StyledIcon = styled.figure`
  display: inline-block;
  cursor: ${(props: IIconProps) => (props.cursorHover ? "pointer" : "default")};

  margin: 0px;
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
        theme?.color?.palette?.neutralAlpha?.N0A ||
        inube.color.palette.neutralAlpha.N0A
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
        theme?.color?.palette?.neutralAlpha?.N0A ||
        inube.color.palette.neutralAlpha.N0A
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
        theme?.color?.palette?.neutralAlpha?.N0A ||
        inube.color.palette.neutralAlpha.N0A
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
    color: ${({ theme, isDisabled, variant, appearance }: any) => {
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
          theme?.color?.palette?.neutralAlpha?.N0A ||
          inube.color.palette.neutralAlpha.N0A
        );
      }

      return (
        themeColorDescriptor?.value?.hover || inubeColorDescriptor?.value?.hover
      );
    }};

    background-color: ${({ theme, isDisabled, variant, appearance }: any) => {
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
          theme?.color?.palette?.neutralAlpha?.N0A ||
          inube.color.palette.neutralAlpha.N0A
        );
      }

      if (isDisabled) {
        return (
          themeColorDescriptor?.value?.disabled ||
          inubeColorDescriptor?.value?.disabled
        );
      }

      return (
        themeColorDescriptor?.value?.hover || inubeColorDescriptor?.value?.hover
      );
    }};

    border-color: ${({ theme, isDisabled, variant, appearance }: any) => {
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
          theme?.color?.palette?.neutralAlpha?.N0A ||
          inube.color.palette.neutralAlpha.N0A
        );
      }

      if (isDisabled) {
        return (
          themeColorDescriptor?.value?.disabled ||
          inubeColorDescriptor?.value?.disabled
        );
      }

      return (
        themeColorDescriptor?.value?.hover || inubeColorDescriptor?.value?.hover
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
        return "32px";
      }

      if (size === "medium") {
        return "24px";
      }

      return "20px";
    }};

    height: ${({ size }: any) => {
      if (size === "large") {
        return "32px";
      }

      if (size === "medium") {
        return "24px";
      }

      return "20px";
    }};
  }
`;

export { StyledIcon };
