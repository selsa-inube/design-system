import styled from "styled-components";
import { inube } from "@shared/tokens";
import { ITextareaProps } from ".";
import { Themed } from "@shared/types/types";

interface IStyledTextareaProps extends ITextareaProps {
  theme?: Themed;
}

const StyledContainer = styled.div`
  cursor: ${({ disabled }: IStyledTextareaProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: IStyledTextareaProps) =>
    fullwidth ? "100%" : "fit-content"};
`;

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding: ${() => `${inube.spacing.s100} ${inube.spacing.s150} ${inube.spacing.s100}
    ${inube.spacing.s200}`};
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  width: ${({ fullwidth }: IStyledTextareaProps) =>
    fullwidth ? "calc(100% - 32px)" : "452px"};
  height: 120px;
  color: ${({ disabled, theme }: IStyledTextareaProps) =>
    disabled
      ? theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
  border: 2px solid
    ${({ disabled, status, isFocused, theme }: IStyledTextareaProps) => {
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
  ${({ disabled }: IStyledTextareaProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    color: ${({ theme }: IStyledTextareaProps) =>
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

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${inube.spacing.s200};
  pointer-events: none;
  color: ${({ disabled, status, theme }: IStyledTextareaProps) => {
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
    margin-top: ${inube.spacing.s100};
  }
`;

export { StyledContainer, StyledTextarea, StyledMessageContainer };
