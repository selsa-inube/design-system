import styled from "styled-components";
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

const getGrid = (iconBefore, iconAfter) => {
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

const getColors = (isDisabled, state, isFocused) => {
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

const getIsDisabled = (isDisabled, state) => {
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

const getPadding = (iconBefore, iconAfter) => {
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
  cursor: ${({ isDisabled }) => isDisabled && "not-allowed"};
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  padding-left: 16px;
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};

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
  grid-template-columns: ${({ iconBefore, iconAfter }) =>
    getGrid(iconBefore, iconAfter)};
  border: 1px solid
    ${({ isDisabled, state, isFocused }) =>
      getColors(isDisabled, state, isFocused)};
  ${({ isDisabled }) => isDisabled && "pointer-events: none; opacity: 0.5;"}
`;

const StyledInput = styled.input`
  outline: none;
  border-radius: 8px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.ref.typeface.weight.regular};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.letterSpacing};
  color: ${({ isDisabled }) =>
    isDisabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  ${({ iconBefore, iconAfter }) => getPadding(iconBefore, iconAfter)}
  width: ${({ isFullWidth }) => (isFullWidth ? "calc(100% - 32px)" : "252px")};
  ${({ size }) => sizeOptions[size]};
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${({ iconBefore }) => iconBefore && "10px"};
  padding-right: ${({ iconAfter }) => iconAfter && "10px"};
  height: 24px;
  width: 24px;
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n70};
`;

const StyledErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  pointer-events: none;
  color: ${({ isDisabled, state }) => getIsDisabled(isDisabled, state)};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
    padding-left: 5px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ isDisabled, state }) => getIsDisabled(isDisabled, state)}; ;
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
