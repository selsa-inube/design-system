export const inputTypes = [
  "text",
  "email",
  "number",
  "password",
  "search",
  "tel",
] as const;
export type InputType = typeof inputTypes[number];

export const sizes = ["wide", "compact"] as const;
export type Size = typeof sizes[number];

export const states = ["valid", "invalid", "pending"] as const;
export type State = typeof states[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "A text field is an input that allows a user to write or edit text",
      },
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
      "uniquely identifies the **TextField Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  placeholder: {
    description: "text to display in the text field whenever it is empty",
  },
  isDisabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  type: {
    options: inputTypes,
    control: { type: "select" },
    description: "class name to apply to the input element",
    table: {
      defaultValue: { summary: "text" },
    },
  },
  value: {
    description: "component initial value",
  },
  handleChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  iconBefore: {
    description:
      "allows to enter an icon to the left of the area where the user enters values",
  },
  iconAfter: {
    description:
      "allows to enter an icon to the right of the area where the user enters values",
  },
  maxLength: {
    description:
      "defines how many characters maximum are received in the component value",
  },
  minLength: {
    description:
      "defines how many minimum characters the component receives as a value",
  },
  isRequired: {
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
  isFullWidth: {
    description: "option to fit field width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
  readOnly: {
    descriptions: "option to make the field read only",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { props };
