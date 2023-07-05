import { useState, useEffect, useRef } from "react";

import { BreadcrumbMenu } from "../../navigation/BreadcrumbMenu";
import { Text } from "../../data/Text/index";

import {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
} from "./styles";

import { IBreadcrumbEllipsisProps } from "./interfaces/BreadcrumbEllipsis.interface";
import { Typos, typos } from "./types/BreadcrumbEllipsis.Typos.type";

const defaultTypo = "labelLarge";

const BreadcrumbEllipsis = (props: IBreadcrumbEllipsisProps) => {
  const { typo = defaultTypo, routes } = props;
  const [showMenu, setShowMenu] = useState(false);
  const transformedTypos: Typos = typos.includes(typo) ? typo : defaultTypo;

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
        <Text typo={transformedTypos}>
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Text>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </StyledRelativeContainer>
  );
};

export { BreadcrumbEllipsis };