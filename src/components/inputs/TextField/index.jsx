import PropTypes from "prop-types";

import { AiOutlineSearch } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import Label from "../Label/index";

import {
  StyledContainaer,
  StyledContainaerLabel,
  StyledInputContainer,
  StyledInput,
  StyledIcon,
  StyledErrorMensaje,
  StyledParrafo,
} from "./styles";

const DEFAULLT_VALUES_PROPS = {
  isDisabled: false,
  isFocused: false,
  type: "text",
  isRequired: false,
  isFullWidth: false,
};

const typesImput = ["text", "email", "number", "password", "search", "tel"];
const sizes = ["wide", "compact"];

const stateLabel = (prop) => {
  let state = "default";
  if (prop) {
    state = "invalid";
    return state;
  }
  return state;
};

const TextField = (props) => {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    isFocused = false,
    type = "text",
    value,
    handleChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    max,
    min,
    isRequired = false,
    isInvalid,
    errorMessage,
    size,
    isFullWidth = false,
  } = props;

  const transformedIsDisabled =
    typeof isDisabled === "boolean"
      ? isDisabled
      : DEFAULLT_VALUES_PROPS.isDisabled;

  const transformedIsFocused =
    typeof isFocused === "boolean"
      ? isFocused
      : DEFAULLT_VALUES_PROPS.isFocused;

  const transformedTypes = typesImput.includes(type)
    ? type
    : DEFAULLT_VALUES_PROPS.type;

  const transformedIsRequired =
    typeof isRequired === "boolean"
      ? isRequired
      : DEFAULLT_VALUES_PROPS.isRequired;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean"
      ? isFullWidth
      : DEFAULLT_VALUES_PROPS.isFullWidth;

  return (
    <StyledContainaer iconAfter={iconAfter} isRequired={isRequired}>
      <StyledContainaerLabel>
        {label && (
          <Label
            htmlFor={id}
            state={stateLabel(errorMessage)}
            isDisabled={isDisabled}
            isFocused={isFocused}
          >
            {label}
          </Label>
        )}
        {isRequired && !isDisabled && !isFocused && !isInvalid && (
          <StyledParrafo role="bodySmall">(Required)</StyledParrafo>
        )}
      </StyledContainaerLabel>
      <StyledInputContainer>
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
          isDisabled={transformedIsDisabled}
          isFocused={transformedIsFocused}
          type={transformedTypes}
          value={value}
          onChange={handleChange}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          maxLength={maxLength}
          minLength={minLength}
          max={max}
          min={min}
          isRequired={transformedIsRequired}
          isInvalid={isInvalid}
          errorMessage={errorMessage}
          size={size}
          isFullWidth={transformedIsFullWidth}
        />
        {iconAfter && (
          <StyledIcon iconAfter={iconAfter} isDisabled={isDisabled}>
            {iconAfter}
          </StyledIcon>
        )}
        {type === "search" && (
          <StyledIcon type={type} isDisabled={isDisabled}>
            <AiOutlineSearch />
          </StyledIcon>
        )}
      </StyledInputContainer>
      {errorMessage && (
        <StyledErrorMensaje role="bodySmall">
          {<BiErrorCircle />} ({errorMessage})
        </StyledErrorMensaje>
      )}
    </StyledContainaer>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isFocused: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(typesImput),
  value: PropTypes.string,
  handleChange: PropTypes.func,
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  isRequired: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  isFullWidth: PropTypes.bool,
};

export { TextField, typesImput, sizes };
