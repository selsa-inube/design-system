import React, { useState } from "react";
import { BreadcrumbEllipsis } from "../index";

const BreadcrumbEllipsisController = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickTab = () => {
    setIsActive(true);
  };

  return (
    <BreadcrumbEllipsis
      {...props}
      isActive={isActive}
      handleClick={handleClickTab}
    />
  );
};

export { BreadcrumbEllipsisController };
