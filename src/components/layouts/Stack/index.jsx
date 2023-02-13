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

const defaultAligmentItems = "flex-start";
const defaultAligmentContent = "flex-start";
const defaultDirection = "row";
const defaultGap = "0px";

const Stack = (props) => {
  const {
    children,
    wrap,
    direction = defaultDirection,
    justifyContent = defaultAligmentContent,
    alignItems = defaultAligmentItems,
    gap = defaultGap,
  } = props;

  return (
    <StyledFlex
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap | false}
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
