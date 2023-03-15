import React from "react";
import PropTypes from "prop-types";
import { StyledSkeletonIcon } from "./styles";

const defaultWidth = "24px";
const defaultHeight = "24px";

const SkeletonIcon = (props) => {
  const {
    width = defaultWidth,
    height = defaultHeight,
    isAnimated = false,
  } = props;

  return (
    <StyledSkeletonIcon width={width} height={height} isAnimated={isAnimated} />
  );
};

SkeletonIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isAnimated: PropTypes.bool,
};

export { SkeletonIcon };
