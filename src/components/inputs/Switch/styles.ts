import styled, { css } from "styled-components";
import { ISwitchProps } from "./index";

import { inube } from "@shared/tokens";
import { Themed } from "./props";

const sizes = {
  large: {
    width: "40px",
    height: "20px",
  },
  small: {
    width: "32px",
    height: "16px",
  },
};

const StyledSpan = styled.span`
  position: absolute;
  top: ${inube.spacing.s0};
  left: ${inube.spacing.s0};
  right: ${inube.spacing.s0};
  bottom: ${inube.spacing.s0};
  transition: 0.1s;
  border-radius: 30px;
  cursor: ${(props: ISwitchProps) =>
    props.disabled ? "not-allowed" : "pointer"};
  background: ${({ disabled, theme }: ISwitchProps) =>
    disabled
      ? theme?.color?.surface?.gray?.disabled ||
        inube.color.surface.gray.disabled
      : theme?.color?.surface?.gray?.regular ||
        inube.color.surface.gray.regular};

  &:hover {
    background-color: ${({ disabled, theme }: ISwitchProps) =>
      disabled
        ? theme?.color?.surface?.gray?.disabled ||
          inube.color.surface.gray.disabled
        : theme?.color?.surface?.gray?.hover || inube.color.surface.gray.hover};
  }

  &:before {
    position: absolute;
    content: "";
    left: ${inube.spacing.s025};
    border-radius: 50%;
    transition: 0.3s;
    background-color: ${({ theme }: Themed) =>
      theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
    box-sizing: border-box;
    border: ${({ disabled, theme }: ISwitchProps) =>
      disabled &&
      `0.5px solid ${
        theme?.color?.stroke?.light?.disabled ||
        inube.color.stroke.gray.disabled
      }`};
    ${(props: ISwitchProps) =>
      props.size === "small"
        ? css`
            width: 12px;
            height: 12px;
            bottom: calc((${inube.spacing.s200} - ${inube.spacing.s150}) / 2);
          `
        : css`
            width: 16px;
            height: 16px;
            bottom: calc((${inube.spacing.s250} - ${inube.spacing.s200}) / 2);
          `};
  }
`;

const StyledContainer = styled.label`
  position: relative;
  display: inline-block;
  ${(props: ISwitchProps) => props.size && sizes[props.size]};
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${({ disabled, theme }: ISwitchProps) =>
      disabled
        ? theme?.color?.surface?.gray?.disabled ||
          inube.color.surface.gray.disabled
        : theme?.color?.surface?.success?.regular ||
          inube.color.surface.success.regular};

    &:hover {
      background-color: ${({ disabled, theme }: ISwitchProps) =>
        disabled
          ? theme?.color?.surface?.gray?.disabled ||
            inube.color.surface.gray.disabled
          : theme?.color?.surface?.success?.hover ||
            inube.color.surface.success.hover};
    }
  }

  &:checked + span:before {
    left: ${({ size }: ISwitchProps) =>
      size === "small" ? `-${inube.spacing.s025}` : `${inube.spacing.s025}`};
    ${(size: ISwitchProps["size"]) =>
      size === "small"
        ? "transform: translateX(16px);"
        : "transform: translateX(20px);"};
  }
`;

const StyledIcon = styled.div`
  & > #mdIcon {
    position: absolute;
    color: ${({ disabled }: ISwitchProps) =>
      !disabled
        ? inube.color.surface.light.regular
        : inube.color.stroke.gray.disabled};
    ${(props: ISwitchProps) =>
      props.size === "small"
        ? css`
            width: 10px;
            height: 10px;
            padding-left ${inube.spacing.s025};
            top: calc(${inube.spacing.s075} / 2);
            left: ${(props: ISwitchProps) =>
              props.checked
                ? `calc(${inube.spacing.s075} / 2)`
                : `${inube.spacing.s200}`};
          `
        : css`
            width: 14px;
            height: 14px;
            top: calc(${inube.spacing.s075} / 2);
            left: ${(props: ISwitchProps) =>
              props.checked
                ? `${inube.spacing.s050}`
                : `${inube.spacing.s250}`};
          `};
  }
`;

export { StyledContainer, StyledInput, StyledSpan, StyledIcon };
