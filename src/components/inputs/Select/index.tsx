import { useState, useRef, useEffect } from "react";

import { IOptionItemProps } from "./OptionItem";
import { Size, Status } from "./props";
import { SelectUI } from "./interface";

export interface ISelectProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  value: string | number;
  required?: boolean;
  status?: Status;
  message?: string;
  size?: Size;
  fullwidth?: boolean;
  options: IOptionItemProps[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    value,
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

  const [focused, setFocused] = useState(false);
  const [displayList, setDisplayList] = useState(false);

  const selectRef = useRef<{ contains: (e: EventTarget) => EventTarget }>(null);

  const handleFocus = (e: FocusEvent) => {
    setFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e: FocusEvent) => {
    setFocused(false);

    onBlur && onBlur(e);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target!)) {
      setDisplayList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectRef]);

  const handleInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setDisplayList(false);
  };

  const handleClick = (e: MouseEvent) => {
    onClick && onClick(e);
    setDisplayList(!displayList);
  };

  return (
    <SelectUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      required={required}
      size={size}
      status={status}
      message={message}
      fullwidth={fullwidth}
      focused={focused}
      onFocus={handleFocus}
      onBlur={handleBlur}
      options={options}
      displayList={displayList}
      onClick={handleClick}
      onOptionClick={handleInsideClick}
      onCloseOptions={() => setDisplayList(!displayList)}
      ref={selectRef}
    />
  );
};

export { Select };
