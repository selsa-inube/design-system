import React from "react";
import PropTypes from "prop-types";
import { StyledSpinner } from "./styles";

export const sizes = ["large", "medium", "small"];
export const appearances = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
];

const defaultAppearance = "blue";
const defaultSize = "medium";
const defaultTransparent = false;

const Spinner = (props) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    isTransparent = defaultTransparent,
  } = props;

  return (
    <StyledSpinner
      appearance={
        appearances.includes(appearance) ? appearance : defaultAppearance
      }
      size={sizes.includes(size) ? size : defaultSize}
      isTransparent={isTransparent}
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(sizes),
  appearance: PropTypes.oneOf(appearances),
  isTransparent: PropTypes.bool,
};

export { Spinner };
