import { sizes, appearances } from "../types/type.Spinner";

const size = {
  options: sizes,
  control: { type: "select" },
  description:
    "different sizes that the component can have, according to the need",
  table: {
    defaultValue: { summary: "medium" },
  },
};

const appearance = {
  options: appearances,
  control: { type: "select" },
  description: "colors used to identify the state of the component",
  table: {
    defaultValue: { summary: "blue" },
  },
};
const isTransparent = {
  options: [true, false],
  control: { type: "boolean" },
  description: "indicates when the background of the spinner should have color",
  table: {
    defaultValue: { summary: false },
  },
};

export { size, appearance, isTransparent };
