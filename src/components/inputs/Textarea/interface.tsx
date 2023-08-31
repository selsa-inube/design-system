import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Stack } from "@layouts/Stack";
import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import { Appearence } from "./props";
import { ITextareaProps } from ".";
import {
  StyledContainer,
  StyledTextarea,
  StyledMessageContainer,
} from "./styles";
import { Icon } from "@data/Icon";

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

const Message = (props: Omit<ITextareaProps, "id">) => {
  const { disabled, status, message } = props;

  return (
    status !== "pending" && (
      <StyledMessageContainer disabled={disabled} status={status}>
        <Icon
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
          icon={status === "invalid" ? <MdOutlineError /> : <MdCheckCircle />}
        />
        <Text
          type="body"
          size="small"
          margin="8px 0px 0px 4px"
          appearance={status === "invalid" ? "error" : "success"}
          disabled={disabled}
        >
          {message && `${message}`}
        </Text>
      </StyledMessageContainer>
    )
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
    message,
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

      {status && (
        <Message disabled={disabled} status={status} message={message} />
      )}
    </StyledContainer>
  );
};

export { TextareaUI };
