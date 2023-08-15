import { inube } from "@shared/tokens";

export const sizes = ["large", "medium", "small"] as const;
export type Size = typeof sizes[number];
export type Themed = { theme?: typeof inube };

const parameters = {
  docs: {
    description: {
      component:
        "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute",
    },
  },
};

const props = {
  disabled: {
    description: "indicates wheter the text is in its disabled state",
    table: {
      defaultValue: { summary: false },
    },
  },
  focused: {
    description: "indicates wheter the text is in its focused state",
    table: {
      defaultValue: { summary: false },
    },
  },
  htmlFor: {
    options: ["id"],
    control: { type: "select" },
    description: "Useful to match this label with the id of a specific entry",
  },
  invalid: {
    description: "Indicates the possible states in witch the label could be",
    table: {
      defaultValue: { summary: false },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "indicates the font size used in the component",
  },
  children: {
    description: "component text content",
  },
};

export { props, parameters };
