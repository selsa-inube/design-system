import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";
import { Stack } from "../../layouts/Stack";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";

const typos = ["labelLarge", "labelMedium", "labelSmall"];
const defaultTypo = "labelLarge";
const defaultIsActive = false;

const BreadcrumbMenuLink = (props) => {
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
      <Stack alignItems="center">
        <Label htmlFor={id} typo={transformedTypos}>
          <StyledBreadcrumbMenuLink
            to={path}
            data-is-active={transformedIsActive}
          >
            {label}
          </StyledBreadcrumbMenuLink>
        </Label>
      </Stack>
    </StyledContainerLink>
  );
};

BreadcrumbMenuLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(typos),
  handleClick: PropTypes.func,
};

export { BreadcrumbMenuLink, typos };
