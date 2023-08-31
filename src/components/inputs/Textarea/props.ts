import { inube } from "@shared/tokens";

const status = ["valid", "invalid", "pending"] as const;

type Status = typeof status[number];

export type Themed = { theme?: typeof inube };

const parameters = {
  docs: {
    description: {
      component:
        "A text field is an input that allows a user to write or edit text",
    },
  },
};

const props = {
  label: {
    description: "prompts the user what value to enter",
  },
  name: {
    description: "name of the Textarea element",
  },
  id: {
    description:
      "uniquely identifies the **Textarea Component**, it will also allow the **label element** to be connected to the **Textarea element** through the htmlFor of the label",
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
  onChange: {
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
  required: {
    description: "defines if the field is required or not",
    table: {
      defaultValue: { summary: false },
    },
  },
  status: {
    options: status,
    control: { type: "select" },
    description: "status of the component",
    table: {
      defaultValue: { summary: "pending" },
    },
  },
  message: {
    description:
      "display a message, provided by the developer implementing the component, which can be either an error notification or a validation prompt",
  },
  fullwidth: {
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

  lengthThreshold: {
    description:
      "defines the minimum number of characters for displaying counter alerts",
  },
};

export type { Status };
export { props, parameters };
