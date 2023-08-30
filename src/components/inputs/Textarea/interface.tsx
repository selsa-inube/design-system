import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Appearence } from "./props";
import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { ITextareaProps } from ".";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

const Counter = (
  props: Omit<ITextareaProps, "id"> & {
    valueLength: number;
    appearance: Appearence;
  }
) => {
  const { maxLength, appearance, disabled, valueLength } = props;

  return (
    <Text
      type="body"
      size="small"
      disabled={disabled}
      appearance={appearance}
    >{`${valueLength}/${maxLength}`}</Text>
  );
};

const Invalid = (props: Omit<ITextareaProps, "id">) => {
  const { disabled, status, errorMessage } = props;

  return (
    <StyledErrorMessageContainer disabled={disabled} status={status}>
      <MdOutlineError />
      <Text type="body" size="small" appearance={"error"} disabled={disabled}>
        {errorMessage && `(${errorMessage})`}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props: Omit<ITextareaProps, "id">) => {
  const { disabled, status, validMessage } = props;

  return (
    <StyledValidMessageContainer disabled={disabled} status={status}>
      <MdCheckCircle />
      <Text type="body" size="small" appearance={"success"} disabled={disabled}>
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const TextareaUI = (
  props: ITextareaProps & {
    valueLength: number;
    appearance: Appearence;
  }
) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    value,
    maxLength,
    minLength,
    required,
    status,
    errorMessage,
    validMessage,
    fullwidth,
    isFocused,
    onChange,
    onFocus,
    onBlur,
    readOnly,
    counter,
    lengthThreshold,
    valueLength,
    appearance,
  } = props;

  return (
    <StyledContainer fullwidth={fullwidth} disabled={disabled}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        disabled={disabled}
        label={label}
        counter={counter}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={disabled}
            focused={isFocused}
            invalid={status === "invalid" ? true : false}
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text type="body" size="small" appearance="dark">
            (Requerido)
          </Text>
        )}
        {counter && !disabled && (
          <Counter
            appearance={appearance}
            maxLength={maxLength}
            lengthThreshold={lengthThreshold}
            disabled={disabled}
            valueLength={valueLength}
          />
        )}
      </StyledContainerLabel>

      <StyledTextarea
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        minLength={minLength}
        required={required}
        status={status}
        fullwidth={fullwidth}
        isFocused={isFocused}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readOnly}
        value={value}
      />

      {status === "invalid" && (
        <Invalid
          disabled={disabled}
          status={status}
          errorMessage={errorMessage}
        />
      )}
      {status === "valid" && (
        <Success
          disabled={disabled}
          status={status}
          validMessage={validMessage}
        />
      )}
    </StyledContainer>
  );
};

export { TextareaUI };
