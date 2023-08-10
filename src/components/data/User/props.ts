export const sizes = ["small", "large"] as const;
export type Size = typeof sizes[number];

const parameters = {
  docs: {
    description: {
      component:
        "Component that allows the user to identify himself and locate himself next to the business unit",
    },
  },
};

const props = {
  userName: {
    description:
      "specify the name of the user to be displayed in the component. Allows customising the visual identification of the user within the application interface.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  client: {
    description:
      "indicates the name of the customer or company associated with the user.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "determines the size of the user component in the interface. The avatar will always be visible, but the name and client will be visible according to the size of the component.",
    table: {
      defaultValue: { summary: "large" },
    },
  },
};

export { props, parameters };
