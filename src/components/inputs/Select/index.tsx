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
  readonly?: boolean;
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
  onClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select = (props: ISelectProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    readonly = false,
    value,
    required = false,
    status = "pending",
    message,
    size = "wide",
    fullwidth = false,
    options,
    onBlur,
    onFocus,
    onChange,
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

  const onInsideClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setDisplayList(false);
  };

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readonly) return;
    setDisplayList(!displayList);
    onClick && onClick(e);
  };

  return (
    <SelectUI
      ref={selectRef}
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      readonly={readonly}
      value={value}
      required={required}
      size={size}
      status={status}
      message={message}
      fullwidth={fullwidth}
      focused={focused}
      options={options}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={onChange}
      onClick={handleClick}
      displayList={displayList}
      onOptionClick={onInsideClick}
    />
  );
};

export { Select };
