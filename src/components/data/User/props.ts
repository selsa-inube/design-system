export const sizes = ["small", "large"] as const;
export type Size = typeof sizes[number];

const props = {
  userName: {
    description:
      "the description is not well formed in English. Better to say that this props contains the name of the user that is connected.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  client: {
    description: "the same problem as username.",
    table: {
      defaultValue: { summary: "MdPersonOutline" },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "this prop doesn’t control that the component display the Avatar, the prop controls if the component must show the text and the avatar, or only the avatar (the avatar is always visible)",
    table: {
      defaultValue: { summary: "large" },
    },
  },
};

export { props };
