import React from "react";

import { StyledDropDownItem } from "./styles";

const DropDownItem = (props) => {
  const { id, isDisabled, children, handleClick } = props;

  return (
    <StyledDropDownItem
      id={id}
      isDisabled={isDisabled}
      onClick={handleClick}
      value={children}
    >
      {children}
    </StyledDropDownItem>
  );
};

export { DropDownItem };
