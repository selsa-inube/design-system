import { inube } from "@src/shared/tokens";

export const shapes = ["circle", "rectangle"] as const;
export type Shape = typeof shapes[number];

export const spacings = ["none", "compact", "wide"] as const;
export type Spacing = typeof spacings[number];

export const variants = ["filled", "outlined", "none"] as const;
export type Variant = typeof variants[number];

export type Themed = { theme?: typeof inube };

const appearances = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
] as const;

export type Appearance = typeof appearances[number];

const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

const props = {
  appearance: {
    options: Object.keys(inube.color.text),
    control: { type: "select" },
    description: "the base styling to apply to the icon",
    table: {
      defaultValue: { summary: "black" },
    },
  },

  cursorHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the icon changes upon cursor hover",
    table: {
      defaultValue: { summary: false },
    },
  },

  parentHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the icon changes upon its parent hover",
    table: {
      defaultValue: { summary: false },
    },
  },

  icon: {
    control: { type: "object" },
    description: "icon to be displayed inside the Icon component",
  },

  disabled: {
    options: [false, true],
    control: { type: "boolean" },
    description: "set if the icon is disabled",
    table: {
      defaultValue: { summary: false },
    },
  },

  spacing: {
    options: spacings,
    control: { type: "select" },
    description: "spacing around the icon",
    table: {
      defaultValue: { summary: "wide" },
    },
  },

  variant: {
    options: variants,
    control: { type: "select" },
    description: "variant of the icon",
    table: {
      defaultValue: { summary: "filled" },
    },
  },

  shape: {
    options: shapes,
    control: { type: "select" },
    description: "shape of the icon",
    table: {
      defaultValue: { summary: "circle" },
    },
  },

  onClick: {
    control: { action: "clicked" },
    description: "function to handle icon click",
  },

  size: {
    control: { type: "text" },
    description: "size of the icon in pixels",
  },
};

export { props, parameters };
