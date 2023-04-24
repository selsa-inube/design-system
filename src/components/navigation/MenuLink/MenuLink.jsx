import React from "react";
import { StyledMenuLink, StyledLink, StyledIcon } from "./styles";

const MenuLink = (props) => {
  const { isDisabled, isSelected, path, id, handleClick, icon, label } = props;

  return (
    <StyledMenuLink>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <StyledLink>{label}</StyledLink>
    </StyledMenuLink>
  );
};

export default MenuLink;
