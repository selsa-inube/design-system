import React from "react";
import PropTypes from "prop-types";

import { transformedMeasure } from "../../../utilities/transformedMeasure";
import { StyledFlex } from "./styles";

export const directionAlignments = ["row", "column"];
export const flexAlignments = [
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "space-around",
  "space-evenly",
  "space-between",
];
export const wrapControl = ["wrap", "nowrap"];

const defaultDirection = "row";
const defaultJustifyContent = "flex-start";
const defaultAlignItems = "stretch";
const defaultWrapControl = "nowrap";
const defaultGap = "0px";
const defaultMargin = "0px";
const defaultPadding = "0px";

const Stack = (props) => {
  const {
    children,
    wrap = defaultWrapControl,
    direction = defaultDirection,
    justifyContent = defaultJustifyContent,
    alignItems = defaultAlignItems,
    gap,
    margin,
    padding,
  } = props;

  const transformedDirection = directionAlignments.includes(direction)
    ? direction
    : defaultDirection;
  const transformedAlignItems = flexAlignments.includes(alignItems)
    ? alignItems
    : defaultAlignItems;
  const transformedJustifyContent = flexAlignments.includes(justifyContent)
    ? justifyContent
    : defaultJustifyContent;
  const transformedWrap = wrapControl.includes(wrap)
    ? wrap
    : defaultWrapControl;

  return (
    <StyledFlex
      direction={transformedDirection}
      justifyContent={transformedJustifyContent}
      alignItems={transformedAlignItems}
      wrap={transformedWrap}
      gap={transformedMeasure(gap, defaultGap)}
      margin={transformedMeasure(margin, defaultMargin)}
      padding={transformedMeasure(padding, defaultPadding)}
    >
      {children}
    </StyledFlex>
  );
};

Stack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  wrap: PropTypes.oneOf(wrapControl),
  direction: PropTypes.oneOf(directionAlignments),
  justifyContent: PropTypes.oneOf(flexAlignments),
  alignItems: PropTypes.oneOf(flexAlignments),
  gap: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export { Stack };
