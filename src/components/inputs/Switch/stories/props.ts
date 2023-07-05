import { sizes } from "../types/Switch.Size.type";

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

const margin = {
  type: { name: "string", required: false },
  description:
    "Sets the margin in px or global values for all four sides of the component",
  table: {
    defaultValue: { summary: "0px" },
  },
};

const padding = {
  type: { name: "string", required: false },
  description:
    "Sets the padding in px p global values for all four sides of the component",
  table: {
    defaultValue: { summary: "0px" },
  },
};
export {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  size,
  label,
  margin,
  padding,
};
