import styled from "styled-components";
import { inube } from "@shared/tokens";
import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";
import { Status } from "./props";
import { ITextareaProps } from ".";

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

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding: ${inube.spacing.s100} ${inube.spacing.s150} ${inube.spacing.s100}
    ${inube.spacing.s200};
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
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
  gap: ${inube.spacing.s075};
  align-items: center;
  padding-left: ${inube.spacing.s150};
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
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};
