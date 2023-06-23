import React, { useRef } from "react";

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
  const { id, maxLength, textarea } = props;

  return (
    <Text typo="bodySmall" margin="8px 0px 0px 4px">{`
    ${textarea}/${maxLength}
    `}</Text>
  );
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
    type,
    value,
    handleChange,
    iconBefore,
    iconAfter,
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
    handleFocus,
    handleBlur,
    readOnly,
    counter,
  } = props;

  const transformedIsInvalid = state === "invalid" ? true : false;
  const textarea = useRef(null);
  console.log(textarea, "textarea2");

  return (
    <StyledContainer isFullWidth={isFullWidth} isDisabled={isDisabled}>
      <StyledContainerLabel
        alignItems="center"
        wrap="wrap"
        size={size}
        isDisabled={isDisabled}
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
        {counter && (
          <Counter id={id} maxLength={maxLength} element={textarea} />
        )}
      </StyledContainerLabel>

      <StyledTextarea
        label={label}
        name={name}
        id={id}
        placeholder={placeholder}
        isDisabled={isDisabled}
        type={type}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
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
        ref={textarea}
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
