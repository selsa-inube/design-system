import styled from "styled-components";

import { inube } from "@shared/tokens";
import { Themed } from "@shared/types/types";

import { ITextfieldProps } from ".";

interface IStyledTextfieldProps extends ITextfieldProps {
  theme?: Themed;
}

const StyledContainer = styled.div`
  cursor: ${({ disabled }: IStyledTextfieldProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: IStyledTextfieldProps) =>
    fullwidth ? "100%" : "280px"};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${inube.spacing.s050};
  pointer-events: ${({ disabled }: IStyledTextfieldProps) =>
    disabled && "none"};
`;

const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  padding-left: ${inube.spacing.s200};
  padding-right: ${inube.spacing.s200};
  pointer-events: ${({ disabled }: IStyledTextfieldProps) =>
    disabled && "none"};
  opacity: ${({ disabled }: IStyledTextfieldProps) => disabled && "0.5"};
  grid-template-columns: ${({
    iconBefore,
    iconAfter,
  }: IStyledTextfieldProps) => {
    if (iconBefore && iconAfter) {
      return "auto 1fr auto";
    }

    if (iconBefore && !iconAfter) {
      return "auto 1fr";
    }

    if (!iconBefore && iconAfter) {
      return "1fr auto";
    }

    return "1fr";
  }};
  border: 1px solid
    ${({ disabled, status, focused, theme }: IStyledTextfieldProps) => {
      if (disabled) {
        return (
          theme?.color?.stroke?.gray?.disabled ||
          inube.color.stroke.gray.disabled
        );
      }

      if (status === "invalid") {
        return (
          theme?.color?.stroke?.error?.regular ||
          inube.color.stroke.error.regular
        );
      }

      if (focused) {
        return (
          theme?.color?.stroke?.primary?.hover ||
          inube.color.stroke.primary.hover
        );
      }
      return (
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular
      );
    }};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  background-color: ${({ readOnly }: IStyledTextfieldProps) =>
    readOnly && inube.color.surface.gray.clear};
  color: ${({ disabled, theme }: IStyledTextfieldProps) =>
    disabled
      ? theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};

  width: ${({ fullwidth }: IStyledTextfieldProps) => fullwidth && "100%"};
  height: ${({ size }: IStyledTextfieldProps) =>
    size === "compact" ? "40px" : "48px"};

  border: none;
  &[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  ::placeholder {
    color: ${({ theme }: IStyledTextfieldProps) =>
      theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledMessageContainer = styled.div`
  pointer-events: none;
  color: ${({ disabled, status, theme }: IStyledTextfieldProps) => {
    if (disabled) {
      return (
        theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      );
    }

    if (status === "valid") {
      return (
        theme?.color?.text?.success?.regular || inube.color.text.success.regular
      );
    }

    if (status === "invalid") {
      return (
        theme?.color?.text?.error?.regular || inube.color.text.error.regular
      );
    }
  }};
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
