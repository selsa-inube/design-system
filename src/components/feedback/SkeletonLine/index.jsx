import React from "react";
import PropTypes from "prop-types";
import { StyledSkeletonLine } from "./styles";

const SkeletonLine = (props) => {
  const { width = "100%", isAnimated = false } = props;

  const transformedIsAnimated =
    typeof isAnimated === "boolean" ? isAnimated : false;

  return (
    <StyledSkeletonLine width={width} isAnimated={transformedIsAnimated} />
  );
};

SkeletonLine.propTypes = {
  width: PropTypes.string,
  isAnimated: PropTypes.bool,
};

export { SkeletonLine };
