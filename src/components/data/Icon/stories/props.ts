import { inube } from "@src/shared/tokens";
import { shapes } from "../types/Icon.Shape.type";
import { spacings } from "../types/Icon.Spacing.type";
import { variants } from "../types/Icon.Variant.type";

const parameters = {
  docs: {
    description: {
      component: "Icon component is used to display different icons.",
    },
  },
};

const appearance = {
  options: Object.keys(inube.color.text),
  control: { type: "select" },
  description: "the base styling to apply to the icon",
  table: {
    defaultValue: { summary: "black" },
  },
};

const cursorHover = {
  options: [false, true],
  control: { type: "boolean" },
  description: "whether the icon changes upon cursor hover",
  table: {
    defaultValue: { summary: false },
  },
};

const parentHover = {
  options: [false, true],
  control: { type: "boolean" },
  description: "whether the icon changes upon its parent hover",
  table: {
    defaultValue: { summary: false },
  },
};

const icon = {
  control: { type: "object" },
  description: "icon to be displayed inside the Icon component",
};

const disabled = {
  options: [false, true],
  control: { type: "boolean" },
  description: "set if the icon is disabled",
  table: {
    defaultValue: { summary: false },
  },
};

const spacing = {
  options: spacings,
  control: { type: "select" },
  description: "spacing around the icon",
  table: {
    defaultValue: { summary: "wide" },
  },
};

const variant = {
  options: variants,
  control: { type: "select" },
  description: "variant of the icon",
  table: {
    defaultValue: { summary: "filled" },
  },
};

const shape = {
  options: shapes,
  control: { type: "select" },
  description: "shape of the icon",
  table: {
    defaultValue: { summary: "circle" },
  },
};

const handleClick = {
  options: ["logState"],
  control: { type: "func" },
  description: "function to handle icon click",
};

const size = {
  control: { type: "text" },
  description: "size of the icon in pixels",
};

export {
  parameters,
  appearance,
  cursorHover,
  parentHover,
  icon,
  disabled,
  spacing,
  variant,
  shape,
  handleClick,
  size,
};
