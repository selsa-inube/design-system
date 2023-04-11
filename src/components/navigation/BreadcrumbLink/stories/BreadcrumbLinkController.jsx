import React, { useState } from "react";
import { BreadcrumbLink } from "../index";

const BreadcrumbLinkController = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickTab = () => {
    setIsActive(true);
  };

  return (
    <BreadcrumbLink
      {...props}
      isActive={isActive}
      handleClick={handleClickTab}
    />
  );
};

export { BreadcrumbLinkController };
