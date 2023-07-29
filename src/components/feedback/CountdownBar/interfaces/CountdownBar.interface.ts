import { Appearance } from "@src/shared/types/Appearance.type";
import { AnimationEvent } from "react";

export interface ICountdownBarProps {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}
