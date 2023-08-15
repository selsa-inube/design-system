import React from "react";
import PropTypes from "prop-types";

import { StyledDropDownMenu } from "./styled";
import { DropdownItem } from "@inputs/Select/DropdownItem";

const DropDownMenu = (props) => {
  const { options, handleClick, onCloseOptions, handleSelect } = props;

  const handleOptionClick = (id) => {
    if (typeof handleClick === "function") {
      handleClick();
    }

    if (typeof onCloseOptions === "function") {
      onCloseOptions();
    }

    if (typeof handleSelect === "function") {
      handleSelect(id);
    }
  };

  return (
    <StyledDropDownMenu>
      {options.map((dropDownitem) => (
        <DropdownItem
          key={dropDownitem.id}
          id={dropDownitem.id}
          isDisabled={dropDownitem.isDisabled}
          isSelected={dropDownitem.isSelected}
          handleClick={() => handleOptionClick(dropDownitem.id)}
        >
          {dropDownitem.label}
        </DropdownItem>
      ))}
    </StyledDropDownMenu>
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
