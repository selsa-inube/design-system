const parameters = {
  docs: {
    description: {
      component:
        "Represent a label for an elemenent in a user interface. This can be associated with a control either by using the for attribute, or by placing the control inside the label element",
    },
  },
};

const htmlFor = {
  options: ["id"],
  control: { type: "select" },
  description: "Useful to match this label with the id of a specific entry",
};

const state = {
  options: ["default", "disabled", "focus", "invalid"],
  control: {
    type: "radio",
  },
  description: "Indicates the possible states in witch the label could be",
  table: {
    defaultValue: { summary: "default" },
  },
};

const children = {
  description: "component text content",
};

export { parameters, htmlFor, state, children };
