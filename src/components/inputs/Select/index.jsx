import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { SelectUI } from "./interface";

const states = ["valid", "invalid", "pending"];
const sizes = ["wide", "compact"];

const defaultIsDisabled = false;
const defaultIsRequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

const Select = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    value,
    handleChange,
    isRequired = false,
    state = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    isFullWidth = false,
    handleFocus,
    handleBlur,
    readOnly,
    options,
    handleInput,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);

  const selectRef = useRef(null);

  const interceptFocus = (e) => {
    setIsFocused(true);

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

  const handleCloseOptions = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;
  return (
    <SelectUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      value={value}
      handleChange={handleChange}
      isRequired={transformedIsRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={transformedReadOnly}
      options={options}
      openOptions={open}
      onCloseOptions={handleCloseOptions}
      ref={selectRef}
      handleInput={handleInput}
    />
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  isRequired: PropTypes.bool,
  state: PropTypes.oneOf(states),
  errorMessage: PropTypes.string,
  validMessage: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  isFullWidth: PropTypes.bool,
  handleFocus: PropTypes.func,
  handleBlur: PropTypes.func,
  readOnly: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      isDisabled: PropTypes.bool,
    })
  ).isRequired,
};

export { Select, states, sizes };
