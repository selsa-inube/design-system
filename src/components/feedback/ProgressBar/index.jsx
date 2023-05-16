import React from "react";
import PropTypes from "prop-types";
import { StyledProgressBar } from "./styles";
import { colors } from "../../../shared/colors/colors";

const defaultAppearance = "primary";
const defaultSize = "4px";
const defaultDurations = 1000;
export const appearances = Object.keys(colors.sys.actions);

/**it is validated that the values entered are in pixels */
const regex = /^[0-9]+px$/;

const getProgressBarColor = (appearance) => {
  return colors.sys.actions[appearance].filled;
};

const isValidCssPixelMeasure = (element) => {
  let result = false;
  const splitElement = element.split(" ");

  if (element !== "" && splitElement.length > 0) {
    const validatedElement = splitElement
      .filter((spacing) => spacing !== "")
      .every((i) => regex.test(i));
    result = validatedElement === true && splitElement.length <= 4;
  }
  return result;
};

const ProgressBar = (props) => {
  const {
    size = defaultSize,
    appearance = defaultAppearance,
    durations = defaultDurations,
    handleCountdownEnd,
  } = props;

  const transformedAppearance = appearances.includes(appearance)
    ? appearance
    : defaultAppearance;
  const transformedSize = isValidCssPixelMeasure(size) ? size : defaultSize;

  const handleAnimationEnd = () => {
    if (handleCountdownEnd) {
      handleCountdownEnd();
    }
  };

  return (
    <StyledProgressBar
      id="progress-bar"
      appearance={getProgressBarColor(transformedAppearance)}
      size={transformedSize}
      durations={durations}
      onAnimationEnd={handleAnimationEnd}
    />
  );
};

ProgressBar.propTypes = {
  size: PropTypes.string,
  appearance: PropTypes.oneOf(appearances),
  durations: PropTypes.number,
  handleCountdownEnd: PropTypes.func,
};

export { ProgressBar };
