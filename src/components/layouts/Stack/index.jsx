import React from "react";
import PropTypes from "prop-types";
import { StyledFlex } from "./styles";

export const directionAligments = ["row", "column"];
export const flexAligments = [
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
const defaultAlignItems = "flex-start";
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

  const transformedDirection = directionAligments.includes(direction)
    ? direction
    : defaultDirection;
  const transformedAlignItems = flexAligments.includes(alignItems)
    ? alignItems
    : defaultAlignItems;
  const transformedJustifyContent = flexAligments.includes(justifyContent)
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
  direction: PropTypes.oneOf(directionAligments).isRequired,
  justifyContent: PropTypes.oneOf(flexAligments).isRequired,
  alignItems: PropTypes.oneOf(flexAligments).isRequired,
  gap: PropTypes.string,
};

export { Stack };
