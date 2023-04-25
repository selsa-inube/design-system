import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Label } from "../../inputs/Label";
import { BreadcrumbMenu } from "../../navigation/BreadcrumbMenu";
import { StyledContainerEllipsis, StyledBreadcrumbEllipsis } from "./styles";

const typos = ["labelLarge", "labelSmall"];
const defaultTypo = "labelLarge";

const BreadcrumbEllipsis = (props) => {
  const { typo = defaultTypo, routes } = props;

  const [showMenu, setShowMenu] = useState(false);
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;

  const containerRef = useRef(null);

  const handleEllipsisClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

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
