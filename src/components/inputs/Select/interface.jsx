import React, { useState, forwardRef } from "react";
import {
  MdOutlineError,
  MdCheckCircle,
  MdOutlineArrowDropDown,
} from "react-icons/md";

import { Label } from "../Label";
import { Text } from "../../data/Text";

import { DropDownMenu } from "../DropDownMenu/index";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
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

const SelectUI = forwardRef((props, ref) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled,
    handleChange,
    isRequired,
    state,
    errorMessage,
    validMessage,
    size,
    isFullWidth,
    isFocused,
    handleFocus,
    handleBlur,
    options,
    openOptions,
    value,
    onCloseOptions,
    readOnly,
  } = props;

  const [selectedOption, setSelectedOption] = useState(value);
  const handleOptionClick = (valueOption) => {
    setSelectedOption(valueOption);
  };

  const transformedIsInvalid = state === "invalid" ? true : false;

  return (
    <StyledContainer
      isFullWidth={isFullWidth}
      isDisabled={isDisabled}
      ref={ref}
    >
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
      </StyledContainerLabel>

      <StyledInputContainer
        isDisabled={isDisabled}
        isFocused={isFocused}
        state={state}
      >
        <StyledInput
          autoComplete="off"
          readOnly={true}
          value={selectedOption || value}
          name={name}
          id={id}
          placeholder={placeholder}
          isDisabled={isDisabled}
          required={isRequired}
          size={size}
          state={state}
          isFullWidth={isFullWidth}
          isFocused={isFocused}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onCloseOptions}
          onKeyDown={() => false}
        />
        <StyledIcon isDisabled={isDisabled}>
          <MdOutlineArrowDropDown onClick={onCloseOptions} />
        </StyledIcon>
      </StyledInputContainer>

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
      {openOptions && !isDisabled && (
        <DropDownMenu
          options={options}
          isOpenOptions={openOptions}
          handleClick={handleOptionClick}
          onCloseOptions={onCloseOptions}
          handleSelect={handleOptionClick}
        />
      )}
    </StyledContainer>
  );
});

export { SelectUI };
