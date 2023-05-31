import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { Text } from "../../data/Text";

import { StyledTab } from "./styles";

const Tab = (props) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  const appearance = (isSelected, isDisabled) => {
    if (isSelected && !isDisabled) {
      return "primary";
    }
    if (isDisabled) {
      return "disabled";
    }
    return "dark";
  };

  return (
    <StyledTab
      onClick={handleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Text id={id} appearance={appearance(isSelected, isDisabled)}>
        {label}
      </Text>
    </StyledTab>
  );
};

Tab.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export { Tab };
