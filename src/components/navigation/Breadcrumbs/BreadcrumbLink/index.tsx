import { useState } from "react";
import { Text } from "@data/Text";

import { Typos } from "./props";
import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";

export interface IBreadcrumbLinkProps {
  label: string;
  path: string;
  id: string;
  typo?: Typos;
  onClick?: () => void;
}

const BreadcrumbLink = (props: IBreadcrumbLinkProps) => {
  const { label, path, id, typo = "large", onClick } = props;
  const [appearance, setAppearance] = useState<"gray" | "dark">("gray");

  const handleClick = () => {
    setAppearance("dark");
    onClick && onClick();
  };

  return (
    <StyledContainerLink id={id} onClick={handleClick}>
      <Text type="label" size={typo} appearance="gray">
        <StyledBreadcrumbLink to={path}>
          <Text type="label" size="large" appearance={appearance}>
            {label}
          </Text>
        </StyledBreadcrumbLink>
      </Text>
    </StyledContainerLink>
  );
};

export { BreadcrumbLink };
