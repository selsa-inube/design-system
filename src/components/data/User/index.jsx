import React from "react";
import PropTypes from "prop-types";

import { Avatar } from "../Avatar";
import { StyledUser, StyledCard } from "./styles";

export const sizes = ["small", "large"];
const defaultSize = "large";

const User = (props) => {
  const { userName, businessUnit, size = defaultSize } = props;
  const fixedSize = sizes.includes(size) ? size : defaultSize;

  return (
    <StyledUser size={fixedSize}>
      <StyledCard>
        <span id="userName">{userName}</span>
        <span id="businessUnit">{businessUnit}</span>
      </StyledCard>
      {fixedSize === "large" && <Avatar />}
    </StyledUser>
  );
};

User.propTypes = {
  userName: PropTypes.string.isRequired,
  businessUnit: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes),
};

export { User };
