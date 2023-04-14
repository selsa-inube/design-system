import React, { useState } from "react";
import { TextFieldUI } from "./interface";
import PropTypes from "prop-types";

const inputTypes = ["text", "email", "number", "password", "search", "tel"];
const states = ["valid", "invalid", "pending"];
const sizes = ["wide", "compact"];

const defaultIsDisabled = false;
const defaultType = "text";
const defaultIsRequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

const getLabelState = (state) => {
  if (state === "invalid") {
    return state;
  }

  return "default";
};

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
    size = "wide",
    isFullWidth = false,
    handleFocus,
    handleBlur,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e) => {
    setIsFocused(true);
    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e) => {
    setIsFocused(false);
    if (typeof handleBlur === "function" && isRequired) {
      handleBlur(e);
    }
  };

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedTypes = inputTypes.includes(type) ? type : defaultType;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  return (
    <TextFieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      type={transformedTypes}
      value={value}
      handleChange={handleChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={transformedIsRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
    />
  );
};

TextFieldUI.propTypes = {
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
  validMessage: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  isFullWidth: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
};

export { TextField, inputTypes, sizes, states, getLabelState };
