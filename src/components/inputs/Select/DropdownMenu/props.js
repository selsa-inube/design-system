const parameters = {
  docs: {
    description: {
      component: "container of the options to be used in component Select",
    },
  },
};
const props = {
  options: {
    description:
      "(array): shall be designed to accept an array of objects with a predetermined structure.",
  },
  onClick: {
    description:
      "(function): shall be determine the behavior of the click event and is not required.",
  },
  isOpenOptions: {
    description: "(boolean): shall determine the state of the options.",
  },
  onCloseOptions: {
    description:
      "(function):will determine the behaviour of the click event when one of the options is selected.",
  },
  handleSelect: {
    description:
      "(function): shall determine the behaviour of the click event to send the value of the chosen options.",
  },
};

export { props, parameters };
