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
  const { size, appearance, isTransparent } = props;

  return (
    <StyledSpinner
      appearance={
        appearances.includes(appearance) ? appearance : defaultAppearance
      }
      size={sizes.includes(size) ? size : defaultSize}
      isTransparent={isTransparent ? isTransparent : defaultTransparent}
    />
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(sizes).isRequired,
  appearance: PropTypes.oneOf(appearances).isRequired,
  isTransparent: PropTypes.bool.isRequired,
};

export { Spinner };
