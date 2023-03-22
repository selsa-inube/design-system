import React from "react";
import PropTypes from "prop-types";
import { StyledSkeletonIcon } from "./styles";

const defaultSize = "24px";

const SkeletonIcon = (props) => {
  const { size = defaultSize, isAnimated = false } = props;

  return <StyledSkeletonIcon size={size} isAnimated={isAnimated} />;
};

SkeletonIcon.propTypes = {
  size: PropTypes.string,
  isAnimated: PropTypes.bool,
};

export { SkeletonIcon };
