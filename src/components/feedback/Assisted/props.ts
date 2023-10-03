const parameters = {
  docs: {
    descriptions: {
      component:
        "The assited displays the steps and progress through a journey.",
    },
  },
};

const props = {
  steps: {
    description:
      "(Array of Objects): An array to represent each step in the journey. Each object in the array represents a step and should have the following structure: id, label, description (Optional).",
  },
  currentStepId: {
    description:
      "(string | number): An identifier that matches one of the id values within the steps array to indicate the current step.",
  },
  onStepChange: {
    desciption:
      "(function): A callback function that gets triggered when a step is changed. It should accept a single argument, which is the id of the step to which the user navigates.",
  },
  completedStepIds: {
    description:
      " (Array of string or number): (Optional) An array of step id values that have already been completed. Helps in visually indicating to the user which steps are already done.",
  },
};

export { parameters, props };
