import React from "react";
import PropTypes from "prop-types";
import { MdPersonOutline } from "react-icons/md";

import { StyledAvatar } from "./styles";

export const defaultIcon = <MdPersonOutline />;

interface AvatarProps {
  icon?: React.ReactElement;
}

const Avatar = (props: AvatarProps) => {
  const { icon = defaultIcon } = props;

  return <StyledAvatar>{icon}</StyledAvatar>;
};

Avatar.propTypes = {
  icon: PropTypes.element,
};

export { Avatar };
