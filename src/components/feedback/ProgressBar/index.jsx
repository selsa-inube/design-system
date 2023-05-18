import React from "react";
import PropTypes from "prop-types";
import { StyledProgressBar } from "./styles";
import { colors } from "../../../shared/colors/colors";

const defaultAppearance = "primary";
const defaultSize = "4px";
const defaultDuration = 3000;
export const appearances = Object.keys(colors.sys.actions);

const getProgressBarColor = (appearance) => {
  return colors.sys.actions[appearance].filled;
};

const isValidCssPixelMeasure = (size) => {
  return /^[0-9]+px$/.test(size);
};

const ProgressBar = (props) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    duration = defaultDuration,
    handleCountdownEnd,
  } = props;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  const transformedSize = isValidCssPixelMeasure(size) ? size : defaultSize;

  return (
    <StyledProgressBar
      id="progress-bar"
      appearance={getProgressBarColor(transformedAppearance)}
      size={transformedSize}
      duration={duration}
      onAnimationEnd={handleCountdownEnd}
    />
  );
};

ProgressBar.propTypes = {
  size: PropTypes.string,
  appearance: PropTypes.oneOf(appearances),
  duration: PropTypes.number,
  handleCountdownEnd: PropTypes.func,
};

export { ProgressBar };
