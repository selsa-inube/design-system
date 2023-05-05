import { useState } from "react";
import { NavLink } from "..";

const NavLinkController = (props) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(true);
  };

  const handleBlur = () => {
    setSelect(false);
  };

  return (
    <ul>
      <NavLink
        {...props}
        isSelected={select}
        handleClick={handleClick}
        handleBlur={handleBlur}
      />
    </ul>
  );
};

export { NavLinkController };
