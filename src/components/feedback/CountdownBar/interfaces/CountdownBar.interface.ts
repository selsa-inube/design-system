import { AnimationEvent } from "react";
import { Appearance } from "../types/CountdownBar.Appearance.type";

export interface ICountdownBarProps {
  size?: string;
  appearance?: Appearance;
  duration?: number;
  isPaused?: boolean;
  handleCountdown?: (e: AnimationEvent<HTMLDivElement>) => void;
}
