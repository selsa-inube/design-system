import styled from "styled-components";

import { inube } from "@shared/tokens";
import { Themed } from "@shared/Types/Types";

import { ITextfieldProps } from ".";

interface IStyledTextfieldProps extends ITextfieldProps {
  theme?: Themed;
}

const StyledContainer = styled.div`
  cursor: ${({ disabled }: IStyledTextfieldProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: IStyledTextfieldProps) =>
    fullwidth ? "100%" : "fit-content"};
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
  pointer-events: ${({ disabled }: IStyledTextfieldProps) =>
    disabled && "none"};
  opacity: ${({ disabled }: IStyledTextfieldProps) => disabled && "0.5"};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  color: ${({ disabled, theme }: IStyledTextfieldProps) =>
    disabled
      ? theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
  padding-right: ${({ iconAfter }: IStyledTextfieldProps) =>
    iconAfter ? "2px" : "16px"};
  padding-left: ${({ iconBefore }: IStyledTextfieldProps) =>
    iconBefore ? "2px" : "16px"};
  width: ${({ fullwidth }: IStyledTextfieldProps) =>
    fullwidth ? "calc(100% - 32px)" : "252px"};
  height: ${({ size }: IStyledTextfieldProps) =>
    size === "compact" ? "40px" : "48px"};
  border: none;

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
`;

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${inube.spacing.s200};
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

  & svg {
    width: 14px;
    height: 14px;
    margin-top: ${inube.spacing.s100};
  }
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledMessageContainer,
};
