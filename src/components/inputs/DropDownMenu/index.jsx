import React from "react";

import { StyledDropDownMenu } from "./styled";
import { DropDownItem } from "../DropDownItem/index";

const DropDownMenu = (props) => {
  const { id, options } = props;

  return (
    <StyledDropDownMenu id={id}>
      {options.map((dropDownItem) => (
        <DropDownItem
          key={dropDownItem.id}
          id={dropDownItem.id}
          value={dropDownItem.label}
          isDisabled={dropDownItem.isDisabled}
        />
      ))}
    </StyledDropDownMenu>
  );
};

export { DropDownMenu };
