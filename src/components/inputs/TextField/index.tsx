import { useState } from "react";

import { TextFieldUI } from "./interface";
import { InputType, Size, State, inputTypes, states } from "./props";

export interface ITextFieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  isDisabled?: boolean;
  type?: InputType;
  value?: string | number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  isRequired: boolean;
  state?: State;
  errorMessage?: string;
  validMessage?: string;
  size?: Size;
  isFullWidth?: boolean;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  isFocused?: boolean;
}

const defaultIsDisabled = false;
const defaultType: InputType = "text";
const defaultIsRequired = false;
const defaultState: State = "pending";
const defaultIsFullWidth = false;

const TextField = (props: ITextFieldProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    type = "text",
    value,
    handleChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    max,
    min,
    isRequired = false,
    state = "pending",
    errorMessage,
    validMessage,
    size = "wide",
    isFullWidth = false,
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

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : defaultIsDisabled;

  const transformedState = states.includes(state) ? state : defaultState;

  const transformedTypes = inputTypes.includes(type) ? type : defaultType;

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : defaultIsRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : defaultIsFullWidth;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;

  return (
    <TextFieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      type={transformedTypes}
      value={value}
      handleChange={handleChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={transformedIsRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={transformedReadOnly}
    />
  );
};

export { TextField };
