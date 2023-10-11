import { useState, useEffect, useRef } from "react";

import { Text } from "@data/Text";
import { BreadcrumbMenu } from "../BreadcrumbMenu";

import { Typos } from "./props";
import {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
} from "./styles";
import { IBreadcrumbsRoutes } from "../props";

export interface IBreadcrumbEllipsisProps extends IBreadcrumbsRoutes {
  size?: Typos;
}

const defaultTypo = "large";

const BreadcrumbEllipsis = (props: IBreadcrumbEllipsisProps) => {
  const { size = defaultTypo, routes } = props;
  const [showMenu, setShowMenu] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const closeEllipsisMenu = (event: globalThis.MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeEllipsisMenu);

    return () => {
      document.removeEventListener("click", closeEllipsisMenu);
    };
  }, [containerRef]);

  const toggleEllipsisMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledRelativeContainer ref={containerRef} onClick={toggleEllipsisMenu}>
      <StyledContainerEllipsis>
        <Text type="label" size={size} appearance="dark">
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Text>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </StyledRelativeContainer>
  );
};

export { BreadcrumbEllipsis };
