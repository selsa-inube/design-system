import { appearances as colors } from "./../index";

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

const durations = {
  control: { type: "number" },
  description: "the total duration of the animation, in milliseconds",
  table: {
    defaultValue: { summary: 1000 },
  },
};

const handleCountdownEnd = {
  description: "function to be executed when the progress bar reaches zero",
};

export { size, appearance, durations, handleCountdownEnd };
