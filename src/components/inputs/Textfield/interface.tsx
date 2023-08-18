import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { IMessage, ITextfieldProps } from ".";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";
import { Size, State } from "./props";

export interface IMessageProps {
  state?: State;
  disabled?: boolean;
  message?: IMessage;
}

const getTypo = (size: Size) => {
  if (size === "compact") {
    return "medium";
  }
  return "large";
};

const Invalid = (props: IMessageProps) => {
  const { disabled, state, message } = props;

  if (message?.type !== "invalid") return null;

  return (
    <StyledErrorMessageContainer disabled={disabled} state={state}>
      <MdOutlineError />
      <Text
        type="body"
        size="small"
        margin="8px 0px 0px 4px"
        appearance="error"
        disabled={disabled}
      >
        {message?.content && `(${message.content})`}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props: IMessageProps) => {
  const { disabled, state, message } = props;

  if (message?.type !== "success") return null;

  return (
    <StyledValidMessageContainer disabled={disabled} state={state}>
      <MdCheckCircle />
      <Text
        type="body"
        size="small"
        margin="8px 0px 0px 4px"
        appearance="success"
        disabled={disabled}
      >
        {message?.content}
      </Text>
    </StyledValidMessageContainer>
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
    maxLength,
    minLength,
    max,
    min,
    required,
    state,
    message,
    size,
    fullwidth,
    isFocused,
    handleFocus,
    handleBlur,
    readOnly,
  } = props;

  const transformedInvalid = message?.type === "invalid";

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
            focused={isFocused}
            invalid={transformedInvalid}
            size={getTypo(size!)}
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text type="body" size="small" appearance="dark">
            (Required)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        disabled={disabled}
        isFocused={isFocused}
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
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          required={required}
          size={size}
          state={state}
          fullwidth={fullwidth}
          isFocused={isFocused}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          readOnly={readOnly}
        />

        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} disabled={disabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>

      {message?.type === "invalid" && (
        <Invalid disabled={disabled} state={state} message={message} />
      )}
      {message?.type === "success" && (
        <Success disabled={disabled} state={state} message={message} />
      )}
    </StyledContainer>
  );
};

export { TextfieldUI };
