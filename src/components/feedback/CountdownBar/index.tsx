import { AnimationEvent } from "react";

import { inube } from "@shared/tokens";
import { StyledCountdownBar } from "./styles";
import { Appearance } from "./props";

export interface ICountdownBarProps {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const defaultAppearance = "primary";
const defaultSize = "4px";
const defaultDuration = 3000;

const getCountdownBarColor = (appearance: Appearance): string => {
  return inube.color.surface[appearance].regular;
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
  const transformedSize = isValidCssPixelMeasure(size) ? size : defaultSize;

  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={getCountdownBarColor(appearance)}
      size={transformedSize}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
