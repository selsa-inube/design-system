import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

import { BreadcrumbLink } from "../../navigation/BreadcrumbLink";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { BreadcrumbEllipsis, typos } from "../../navigation/BreadcrumbEllipsis";

const Breadcrumbs = (props) => {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");
  crumbs.unshift("Home");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;
  let breadcrumbItems = [];

  if (crumbs.length > maxCrumbs) {
    const firstCrumb = {
      path: `/${crumbs[0]}`,
      crumb: `${crumbs[0].charAt(0).toUpperCase() + crumbs[0].slice(1)}`,
      isActive: false,
    };

    const lastCrumb = {
      path: `/${crumbs.slice(-1)[0]}`,
      crumb: `${
        crumbs.slice(-1)[0].charAt(0).toUpperCase() +
        crumbs.slice(-1)[0].slice(1)
      }`,
      isActive: true,
    };

    const middleCrumb = {
      path: "",
      crumb: "",
      isActive: false,
    };

    breadcrumbItems.push(firstCrumb, middleCrumb, lastCrumb);
  } else {
    breadcrumbItems = crumbs.map((crumb, index) => ({
      path: `/${crumbs.slice(0, index + 1).join("/")}`,
      crumb: `${crumb.charAt(0).toUpperCase() + crumb.slice(1)}`,
      isActive: index === crumbs.length - 1,
    }));
  }

  const routesForEllipsis = crumbs.slice(1, -1).map((item) => ({
    label: item,
    path: `/${item.toLowerCase()}`,
    id: item,
  }));

  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ path, crumb, isActive }, index) =>
        index === 1 && crumbs.length > maxCrumbs ? (
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
