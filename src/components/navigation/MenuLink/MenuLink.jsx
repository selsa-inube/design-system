import React from "react";
import { StyledMenuLink, StyledLink, StyledIcon } from "./styles";
import { MdKeyboardArrowRight } from "react-icons/md";

const MenuLink = (props) => {
  const { isDisabled, isSelected, path, id, handleClick, icon, label } = props;

  return (
    <StyledMenuLink
      isDisabled={isDisabled}
      isSelected={isSelected}
      id={id}
      onClick={handleClick}
      $icon={icon}
    >
      {icon && <StyledIcon isDisabled={isDisabled}>{icon}</StyledIcon>}
      <StyledLink to={path} isDisabled={isDisabled}>
        {label}
      </StyledLink>
      {isSelected && <MdKeyboardArrowRight isDisabled={isDisabled} />}
    </StyledMenuLink>
  );
};

export { MenuLink };
