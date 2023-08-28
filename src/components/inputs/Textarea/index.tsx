import { useState } from "react";
import { TextareaUI } from "./interface";
import { States } from "./props";

interface ITextareaProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  isFocused?: boolean;
  state?: States;
  value?: string | number;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  isRequired?: boolean;
  errorMessage?: string;
  validMessage?: string;
  isFullWidth?: boolean;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  counter?: boolean;
  lengthThreshold?: number;
}

const Textarea = (props: ITextareaProps) => {
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
    lengthThreshold = 0,
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
    <TextareaUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={isRequired}
      state={state}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={isFullWidth}
      isFocused={isFocused}
      handleChange={handleChange}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={readOnly}
      counter={counter}
      lengthThreshold={lengthThreshold}
    />
  );
};

export type { ITextareaProps };
export { Textarea };
