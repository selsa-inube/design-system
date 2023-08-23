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
  requerido: boolean;
  state?: State;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  fullwidth?: boolean;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  focused?: boolean;
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
    requerido = false,
    state = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    fullwidth = false,
    onFocus,
    onBlur,
    readOnly,
  } = props;

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setFocused(true);
    }
    if (typeof onFocus === "function") {
      onFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    if (typeof onBlur === "function") {
      onBlur(e);
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
      requerido={requerido}
      size={size}
      state={state}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={fullwidth}
      focused={focused}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
      readOnly={readOnly}
    />
  );
};

export { Textfield };
