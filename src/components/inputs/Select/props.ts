export const sizes = ["wide", "compact"] as const;
export type Size = typeof sizes[number];

export const states = ["valid", "invalid", "pending"] as const;
export type States = typeof states[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Select allows users to make a single selection or multiple selections from a list of options.",
      },
    },
    controls: {
      exclude: ["value", "state"],
    },
  },
  label: {
    description: "prompts the user what value to enter",
  },
  name: {
    description: "name of the input element",
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  disabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  value: {
    description: "component initial value",
  },
  handleChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  state: {
    options: states,
    control: { type: "select" },
    description: "state of the component",
    table: {
      defaultValue: { summary: "pending" },
    },
  },
  errorMessage: {
    description: "show when the field is validated and there is an error",
  },
  validMessage: {
    description: "show when the field is validated without errors",
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description: "defines the size of the component",
  },
  fullwidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
  handleFocus: {
    description:
      "allows you to control what to do when the onfocus event occurs.",
  },
  handleBlur: {
    description:
      "allows you to control what to do when the onblur event occurs.",
  },
  options: {
    description:
      "(array): shall be designed to accept an array of objects with a predetermined structure.",
  },
};

export { props };
