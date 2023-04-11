import React from "react";
import PropTypes from "prop-types";

import { StyledBreadcrumbs } from "./styles";

const Breadcrumbs = (props) => {
  // const { route } = props;
  // const crumbs = route.split("/").filter((crumb) => crumb !== "");

  // const breadcrumbItems = crumbs.reduce(
  //   (acc, crumb, index) => {
  //     const path = `${acc[index].path}/${crumb}`;
  //     return [...acc, { path, crumb }];
  //   },
  //   [{ path: "", crumb: "Home" }]
  // );

  return (
    <StyledBreadcrumbs>
      {/* <BreadcrumbItem to="/" key="home">
        Home
      </BreadcrumbItem>
      {breadcrumbItems.map((item) => (
        <BreadcrumbItem to={item.path} key={item.path}>
          {item.crumb.charAt(0).toUpperCase() + item.crumb.slice(1)}
        </BreadcrumbItem>
      ))} */}
    </StyledBreadcrumbs>
  );
};

Breadcrumbs.propTypes = {
  route: PropTypes.string.isRequired,
};

export { Breadcrumbs };
