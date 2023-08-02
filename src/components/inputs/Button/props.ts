export const appearances = [
  "primary",
  "secondary",
  "confirm",
  "warning",
  "remove",
  "help",
] as const;
export type Appearance = typeof appearances[number];

export const spacings = ["wide", "compact"] as const;
export type Spacing = typeof spacings[number];

export type SpinnerColor =
  | "white"
  | "dark"
  | "blue"
  | "green"
  | "yellow"
  | "red"
  | "purple";

export type SpinnerColorHomologation = Record<
  Variant,
  Record<Appearance, string>
>;

export const types = ["button", "submit", "reset", "link"] as const;
export type Type = typeof types[number];

export const variants = ["filled", "outlined", "none"] as const;
export type Variant = typeof variants[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Button help people take action, such as sending an email, sharing a document, or liking a comment.",
      },
    },
  },
  children: {
    control: { type: "text" },
    description: "the text to be displayed",
  },
  isLoading: {
    options: [false, true],
    control: { type: "boolean" },
    description: "conditionally show a spinner over the top of a button",
    table: {
      defaultValue: { summary: false },
    },
  },
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "the base styling to apply to the button",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  isDisabled: {
    options: [true, false],
    control: { type: "boolean" },
    description: "set if the button is disabled",
    table: {
      defaultValue: { summary: false },
    },
  },
  iconBefore: {
    options: "",
    control: { type: "string" },
    description: "places an icon within the button, before the button's text",
  },
  iconAfter: {
    options: "",
    control: { type: "string" },
    description: "places an icon within the button, after the button's text",
  },
  type: {
    options: types,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "button" },
    },
  },
  spacing: {
    options: spacings,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "wide" },
    },
  },
  variant: {
    options: variants,
    control: { type: "select" },
    description: "pass type down to a button",
    table: {
      defaultValue: { summary: "filled" },
    },
  },
  isFullWidth: {
    options: [true, false],
    control: { type: "boolean" },
    description: "option to fit button width to its parent width",
    table: {
      defaultValue: { summary: false },
    },
  },
  handleClick: {
    options: ["logState"],
    control: { type: "func" },
    description: "function to control button click",
  },
  path: {
    description:
      "Is the path where the button is going to navigate when is used as button for navigation",
  },
};

export { props };