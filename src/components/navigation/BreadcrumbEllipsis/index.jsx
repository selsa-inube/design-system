import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyledContainerEllipsis, StyledBreadcrumbEllipsis } from "./styles";

const typos = ["labelLarge", "labelSmall"];
const defaultTypo = "labelLarge";

const BreadcrumbEllipsis = (props) => {
  const { id, typo = defaultTypo, handleClick } = props;

  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;
  return (
    <StyledContainerEllipsis onClick={handleClick}>
      <Label htmlFor={id} typo={transformedTypos}>
        <StyledBreadcrumbEllipsis>...</StyledBreadcrumbEllipsis>
      </Label>
    </StyledContainerEllipsis>
  );
};

BreadcrumbEllipsis.propTypes = {
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(typos),
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
};

export { BreadcrumbEllipsis, typos };
