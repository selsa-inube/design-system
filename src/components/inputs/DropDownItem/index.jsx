import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import { StyledDropDownItem } from "./styles";

const DropDownItem = (props) => {
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

  const offSelected = () => {
    console.log("entra");
    setSelect(false);
  };

  return (
    <StyledDropDownItem
      id={id}
      isDisabled={isDisabled}
      isSelected={select}
      onClick={() => handleOptionClick(children)}
      ref={itemRef}
      onBlur={offSelected}
      tabIndex={0}
    >
      {children}
    </StyledDropDownItem>
  );
};

DropDownItem.propTypes = {
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.string,
  handleClick: PropTypes.func,
  handleSelect: PropTypes.func,
};

export { DropDownItem };
