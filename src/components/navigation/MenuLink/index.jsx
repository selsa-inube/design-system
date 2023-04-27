import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import PropTypes from "prop-types";

import { Stack } from "../../layouts/Stack/index";
import { StyledMenuLink, StyledLink } from "./styles";

const MenuLink = (props) => {
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
      $icon={icon}
      onBlur={handleBlur}
    >
      {icon && (
        <Stack
          justifyContent="center"
          alignItems="center"
          isDisabled={isDisabled}
        >
          {icon}
        </Stack>
      )}
      <StyledLink to={path} isdisabled={+isDisabled}>
        {label}
      </StyledLink>
      <MdKeyboardArrowRight isdisabled={+isDisabled} />
    </StyledMenuLink>
  );
};

MenuLink.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  icon: PropTypes.node,
  handleClick: PropTypes.func,
  handleBlur: PropTypes.func,
};

export { MenuLink };
