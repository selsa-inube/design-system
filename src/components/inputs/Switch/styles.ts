import styled, { css } from "styled-components";
import { ISwitchProps } from "./index";

import { inube } from "@shared/tokens";
import { Themed } from "./props";

const sizes: any = {
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
    left: ${({ checked }: ISwitchProps) => !checked && "2px"};
    border-radius: 50%;
    transition: 0.3s;
    background-color: ${({ theme }: Themed) =>
      theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
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
            bottom: ${({ disabled }: ISwitchProps) =>
              disabled ? "2px" : "2.5px"}}};
          `
        : css`
            width: 16px;
            height: 16px;
            bottom: ${({ disabled }: ISwitchProps) =>
              disabled ? "2px" : "2.5px"}}};
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
    ${(props: ISwitchProps) =>
      props.size === "small"
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
                ? `calc(${inube.spacing.s050} / 2)`
                : `${inube.spacing.s200}`};
          `
        : css`
            width: 14px;
            height: 14px;
            top: calc(${inube.spacing.s075} / 2);
            left: ${(props: ISwitchProps) =>
              props.checked
                ? `${inube.spacing.s050}`
                : `${inube.spacing.s300}`};
          `};
  }
`;

export { StyledContainer, StyledInput, StyledSpan, StyledIcon };
