import styled from "styled-components";
import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";
import { States } from "./props";
import { ITextareaProps } from ".";

const getGrid = (label: string | undefined, counter: boolean | undefined) => {
  if (label && counter) {
    return "auto 1fr auto";
  }

  if (label && !counter) {
    return "auto 1fr";
  }

  if (!label && counter) {
    return "1fr auto";
  }

  return "1fr";
};

const getColors = (
  disabled: boolean | undefined,
  state: States | undefined,
  isFocused: boolean | undefined
) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (state === "invalid") {
    return colors.sys.actions.remove.filled;
  }

  if (isFocused) {
    return colors.ref.palette.blue.b300;
  }
  return colors.ref.palette.neutral.n40;
};

const getdisabled = (
  disabled: boolean | undefined,
  state: States | undefined
) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (state === "valid") {
    return colors.sys.actions.confirm.filled;
  }

  if (state === "invalid") {
    return colors.sys.actions.remove.filled;
  }
};

const StyledContainer = styled.div`
  cursor: ${({ disabled }: ITextareaProps) => disabled && "not-allowed"};
  width: ${({ isFullWidth }: ITextareaProps) =>
    isFullWidth ? "100%" : "fit-content"};
`;

const StyledContainerLabel = styled.div`
  display: grid;
  grid-template-columns: ${({ label, counter }: ITextareaProps) =>
    getGrid(label, counter)};
  gap: 4px;
  pointer-events: ${({ disabled }: ITextareaProps) => disabled && "none"};
  align-items: center;
  margin-bottom: 4px;
`;

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding: 8px 12px 8px 16px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  width: ${({ isFullWidth }: ITextareaProps) =>
    isFullWidth ? "calc(100% - 32px)" : "452px"};
  height: 120px;
  color: ${({ disabled }: ITextareaProps) =>
    disabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  border: 2px solid
    ${({ disabled, state, isFocused }: ITextareaProps) =>
      getColors(disabled, state, isFocused)};
  ${({ disabled }: ITextareaProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    color: ${colors.sys.text.secondary};
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
  color: ${({ disabled, state }: ITextareaProps) =>
    getdisabled(disabled, state)};

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ disabled, state }: ITextareaProps) =>
    getdisabled(disabled, state)}; ;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};
