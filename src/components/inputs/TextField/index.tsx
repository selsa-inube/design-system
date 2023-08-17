import { useState } from "react";

import { TextFieldUI } from "./interface";
import { InputType, Size, State, inputTypes, states } from "./props";

export interface ITextFieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  disabled?: boolean;
  type?: InputType;
  value?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  focused?: boolean;
}

const defaultdisabled = false;
const defaultType: InputType = "text";
const defaultRequired = false;
const defaultState: State = "pending";
const defaultfullwidth = false;

const TextField = (props: ITextFieldProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled = false,
    type = "text",
    value,
    handleChange,
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

  const [focused, setFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setFocused(true);
    }
    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  const transformeddisabled =
    typeof disabled === "boolean" ? disabled : defaultdisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedTypes = inputTypes.includes(type) ? type : defaultType;

  const transformedRequired =
    typeof required === "boolean" ? required : defaultRequired;

  const transformedfullwidth =
    typeof fullwidth === "boolean" ? fullwidth : defaultfullwidth;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;

  return (
    <TextFieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={transformeddisabled}
      type={transformedTypes}
      value={value}
      handleChange={handleChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      required={transformedRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={transformedfullwidth}
      focused={focused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={transformedReadOnly}
    />
  );
};

export { TextField };
