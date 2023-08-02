import { inube } from "@src/shared/tokens";

export type Appearance = keyof typeof inube.color.surface;

const props = {
  size: {
    control: { type: "text" },
    description:
      "which allows it to be given a custom thickness, according to the need.",
    table: {
      defaultValue: { summary: "4px" },
    },
  },
  appearance: {
    options: Object.keys(inube.color.surface),
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  duration: {
    control: { type: "number" },
    description: "the total duration of the animation, in milliseconds",
    table: {
      defaultValue: { summary: 1000 },
    },
  },
  isPaused: {
    control: { type: "boolean" },
    description: "pause or start the animation",
    table: {
      defaultValue: { summary: false },
    },
  },
  handleCountdown: {
    description: "function to be executed when the progress bar reaches zero",
  },
};

export { props };