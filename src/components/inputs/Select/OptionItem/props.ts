const parameters = {
  docs: {
    description: {
      component:
        "Select allows users to make a single selection or multiple selections from a list of options.",
    },
  },
};

const props = {
  id: {
    description:
      "uniquely identifies the **Textfield Component**, it will also allow the **label element** to be connected to the **input element** through the htmlFor of the label",
  },

  onClick: {
    description:
      "(function): shall be determine the behavior of the click event and is not required.",
  },

  label: {
    description: "The content of the component.",
  },
};

export { props, parameters };
