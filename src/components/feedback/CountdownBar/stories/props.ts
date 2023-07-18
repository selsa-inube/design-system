import { appearances as colors } from "../index";

const parameters = {
  docs: {
    description: {
      component:
        "A countdown bar graphically communicates to the user a countdown",
    },
  },
};

const size = {
  control: { type: "text" },
  description:
    "which allows it to be given a custom thickness, according to the need.",
  table: {
    defaultValue: { summary: "4px" },
  },
};

const appearance = {
  options: colors,
  control: { type: "select" },
  description: "colors used to identify the state of the component",
  table: {
    defaultValue: { summary: "primary" },
  },
};

const duration = {
  control: { type: "number" },
  description: "the total duration of the animation, in milliseconds",
  table: {
    defaultValue: { summary: 1000 },
  },
};

const isPaused = {
  control: { type: "boolean" },
  description: "pause or start the animation",
  table: {
    defaultValue: { summary: false },
  },
};

const handleCountdown = {
  description: "function to be executed when the progress bar reaches zero",
};

export { parameters, size, appearance, duration, isPaused, handleCountdown };
