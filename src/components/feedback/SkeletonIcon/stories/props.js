const size = {
  control: { type: "text" },
  description: "sets the size of the skeleton icon component",
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

export { size, isAnimated };
