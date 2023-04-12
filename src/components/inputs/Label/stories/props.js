import { states, typos } from "..";

const parameters = {
  docs: {
    description: {
      component:
        "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute",
    },
  },
};

const isDisabled = {
  description: "indicates wheter the text is in its disabled state",
  table: {
    defaultValue: { summary: false },
  },
};

const isFocused = {
  description: "indicates wheter the text is in its focused state",
  table: {
    defaultValue: { summary: false },
  },
};

const htmlFor = {
  options: ["id"],
  control: { type: "select" },
  description: "Useful to match this label with the id of a specific entry",
};

const isInvalid = {
  description: "Indicates the possible states in witch the label could be",
  table: {
    defaultValue: { summary: false },
  },
};

const typo = {
  options: typos,
  control: { type: "select" },
  description: "indicates the font size used in the component",
};

const children = {
  description: "component text content",
};

export {
  parameters,
  isDisabled,
  isFocused,
  htmlFor,
  isInvalid,
  typo,
  children,
};
