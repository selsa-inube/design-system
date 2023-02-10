import React from "react";
import PropTypes from "prop-types";

import { StyledBlanket } from "./styles";

const Blanket = (props) => {
  const { children } = props;
  return <StyledBlanket>{children}</StyledBlanket>;
};

Blanket.propTypes = {
  children: PropTypes.element,
};

export default Blanket;
