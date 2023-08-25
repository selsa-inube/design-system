import styled from "styled-components";
import { ITextfieldProps } from ".";
import { typography } from "@shared/typography/typography";
import { inube } from "@shared/tokens";

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

const getGrid = (props: ITextfieldProps) => {
  const { iconBefore, iconAfter } = props;
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
};

const getColors = (props: ITextfieldProps) => {
  const { disabled, state, focused, theme } = props;
  if (disabled) {
    return theme?.color?.text.gray?.disabled || inube.color.text.gray.disabled;
  }

  if (state === "invalid") {
    return theme?.color?.text.error?.regular || inube.color.text.error.regular;
  }

  if (focused) {
    return theme?.color?.text.primary?.hover || inube.color.text.primary.hover;
  }
  return theme?.color?.surface.light?.hover || inube.color.surface.light.hover;
};

const getdisabled = (props: ITextfieldProps) => {
  const { disabled, state, theme } = props;
  if (disabled) {
    return theme?.color?.text.gray?.disabled || inube.color.text.gray.disabled;
  }

  if (state === "valid") {
    return (
      theme?.color?.text.success?.regular || inube.color.text.success.regular
    );
  }

  if (state === "invalid") {
    return theme?.color?.text.error?.regular || inube.color.text.error.regular;
  }
};

const getPadding = (props: ITextfieldProps) => {
  const { iconBefore, iconAfter } = props;
  const padding = {
    paddingLeft: "16px",
    paddingRight: "16px",
  };

  if (iconBefore) {
    padding.paddingLeft = "2px";
  }

  if (iconAfter) {
    padding.paddingRight = "2px";
  }

  return padding;
};

const StyledContainer = styled.div`
  cursor: ${({ disabled }: ITextfieldProps) => disabled && "not-allowed"};
  width: ${({ fullwidth }: ITextfieldProps) =>
    fullwidth ? "100%" : "fit-content"};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-left: 16px;
  pointer-events: ${({ disabled }: ITextfieldProps) => disabled && "none"};

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
  grid-template-columns: ${(props: ITextfieldProps) => getGrid(props)};
  border: 1px solid ${(props: ITextfieldProps) => getColors(props)};
  ${({ disabled }: ITextfieldProps) =>
    disabled && "pointer-events: none; opacity: 0.5;"}
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.tracking};
  color: ${({ disabled, theme }: ITextfieldProps) =>
    disabled
      ? theme?.color?.text.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text.dark?.regular || inube.color.text.dark.regular};
  ${(props: ITextfieldProps) => getPadding(props)}
  width: ${({ fullwidth }: ITextfieldProps) =>
    fullwidth ? "calc(100% - 32px)" : "252px"};
  ${({ size }: ITextfieldProps) => size && sizeOptions[size]};
  border: none;

  ::placeholder {
    color: ${({ theme }: ITextfieldProps) =>
      theme?.color?.text.gray?.regular || inube.color.text.gray.regular};
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${({ iconBefore }: ITextfieldProps) => iconBefore && "10px"};
  padding-right: ${({ iconAfter }: ITextfieldProps) => iconAfter && "10px"};
  height: 24px;
  width: 24px;
  color: ${({ disabled, theme }: ITextfieldProps) =>
    disabled &&
    (theme?.color?.text.gray?.disabled || inube.color.text.gray.disabled)};
`;

const StyledMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  pointer-events: none;
  color: ${(props: ITextfieldProps) => getdisabled(props)};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
    padding-left: 5px;
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
