import { useState } from "react";
import { MenuLink } from "..";

const MenuLinkController = (props) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(true);
  };

  const handleBlur = () => {
    setSelect(false);
  };

  return (
    <ul>
      <MenuLink
        {...props}
        isSelected={select}
        handleClick={handleClick}
        handleBlur={handleBlur}
      />
    </ul>
  );
};

export { MenuLinkController };
