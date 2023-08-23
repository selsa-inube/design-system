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
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";
import { Size, State } from "./props";

export interface IMessageProps {
  state?: State;
  disabled?: boolean;
  errorMessage?: string;
  validMessage?: string;
}

const Invalid = (props: IMessageProps) => {
  const { disabled, state, errorMessage } = props;

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
        {errorMessage && `(${errorMessage})`}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props: IMessageProps) => {
  const { disabled, state, validMessage } = props;

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
        {validMessage}
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
            (Required)
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

      {state === "invalid" && (
        <Invalid
          disabled={disabled}
          state={state}
          errorMessage={errorMessage}
        />
      )}
      {state === "valid" && (
        <Success
          disabled={disabled}
          state={state}
          validMessage={validMessage}
        />
      )}
    </StyledContainer>
  );
};

export { TextfieldUI };
