import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  paused?: boolean;
  onCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const CountdownBar = ({
  size = "4px",
  appearance = "primary",
  duration = 3000,
  paused = false,
  onCountdown,
}: ICountdownBarProps) => {
  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      size={size}
      duration={duration}
      paused={paused}
      onAnimationEnd={onCountdown}
    />
  );
};

export { CountdownBar };
