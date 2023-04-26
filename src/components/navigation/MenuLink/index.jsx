import React, { useState } from "react";
import { StyledMenuLink, StyledLink, StyledIcon } from "./styles";
import { MdKeyboardArrowRight } from "react-icons/md";

const MenuLink = (props) => {
  const {
    isdisabled,
    isSelected = false,
    path,
    id,
    handleClick,
    icon,
    label,
    handleBlur,
  } = props;

  const [selected, setSelected] = useState(isSelected);

  const handleSelect = (e) => {
    setSelected(true);
    if (typeof handleClick === "function") {
      handleClick(e);
    }
  };

  const interceptBlur = (e) => {
    setSelected(false);

    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  return (
    <StyledMenuLink
      isdisabled={isdisabled}
      isSelected={selected}
      id={id}
      onClick={handleSelect}
      $icon={icon}
      onBlur={interceptBlur}
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
