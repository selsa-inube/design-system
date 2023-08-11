import { inube } from "@src/shared/tokens";

export type Themed = { theme?: typeof inube };

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Skeleton icon is used to provide a low fidelity representation of content before it appears on the page, and improves load times perceived by users.",
      },
    },
  },
  size: {
    control: { type: "text" },
    description: "sets the size of the skeleton icon component",
    table: {
      defaultValue: { summary: "24px" },
    },
  },
  isAnimated: {
    options: [false, true],
    control: { type: "boolean" },
    description:
      "toggles whether or not the skeleton component's animation is active",
    table: {
      defaultValue: { summary: false },
    },
  },
};

export { props };
