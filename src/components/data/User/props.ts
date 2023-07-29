export const sizes = ["small", "large"] as const;
export type Size = typeof sizes[number];

const props = {
  userName: {
    description: "shall be the displayed username",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  client: {
    description: "shall be the displayed business Unit",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "determine if the User-component displays the Avatar-component",
    table: {
      defaultValue: { summary: "large" },
    },
  },
};

export { props };
