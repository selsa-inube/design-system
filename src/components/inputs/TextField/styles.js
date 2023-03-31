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

const getColors = (isDisabled, state, isFocused) => {
  if (isDisabled) {
    return colors.ref.palette.neutral.n60;
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
    return colors.ref.palette.neutral.n60;
  }

  if (state === "valid") {
    return colors.sys.actions.confirm.filled;
  }

  if (state === "invalid") {
    return colors.sys.actions.remove.filled;
  }
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: ${(props) => (props.isFullWidth === true ? "100%" : "fit-content")};
  cursor: ${({ isDisabled }) => (isDisabled ? "no-drop" : "context-menu")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  pointer-events: ${({ isDisabled }) => isDisabled && "none"};

  & p {
    padding-left: 5px;
  }
`;

const StyledInputContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;
  font-size: 14px;
  border-radius: 8px;
  align-self: stretch;
  color: ${colors.sys.text.dark};
  background-color: ${colors.ref.palette.neutral.n10};
  width: 280px;
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
  ${({ size }) => sizeOptions[size]};
  border: 1px solid
    ${({ isDisabled, state, isFocused }) =>
      getColors(isDisabled, state, isFocused)};
  ${({ isDisabled }) => isDisabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    padding-left: ${({ iconBefore }) => (iconBefore ? "20px" : "0px")};
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
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  right: ${({ iconAfter }) => iconAfter && "30px"};
  left: ${({ iconBefore }) => iconBefore && "30px"};
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n60};
`;

const StyledErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  height: 14px;

  color: ${({ isDisabled, state }) => getIsDisabled(isDisabled, state)};
  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
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
