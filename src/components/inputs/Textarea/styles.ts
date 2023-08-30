import styled from "styled-components";
import { colors } from "@shared/colors/colors";
import { Status } from "./props";
import { ITextareaProps } from ".";
import { inube } from "@shared/tokens";

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
  status: Status | undefined,
  isFocused: boolean | undefined
) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (status === "invalid") {
    return colors.sys.actions.remove.filled;
  }

  if (isFocused) {
    return colors.ref.palette.blue.b300;
  }
  return colors.ref.palette.neutral.n40;
};

const getdisabled = (
  disabled: boolean | undefined,
  status: Status | undefined
) => {
  if (disabled) {
    return colors.ref.palette.neutral.n70;
  }

  if (status === "valid") {
    return colors.sys.actions.confirm.filled;
  }

  if (status === "invalid") {
    return colors.sys.actions.remove.filled;
  }
};

const StyledContainer = styled.div`
  cursor: ${({ disabled }: ITextareaProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: ITextareaProps) =>
    fullwidth ? "100%" : "fit-content"};
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
  font-family: ${inube.typography.body.large.font};
  font-size: ${inube.typography.body.large.size};
  font-weight: ${inube.typography.body.large.weight};
  line-height: ${inube.typography.body.large.lineHeight};
  letter-spacing: ${inube.typography.body.large.tracking};
  width: ${({ fullwidth }: ITextareaProps) =>
    fullwidth ? "calc(100% - 32px)" : "452px"};
  height: 120px;
  color: ${({ disabled }: ITextareaProps) =>
    disabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  border: 2px solid
    ${({ disabled, status, isFocused }: ITextareaProps) =>
      getColors(disabled, status, isFocused)};
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
  color: ${({ disabled, status }: ITextareaProps) =>
    getdisabled(disabled, status)};

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ disabled, status }: ITextareaProps) =>
    getdisabled(disabled, status)}; ;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};
