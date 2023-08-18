import { inube } from "@shared/tokens";

export const sizes = ["small", "large"] as const;
export type Size = typeof sizes[number];

export type Spacing = keyof typeof inube.spacing;

const parameters = {
  docs: {
    description: {
      component:
        "A switch is used to view or switch between enabled or disabled states.",
    },
  },
};

const props = {
  id: {
    options: ["id"],
    control: { type: "select" },
    description:
      "this element can have a label on it, so this id allows us to connect the label with the switch",
  },
  disabled: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "if the switch is disabled or not. This prevents any interaction.",
    table: {
      defaultValue: { summary: "false" },
    },
  },
  checked: {
    options: [true, false],
    control: { type: "boolean" },
    description: "",
    table: {
      defaultValue: { summary: false },
    },
  },
  name: {
    options: ["name"],
    control: { type: "select" },
    description:
      "descriptive name for value property to be submitted in a form",
  },
  value: {
    options: ["switchTest1", "switchTest2", "switchTest3", "switchTest4"],
    control: { type: "select" },
    description: "value to be submitted in a form",
  },
  onChange: {
    control: { action: "changed" },
    description:
      "is a function that the component receives and that can be executed every time the switch state is modified",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "toggle size",
    table: {
      defaultValue: { summary: "small" },
    },
  },
  label: {
    description: "component text content",
  },
  margin: {
    options: Object.keys(inube.spacing),
    control: { type: "select" },
    description:
      "Sets the margin in px or global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
  padding: {
    options: Object.keys(inube.spacing),
    control: { type: "select" },
    description:
      "Sets the padding in px p global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
};

export { props, parameters };
