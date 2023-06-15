import React from "react";
import PropTypes from "prop-types";
import { StyledCountdownBar } from "./styles";
import { colors } from "../../../shared/colors/colors";

const defaultAppearance = "primary";
const defaultSize = "4px";
const defaultDuration = 3000;
export const appearances = Object.keys(colors.sys.actions);

const getCountdownBarColor = (appearance) => {
  return colors.sys.actions[appearance].filled;
};

const isValidCssPixelMeasure = (size) => {
  return /^[0-9]+px$/.test(size);
};

const CountdownBar = (props) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    duration = defaultDuration,
    isPaused = false,
    handleCountdown,
  } = props;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  const transformedSize = isValidCssPixelMeasure(size) ? size : defaultSize;

  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={getCountdownBarColor(transformedAppearance)}
      size={transformedSize}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

CountdownBar.propTypes = {
  size: PropTypes.string,
  appearance: PropTypes.oneOf(appearances),
  duration: PropTypes.number,
  isPaused: PropTypes.bool,
  handleCountdown: PropTypes.func,
};

export { CountdownBar };
