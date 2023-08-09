import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  heigth?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const defaultHeigth = "4px";

const isValidCssPixelMeasure = (heigth: string): boolean => {
  return /^[0-9]+px$/.test(heigth);
};

const CountdownBar = ({
  heigth = defaultHeigth,
  appearance = "primary",
  duration = 3000,
  isPaused = false,
  handleCountdown,
}: ICountdownBarProps) => {
  const transformedHeigth = isValidCssPixelMeasure(heigth)
    ? heigth
    : defaultHeigth;

  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      heigth={transformedHeigth}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
