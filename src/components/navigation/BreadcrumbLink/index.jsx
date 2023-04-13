import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";

import { StyledContainerLink, StyledBreadcrumbLink } from "./styles";

const typos = ["labelLarge", "labelMedium", "labelSmall"];
const defaultTypo = "labelLarge";
const defaultIsActive = false;

const BreadcrumbLink = (props) => {
  const {
    isActive = defaultIsActive,
    label,
    path,
    id,
    typo = defaultTypo,
    handleClick,
  } = props;

  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;
  const transformedIsActive =
    typeof isActive === "boolean" ? isActive : defaultIsActive;

  return (
    <StyledContainerLink id={id} onClick={handleClick}>
      <Label htmlFor={id} typo={transformedTypos}>
        <StyledBreadcrumbLink to={path} data-is-active={transformedIsActive}>
          {label}
        </StyledBreadcrumbLink>
      </Label>
    </StyledContainerLink>
  );
};

BreadcrumbLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(typos),
  handleClick: PropTypes.func,
};

export { BreadcrumbLink, typos };
