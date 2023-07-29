import { states } from ".";

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
    description: "name of the TextArea element",
  },
  id: {
    description:
      "uniquely identifies the **TextArea Component**, it will also allow the **label element** to be connected to the **TextArea element** through the htmlFor of the label",
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
  value: {
    description: "component initial value",
  },
  handleChange: {
    description:
      "allows you to control what to do when the user changes the value of the component",
  },
  maxLength: {
    description:
      "defines how many characters maximum are received in the component value",
  },
  minLength: {
    description:
      "defines how many minimum characters the component receives as a value",
  },
  max: {
    description:
      "defines the maximum value that can be inserted (useful for components of type number)",
  },
  min: {
    description:
      "defines the minimum value that can be inserted (useful for components of type number)",
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
  counter: {
    description: "option to show a counter of characters",
    table: {
      defaultValue: { summary: false },
    },
  },
  lengthThreshold: {
    description:
      "defines the minimum number of characters for displaying counter alerts",
  },
};

export { props };
