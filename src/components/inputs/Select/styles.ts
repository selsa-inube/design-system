import styled from "styled-components";

import { ISelectInterfaceProps } from "./interface";
import { colors } from "@shared/colors/colors";
import { typography } from "@shared/typography/typography";
import { inube } from "@src/shared/tokens";

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

const getColors = (disabled: boolean, status: string, isFocused: boolean) => {
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

const getIsDisabled = (disabled: boolean, status: string) => {
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
  cursor: ${({ disabled }: ISelectInterfaceProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: ISelectInterfaceProps) =>
    fullwidth ? "100%" : "fit-content"};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-left: 16px;
  pointer-events: ${({ disabled }: ISelectInterfaceProps) =>
    disabled && "none"};

  & label {
    margin-right: 5px;
  }
`;

const StyledInputContainer = styled.div`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  background: ${colors.ref.palette.neutral.n10};
  grid-template-columns: 1fr auto;
  border: 1px solid
    ${({ disabled, status, isFocused }: ISelectInterfaceProps) =>
      getColors(disabled!, status!, isFocused!)};
  ${({ disabled }: ISelectInterfaceProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}
  cursor: ${({ disabled }: ISelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  padding: 0px 12px 0px 16px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.tracking};
  color: ${({ disabled }: ISelectInterfaceProps) =>
    disabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  cursor: ${({ disabled }: ISelectInterfaceProps) =>
    disabled ? "not-allowed" : "pointer"};
  caret-color: transparent;
  width: ${({ fullwidth }: ISelectInterfaceProps) =>
    fullwidth ? "252px" : "calc(100% - 32px)"};
  ${({ size }: ISelectInterfaceProps) => sizeOptions[size!]};

  border: none;

  ::placeholder {
    color: ${colors.sys.text.secondary};
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

const StyledIcon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  height: 24px;
  width: 24px;
  color: ${({ disabled }: ISelectInterfaceProps) =>
    disabled && colors.ref.palette.neutral.n70};
`;

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${inube.spacing.s200};
  pointer-events: none;
  color: ${({ disabled, status, theme }: ISelectInterfaceProps) => {
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
  StyledIcon,
  StyledMessageContainer,
};
