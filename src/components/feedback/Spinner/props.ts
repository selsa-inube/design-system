import { inube } from "@src/shared/tokens";

export type Appearance = keyof typeof inube.color.stroke;

export const sizes = ["large", "medium", "small"] as const;
export type Size = typeof sizes[number];
export type Themed = { theme?: typeof inube };

const parameters = {
  docs: {
    description: {
      component:
        "This component is used to give feedback to the user that the app is currently loading or trying to save some resource.",
    },
  },
};

const props = {
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
    options: Object.keys(inube.color.stroke),
    control: { type: "select" },
    description: "colors used to identify the state of the component",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  isTransparent: {
    options: [true, false],
    control: { type: "boolean" },
    description:
      "indicates when the background of the spinner should have color",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { props, parameters };
