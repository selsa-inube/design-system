import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { BreadcrumbMenu } from "../../navigation/BreadcrumbMenu";
import { Text } from "../../data/Text/index";

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

  const closeEllipsisMenu = (event) => {
    if (!containerRef.current.contains(event.target)) {
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
        <Text typo={typos.includes(typo) ? typo : transformedTypos}>
          <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
        </Text>
      </StyledContainerEllipsis>
      {showMenu && <BreadcrumbMenu routes={routes} />}
    </StyledRelativeContainer>
  );
};

BreadcrumbEllipsis.propTypes = {
  typo: PropTypes.oneOf(typos),
  routes: PropTypes.array.isRequired,
};

export { BreadcrumbEllipsis, typos };
