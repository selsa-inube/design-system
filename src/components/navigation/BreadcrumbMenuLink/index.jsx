import React from "react";
import PropTypes from "prop-types";

import { Label } from "../../inputs/Label";
import { Stack } from "../../layouts/Stack";

import { StyledContainerLink, StyledBreadcrumbMenuLink } from "./styles";

const typos = ["labelLarge", "labelMedium", "labelSmall"];
const defaultTypo = "labelLarge";

const BreadcrumbMenuLink = (props) => {
  const { label, path, id, typo = defaultTypo } = props;
  const transformedTypos = typos.includes(typo) ? typo : defaultTypo;

  return (
    <StyledBreadcrumbMenuLink to={path}>
      <StyledContainerLink id={id}>
        <Stack alignItems="center">
          <Label htmlFor={id} typo={transformedTypos}>
            {label}
          </Label>
        </Stack>
      </StyledContainerLink>
    </StyledBreadcrumbMenuLink>
  );
};

BreadcrumbMenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(typos),
};

export { BreadcrumbMenuLink, typos };
