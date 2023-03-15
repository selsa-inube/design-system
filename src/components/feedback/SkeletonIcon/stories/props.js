const width = {
  control: { type: "text" },
  description: "sets the width-property of the skeleton component",
  table: {
    defaultValue: { summary: "24px" },
  },
};
const height = {
  control: { type: "text" },
  description: "sets the height-property of the skeleton component",
  table: {
    defaultValue: { summary: "24px" },
  },
};
const isAnimated = {
  options: [false, true],
  control: { type: "boolean" },
  description:
    "toggles whether or not the skeleton component's animation is active",
  table: {
    defaultValue: { summary: false },
  },
};

export { width, height, isAnimated };
