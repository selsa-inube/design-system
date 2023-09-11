import PropTypes from "prop-types";

import { StyledDropdownMenu } from "./styled";
import { DropdownItem } from "@inputs/Select/DropdownItem";

const DropdownMenu = (props) => {
  const { options, onClick, onCloseOptions, onSelect } = props;

  const handleOptionClick = (id) => {
    if (typeof onClick === "function") {
      onClick();
    }

    if (typeof onCloseOptions === "function") {
      onCloseOptions();
    }

    if (typeof onSelect === "function") {
      onSelect(id);
    }
  };

  return (
    <StyledDropdownMenu>
      {options.map((dropDownitem) => (
        <DropdownItem
          key={dropDownitem.id}
          id={dropDownitem.id}
          disabled={dropDownitem.disabled}
          selected={dropDownitem.selected}
          onClick={() => handleOptionClick(dropDownitem.id)}
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
  onClick: PropTypes.func,
  isOpenOptions: PropTypes.bool,
  onCloseOptions: PropTypes.func,
  onSelect: PropTypes.func,
};

export { DropdownMenu };
