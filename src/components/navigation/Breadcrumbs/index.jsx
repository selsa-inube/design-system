import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

import { BreadcrumbLink } from "../../navigation/BreadcrumbLink";
import { BrowserRouter } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");

  const breadcrumbItems = crumbs.map((crumb, index) => ({
    path: `/${crumbs.slice(0, index + 1).join("/")}`,
    crumb: `${crumb.charAt(0).toUpperCase() + crumb.slice(1)}`,
    isActive: index === crumbs.length - 1,
  }));

  return (
    <StyledBreadcrumbs>
      <BrowserRouter key="home">
        <BreadcrumbLink path="/" id="Home" label="Home" />
      </BrowserRouter>
      {breadcrumbItems.map(({ path, crumb, isActive }) => (
        <BrowserRouter key={path}>
          <BreadcrumbLink
            path={path}
            id={path}
            label={crumb}
            isActive={isActive}
          />
        </BrowserRouter>
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  route: PropTypes.string.isRequired,
};

export { Breadcrumbs };
