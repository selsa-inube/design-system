import { useState } from "react";
import { MenuLink } from "..";
import { StyledList } from "./styled";

const MenuLinkController = (props) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(true);
  };

  const handleBlur = () => {
    setSelect(false);
  };

  return (
    <StyledList>
      <MenuLink
        {...props}
        isSelected={select}
        handleClick={handleClick}
        handleBlur={handleBlur}
      />
    </StyledList>
  );
};

export { MenuLinkController };
