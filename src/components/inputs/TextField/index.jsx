import PropTypes from "prop-types";

import Label from "../Label/index";

import { StyledInput, StyledIcon, StyledContainaer } from "./styles";

const DEFAULLT_VALUES_PROPS = {
  isDisabled: false,
  isFocused: false,
  type: "text",
  isRequired: false,
  isFullWidth: false,
};

const transformedValues = (prop, defaultValue) => {
  if (typeof prop === "boolean") {
    return prop;
  }
  return defaultValue;
};

const typesImput = ["text", "email", "number", "password", "search", "tel"];
const sizes = ["wide", "compact"];

const renderIcons = (icon) => {
  if (icon) {
    return <StyledIcon icon={icon}>{icon}</StyledIcon>;
  }
  return null;
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

  const transformedIsDisabled = transformedValues(
    isDisabled,
    DEFAULLT_VALUES_PROPS.isDisabled
  );

  const transformedIsFocused = transformedValues(
    isFocused,
    DEFAULLT_VALUES_PROPS.isFocused
  );

  const transformedTypes = typesImput.includes(type)
    ? type
    : DEFAULLT_VALUES_PROPS.type;

  const transformedIsRequired = transformedValues(
    isRequired,
    DEFAULLT_VALUES_PROPS.isRequired
  );

  const transformedIsFullWidth = transformedValues(
    isFullWidth,
    DEFAULLT_VALUES_PROPS.isFullWidth
  );

  return (
    <StyledContainaer iconAfter={iconAfter}>
      {label && <Label>{label}</Label>}

      <StyledInput
        label={label}
        name={name}
        id={id}
        placeholder={placeholder}
        isDisabled={transformedIsDisabled}
        isFocused={transformedIsFocused}
        type={transformedTypes}
        value={value}
        onClick={handleChange}
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
      <StyledIcon>{iconAfter}</StyledIcon>
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
