import React from "react";

import { StyledDropDownItem } from "./styles";

const DropDownItem = (props) => {
  const { id, isDisabled, label, handleClick } = props;

  return (
    <StyledDropDownItem
      id={id}
      isDisabled={isDisabled}
      onClick={handleClick}
      value={label}
    />
  );
};

export { DropDownItem };
