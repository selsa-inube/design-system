import React, { useState } from "react";
import { BreadcrumbEllipsis } from "../index";
import { BreadcrumbMenu } from "../../BreadcrumbMenu";

const BreadcrumbEllipsisController = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClickTab = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <BreadcrumbEllipsis
        {...props}
        isActive={isActive}
        handleClick={handleClickTab}
      />
      {isActive && <BreadcrumbMenu routes={props.routes} />}
    </>
  );
};

export { BreadcrumbEllipsisController };
