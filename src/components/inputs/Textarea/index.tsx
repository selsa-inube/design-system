import { useState } from "react";
import { TextareaUI } from "./interface";
import { Appearence, Status } from "./props";

interface ITextareaProps {
  label?: string;
  name?: string;
  id: string;
  placeholder?: string;
  disabled?: boolean;
  isFocused?: boolean;
  status?: Status;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  errorMessage?: string;
  validMessage?: string;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange,
    value,
    maxLength = 0,
    minLength = 0,
    required = false,
    status = "pending",
    errorMessage,
    validMessage,
    fullwidth = false,
    onFocus,
    onBlur,
    readOnly,
    counter,
    lengthThreshold = 0,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  let valueLength = typeof value === "string" ? value.length : 0;

  let appearance: Appearence =
    maxLength - valueLength <= lengthThreshold && valueLength <= maxLength
      ? "warning"
      : valueLength > maxLength
      ? "error"
      : "gray";

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      required={required}
      status={status}
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
      valueLength={valueLength}
      appearance={appearance}
    />
  );
};

export type { ITextareaProps };
export { Textarea };
