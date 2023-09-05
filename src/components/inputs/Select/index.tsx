import { useState, useRef, useEffect } from "react";

import { SelectUI } from "./interface";
import { Size, States, states } from "./props";

export interface ISelectOptions {
  id: string;
  label: string;
  isDisabled: boolean;
}

export interface ISelectProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  isDisabled?: boolean;
  value?: string | number;
  required?: boolean;
  state?: States;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  isFullWidth?: boolean;
  options: ISelectOptions[];
  handleChange?: (event: MouseEvent) => void;
  handleFocus?: (event: FocusEvent) => void;
  handleBlur?: (event: FocusEvent) => void;
  handleClick?: (event: MouseEvent) => void;
}

const defaultIsDisabled = false;
const defaultrequired = false;
const defaultState = "pending";
const defaultIsFullWidth = false;

const Select = (props: ISelectProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    value = "",
    handleChange,
    required = false,
    state = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    isFullWidth = false,
    handleFocus,
    handleBlur,
    options,
    handleClick,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  const interceptFocus = (e: FocusEvent) => {
    setIsFocused(true);

    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e: FocusEvent) => {
    setIsFocused(false);

    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  const handleCloseOptions = () => {
    setOpen(!open);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target!)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedrequired =
    typeof required === "boolean" ? required : defaultrequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  return (
    <SelectUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      value={value}
      handleChange={handleChange}
      required={transformedrequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      options={options}
      openOptions={open}
      handleClick={handleClick}
      onCloseOptions={handleCloseOptions}
      ref={selectRef}
    />
  );
};

export { Select };
