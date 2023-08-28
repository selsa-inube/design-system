import React, { useState } from "react";
import { TextareaUI } from "./interface";
import PropTypes from "prop-types";

const states = ["valid", "invalid", "pending"];

const defaultdisabled = false;
const defaultIsRequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

export const Textarea = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
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
    isFullWidth = false,
    handleFocus,
    handleBlur,
    readOnly,
    counter,
    lengthThreshold,
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

  const transformeddisabled =
    typeof disabled === "boolean" ? disabled : defaultdisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;

  return (
    <TextareaUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={transformeddisabled}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={transformedIsRequired}
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
      lengthThreshold={lengthThreshold}
    />
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
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
  isFullWidth: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  counter: PropTypes.bool,
};

export { states };
