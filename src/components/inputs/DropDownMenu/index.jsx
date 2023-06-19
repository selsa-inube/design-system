import React, { useState } from "react";

import { StyledDropDownMenu } from "./styled";
import { DropDownItem } from "../DropDownItem/index";

const DropDownMenu = (props) => {
  const { options, handleClick, isOpenOptions, onCloseOptions, handleSelect } =
    props;
  const [isOpen, setIsOpen] = useState(isOpenOptions);
  //const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (label) => {
    setIsOpen(false);

    if (typeof handleClick === "function") {
      handleClick();
    }

    if (typeof onCloseOptions === "function") {
      onCloseOptions();
    }

    if (typeof handleSelect === "function") {
      handleSelect(label);
    }
  };

  return (
    <>
      {isOpen && (
        <StyledDropDownMenu>
          {options.map((dropDownitem) => (
            <DropDownItem
              key={dropDownitem.id}
              id={dropDownitem.id}
              isDisabled={dropDownitem.isDisabled}
              handleClick={() => handleOptionClick(dropDownitem.label)}
            >
              {dropDownitem.label}
            </DropDownItem>
          ))}
        </StyledDropDownMenu>
      )}
    </>
  );
};

export { DropDownMenu };
