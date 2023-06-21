import React from "react";
import PropTypes from "prop-types";

import { StyledDropDownItem } from "./styles";

const DropDownItem = (props) => {
  const { id, isDisabled, children, handleClick, handleSelect } = props;

  const handleOptionClick = (label) => {
    if (typeof handleClick === "function") {
      handleClick();
    }
    if (typeof handleSelect === "function") {
      handleSelect(label);
    }
  };

  return (
    <StyledDropDownItem
      id={id}
      isDisabled={isDisabled}
      onClick={() => handleOptionClick(children)}
      onBlur={handleClick}
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
