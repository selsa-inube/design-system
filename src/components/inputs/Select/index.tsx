import { useState, useRef, useEffect } from "react";

import { SelectUI } from "./interface";
import { Size, Status, Themed } from "./props";

export interface ISelectOptions {
  id: string;
  label: string;
  disabled: boolean;
}

export interface ISelectProps extends Themed {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  required?: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  options: ISelectOptions[];
  onChange?: (event: MouseEvent) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onClick?: (event: MouseEvent) => void;
}

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
    message,
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

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true);

    onFocus && onFocus(e);
  };

  const handleBlur = (e: FocusEvent) => {
    setIsFocused(false);

    onBlur && onBlur(e);
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

  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionClick = (idOption: string) => {
    const option = options.find((option) => option.id === idOption);
    setSelectedOption(option!.label);
  };

  const handleClick = (e: MouseEvent) => {
    onClick && onClick(e);

    toggleOptionsMenu();
  };

  return (
    <SelectUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={selectedOption || value}
      onChange={onChange}
      required={required}
      size={size}
      status={status}
      message={message}
      fullwidth={fullwidth}
      isFocused={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      options={options}
      openOptions={open}
      onClick={handleClick}
      selectedOption={selectedOption}
      onOptionClick={handleOptionClick}
      onCloseOptions={toggleOptionsMenu}
      ref={selectRef}
    />
  );
};

export { Select };
