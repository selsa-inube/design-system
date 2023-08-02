import styled from "styled-components";

import { ISelectInterfaceProps } from "./interface";
import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

const getColors = (isDisabled: boolean, state: string, isFocused: boolean) => {
  if (isDisabled) {
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

const getIsDisabled = (isDisabled: boolean, state: string) => {
  if (isDisabled) {
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
  cursor: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled && "not-allowed"};
  width: ${({ isFullWidth }: ISelectInterfaceProps) =>
    isFullWidth ? "100%" : "fit-content"};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-left: 16px;
  pointer-events: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled && "none"};

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
    ${({ isDisabled, state, isFocused }: ISelectInterfaceProps) =>
      getColors(isDisabled!, state!, isFocused!)};
  ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled && "pointer-events: none; opacity: 0.5;"}
  cursor: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled ? "not-allowed" : "pointer"};
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
  color: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  cursor: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled ? "not-allowed" : "pointer"};
  caret-color: transparent;
  width: ${({ isFullWidth }: ISelectInterfaceProps) =>
    isFullWidth ? "252px" : "calc(100% - 32px)"};
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
  color: ${({ isDisabled }: ISelectInterfaceProps) =>
    isDisabled && colors.ref.palette.neutral.n70};
`;

const StyledErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  pointer-events: none;
  color: ${({ isDisabled, state }: ISelectInterfaceProps) =>
    getIsDisabled(isDisabled!, state!)};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
    padding-left: 5px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ isDisabled, state }: ISelectInterfaceProps) =>
    getIsDisabled(isDisabled!, state!)}; ;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};
