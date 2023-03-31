import React from "react";
import PropTypes from "prop-types";
import { Link, BrowserRouter, useLocation } from "react-router-dom";

import { StyledLink } from "./styles";

export const BreadcrumbLink = (props) => {
  const {
    isActive = false,
    label,
    destinationPath,
    id,
    typo = "labelLarge",
  } = props;
  const location = useLocation();

  const handleClick = (event) => {
    event.preventDefault();
    // Handle navigation logic here
  };

  return (
    <StyledLink isActive={isActive} id={id} onClick={handleClick} typo={typo}>
      <BrowserRouter basename={location.pathname}>
        <Link to={destinationPath}>{label}</Link>
      </BrowserRouter>
    </StyledLink>
  );
};

BreadcrumbLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  destinationPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  typo: PropTypes.oneOf(["labelLarge", "labelMedium", "labelSmall"]),
};
