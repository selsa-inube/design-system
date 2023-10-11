import { useState } from "react";
import { Text } from "@data/Text";

import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";
import { Sizes } from "./props";

export interface IBreadcrumbLinkProps {
  label: string;
  path: string;
  id: string;
  size?: Sizes;
  handleClick?: () => void;
}

const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const { label, path, id, size = "large", handleClick } = props;
  const [appearance, setAppearance] = useState<"gray" | "dark">("gray");

  const onClick = () => {
    setAppearance("dark");
    handleClick && handleClick();
  };

  return (
    <StyledContainerLink id={id} onClick={onClick}>
      <StyledBreadcrumbLink to={path}>
        <Text type="label" size={size} appearance={appearance}>
          {label}
        </Text>
      </StyledBreadcrumbLink>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
