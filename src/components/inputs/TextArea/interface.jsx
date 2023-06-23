import React, { useState, useEffect } from "react";

import { MdOutlineError, MdCheckCircle } from "react-icons/md";

import { Label } from "../Label";
import { Text } from "../../data/Text";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledTextarea,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

const getTextAppearanceProp = (isDisabled, appearence) => {
  if (isDisabled) {
    return "disabled";
  }

  return appearence;
};

const getTypo = (size) => {
  if (size === "compact") {
    return "labelMedium";
  }
  return "labelLarge";
};

const Counter = (props) => {
  const { id, maxLength } = props;
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

  return <Text typo="bodySmall">{`${valueLength}/${maxLength}`}</Text>;
};

const Invalid = (props) => {
  const { isDisabled, state, errorMessage } = props;
  const transformedErrorMessage = errorMessage && `(${errorMessage})`;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} state={state}>
      <MdOutlineError />
      <Text
        typo="bodySmall"
        margin="8px 0px 0px 4px"
        appearance={getTextAppearanceProp(isDisabled, "error")}
      >
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
        typo="bodySmall"
        margin="8px 0px 0px 4px"
        appearance={getTextAppearanceProp(isDisabled, "success")}
      >
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const TextAreaUI = (props) => {
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
    size,
    isFullWidth,
    isFocused,
    handleChange,
    handleFocus,
    handleBlur,
    readOnly,
    counter,
  } = props;

  const transformedIsInvalid = state === "invalid" ? true : false;

  return (
    <StyledContainer isFullWidth={isFullWidth} isDisabled={isDisabled}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        size={size}
        isDisabled={isDisabled}
        label={label}
        counter={counter}
      >
        {label && (
          <Label
            htmlFor={id}
            isDisabled={isDisabled}
            isFocused={isFocused}
            isInvalid={transformedIsInvalid}
            typo={getTypo(size)}
          >
            {label}
          </Label>
        )}

        {isRequired && !isDisabled && <Text typo="bodySmall">(Required)</Text>}
        {counter && <Counter id={id} maxLength={maxLength} />}
      </StyledContainerLabel>

      <StyledTextarea
        name={name}
        id={id}
        placeholder={placeholder}
        isDisabled={isDisabled}
        maxLength={maxLength}
        minLength={minLength}
        max={max}
        min={min}
        isRequired={isRequired}
        size={size}
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

export { TextAreaUI };
