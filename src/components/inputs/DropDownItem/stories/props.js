const parameters = {
  docs: {
    description: {
      components:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
};

const id = {
  description:
    "uniquely identifies the **TextField Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
};

const isDisabled = {
  description:
    "sets the field as to appear disabled, users will not be able to interact with the text field",
  table: {
    defaultValue: { summary: false },
  },
};

const handleClick = {
  description:
    "(function): shall be determine the behavior of the click event and is not required.",
};

const isSelected = {
  description:
    "It is designed to ascertain whether the tab has been clicked or not (by Default is false) and is not required.",
  table: {
    defaultValue: { summary: false },
  },
};

const childre = {
  description: "The content of the component.",
};

export { parameters, id, isDisabled, handleClick, isSelected, childre };
