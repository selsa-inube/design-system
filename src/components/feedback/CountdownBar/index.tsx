import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  height?: string;
  appearance?: Appearance;
  duration?: number;
  paused?: boolean;
  onCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const CountdownBar = ({
  height = "4px",
  appearance = "primary",
  duration = 3000,
  paused = false,
  onCountdown,
}: ICountdownBarProps) => {
  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      height={height}
      duration={duration}
      paused={paused}
      onAnimationEnd={onCountdown}
    />
  );
};

export { CountdownBar };
