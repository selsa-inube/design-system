import styled from "styled-components";
import { typography } from "@shared/typography/typography";
import { ITextareaProps } from ".";
import { inube } from "@shared/tokens";

const StyledContainer = styled.div`
  cursor: ${({ disabled }: ITextareaProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: ITextareaProps) =>
    fullwidth ? "100%" : "fit-content"};
`;

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding: 8px 12px 8px 16px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  width: ${({ fullwidth }: ITextareaProps) =>
    fullwidth ? "calc(100% - 32px)" : "452px"};
  height: 120px;
  color: ${({ disabled, theme }: ITextareaProps) =>
    disabled
      ? theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
  border: 2px solid
    ${({ disabled, status, isFocused, theme }: ITextareaProps) => {
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

      if (isFocused) {
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
  ${({ disabled }: ITextareaProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    color: ${({ theme }: ITextareaProps) =>
      theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

const StyledErrorMessageContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  align-items: center;
  padding-left: 12px;
  pointer-events: none;
  color: ${({ disabled, status, theme }: ITextareaProps) => {
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

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ disabled, status, theme }: ITextareaProps) => {
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
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};
