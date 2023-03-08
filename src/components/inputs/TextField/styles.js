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

const getColor = (isDisabled, isFocused, isInvalid, errorMessage) => {
  let color = colors.ref.palette.neutral.n40;

  if (isDisabled) {
    color = colors.ref.palette.neutral.n60;
    return color;
  }

  if (isFocused) {
    color = colors.ref.palette.blue.b300;
    return color;
  }

  if (isInvalid && errorMessage) {
    color = colors.sys.actions.remove.filled;
    return color;
  }

  return color;
};

const StyledContainer = styled.div`
  display: inline-block;
  position: relative;
  background-color: ${colors.ref.palette.neutral.n10};
  width: ${(props) => (props.isFullWidth === true ? "100%" : "280px")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
`;

const StyledContainerLabel = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isRequired }) => (isRequired ? "115px" : "51px")};
  background-color: ${colors.ref.palette.neutral.n10};
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
    ${({ isDisabled, isFocused, isInvalid, errorMessage }) =>
      getColor(isDisabled, isFocused, isInvalid, errorMessage)};
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

const StyledRequired = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
  color: ${({ isDisabled, isFocused, isInvalid, errorMessage }) =>
    getColor(isDisabled, isFocused, isInvalid, errorMessage)};
`;

const StyledErrorMessage = styled(StyledRequired)`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 5px;
  color: ${({ isDisabled, isFocused, isInvalid, errorMessage }) =>
    getColor(isDisabled, isFocused, isInvalid, errorMessage)};

  & svg {
    width: 14px;
    height: 14px;
    padding-right: 4px;
  }
`;

export {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessage,
  StyledRequired,
};
