import { StyledCountdownBar } from "./styles";
import { colors } from "../../../shared/colors/colors";
import { AppearanceType } from "./types/AppearanceType";
import { ICountdownBarProps } from "./interfaces/CountdownBarProps.interface";

const defaultAppearance = "primary";
const defaultSize = "4px";
const defaultDuration = 3000;
export const appearances = Object.keys(colors.sys.actions);

const getCountdownBarColor = (appearance: AppearanceType): string => {
  return colors.sys.actions[appearance].filled;
};

const isValidCssPixelMeasure = (size: string): boolean => {
  return /^[0-9]+px$/.test(size);
};

const CountdownBar = ({
  size = defaultSize,
  appearance = defaultAppearance,
  duration = defaultDuration,
  isPaused = false,
  handleCountdown,
}: ICountdownBarProps) => {
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

export { CountdownBar };
