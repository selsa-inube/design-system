import React, { useState } from "react";
import { BreadcrumbMenuLink } from "../index";

const BreadcrumbMenuLinkController = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickTab = () => {
    setIsActive(true);
  };

  return (
    <BreadcrumbMenuLink
      {...props}
      isActive={isActive}
      handleClick={handleClickTab}
    />
  );
};

export { BreadcrumbMenuLinkController };
