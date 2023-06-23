import React, { useState } from "react";
import { TextAreaUI } from "./interface";
import PropTypes from "prop-types";

const states = ["valid", "invalid", "pending"];
const sizes = ["wide", "compact"];

const defaultIsDisabled = false;
const defaultIsRequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

const TextArea = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    handleChange,
    value,
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
    readOnly,
    counter,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e) => {
    setIsFocused(false);
    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;

  return (
    <TextAreaUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      value={value}
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
      handleChange={handleChange}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={transformedReadOnly}
      counter={counter}
    />
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
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
  readOnly: PropTypes.bool,
  counter: PropTypes.bool,
};

export { TextArea, sizes, states };