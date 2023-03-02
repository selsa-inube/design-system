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

const getColor = (isDisabled, isFocused, errorMessage) => {
  let color = colors.ref.palette.neutral.n300;

  if (isDisabled) {
    color = colors.ref.palette.neutral.n60;
    return color;
  }

  if (isFocused) {
    color = colors.ref.palette.blue.b300;
    return color;
  }

  if (errorMessage) {
    color = colors.sys.actions.remove;
    return color;
  }
  return color;
};

const StyledContainaer = styled.div`
  position: relative;
`;

const StyledContainaerLabel = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 150px;

  & Label {
    margin-left: 16px;
    padding-right: 5px;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 10px;
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
  width: ${(props) => (props.isFullWidth === true ? "100%" : "280px")};
  max-width: ${(props) => (props.isFullWidth === true ? "none" : "auto")};
  ${({ size }) => sizeOptions[size]};
  disabled: ${({ isDisabled }) => isDisabled};
  border: 1px solid
    ${({ isDisabled, isFocused, errorMessage }) =>
      getColor(isDisabled, isFocused, errorMessage)};

  ::placeholder {
    padding-left: ${({ iconBefore }) => (iconBefore ? "16px" : "0px")};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }
  ${({ isDisabled }) => isDisabled && "pointer-events: none; opacity: 0.5;"}
`;

const StyledIcon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 24px;
  width: 24px;
  right: ${({ iconBefore }) => iconBefore && "85%"};
  left: ${({ iconAfter, type }) => iconAfter || (type === "search" && "85%")};
  color: ${({ isDisabled }) => isDisabled && colors.ref.palette.neutral.n60};
`;

const StyledParrafo = styled.p`
  font-family: ${typography.ref.typeface.brand}, sans-serif;
  line-height: ${(props) => typography.sys.typescale[props.role].lineHeight};
  font-size: ${(props) => typography.sys.typescale[props.role].size};
  letter-spacing: ${(props) => typography.sys.typescale[props.role].tracking};
  font-weight: ${(props) => typography.sys.typescale[props.role].weight};
`;

const StyledErrorMensaje = styled(StyledParrafo)`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 5px;
  color: ${colors.sys.messages.error};

  & svg {
    width: 14px;
    height: 14px;
    padding-right: 4px;
  }
`;

export {
  StyledContainaer,
  StyledContainaerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMensaje,
  StyledParrafo,
};
