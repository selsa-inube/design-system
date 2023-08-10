export const appearances = [
  "blue",
  "green",
  "yellow",
  "red",
  "purple",
  "dark",
  "white",
] as const;
export type Appearance = typeof appearances[number];

export const sizes = ["large", "medium", "small"] as const;
export type Size = typeof sizes[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "This component is used to give feedback to the user that the app is currently loading or trying to save some resource.",
      },
    },
  },
  size: {
    options: sizes,
    control: { type: "select" },
    description:
      "different sizes that the component can have, according to the need",
    table: {
      defaultValue: { summary: "medium" },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "blue" },
    },
  },
  transparent: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "indicates when the background of the spinner should have color",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { props };
