import React from "react";
import PropTypes from "prop-types";
import { Stack } from "../../layouts/Stack";
import { BreadcrumbMenuLink } from "../BreadcrumbMenuLink";
import { StyledBreadcrumbMenu } from "./styles";

const BreadcrumbMenu = React.forwardRef((props, ref) => {
  const { routes, handleClick } = props;

  return (
    <StyledBreadcrumbMenu ref={ref}>
      <Stack direction="column" justifyContent="space-between">
        {routes.map((route) => (
          <BreadcrumbMenuLink
            key={route.id}
            id={route.id}
            path={route.path}
            label={route.label}
            onClick={handleClick}
          />
        ))}
      </Stack>
    </StyledBreadcrumbMenu>
  );
});

BreadcrumbMenu.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClick: PropTypes.func,
};

export { BreadcrumbMenu };
