import { AnimationEvent } from "react";
import { StyledCountdownBar } from "./styles";
import { Appearance, Themed } from "./props";

export interface ICountdownBarProps extends Themed {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  paused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}

const CountdownBar = ({
  size = "4px",
  appearance = "primary",
  duration = 3000,
  paused = false,
  handleCountdown,
}: ICountdownBarProps) => {
  return (
    <StyledCountdownBar
      id="progress-bar"
      appearance={appearance}
      size={size}
      duration={duration}
      paused={paused}
      onAnimationEnd={handleCountdown}
    />
  );
};

export { CountdownBar };
