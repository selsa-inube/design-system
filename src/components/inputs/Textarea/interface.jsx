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

const getAppearanceCounter = (valueLength, maxLength = 0, lengthThreshold) => {
  if (maxLength - valueLength <= lengthThreshold && valueLength <= maxLength) {
    return "warning";
  }

  if (valueLength > maxLength) {
    return "error";
  }

  return "gray";
};

const Counter = (props) => {
  const { id, maxLength, lengthThreshold, isDisabled } = props;
  const [valueLength, setValueLength] = useState(0);

  useEffect(() => {
    const textareaElement = document.getElementById(id);
    setValueLength(textareaElement.value.length);

    const handleTextareaChange = () => {
      setValueLength(textareaElement.value.length);
    };

    textareaElement.addEventListener("input", handleTextareaChange);

    return () => {
      textareaElement.removeEventListener("input", handleTextareaChange);
    };
  }, [id]);

  return (
    <Text
      type="body"
      size="small"
      disabled={isDisabled}
      appearance={getAppearanceCounter(valueLength, maxLength, lengthThreshold)}
    >{`${valueLength}/${maxLength}`}</Text>
  );
};

const Invalid = (props) => {
  const { isDisabled, state, errorMessage } = props;
  const transformedErrorMessage = errorMessage && `(${errorMessage})`;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} state={state}>
      <MdOutlineError />
      <Text type="body" size="small" appearance={"error"} disabled={isDisabled}>
        {transformedErrorMessage}
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Success = (props) => {
  const { isDisabled, state, validMessage } = props;

  return (
    <StyledValidMessageContainer isDisabled={isDisabled} state={state}>
      <MdCheckCircle />
      <Text
        type="body"
        size="small"
        appearance={"success"}
        disabled={isDisabled}
      >
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const TextareaUI = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled,
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
    <StyledContainer isFullWidth={isFullWidth} isDisabled={isDisabled}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        isDisabled={isDisabled}
        label={label}
        counter={counter}
      >
        {label && (
          <Label
            htmlFor={id}
            disabled={isDisabled}
            focused={isFocused}
            invalid={transformedInvalid}
          >
            {label}
          </Label>
        )}

        {isRequired && !isDisabled && (
          <Text type="body" size="small" appearance="dark">
            (Required)
          </Text>
        )}
        {counter && !isDisabled && (
          <Counter
            id={id}
            maxLength={maxLength}
            lengthThreshold={lengthThreshold}
            isDisabled={isDisabled}
          />
        )}
      </StyledContainerLabel>

      <StyledTextarea
        name={name}
        id={id}
        placeholder={placeholder}
        isDisabled={isDisabled}
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
          isDisabled={isDisabled}
          state={state}
          errorMessage={errorMessage}
        />
      )}
      {state === "valid" && (
        <Success
          isDisabled={isDisabled}
          state={state}
          validMessage={validMessage}
        />
      )}
    </StyledContainer>
  );
};

export { TextareaUI };