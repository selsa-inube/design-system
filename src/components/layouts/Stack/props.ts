export const alignContentProperties = [
  "baseline",
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;
export type AlignContent = typeof alignContentProperties[number];

export const alignItemsProperties = [
  "baseline",
  "normal",
  "flex-start",
  "flex-end",
  "center",
  "stretch",
  "self-start",
  "self-end",
  "initial",
  "revert",
  "unset",
  "start",
  "end",
] as const;
export type AlignItem = typeof alignItemsProperties[number];

export const directionAlignments = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;
export type DirectionAlignment = typeof directionAlignments[number];

export const justifyContentProperties = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "start",
  "end",
  "left",
  "right",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
] as const;
export type JustifyContent = typeof justifyContentProperties[number];

export const wrapControls = [
  "wrap",
  "nowrap",
  "wrap-reverse",
  "inherit",
  "initial",
  "revert",
  "unset",
] as const;
export type WrapControl = typeof wrapControls[number];

export const props = {
  children: {
    options: "",
    control: { type: "string" },
    description:
      "This prop enables the component to receive React nodes which in turn are the ones that the Stack will organize in a layout.",
  },

  wrap: {
    options: wrapControls,
    control: { type: "select" },
    description:
      "Indicates whether the container should use more than one row/column to organize its children.",
    table: {
      defaultValue: { summary: "nowrap" },
    },
  },

  direction: {
    options: directionAlignments,
    control: { type: "select" },
    description:
      "Defines if the elements will be organized in a row or column manner.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  justifyContent: {
    options: justifyContentProperties,
    control: { type: "select" },
    description:
      "Defines the horizontal alignment of elements when the direction is row or the vertical alignment of elements when direction is column.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  alignItems: {
    options: alignItemsProperties,
    control: { type: "select" },
    description:
      "Defines the horizontal alignment of elements when the direction is column or the vertical alignment of elements when direction is row.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  alignContent: {
    options: alignContentProperties,
    control: { type: "select" },
    description:
      "This property aligns a flex container’s lines within it when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  gap: {
    type: { name: "string", required: false },
    description:
      "Defines a space between elements in the same row or between two rows (if wrap is activate). in order to define one value for row-gaps and another to receive column-gaps, we can get through this prop a string with two different measures (e.g. “16px 8px”, which means a row-gap of 16px and a column-gap of 8px).",
    table: {
      defaultValue: { summary: "0px" },
    },
  },

  height: {
    type: { name: "string", required: false },
    description:
      "Sets the margin in px or global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },

  width: {
    type: { name: "string", required: false },
    description:
      "Sets the margin in px or global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },

  margin: {
    type: { name: "string", required: false },
    description:
      "Sets the margin in px or global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },

  padding: {
    type: { name: "string", required: false },
    description:
      "Sets the padding in px p global values for all four sides of the component",
    table: {
      defaultValue: { summary: "0px" },
    },
  },
};
