import React from "react";

import { MdOutlineError } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

import { Label } from "../Label";
import { Text } from "../../data/Text";

import { getLabelState } from ".";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

const getAppearanceValid = (isDisabled) => {
  if (isDisabled) {
    return "disabled";
  }
  return "success";
};

const getAppearanceError = (isDisabled) => {
  if (isDisabled) {
    return "disabled";
  }

  return "error";
};

const Invalid = (props) => {
  const { isDisabled, state, errorMessage } = props;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} state={state}>
      <MdOutlineError />
      <Text
        typo="bodySmall"
        margin="8px 0px 0px 4px"
        appearance={getAppearanceError(isDisabled)}
      >
        ({errorMessage})
      </Text>
    </StyledErrorMessageContainer>
  );
};

const Succes = (props) => {
  const { isDisabled, state, validMessage } = props;

  return (
    <StyledValidMessageContainer isDisabled={isDisabled} state={state}>
      <MdCheckCircle />
      <Text
        typo="bodySmall"
        margin="8px 0px 0px 4px"
        appearance={getAppearanceValid(isDisabled)}
      >
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
};

const TextFieldUI = (props) => {
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
    handleClick,
  } = props;

  return (
    <StyledContainer isFullWidth={isFullWidth}>
      <StyledContainerLabel size={size} isDisabled={isDisabled}>
        {label && (
          <Label
            htmlFor={id}
            isDisabled={isDisabled}
            isFocused={isFocused}
            state={getLabelState(state)}
          >
            {label}
          </Label>
        )}

        {isRequired && <Text typo="bodySmall">(Required)</Text>}
      </StyledContainerLabel>

      <StyledInputContainer isDisabled={isDisabled}>
        {iconBefore && (
          <StyledIcon isDisabled={isDisabled} iconBefore={iconBefore}>
            {iconBefore}
          </StyledIcon>
        )}

        <StyledInput
          label={label}
          name={name}
          id={id}
          placeholder={placeholder}
          isDisabled={isDisabled}
          type={type}
          value={value}
          onChange={handleChange}
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
          onFocus={handleFocus}
          onBlur={handleBlur}
          isFocused={isFocused}
          onClick={handleClick}
        />

        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} isDisabled={isDisabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>

      {state === "invalid" && (
        <Invalid
          isDisabled={isDisabled}
          state={state}
          errorMessage={errorMessage}
        />
      )}
      {state === "valid" && (
        <Succes
          isDisabled={isDisabled}
          state={state}
          validMessage={validMessage}
        />
      )}
    </StyledContainer>
  );
};

export { TextFieldUI };
