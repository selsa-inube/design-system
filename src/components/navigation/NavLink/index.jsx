import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

import { StyledMenuLink, StyledLink } from "./styles";

const NavLink = (props) => {
  const {
    id,
    label,
    path,
    isDisabled = false,
    isSelected = false,
    icon,
    handleClick,
    handleBlur,
  } = props;

  return (
    <StyledMenuLink
      isDisabled={isDisabled}
      isSelected={isSelected}
      id={id}
      onClick={handleClick}
      icon={icon}
      onBlur={handleBlur}
    >
      {icon}
      <StyledLink to={path} isdisabled={+isDisabled}>
        {label}
      </StyledLink>
      <MdKeyboardArrowRight isdisabled={+isDisabled} />
    </StyledMenuLink>
  );
};

NavLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  icon: PropTypes.node,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
};

export { NavLink };
