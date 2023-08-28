import { useState, useEffect } from "react";

import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "@inputs/Label";
import { Text } from "@data/Text";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";
import { ITextareaProps } from ".";

const getAppearanceCounter = (
  valueLength: number,
  maxLength = 0,
  lengthThreshold: number
) => {
  if (maxLength - valueLength <= lengthThreshold && valueLength <= maxLength) {
    return "warning";
  }

  if (valueLength > maxLength) {
    return "error";
  }

  return "gray";
};

const Counter = (props: ITextareaProps) => {
  const { id, maxLength, lengthThreshold, disabled } = props;
  const [valueLength, setValueLength] = useState(0);

  useEffect(() => {
    const textareaElement = document.getElementById(id);
    if (textareaElement) {
      setValueLength(textareaElement.textContent!.length);
    }

    const handleTextareaChange = () => {
      if (textareaElement) {
        setValueLength(textareaElement.textContent!.length);
      }
    };

    textareaElement!.addEventListener("input", handleTextareaChange);

    return () => {
      textareaElement!.removeEventListener("input", handleTextareaChange);
    };
  }, [id]);

  return (
    <Text
      type="body"
      size="small"
      disabled={disabled}
      appearance={getAppearanceCounter(
        valueLength,
        maxLength,
        lengthThreshold!
      )}
    >{`${valueLength}/${maxLength}`}</Text>
  );
};

const Invalid = (props: Omit<ITextareaProps, "id">) => {
  const { disabled, state, errorMessage } = props;
  const transformedErrorMessage = errorMessage && `(${errorMessage})`;

  return (
    <StyledErrorMessageContainer disabled={disabled} state={state}>
      <MdOutlineError />
      <Text type="body" size="small" appearance={"error"} disabled={disabled}>
        {transformedErrorMessage}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props: Omit<ITextareaProps, "id">) => {
  const { disabled, state, validMessage } = props;

  return (
    <StyledValidMessageContainer disabled={disabled} state={state}>
      <MdCheckCircle />
      <Text type="body" size="small" appearance={"success"} disabled={disabled}>
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const TextareaUI = (props: ITextareaProps) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    value,
    maxLength,
    minLength,
    max,
    min,
    isRequired,
    state,
    errorMessage,
    validMessage,
    isFullWidth,
    isFocused,
    handleChange,
    handleFocus,
    handleBlur,
    readOnly,
    counter,
    lengthThreshold,
  } = props;

  const transformedInvalid = state === "invalid" ? true : false;

  return (
    <StyledContainer isFullWidth={isFullWidth} disabled={disabled}>
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
            invalid={transformedInvalid}
            padding="0px 0px 0px 16px"
          >
            {label}
          </Label>
        )}

        {isRequired && !disabled && (
          <Text type="body" size="small" appearance="dark">
            (Required)
          </Text>
        )}
        {counter && !disabled && (
          <Counter
            id={id}
            maxLength={maxLength}
            lengthThreshold={lengthThreshold}
            disabled={disabled}
          />
        )}
      </StyledContainerLabel>

      <StyledTextarea
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        minLength={minLength}
        max={max}
        min={min}
        isRequired={isRequired}
        state={state}
        isFullWidth={isFullWidth}
        isFocused={isFocused}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        readOnly={readOnly}
        value={value}
      />

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

export { TextareaUI };
