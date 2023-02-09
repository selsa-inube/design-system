import { sizes } from "./../index";

const id = {
  options: ["id"],
  control: { type: "select" },
  description:
    "this element can have a label on it, so this id allows us to connect the label with the switch",
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
const name = {
  options: ["name"],
  control: { type: "select" },
  description: "descriptive name for value property to be submitted in a form",
};
const value = {
  options: [false, true],
  control: { type: "boolean" },
  description: "value to be submitted in a form",
  table: {
    defaultValue: { summary: false },
  },
};
const handleChange = {
  options: ["logState"],
  control: { type: "func" },
  description:
    "is a function that the component receives and that can be executed every time the switch state is modified",
};
const size = {
  options: sizes,
  control: { type: "select" },
  description: "toggle size",
  table: {
    defaultValue: { summary: "small" },
  },
};

export { id, isDisabled, name, value, handleChange, size };
