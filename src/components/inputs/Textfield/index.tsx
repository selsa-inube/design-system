import { useState } from "react";

import { TextfieldUI } from "./interface";
import { InputType, Size, State } from "./props";

export interface ITextfieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  type?: InputType;
  value?: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  required: boolean;
  state?: State;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  fullwidth?: boolean;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  isFocused?: boolean;
}

const Textfield = (props: ITextfieldProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    type = "text",
    value,
    onChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    max,
    min,
    required = false,
    state = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    fullwidth = false,
    handleFocus,
    handleBlur,
    readOnly,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  return (
    <TextfieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      value={value}
      onChange={onChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      required={required}
      size={size}
      state={state}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={fullwidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={readOnly}
    />
  );
};

export { Textfield };
