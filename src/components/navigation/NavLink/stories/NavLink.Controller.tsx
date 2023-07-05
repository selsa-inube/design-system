import { useState } from "react";
import { INavLinkProps } from "../interfaces/NavLink.interface";
import { NavLink } from "..";

const NavLinkController = (props: INavLinkProps) => {
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
