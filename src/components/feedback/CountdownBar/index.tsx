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

const CountdownBar = ({
  size = "4px",
  appearance = "primary",
  duration = 3000,
  isPaused = false,
  handleCountdown,
}: ICountdownBarProps) => {
  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      size={size}
      duration={duration}
      isPaused={isPaused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
