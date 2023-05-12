import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

import { BreadcrumbLink } from "../../navigation/BreadcrumbLink";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import { BreadcrumbEllipsis, typos } from "../../navigation/BreadcrumbEllipsis";

function getBreadcrumbItems(crumbs) {
  const breadcrumbItems = [
    { path: "/", label: "Home", isActive: false },
    ...crumbs.map((label, index) => ({
      path: `/${crumbs
        .slice(0, index + 1)
        .join("/")
        .toLowerCase()}`,
      label: `${capitalizeString(label)}`,
      id: `/${crumbs.slice(0, index + 1).join("/")}`,
      isActive: index === crumbs.length - 1,
    })),
  ];

  return breadcrumbItems;
}

function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const sizes = ["labelLarge", "labelSmall"];
const Breadcrumbs = (props) => {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const maxCrumbs = isDesktop ? 5 : 3;
  const breadcrumbItems = getBreadcrumbItems(crumbs);
  const transformedSize = isDesktop ? sizes[0] : sizes[1];

  if (breadcrumbItems.length > maxCrumbs) {
    const routesForEllipsis = breadcrumbItems
      .slice(0, -1)
      .filter((_, index) => index !== 0);

    const breadcrumbItemsFiltered = new Array(
      breadcrumbItems[0],
      breadcrumbItems[breadcrumbItems.length - 1]
    );

    return (
      <StyledBreadcrumbs>
        <BreadcrumbLink
          key={breadcrumbItemsFiltered[0].path}
          path={breadcrumbItemsFiltered[0].path}
          id={breadcrumbItemsFiltered[0].path}
          label={breadcrumbItemsFiltered[0].label}
          isActive={breadcrumbItemsFiltered[0].isActive}
        />
        <BreadcrumbEllipsis
          key={`breadcrumb-ellipsis`}
          typo={typos[transformedSize]}
          routes={routesForEllipsis}
        />
        <BreadcrumbLink
          key={breadcrumbItemsFiltered[1].path}
          path={breadcrumbItemsFiltered[1].path}
          id={breadcrumbItemsFiltered[1].path}
          label={breadcrumbItemsFiltered[1].label}
          isActive={breadcrumbItemsFiltered[1].isActive}
        />
      </StyledBreadcrumbs>
    );
  }

  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ path, label, isActive }) => (
        <BreadcrumbLink
          key={path}
          path={path}
          id={path}
          label={label}
          isActive={isActive}
        />
      ))}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  route: PropTypes.string.isRequired,
};

export { Breadcrumbs };
