import { inube } from "@shared/tokens";

export type Themed = { theme?: typeof inube };
const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Select allows users to make a single selection or multiple selections from a list of options.",
      },
    },
  },
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },
  isDisabled: {
    description:
      "sets the field as to appear disabled, users will not be able to interact with the text field",
    table: {
      defaultValue: { summary: false },
    },
  },
  handleClick: {
    description:
      "(function): shall be determine the behavior of the click event and is not required.",
  },
  isSelected: {
    description:
      "It is designed to ascertain whether the tab has been clicked or not (by Default is false) and is not required.",
    table: {
      defaultValue: { summary: false },
    },
  },
  children: {
    description: "The content of the component.",
  },
};

export { props };
