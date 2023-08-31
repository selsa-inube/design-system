import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { Appearence } from "./props";
import { ITextareaProps } from ".";
import {
  StyledContainer,
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
    lengthThreshold,
    valueLength,
    appearance,
  } = props;

  return (
    <StyledContainer fullwidth={fullwidth} disabled={disabled}>
      <Stack width="100%" margin="s0 s0 s050 s0">
        {(label || required) && (
          <Stack gap="4px" alignItems="center" padding="s0 s0 s0 s200">
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
          </Stack>
        )}
        {!disabled && (
          <Stack justifyContent="flex-end" alignItems="center" width="100%">
            <Counter
              appearance={appearance}
              maxLength={maxLength}
              lengthThreshold={lengthThreshold}
              disabled={disabled}
              valueLength={valueLength}
            />
          </Stack>
        )}
      </Stack>

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
