import { useState } from "react";

import { TextfieldUI } from "./interface";
import { InputType, Size, State, inputTypes, states } from "./props";

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
  required: boolean;
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

const defaultdisabled = false;
const defaultType: InputType = "text";
const defaultRequired = false;
const defaultState: State = "pending";
const defaultfullwidth = false;

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
    required = false,
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
    <TextfieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={transformeddisabled}
      type={transformedTypes}
      value={value}
      onChange={onChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      required={transformedRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      fullwidth={transformedfullwidth}
      focused={focused}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
      readOnly={transformedReadOnly}
    />
  );
};

export { Textfield };
