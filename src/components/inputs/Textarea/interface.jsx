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
  const { id, maxLength, lengthThreshold, disabled } = props;
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
      disabled={disabled}
      appearance={getAppearanceCounter(valueLength, maxLength, lengthThreshold)}
    >{`${valueLength}/${maxLength}`}</Text>
  );
};

const Invalid = (props) => {
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

const Success = (props) => {
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

const TextareaUI = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    disabled,
    value,
    maxLength,
    minLength,
    isRequired,
    state,
    errorMessage,
    validMessage,
    fullwidth,
    isFocused,
    onChange,
    handleFocus,
    handleBlur,
    readOnly,
    counter,
    lengthThreshold,
  } = props;

  const transformedInvalid = state === "invalid" ? true : false;

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
            invalid={transformedInvalid}
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
        isRequired={isRequired}
        state={state}
        fullwidth={fullwidth}
        isFocused={isFocused}
        onChange={onChange}
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
