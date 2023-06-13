import React from "react";

import { StyledDropDownMenu } from "./styled";
import { DropDownItem } from "../DropDownItem/index";

const DropDownMenu = (props) => {
  const { id, options } = props;

  options.map((option) => console.log(option.label));
  return (
    <StyledDropDownMenu id={id}>
      {options.map((dropDownItem) => (
        <DropDownItem
          key={dropDownItem.id}
          id={dropDownItem.id}
          isDisabled={dropDownItem.isDisabled}
        >
          {dropDownItem.label}
        </DropDownItem>
      ))}
    </StyledDropDownMenu>
  );
};

export { DropDownMenu };
