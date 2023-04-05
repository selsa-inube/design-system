import React from "react";
import PropTypes from "prop-types";
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

const Stack = (props) => {
  const {
    children,
    wrap = defaultWrapControl,
    direction = defaultDirection,
    justifyContent = defaultJustifyContent,
    alignItems = defaultAlignItems,
    gap = "0px",
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
      gap={gap}
    >
      {children}
    </StyledFlex>
  );
};

Stack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  wrap: PropTypes.oneOf(wrapControl),
  direction: PropTypes.oneOf(directionAlignments),
  justifyContent: PropTypes.oneOf(flexAlignments),
  alignItems: PropTypes.oneOf(flexAlignments),
  gap: PropTypes.string,
};

export { Stack };
