import PropTypes from "prop-types";

import { MdOutlineError } from "react-icons/md";

import Label from "../Label/index";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessage,
  StyledRequired,
} from "./styles";

const defaultIsDisabled = false;
const defaultIsFocused = false;
const defaultType = "text";
const defaultIsRequired = false;
const defaultIsFullWidth = false;

const typesInput = ["text", "email", "number", "password", "search", "tel"];
const sizes = ["wide", "compact"];

const invalidState = (isInvalid, errorMessage) => {
  let state = "default";
  if (isInvalid && errorMessage) {
    state = "invalid";
    return state;
  }
  return state;
};

const TextField = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    isFocused = false,
    type = "text",
    value,
    handleChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    max,
    min,
    isRequired = false,
    isInvalid,
    errorMessage,
    size,
    isFullWidth = false,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedIsFocused =
    typeof isFocused === "boolean" ? isFocused : defaultIsFocused;

  const transformedTypes = typesInput.includes(type) ? type : defaultType;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  return (
    <StyledContainer isFullWidth={isFullWidth}>
      <StyledContainerLabel>
        {label && (
          <Label
            htmlFor={id}
            state={invalidState(isInvalid, errorMessage)}
            isDisabled={isDisabled}
            isFocused={isFocused}
          >
            {label}
          </Label>
        )}
        {isRequired && (
          <StyledRequired role="bodySmall">(Required)</StyledRequired>
        )}
      </StyledContainerLabel>

      <StyledInputContainer>
        {iconBefore && (
          <StyledIcon isDisabled={isDisabled} iconBefore={iconBefore}>
            {iconBefore}
          </StyledIcon>
        )}

        <StyledInput
          label={label}
          name={name}
          id={id}
          placeholder={placeholder}
          isDisabled={transformedIsDisabled}
          isFocused={transformedIsFocused}
          type={transformedTypes}
          value={value}
          onChange={handleChange}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          isRequired={transformedIsRequired}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          size={size}
          isFullWidth={transformedIsFullWidth}
        />
        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} isDisabled={isDisabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>
      {errorMessage && isInvalid && (
        <StyledErrorMessage
          role="bodySmall"
          isInvalid={isInvalid}
          isDisabled={isDisabled}
          isFocused={isFocused}
          errorMessage={errorMessage}
        >
          {<MdOutlineError />} ({errorMessage})
        </StyledErrorMessage>
      )}
    </StyledContainer>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  type: PropTypes.oneOf(typesInput),
  value: PropTypes.string,
  handleChange: PropTypes.func,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  isRequired: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  isFullWidth: PropTypes.bool,
};

export { TextField, typesInput, sizes };
