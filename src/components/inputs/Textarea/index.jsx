import React, { useState } from "react";
import { TextareaUI } from "./interface";
import PropTypes from "prop-types";

const status = ["valid", "invalid", "pending"];

const defaultdisabled = false;
const defaultIsRequired = false;
const defaultStatus = "pending";
const defaultfullwidth = false;

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
    status = "pending",
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

  const transformeddisabled =
    typeof disabled === "boolean" ? disabled : defaultdisabled;

  const transformedStatus = status.includes(status) ? status : defaultStatus;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedfullwidth =
    typeof fullwidth === "boolean" ? fullwidth : defaultfullwidth;

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
      isRequired={transformedIsRequired}
      status={transformedStatus}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={transformedfullwidth}
      isFocused={isFocused}
      onChange={onChange}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
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

export { status };
