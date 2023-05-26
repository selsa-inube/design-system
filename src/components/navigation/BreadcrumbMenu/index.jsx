import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { BreadcrumbMenuLink } from "../BreadcrumbMenuLink";
import { StyledBreadcrumbMenu } from "./styles";

const BreadcrumbMenu = (props) => {
  const { routes } = props;

  return (
    <StyledBreadcrumbMenu>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route) => (
          <BreadcrumbMenuLink
            key={route.id}
            id={route.id}
            path={route.path}
            label={route.label}
          />
        ))}
      </Stack>
    </StyledBreadcrumbMenu>
  );
};

BreadcrumbMenu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export { BreadcrumbMenu };
