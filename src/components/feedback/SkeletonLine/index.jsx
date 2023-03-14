import React from "react";
import PropsTypes from "prop-types";
import { StyledSkeletonLine } from "./styles";

const SkeletonLine = (props) => {
  const { width = "100%", isAnimated = false } = props;

  return <StyledSkeletonLine width={width} isAnimated={isAnimated} />;
};

SkeletonLine.propsTypes = {
  with: PropsTypes.string,
  isAnimated: PropsTypes.bool,
};

export { SkeletonLine };
