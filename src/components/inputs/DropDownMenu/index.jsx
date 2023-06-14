import React, { useState } from "react";

import { StyledDropDownMenu, StyledDropDownList } from "./styled";
import { DropDownItem } from "../DropDownItem/index";
/* 
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
          value={dropDownItem.label}
        >
          {dropDownItem.label}
        </DropDownItem>
      ))}
    </StyledDropDownMenu>
  );
};

 */

const DropDownMenu = (props) => {
  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <StyledDropDownMenu>
      <button onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || "Select an option"}
      </button>
      {isOpen && (
        <StyledDropDownList>
          {options.map((option) => (
            <DropDownItem
              key={option.id}
              onClick={() => handleOptionClick(option.label)}
              isDisabled={option.isDisabled}
            >
              {option.label}
            </DropDownItem>
          ))}
        </StyledDropDownList>
      )}
    </StyledDropDownMenu>
  );
};

export { DropDownMenu };
