import { useState } from "react";
import { NavLink, INavLinkProps } from "..";

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
        selected={select}
        handleClick={handleClick}
        handleBlur={handleBlur}
      />
    </ul>
  );
};

export { NavLinkController };
