import React from "react";

import { MdOutlineError } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

import { Label } from "../Label";
import { Text } from "../../data/Text";

import {
  getFocused,
  getState,
  getAppearanceValid,
  getAppearanceError,
} from ".";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMessageContainer,
  StyledValidMessageContainer,
} from "./styles";

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
    onFocus,
    onBlur,
  } = props;

  return (
    <StyledContainer isFullWidth={isFullWidth}>
      <StyledContainerLabel size={size} isDisabled={isDisabled}>
        {label && (
          <Label
            htmlFor={id}
            isDisabled={isDisabled}
            isFocused={getFocused(state, isFocused)}
            state={getState(state)}
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
          onFocus={onFocus}
          onBlur={onBlur}
        />

        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} isDisabled={isDisabled}>
            {iconAfter}
          </StyledIcon>
        )}
      </StyledInputContainer>

      {state === "invalid" && (
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
      )}
      {state === "valid" && (
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
      )}
    </StyledContainer>
  );
};

export { TextFieldUI };
