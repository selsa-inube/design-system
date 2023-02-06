import React from "react";
import PropTypes from "prop-types";

import { StyledBlanket } from "./Blanketstyles";

const BlanketComponent = (props) => {
  const { children } = props;
  return <StyledBlanket>{children}</StyledBlanket>;
};

BlanketComponent.propTypes = {
  children: PropTypes.element,
};

export default BlanketComponent;
