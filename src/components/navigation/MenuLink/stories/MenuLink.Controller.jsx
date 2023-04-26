import { useState } from "react";
import { MenuLink } from "..";
import { StyledList } from "./styled";

const MenuLinkController = (props) => {
  const [select, setSelect] = useState(false);
  return (
    <StyledList>
      <MenuLink {...props} />
    </StyledList>
  );
};

export { MenuLinkController };
