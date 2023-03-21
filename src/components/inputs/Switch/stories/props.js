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
const checked = {
  options: [true, false],
  control: { type: "boolean" },
  description: "",
  table: {
    defaultValue: { summary: false },
  },
};
const name = {
  options: ["name"],
  control: { type: "select" },
  description: "descriptive name for value property to be submitted in a form",
};
const value = {
  options: ["switchTest1", "switchTest2", "switchTest3", "switchTest4"],
  control: { type: "select" },
  description: "value to be submitted in a form",
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
const label = {
  description: "component text content",
};
export { id, isDisabled, name, value, checked, handleChange, size, label };
