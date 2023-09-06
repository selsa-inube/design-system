import { useState, useRef } from "react";
import PropTypes from "prop-types";

import { StyledDropdownItem } from "./styles";

const DropdownItem = (props) => {
  const {
    id,
    disabled,
    isSelected = false,
    children,
    handleClick,
    handleSelect,
  } = props;

  const [select, setSelect] = useState(isSelected);
  const itemRef = useRef(null);

  const handleOptionClick = (label) => {
    setSelect(true);
    if (typeof handleClick === "function") {
      handleClick();
    }
    if (typeof handleSelect === "function") {
      handleSelect(label);
    }
  };

  const interceptorOnBlur = () => {
    setSelect(false);
  };

  return (
    <StyledDropdownItem
      id={id}
      disabled={disabled}
      isSelected={select}
      onClick={() => handleOptionClick(children)}
      ref={itemRef}
      onBlur={interceptorOnBlur}
      tabIndex={0}
    >
      {children}
    </StyledDropdownItem>
  );
};

DropdownItem.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  handleClick: PropTypes.func,
  handleSelect: PropTypes.func,
};

export { DropdownItem };
