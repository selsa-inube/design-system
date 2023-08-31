import { useState } from "react";
import { TextareaUI } from "./interface";
import { Status, Themed } from "./props";

interface ITextareaProps extends Themed {
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
    maxLength,
    minLength,
    required = false,
    status = "pending",
    errorMessage,
    validMessage,
    fullwidth = false,
    onFocus,
    onBlur,
    readOnly,
    lengthThreshold = 0,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

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
      lengthThreshold={lengthThreshold}
    />
  );
};

export type { ITextareaProps };
export { Textarea };
