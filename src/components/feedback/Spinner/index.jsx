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
const defaultTransparent = "false";

const Spinner = (props) => {
  let {
    size = defaultSize,
    appearance = defaultAppearance,
    isTransparent = defaultTransparent,
  } = props;
  size = sizes.includes(size) ? size : defaultSize;
  appearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  isTransparent = [true, false].includes(isTransparent)
    ? isTransparent
    : defaultTransparent;

  return (
    <StyledSpinner
      appearance={appearance}
      size={size}
      isTransparent={isTransparent}
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(sizes).isRequired,
  appearance: PropTypes.oneOf(appearances).isRequired,
  isTransparent: PropTypes.bool.isRequired,
};

export { Spinner };
