import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { ITextfieldProps } from ".";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledMessageContainer,
} from "./styles";
import { State } from "./props";
import { Appearance } from "@src/components/data/Text/props";
import { IconType } from "react-icons/lib";

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

const TextfieldUI = (props: ITextfieldProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    type,
    value,
    onChange,
    iconBefore,
    iconAfter,
    required,
    state,
    errorMessage,
    validMessage,
    size,
    fullwidth,
    focused,
    onFocus,
    onBlur,
    readOnly,
  } = props;

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
          onFocus={onFocus}
          onBlur={onBlur}
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

export { TextfieldUI };
