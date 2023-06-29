import { appearances as colors } from "../index";

interface IArgType {
  options?: {};
  control: { type: string };
  description: string;
  table: {
    defaultValue: { summary: string | number | boolean };
  };
}

interface IFunctionType {
  description: string;
}

const size: IArgType = {
  control: { type: "text" },
  description:
    "which allows it to be given a custom thickness, according to the need.",
  table: {
    defaultValue: { summary: "4px" },
  },
};

const appearance: IArgType = {
  options: colors,
  control: { type: "select" },
  description: "colors used to identify the state of the component",
  table: {
    defaultValue: { summary: "primary" },
  },
};

const duration: IArgType = {
  control: { type: "number" },
  description: "the total duration of the animation, in milliseconds",
  table: {
    defaultValue: { summary: 1000 },
  },
};

const isPaused: IArgType = {
  control: { type: "boolean" },
  description: "pause or start the animation",
  table: {
    defaultValue: { summary: false },
  },
};

const handleCountdown: IFunctionType = {
  description: "function to be executed when the progress bar reaches zero",
};

export { size, appearance, duration, isPaused, handleCountdown };
