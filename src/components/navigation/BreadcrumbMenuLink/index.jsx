import React from "react";
import PropTypes from "prop-types";

import { Stack } from "../../layouts/Stack";
import { Text } from "../../data/Text";

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
          <Text
            typo={transformedTypos}
            appearance="secondary"
            padding="8px 12px"
          >
            {label}
          </Text>
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
