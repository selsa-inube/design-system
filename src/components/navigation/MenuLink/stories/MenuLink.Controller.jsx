import { MenuLink } from "../MenuLink";
import { useState } from "react";

const MenuLinkController = (props) => {
  const { isSelected = false } = props;
  const [selected, setSelected] = useState(isSelected);

  const handeleChange = () => {
    setSelected(selected);
  };

  return <MenuLink {...props} handeleChange={handeleChange} />;
};

export { MenuLinkController };
