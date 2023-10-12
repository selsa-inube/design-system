import { useState } from "react";
import { Text } from "@data/Text";

import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";
import { Sizes } from "./props";

export interface IBreadcrumbLinkProps {
  label: string;
  path: string;
  id: string;
  size?: Sizes;
  onClick?: () => void;
}

const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const { label, path, id, size = "large", onClick } = props;
  const [appearance, setAppearance] = useState<"gray" | "dark">("gray");

  const handleClick = () => {
    setAppearance("dark");
    onClick && onClick();
  };

  return (
    <StyledContainerLink id={id} onClick={handleClick}>
      <StyledBreadcrumbLink to={path}>
        <Text type="label" size={size} appearance={appearance}>
          {label}
        </Text>
      </StyledBreadcrumbLink>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
