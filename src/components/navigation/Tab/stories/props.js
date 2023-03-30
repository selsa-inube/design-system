const id = {
  control: { type: "text" },
  description: "shall be the id for the text",
};
const isDisabled = {
  options: [true, false],
  control: { type: "boolean" },
  description:
    "if the switch is disabled or not. This prevents any interaction.",
  table: {
    defaultValue: { summary: "false" },
  },
};
const isSelected = {
  options: [true, false],
  control: { type: "boolean" },
  description:
    " is designed to ascertain whether the tab has been clicked or not.",
  table: {
    defaultValue: { summary: "false" },
  },
};
const handleClick = {
  options: ["logState"],
  control: { type: "func" },
  description: "shall be determine the behavior of the click event",
};
const label = {
  control: { type: "text" },
  description: "shall constitute the content to be displayed",
};
export { id, isDisabled, isSelected, handleClick, label };
