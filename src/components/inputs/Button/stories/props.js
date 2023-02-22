import { appearances, types, spacings, variants } from "./../index";

const children = {
  control: { type: "text" },
  description: "the text to be displayed",
};

const isLoading = {
  options: [false, true],
  control: { type: "boolean" },
  description: "conditionally show a spinner over the top of a button",
  table: {
    defaultValue: { summary: false },
  },
};

const appearance = {
  options: appearances,
  control: { type: "select" },
  description: "the base styling to apply to the button",
  table: {
    defaultValue: { summary: "primary" },
  },
};
const isDisabled = {
  options: [true, false],
  control: { type: "boolean" },
  description: "set if the button is disabled",
  table: {
    defaultValue: { summary: false },
  },
};
const iconBefore = {
  options: "",
  control: { type: "string" },
  description: "places an icon within the button, before the button's text",
};
const iconAfter = {
  options: "",
  control: { type: "string" },
  description: "places an icon within the button, after the button's text",
};
const type = {
  options: types,
  control: { type: "select" },
  description: "pass type down to a button",
  table: {
    defaultValue: { summary: "text" },
  },
};
const spacing = {
  options: spacings,
  control: { type: "select" },
  description: "pass type down to a button",
  table: {
    defaultValue: { summary: "wide" },
  },
};
const variant = {
  options: variants,
  control: { type: "select" },
  table: {
    defaultValue: { summary: "filled" },
  },
};
const isFullWidth = {
  options: [true, false],
  control: { type: "boolean" },
  description: "option to fit button width to its parent width",
  table: {
    defaultValue: { summary: false },
  },
};
const handleClick = {
  options: ["logState"],
  control: { type: "func" },
  description: "function to control button click",
};

export {
  children,
  isLoading,
  appearance,
  isDisabled,
  iconBefore,
  iconAfter,
  type,
  spacing,
  variant,
  isFullWidth,
  handleClick,
};
