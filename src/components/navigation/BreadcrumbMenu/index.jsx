import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { BreadcrumbLink } from "../BreadcrumbLink";
import { StyledBreadcrumbMenu, StyledBox } from "./styles";

const BreadcrumbMenu = (props) => {
  const { routes } = props;

  return (
    <StyledBreadcrumbMenu>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route) => (
          <StyledBox key={route.id}>
            <Stack alignItems="center">
              <BreadcrumbLink
                id={route.id}
                path={route.path}
                label={route.label}
              />
            </Stack>
          </StyledBox>
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
