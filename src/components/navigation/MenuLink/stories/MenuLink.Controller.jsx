import { useState } from "react";
import { MenuLink } from "../MenuLink";

const MenuLinkController = (props) => {
  const [select, setSelect] = useState(false);
  return (
    <ul>
      <MenuLink {...props} />
      <MenuLink {...props} />
    </ul>
  );
};

export { MenuLinkController };
