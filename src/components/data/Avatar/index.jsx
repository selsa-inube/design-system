import React from "react";
import PropTypes from "prop-types";
import { MdPersonOutline } from "react-icons/md";

import { StyledAvatar } from "./styles";

export const defaultIcon = <MdPersonOutline />;

const Avatar = (props) => {
  const { icon = defaultIcon } = props;

  return <StyledAvatar>{icon}</StyledAvatar>;
};

Avatar.propTypes = {
  icon: PropTypes.element,
};

export { Avatar };
