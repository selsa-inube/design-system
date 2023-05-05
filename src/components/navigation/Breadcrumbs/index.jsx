import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

import { BreadcrumbLink } from "../../navigation/BreadcrumbLink";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { BreadcrumbEllipsis, typos } from "../../navigation/BreadcrumbEllipsis";

function getBreadcrumbItems(crumbs, maxCrumbs) {
  const breadcrumbItems = crumbs.map((crumb, index) => ({
    path: `/${crumbs.slice(1, index + 1).join("/")}`,
    crumb: `${capitalizeString(crumb)}`,
    isActive: index === crumbs.length - 1,
  }));

  if (breadcrumbItems.length > maxCrumbs) {
    return breadcrumbItems.filter(
      (item, index) =>
        index === 0 || index === breadcrumbItems.length - 1 || index === 2
    );
  }

  return breadcrumbItems;
}

function getRoutesForEllipsis(crumbs) {
  return crumbs.slice(1, -1).map((crumb, index) => {
    const path = `/${crumbs.slice(1, index + 2).join("/")}`;
    return {
      label: crumb,
      path: path.toLowerCase(),
      id: path,
    };
  });
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Breadcrumbs = (props) => {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");
  crumbs.unshift("Home");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;
  const breadcrumbItems = getBreadcrumbItems(crumbs, maxCrumbs);

  const routesForEllipsis = getRoutesForEllipsis(crumbs);
  const showEllipsis = crumbs.length > maxCrumbs;

  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ path, crumb, isActive }, index) =>
        index === 1 && showEllipsis ? (
          <BreadcrumbEllipsis
            key={`breadcrumb-ellipsis-${index}`}
            typo={typos[isDesktop ? "labelLarge" : "labelSmall"]}
            routes={routesForEllipsis}
          />
        ) : (
          <BreadcrumbLink
            key={path}
            path={path}
            id={path}
            label={crumb}
            isActive={isActive}
          />
        )
      )}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  route: PropTypes.string.isRequired,
};

export { Breadcrumbs };
