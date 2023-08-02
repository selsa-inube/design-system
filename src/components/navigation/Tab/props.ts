const props = {
  id: {
    control: { type: "text" },
    description: "shall be the id for the text",
  },
  isDisabled: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "if the switch is disabled or not. This prevents any interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  isSelected: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "is designed to ascertain whether the tab has been clicked or not.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  handleClick: {
    options: ["logState"],
    control: { type: "func" },
    description: "shall be determine the behavior of the click event",
  },
  label: {
    control: { type: "text" },
    description: "shall constitute the content to be displayed",
  },
};

export { props };
