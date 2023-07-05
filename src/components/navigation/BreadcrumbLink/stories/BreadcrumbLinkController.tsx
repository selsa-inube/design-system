import { useState } from "react";
import { BreadcrumbLink } from "../index";
import { IBreadcrumbLinkProps } from "../interfaces/BreadcrumbLink.interface";

const BreadcrumbLinkController = (props: IBreadcrumbLinkProps) => {
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