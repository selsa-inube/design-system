import styled from "styled-components";
import { colors } from "../../../shared/colors/colors";
import { typography } from "../../../shared/typography/typography";

const getGrid = (label, counter) => {
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

const StyledContainer = styled.div`
  cursor: ${({ isDisabled }) => isDisabled && "not-allowed"};
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
`;

const StyledContainerLabel = styled.div`
  display: grid;
  grid-template-columns: ${({ label, counter }) => getGrid(label, counter)};
  gap: 4px;
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};
  align-items: center;
  margin-bottom: 4px;

  & label {
    padding-left: 16px;
  }
`;

const StyledTextarea = styled.textarea`
  border-radius: 8px;
  padding: 8px 12px 8px 16px;
  font-family: ${typography.sys.typescale.bodyLarge.font};
  font-size: ${typography.sys.typescale.bodyLarge.size};
  font-weight: ${typography.sys.typescale.bodyLarge.weight};
  line-height: ${typography.sys.typescale.bodyLarge.lineHeight};
  letter-spacing: ${typography.sys.typescale.bodyLarge.letterSpacing};
  width: ${({ isFullWidth }) => (isFullWidth ? "calc(100% - 32px)" : "452px")};
  height: 120px;
  color: ${({ isDisabled }) =>
    isDisabled ? colors.ref.palette.neutral.n70 : colors.sys.text.dark};
  background: ${colors.ref.palette.neutral.n10};
  border: 2px solid
    ${({ isDisabled, state, isFocused }) =>
      getColors(isDisabled, state, isFocused)};
  ${({ isDisabled }) => isDisabled && "pointer-events: none; opacity: 0.5;"}

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
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 5px;
  align-items: center;
  padding-left: 12px;
  pointer-events: none;
  color: ${({ isDisabled, state }) => getIsDisabled(isDisabled, state)};

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const StyledValidMessageContainer = styled(StyledErrorMessageContainer)`
  color: ${({ isDisabled, state }) => getIsDisabled(isDisabled, state)}; ;
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
};