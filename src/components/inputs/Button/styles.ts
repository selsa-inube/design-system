import { Link } from "react-router-dom";
import styled from "styled-components";

import { IButtonProps } from ".";
import { inube } from "@shared/tokens";
import { Themed } from "@src/shared/types/types";

interface IStyledButtonProps extends IButtonProps {
  theme?: Themed;
}
const spacing = {
  compact: {
    height: "28px",
  },
  wide: {
    height: "36px",
  },
};

const StyledButton = styled.button`
  padding: ${inube.spacing.s0} ${inube.spacing.s200};
  transition: all 0.3s ease;
  border-radius: 8px;
  border: none;
  border-width: 1px;
  min-width: 100px;
  width: ${({ fullwidth }: IStyledButtonProps) => {
    if (fullwidth) {
      return "100%";
    }

    return "fit-content";
  }};
  max-width: ${({ fullwidth }: IStyledButtonProps) =>
    fullwidth ? "none" : "300px"};
  border-style: ${(props: IStyledButtonProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IStyledButtonProps) => spacing[props.spacing!]};

  background-color: ${({
    theme,
    appearance,
    variant,
    disabled,
    parentHover,
  }: IStyledButtonProps) => {
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
  }: IStyledButtonProps) => {
    if (disabled) {
      if (variant !== "outlined") {
        return "transparent";
      }
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

  cursor: ${({ disabled, loading }: IStyledButtonProps) => {
    if (disabled) {
      return "not-allowed";
    }

    if (loading!.toString() === "true") {
      return "progress";
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
    }: IStyledButtonProps) => {
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
    }: IStyledButtonProps) => {
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

export { StyledButton, StyledLink };
