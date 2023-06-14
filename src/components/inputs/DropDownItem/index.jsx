import React from "react";

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
      value={children}
    >
      {children}
    </StyledDropDownItem>
  );
};

export { DropDownItem };
