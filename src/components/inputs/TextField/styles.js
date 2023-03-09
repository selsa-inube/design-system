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

const getColor = (isDisabled, isFocused, isInvalid) => {
  if (isDisabled) {
    return colors.ref.palette.neutral.n60;
  }

  if (isFocused) {
    return colors.ref.palette.blue.b300;
  }

  if (isInvalid) {
    return colors.sys.actions.remove.filled;
  }

  return colors.ref.palette.neutral.n40;
};

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.isFullWidth === true ? "100%" : "280px")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isRequired }) => (isRequired ? "115px" : "51px")};
  height: 20px;
  margin-left: 16px;
  padding-right: 5px;
  gap: 40px;
  margin-bottom: 4px;

  & Label {
    height: 20px;
    width: 35px;
    font-size: ${typography.sys.typescale.bodyLarge.size};
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px 8px 16px;
  gap: 8px;
  font-size: 14px;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: ${colors.sys.text.dark};
  background-color: ${colors.ref.palette.neutral.n10};
  width: ${(props) => (props.isFullWidth === true ? "100%" : "280px")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
  ${({ size }) => sizeOptions[size]};
  disabled: ${({ isDisabled }) => isDisabled};
  border: 1px solid
    ${({ isDisabled, isFocused, isInvalid }) =>
      getColor(isDisabled, isFocused, isInvalid)};
  ${({ isDisabled }) => isDisabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    padding-left: ${({ iconBefore }) => (iconBefore ? "30px" : "0px")};
    color: ${colors.sys.text.secondary};
  }

  &:focus {
    outline: none;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }
`;

const StyledIcon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 24px;
  width: 24px;
  right: ${({ iconAfter }) => iconAfter && "16px"};
  left: ${({ iconBefore }) => iconBefore && "16px"};
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n60};
`;

const StyledErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  height: 14px;
  color: ${({ isDisabled, isFocused, isInvalid }) =>
    getColor(isDisabled, isFocused, isInvalid)};

  & svg {
    width: 14px;
    height: 14px;
    margin-top: 8px;
  }
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
};
