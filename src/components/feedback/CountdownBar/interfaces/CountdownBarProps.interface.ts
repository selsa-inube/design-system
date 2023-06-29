import { AnimationEvent } from "react";
import { AppearanceType } from "../types/AppearanceType";

export interface ICountdownBarProps {
  size?: string;
  appearance?: AppearanceType;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}
