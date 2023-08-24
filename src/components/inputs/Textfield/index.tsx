import { useState } from "react";

import { InputType, Size, State } from "./props";
import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";
import { Appearance } from "@src/components/data/Text/props";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledMessageContainer,
} from "./styles";
import { IconType } from "react-icons/lib";

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
export interface IMessageProps {
  state?: State;
  disabled?: boolean;
  message?: string;
}

const Message = (props: IMessageProps) => {
  const { disabled, state, message } = props;
  let IconComponent: IconType;
  let appearance: Appearance = "gray";

  if (state === "invalid") {
    IconComponent = MdOutlineError;
    appearance = "error";
  } else if (state === "valid") {
    IconComponent = MdCheckCircle;
    appearance = "success";
  }

  if (!IconComponent!) return null;

  return (
    <StyledMessageContainer disabled={disabled} state={state}>
      <IconComponent />
      <Text
        type="body"
        size="small"
        margin="8px 0px 0px 4px"
        appearance={appearance}
        disabled={disabled}
      >
        {message && `${message}`}
      </Text>
    </StyledMessageContainer>
  );
};

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

  return (
    <StyledContainer fullwidth={fullwidth} disabled={disabled}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        size={size}
        disabled={disabled}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={focused}
            invalid={state === "invalid" ? true : false}
            size={size === "compact" ? "medium" : "large"}
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text type="body" size="small" appearance="dark">
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        disabled={disabled}
        focused={focused}
        state={state}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
      >
        {iconBefore && (
          <StyledIcon disabled={disabled} iconBefore={iconBefore}>
            {iconBefore}
          </StyledIcon>
        )}

        <StyledInput
          label={label}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          value={value}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          required={required}
          size={size}
          state={state}
          fullwidth={fullwidth}
          focused={focused}
          onChange={onChange}
          onFocus={interceptFocus}
          onBlur={interceptBlur}
          readOnly={readOnly}
        />

        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} disabled={disabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>

      {state && (
        <Message
          disabled={disabled}
          state={state}
          message={state === "invalid" ? errorMessage : validMessage}
        />
      )}
    </StyledContainer>
  );
};

export { Textfield };
