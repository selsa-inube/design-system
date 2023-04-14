import React, { useState } from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { BreadcrumbLink } from "../BreadcrumbLink";
import { StyledBreadcrumbMenu, StyledBox } from "./styles";

const BreadcrumbMenu = (props) => {
  const { routes } = props;

  const [activeRouteIndex, setActiveRouteIndex] = useState(-1);

  const handleBreadcrumbLinkClick = (routeIndex) => {
    setActiveRouteIndex(routeIndex);
  };

  return (
    <StyledBreadcrumbMenu>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route, index) => (
          <StyledBox>
            <Stack alignItems="center" gap="32px" key={route.id}>
              <BreadcrumbLink
                id={route.id}
                path={route.path}
                label={route.label}
                isActive={index === activeRouteIndex}
                handleClick={() => handleBreadcrumbLinkClick(index)}
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
