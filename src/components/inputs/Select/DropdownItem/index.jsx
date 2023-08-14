import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { StyledDropdownItem } from "./styles";

const DropdownItem = (props) => {
  const {
    id,
    isDisabled,
    isSelected = false,
    children,
    handleClick,
    handleSelect,
  } = props;

  const [select, setSelect] = useState(isSelected);
  const itemRef = useRef(null);

  const handleOptionClick = (label) => {
    setSelect(true);
    if (typeof handleClick === "function") {
      handleClick();
    }
    if (typeof handleSelect === "function") {
      handleSelect(label);
    }
  };

  const interceptorOnBlur = () => {
    setSelect(false);
  };

  return (
    <StyledDropdownItem
      id={id}
      isDisabled={isDisabled}
      isSelected={select}
      onClick={() => handleOptionClick(children)}
      ref={itemRef}
      onBlur={interceptorOnBlur}
      tabIndex={0}
    >
      {children}
    </StyledDropdownItem>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.string,
  handleClick: PropTypes.func,
  handleSelect: PropTypes.func,
};

export { DropdownItem };
