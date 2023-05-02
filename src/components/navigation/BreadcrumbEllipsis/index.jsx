import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Label } from "../../inputs/Label";
import { BreadcrumbMenu } from "../../navigation/BreadcrumbMenu";
import { StyledContainerEllipsis, StyledBreadcrumbEllipsis } from "./styles";

const typos = ["labelLarge", "labelSmall"];
const defaultTypo = "labelLarge";

const handleClickOutside = (event, containerRef, setShowMenu) => {
  if (containerRef.current && !containerRef.current.contains(event.target)) {
    setShowMenu(false);
  }
};

const BreadcrumbEllipsis = (props) => {
  const { typo = defaultTypo, routes } = props;

  const [showMenu, setShowMenu] = useState(false);
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;

  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) =>
      handleClickOutside(event, containerRef, setShowMenu)
    );

    return () => {
      document.removeEventListener("mousedown", (event) =>
        handleClickOutside(event, containerRef, setShowMenu)
      );
    };
  }, [containerRef]);

  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <StyledContainerEllipsis ref={containerRef} onClick={handleEllipsisClick}>
        <Label
          htmlFor="ellipsis"
          typo={typos.includes(typo) ? typo : transformedTypos}
        >
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Label>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </>
  );
};

BreadcrumbEllipsis.propTypes = {
  typo: PropTypes.oneOf(["labelLarge", "labelSmall"]),
  routes: PropTypes.array.isRequired,
};

export { BreadcrumbEllipsis, typos };
