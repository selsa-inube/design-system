import React from "react";
import PropsTypes from "prop-types";
import { StyledSkeletonLine } from "./styles";

const SkeletonLine = (props) => {
  const { width = "100%", isAnimated = false } = props;

  const transformedIsAnimated =
    typeof isAnimated === "boolean" ? isAnimated : false;

  return (
    <StyledSkeletonLine width={width} isAnimated={transformedIsAnimated} />
  );
};

SkeletonLine.propsTypes = {
  with: PropsTypes.string,
  isAnimated: PropsTypes.bool,
};

export { SkeletonLine };
