import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyleTab } from "./styles";

const Tab = (props) => {
  const {
    isDisabled = false,
    isSelected = false,
    id,
    handleClick,
    label,
  } = props;

  return (
    <StyleTab
      onClick={handleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Label htmlFor={id} isFocused={isSelected} isDisabled={isDisabled}>
        {label}
      </Label>
    </StyleTab>
  );
};

Tab.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  labelcode: PropTypes.node.isRequired,
};

export { Tab };
