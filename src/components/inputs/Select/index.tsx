import { useState, useRef, useEffect } from "react";

import { SelectUI } from "./interface";
import { Size, Status } from "./props";

export interface ISelectOptions {
  id: string;
  label: string;
  disabled: boolean;
}

export interface ISelectProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  required?: boolean;
  status?: Status;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  fullwidth?: boolean;
  options: ISelectOptions[];
  onChange?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onClick?: (event: MouseEvent) => void;
}

const defaultrequired = false;

const defaultfullwidth = false;

const Select = (props: ISelectProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    value = "",
    onChange,
    required = false,
    status = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
    options,
    onClick,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  const interceptFocus = (e: FocusEvent) => {
    setIsFocused(true);

    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: FocusEvent) => {
    setIsFocused(false);

    if (typeof onBlur === "function") {
      onBlur(e);
    }
  };

  const toggleOptionsMenu = () => {
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

  const transformedrequired =
    typeof required === "boolean" ? required : defaultrequired;

  const transformedfullwidth =
    typeof fullwidth === "boolean" ? fullwidth : defaultfullwidth;

  return (
    <SelectUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={transformedrequired}
      size={size}
      status={status}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={transformedfullwidth}
      isFocused={isFocused}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
      options={options}
      openOptions={open}
      onClick={onClick}
      onCloseOptions={toggleOptionsMenu}
      ref={selectRef}
    />
  );
};

export { Select };
