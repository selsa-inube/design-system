import { useState } from "react";
import { NavLink, INavLinkProps } from "..";

const NavLinkController = (props: INavLinkProps) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(true);
  };

  return (
    <ul>
      <NavLink {...props} isSelected={select} handleClick={handleClick} />
    </ul>
  );
};

export { NavLinkController };
