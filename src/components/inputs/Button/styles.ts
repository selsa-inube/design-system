import { Link } from "react-router-dom";
import styled from "styled-components";

import { IButtonStructureProps } from ".";
import { inube } from "@shared/tokens";
import { Themed } from "@src/shared/types/types";

interface IStyledButtonStructureProps extends IButtonStructureProps {
  theme?: Themed;
}
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

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  width: ${({ fullwidth }: IStyledButtonStructureProps) => {
    if (fullwidth) {
      return "100%";
    }

    return "fit-content";
  }};
  border-style: ${(props: IStyledButtonStructureProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IStyledButtonStructureProps) => spacing[props.spacing!]};

  background-color: ${({
    theme,
    appearance,
    variant,
    disabled,
    parentHover,
  }: IStyledButtonStructureProps) => {
    if (variant === "filled") {
      if (disabled) {
        return (
          theme?.color?.surface?.[appearance!]?.disabled ||
          inube.color.surface[appearance!].disabled
        );
      }
      if (parentHover)
        return (
          theme?.color?.surface?.[appearance!]?.hover ||
          inube.color.surface[appearance!].hover
        );
      return (
        theme?.color?.surface?.[appearance!]?.regular ||
        inube.color.surface[appearance!].regular
      );
    }

    return "transparent";
  }};

  border-color: ${({
    theme,
    appearance,
    variant,
    disabled,
    parentHover,
  }: IStyledButtonStructureProps) => {
    if (disabled) {
      return (
        theme?.color?.stroke?.[appearance!]?.disabled ||
        inube.color.stroke[appearance!].disabled
      );
    }
    if (parentHover && variant !== "none")
      return (
        theme?.color?.stroke?.[appearance!]?.hover ||
        inube.color.stroke[appearance!].hover
      );
    if (variant === "none") {
      return "transparent";
    }

    return (
      theme?.color?.stroke?.[appearance!]?.regular ||
      inube.color.stroke[appearance!].regular
    );
  }};

  cursor: ${({
    disabled,
    loading,
    cursorHover,
    variant,
  }: IStyledButtonStructureProps) => {
    if (disabled) {
      return "not-allowed";
    }

    if (loading) {
      return "progress";
    }

    if (!cursorHover || variant === "filled") {
      return "default";
    }

    return "pointer";
  }};

  &:hover {
    border-color: ${({
      theme,
      appearance,
      variant,
      disabled,
      cursorHover,
    }: IStyledButtonStructureProps) => {
      if (!disabled && cursorHover) {
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
      cursorHover,
    }: IStyledButtonStructureProps) => {
      if (!disabled && cursorHover && variant === "filled") {
        return (
          theme?.color?.surface?.[appearance!]?.hover ||
          inube.color.surface[appearance!].hover
        );
      }
      if (!disabled && cursorHover && variant === "none") {
        return "transparent";
      }
    }};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
  & * {
    color: ${({
      theme,
      appearance,
      variant,
      disabled,
      parentHover,
    }: IStyledButtonStructureProps) => {
      if (!disabled) {
        if (variant === "filled") {
          return (
            theme?.color?.stroke?.light?.hover || inube.color.stroke.light.hover
          );
        }
        if (parentHover) {
          return (
            theme?.color?.stroke?.[appearance!]?.hover ||
            inube.color.stroke[appearance!].hover
          );
        }
        return (
          theme?.color?.text?.[appearance!]?.regular ||
          inube.color.text[appearance!].regular
        );
      }
    }};
  }
  &:hover * {
    color: ${({
      theme,
      appearance,
      variant,
      disabled,
      cursorHover,
    }: IStyledButtonStructureProps) => {
      if (!disabled && cursorHover) {
        if (variant === "filled") {
          return (
            theme?.color?.stroke?.light?.hover || inube.color.stroke.light.hover
          );
        }
        return (
          theme?.color?.stroke?.[appearance!]?.hover ||
          inube.color.stroke[appearance!].hover
        );
      }
    }};
  }
`;

export { StyledButton, StyledSpan, StyledLink };
