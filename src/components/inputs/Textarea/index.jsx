import React, { useState } from "react";
import { TextareaUI } from "./interface";
import PropTypes from "prop-types";

const states = ["valid", "invalid", "pending"];

export const Textarea = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    onChange,
    value,
    maxLength,
    minLength,
    isRequired = false,
    state = "pending",
    errorMessage,
    validMessage,
    fullwidth = false,
    onFocus,
    onBlur,
    readOnly,
    counter,
    lengthThreshold,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e) => {
    setIsFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  return (
    <TextareaUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      isRequired={isRequired}
      state={state}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={fullwidth}
      isFocused={isFocused}
      onChange={onChange}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
      readOnly={readOnly}
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
  onChange: PropTypes.func,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  isRequired: PropTypes.bool,
  errorMessage: PropTypes.string,
  validMessage: PropTypes.string,
  fullwidth: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  counter: PropTypes.bool,
};

export { states };
