import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Label } from "../../inputs/Label";
import { BreadcrumbMenu } from "../../navigation/BreadcrumbMenu";
import {
  StyledContainerEllipsis,
  StyledBreadcrumbEllipsis,
  StyledRelativeContainer,
} from "./styles";

const typos = ["labelLarge", "labelSmall"];
const defaultTypo = "labelLarge";

const BreadcrumbEllipsis = (props) => {
  const { typo = defaultTypo, routes } = props;

  const [showMenu, setShowMenu] = useState(false);
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;

  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      (!menuRef.current || !menuRef.current.contains(event.target))
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <StyledRelativeContainer>
      <StyledContainerEllipsis>
        <Label
          htmlFor="ellipsis"
          typo={typos.includes(typo) ? typo : transformedTypos}
        >
          <StyledBreadcrumbEllipsis
            ref={containerRef}
            onClick={handleEllipsisClick}
          >
            ...
          </StyledBreadcrumbEllipsis>
        </Label>
      </StyledContainerEllipsis>
      {showMenu && (
        <BreadcrumbMenu
          ref={menuRef}
          routes={routes}
          handleClick={handleEllipsisClick}
        />
      )}
    </StyledRelativeContainer>
  );
};

BreadcrumbEllipsis.propTypes = {
  typo: PropTypes.oneOf(typos),
  routes: PropTypes.array.isRequired,
};

export { BreadcrumbEllipsis, typos };
