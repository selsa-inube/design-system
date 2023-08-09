import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  height?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const defaultHeight = "4px";

const isValidCssPixelMeasure = (height: string): boolean => {
  return /^[0-9]+px$/.test(height);
};

const CountdownBar = ({
  height: heigth = defaultHeight,
  appearance = "primary",
  duration = 3000,
  isPaused = false,
  handleCountdown,
}: ICountdownBarProps) => {
  const transformedHeight = isValidCssPixelMeasure(heigth)
    ? heigth
    : defaultHeight;

  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      height={transformedHeight}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
