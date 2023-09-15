import { Link } from "react-router-dom";
import styled from "styled-components";

import { typography } from "@shared/typography/typography";
import { IButtonStructureProps } from ".";
import { inube } from "@shared/tokens";

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
  font-family: ${typography.ref.typeface.brand};
  font-size: ${typography.sys.typescale.labelLarge.size};
  font-weight: ${typography.sys.typescale.labelLarge.weight};
  line-height: ${typography.sys.typescale.labelLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.labelLarge.tracking};
  width: ${({ fullwidth }: IButtonStructureProps) => {
    if (fullwidth) {
      return "100%";
    }

    return "fit-content";
  }};
  border-style: ${(props: IButtonStructureProps) =>
    props.type !== "link" ? "solid" : "none"};
  ${(props: IButtonStructureProps) => spacing[props.spacing!]};

  background-color: ${({
    theme,
    appearance,
    variant,
    disabled,
  }: IButtonStructureProps) => {
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

  border-color: ${({
    theme,
    appearance,
    variant,
    disabled,
  }: IButtonStructureProps) => {
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

  cursor: ${({ disabled, loading }: IButtonStructureProps) => {
    if (disabled) {
      return "not-allowed";
    }

    if (loading) {
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
    }: IButtonStructureProps) => {
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
    }: IButtonStructureProps) => {
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
  text-decoration: none;
`;

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 4px;
  overflow: hidden;
  &:hover * {
    color: ${({
      theme,
      appearance,
      variant,
      disabled,
    }: IButtonStructureProps) => {
      if (!disabled) {
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
