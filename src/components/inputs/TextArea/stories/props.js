import { states } from "../";

const parameters = {
  docs: {
    description: {
      component:
        "A text field is an input that allows a user to write or edit text",
    },
  },
};

const label = {
  description: "prompts the user what value to enter",
};

const name = {
  description: "name of the TextArea element",
};

const id = {
  description:
    "uniquely identifies the **TextArea Component**, it will also allow the **label element** to be connected to the **TextArea element** through the htmlFor of the label",
};

const placeholder = {
  description: "text to display in the text field whenever it is empty",
};

const isDisabled = {
  description:
    "sets the field as to appear disabled, users will not be able to interact with the text field",
  table: {
    defaultValue: { summary: false },
  },
};

const value = {
  description: "component initial value",
};

const handleChange = {
  description:
    "allows you to control what to do when the user changes the value of the component",
};

const maxLength = {
  description:
    "defines how many characters maximum are received in the component value",
};

const minLength = {
  description:
    "defines how many minimum characters the component receives as a value",
};

const max = {
  description:
    "defines the maximum value that can be inserted (useful for components of type number)",
};

const min = {
  description:
    "defines the minimum value that can be inserted (useful for components of type number)",
};

const isRequired = {
  description: "defines if the field is required or not",
  table: {
    defaultValue: { summary: false },
  },
};

const state = {
  options: states,
  control: { type: "select" },
  description: "state of the component",
  table: {
    defaultValue: { summary: "pending" },
  },
};

const errorMessage = {
  description: "show when the field is validated and there is an error",
};

const validMessage = {
  description: "show when the field is validated without errors",
};

const isFullWidth = {
  description: "option to fit field width to its parent width",
  table: {
    defaultValue: { summary: false },
  },
};

const readOnly = {
  descriptions: "option to make the field read only",
  table: {
    defaultValue: { summary: false },
  },
};

const counter = {
  description: "option to show a counter of characters",
  table: {
    defaultValue: { summary: false },
  },
};

const lengthThreshold = {
  description:
    "defines the minimum number of characters for displaying counter alerts",
};

export {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  value,
  handleChange,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
  readOnly,
  counter,
  lengthThreshold,
};
