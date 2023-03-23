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
    children,
  } = props;
  const transformedHandleClick = isDisabled ? undefined : handleClick;
  return (
    <StyleTab
      onClick={transformedHandleClick}
      isDisabled={isDisabled}
      isSelected={isSelected}
    >
      <Label htmlFor={id} isFocused={isSelected} isDisabled={isDisabled}>
        {children}
      </Label>
    </StyleTab>
  );
};

Tab.propTypes = {
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  id: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export { Tab };
