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
const defaultDirection = "row";
const defaultJustifyContent = "flex-start";
const defaultAlignItems = "flex-start";

const Stack = (props) => {
  const {
    children,
    wrap = false,
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

  if (!flexAligments.includes(alignItems)) {
    console.warn(
      `Invalid prop value for 'alignItems': ${alignItems}. Allowed values are ${flexAligments.join(
        ", "
      )}.`
    );
  }

  if (!flexAligments.includes(justifyContent)) {
    console.warn(
      `Invalid prop value for 'justifyContent': ${justifyContent}. Allowed values are ${flexAligments.join(
        ", "
      )}.`
    );
  }

  if (!directionAligments.includes(direction)) {
    console.warn(
      `Invalid prop value for 'direction': ${direction}. Allowed values are ${directionAligments.join(
        ", "
      )}.`
    );
  }

  if (typeof wrap !== "boolean") {
    console.warn(
      `Invalid prop value for 'wrap': ${wrap}. Allowed values are true or false.`
    );
  }

  if (typeof gap !== "string") {
    console.warn(
      `Invalid prop value for 'wrap': ${gap}. Allowed values are a string(with a default value that must include the measure e.g 10px).`
    );
  }

  if (typeof children !== "object") {
    console.warn(
      `Invalid prop value for 'children': ${children}. Allowed values are a children(React.ReactNode).`
    );
  }

  return (
    <StyledFlex
      direction={transformedDirection}
      justifyContent={transformedJustifyContent}
      alignItems={transformedAlignItems}
      wrap={+wrap}
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
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(directionAligments).isRequired,
  justifyContent: PropTypes.oneOf(flexAligments).isRequired,
  alignItems: PropTypes.oneOf(flexAligments).isRequired,
  gap: PropTypes.string,
};

export { Stack };
