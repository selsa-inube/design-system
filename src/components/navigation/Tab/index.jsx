import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyledTab } from "./styles";

const Tab = (props) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  return (
    <StyledTab
      onClick={handleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Label htmlFor={id} isFocused={isSelected} isDisabled={isDisabled}>
        {label}
      </Label>
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
