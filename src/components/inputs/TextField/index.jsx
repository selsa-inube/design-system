import React, { useState } from "react";
import PropTypes from "prop-types";

import { MdOutlineError } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

import { Label } from "../Label";
import { Text } from "../../data/Text";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

const defaultIsDisabled = false;
const defaultType = "text";
const defaultIsRequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

const inputTypes = ["text", "email", "number", "password", "search", "tel"];
const status = ["valid", "invalid", "pending"];
const sizes = ["wide", "compact"];

/* const getState = (isInvalid) => {
  if (isInvalid) {
    return "invalid";
  }

  return "default";
};

const getAppearance = (isDisabled, isFocused, isInvalid) => {
  if (isDisabled) {
    return "disabled";
  }

  if (isFocused) {
    return "primary";
  }

  if (isInvalid) {
    return "error";
  }
}; */

const TextField = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
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
    state = "pending",
    errorMessage,
    validMessage,
    size,
    isFullWidth = false,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = status.includes(state) ? state : defaultState;

  const transformedTypes = inputTypes.includes(type) ? type : defaultType;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  return (
    <StyledContainer isFullWidth={isFullWidth}>
      <StyledContainerLabel size={size} isDisabled={isDisabled}>
        {label && (
          <Label
            htmlFor={id}
            isDisabled={isDisabled}
            isFocused={state === "invalid" ? false : isFocused}
          >
            {label}
          </Label>
        )}

        {isRequired && <Text typo="bodySmall">(Required)</Text>}
      </StyledContainerLabel>

      <StyledInputContainer isDisabled={isDisabled}>
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
          errorMessage={errorMessage}
          size={size}
          state={transformedState}
          isFullWidth={transformedIsFullWidth}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} isDisabled={isDisabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>

      {state === "invalid" && (
        <StyledErrorMessageContainer
          isDisabled={isDisabled}
          isFocused={isFocused}
          errorMessage={errorMessage}
        >
          <MdOutlineError />
          <Text typo="bodySmall" margin="8px 0px 0px 4px">
            ({errorMessage})
          </Text>
        </StyledErrorMessageContainer>
      )}
      {state === "valid" && (
        <StyledValidMessageContainer>
          <AiFillCheckCircle />
          <Text typo="bodySmall" margin="8px 0px 0px 4px">
            {validMessage}
          </Text>
        </StyledValidMessageContainer>
      )}
    </StyledContainer>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  type: PropTypes.oneOf(inputTypes),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  isFullWidth: PropTypes.bool,
};

export { TextField, inputTypes, sizes, status };
