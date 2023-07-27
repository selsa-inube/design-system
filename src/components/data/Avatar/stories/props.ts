const parameters = {
  docs: {
    description: {
      component: "An avatar is a visual representation of a user or entity.",
    },
  },
};

const props = {
  icon: {
    description: "icon that will be displayed inside of avatar-component",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
};

export { parameters, props };
