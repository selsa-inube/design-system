import PropTypes from "prop-types";

import { StyledDropdownMenu } from "./styled";
import { DropdownItem } from "@inputs/Select/DropdownItem";

const DropdownMenu = (props) => {
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
    <StyledDropdownMenu>
      {options.map((dropDownitem) => (
        <DropdownItem
          key={dropDownitem.id}
          id={dropDownitem.id}
          disabled={dropDownitem.disabled}
          isSelected={dropDownitem.isSelected}
          handleClick={() => handleOptionClick(dropDownitem.id)}
        >
          {dropDownitem.label}
        </DropdownItem>
      ))}
    </StyledDropdownMenu>
  );
};

DropdownMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  handleClick: PropTypes.func,
  isOpenOptions: PropTypes.bool,
  onCloseOptions: PropTypes.func,
  handleSelect: PropTypes.func,
};

export { DropdownMenu };
