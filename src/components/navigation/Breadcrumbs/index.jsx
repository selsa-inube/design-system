import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

import { BreadcrumbLink } from "../../navigation/BreadcrumbLink";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { BreadcrumbEllipsis, typos } from "../../navigation/BreadcrumbEllipsis";

function getBreadcrumbItems(crumbs, maxCrumbs) {
  if (crumbs.length > maxCrumbs) {
    const firstCrumb = {
      path: `/${crumbs[0]}`,
      crumb: `${capitalizeString(crumbs[0])}`,
      isActive: false,
    };

    const lastCrumb = {
      path: `/${crumbs.slice(-1)[0]}`,
      crumb: `${capitalizeString(crumbs.slice(-1)[0])}`,
      isActive: true,
    };

    const middleCrumb = {
      path: "",
      crumb: "",
      isActive: false,
    };

    return [firstCrumb, middleCrumb, lastCrumb];
  } else {
    return crumbs.map((crumb, index) => ({
      path: `/${crumbs.slice(0, index + 1).join("/")}`,
      crumb: `${capitalizeString(crumb)}`,
      isActive: index === crumbs.length - 1,
    }));
  }
}

function getRoutesForEllipsis(crumbs) {
  return crumbs.slice(1, -1).map((item) => ({
    label: item,
    path: `/${item.toLowerCase()}`,
    id: item,
  }));
}

function shouldShowEllipsis(index, length, maxCrumbs) {
  return index === 1 && length > maxCrumbs;
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

  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ path, crumb, isActive }, index) =>
        shouldShowEllipsis(index, crumbs.length, maxCrumbs) ? (
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
