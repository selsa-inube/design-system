import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";

export const typos = ["labelLarge", "labelMedium", "labelSmall"];
const defaultTypo = "labelLarge";

export const BreadcrumbLink = (props) => {
  const {
    isActive = false,
    label,
    destinationPath,
    id,
    typo = defaultTypo,
    handleClick,
  } = props;

  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledContainerLink isActive={isActive} id={id} onClick={handleClick}>
      <Label htmlFor={id} typo={transformedTypos}>
        <StyledBreadcrumbLink to={destinationPath}>
          {label}
        </StyledBreadcrumbLink>
      </Label>
    </StyledContainerLink>
  );
};

BreadcrumbLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  destinationPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(typos),
  handleClick: PropTypes.func.isRequired,
};
