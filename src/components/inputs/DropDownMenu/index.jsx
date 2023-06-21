import React, { useState } from "react";
import PropTypes from "prop-types";

import { StyledDropDownMenu } from "./styled";
import { DropDownItem } from "../DropDownItem/index";

const DropDownMenu = (props) => {
  const { options, handleClick, isOpenOptions, onCloseOptions, handleSelect } =
    props;
  const [isOpen, setIsOpen] = useState(isOpenOptions);

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

DropDownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      isDisabled: PropTypes.bool,
    })
  ),
  handleClick: PropTypes.func,
  isOpenOptions: PropTypes.bool,
  onCloseOptions: PropTypes.func,
  handleSelect: PropTypes.func,
};

export { DropDownMenu };
