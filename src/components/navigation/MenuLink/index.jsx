import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

import { StyledMenuLink, StyledLink, StyledIcon } from "./styles";

const MenuLink = (props) => {
  const {
    id,
    label,
    path,
    isdisabled = false,
    isSelected = false,
    icon,
    handleClick,
    handleBlur,
  } = props;

  return (
    <StyledMenuLink
      isdisabled={isdisabled}
      isSelected={isSelected}
      id={id}
      onClick={handleClick}
      $icon={icon}
      onBlur={handleBlur}
    >
      {icon && <StyledIcon isdisabled={isdisabled}>{icon}</StyledIcon>}
      <StyledLink to={path} isdisabled={+isdisabled}>
        {label}
      </StyledLink>
      <MdKeyboardArrowRight isdisabled={+isdisabled} />
    </StyledMenuLink>
  );
};

export { MenuLink };
