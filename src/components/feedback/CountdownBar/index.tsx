import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const defaultSize = "4px";

const isValidCssPixelMeasure = (size: string): boolean => {
  return /^[0-9]+px$/.test(size);
};

const CountdownBar = ({
  size = defaultSize,
  appearance = "primary",
  duration = 3000,
  isPaused = false,
  handleCountdown,
}: ICountdownBarProps) => {
  const transformedSize = isValidCssPixelMeasure(size) ? size : defaultSize;

  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      size={transformedSize}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
