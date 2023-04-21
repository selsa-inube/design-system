import React, { useState } from "react";
import { BreadcrumbEllipsis } from "../index";
import { BreadcrumbMenu } from "../../BreadcrumbMenu";

const BreadcrumbEllipsisController = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <BreadcrumbEllipsis {...props} handleClick={handleEllipsisClick} />
      {showMenu && <BreadcrumbMenu routes={props.routes} />}
    </>
  );
};

export { BreadcrumbEllipsisController };
