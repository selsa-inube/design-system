import { useState } from "react";
import { NavLink, INavLinkProps } from "..";

const NavLinkController = (props: INavLinkProps) => {
  const [select, setSelect] = useState(false);

  const onClick = () => {
    setSelect(true);
  };

  return (
    <ul>
      <NavLink {...props} selected={select} onClick={onClick} />
    </ul>
  );
};

export { NavLinkController };
