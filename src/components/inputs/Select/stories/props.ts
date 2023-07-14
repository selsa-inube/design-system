import { sizes } from "../types/Select.Size.type";
import { states } from "../types/Select.States.type";

const parameters = {
  docs: {
    description: {
      components:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
  controls: {
    exclude: ["value", "state"],
  },
};

const label = {
  description: "prompts the user what value to enter",
};

const name = {
  description: "name of the input element",
};

const id = {
  description:
    "uniquely identifies the **TextField Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
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

const size = {
  options: sizes,
  control: { type: "select" },
  description: "defines the size of the component",
};

const isFullWidth = {
  description: "option to fit field width to its parent width",
  table: {
    defaultValue: { summary: false },
  },
};

const handleFocus = {
  description:
    "allows you to control what to do when the onfocus event occurs.",
};
const handleBlur = {
  description: "allows you to control what to do when the onblur event occurs.",
};

const options = {
  description:
    "(array): shall be designed to accept an array of objects with a predetermined structure.",
};

export {
  parameters,
  label,
  name,
  id,
  placeholder,
  value,
  isDisabled,
  handleChange,
  isRequired,
  state,
  errorMessage,
  validMessage,
  size,
  isFullWidth,
  handleFocus,
  handleBlur,
  options,
};
