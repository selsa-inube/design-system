import { inube } from "@shared/tokens";

export type Spacing = keyof typeof inube.spacing;

export const templateAreasProperties = ["none", "header main footer"] as const;
export type TemplateAreas = typeof templateAreasProperties[number];

export type Gap = Spacing;

export const justifyItemsProperties = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "left",
  "right",
  "inherit",
  "initial",
  "revert",
  "unset",
  "stretch",
  "normal",
  "self-start",
  "self-end",
  "baseline",
  "first baseline",
  "last baseline",
  "legacy right",
  "legacy left",
  "legacy center",
] as const;
export type JustifyItems = typeof justifyItemsProperties[number];

export const alignItemsProperties = [
  "center",
  "start",
  "end",
  "flex-start",
  "flex-end",
  "self-start",
  "self-end",
  "baseline",
  "first baseline",
  "last baseline",
  "safe center",
  "unsafe center",
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset",
] as const;
export type AlignItems = typeof alignItemsProperties[number];

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

export const autoFlowProperties = [
  "row",
  "column",
  "dense",
  "row dense",
  "column dense",
] as const;
export type AutoFlow = typeof autoFlowProperties[number];

export const heightProperties = [
  "max-content",
  "min-content",
  "fit-content",
  "auto",
] as const;
export type Height = typeof heightProperties[number];

export const widthProperties = [
  "max-content",
  "min-content",
  "fit-content",
  "auto",
] as const;
export type Width = typeof widthProperties[number];

export const props = {
  children: {
    options: "",
    control: { type: "string" },
    description: "Children elements placed inside the Grid.",
  },

  templateColumns: {
    control: { type: "string" },
    description: "Defines the size and layout of the columns in the grid.",
    table: {
      defaultValue: { summary: "repeat(3, 1fr)" },
    },
  },

  templateRows: {
    control: { type: "string" },
    description: "Defines the size and layout of the rows in the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  templateAreas: {
    options: templateAreasProperties,
    control: { type: "select" },
    description:
      "Defines the overall layout of a grid in terms of named areas.",
    table: {
      defaultValue: { summary: "none" },
    },
  },

  gap: {
    options: inube.spacing,
    control: { type: "select" },
    description:
      "Controls the spacing between grid cells, both horizontally and vertically.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  justifyItems: {
    options: justifyItemsProperties,
    control: { type: "select" },
    description:
      "Defines how items are aligned on the horizontal axis within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  alignItems: {
    options: alignItemsProperties,
    control: { type: "select" },
    description:
      "Controls the vertical alignment of the elements within each grid cell.",
    table: {
      defaultValue: { summary: "start" },
    },
  },

  justifyContent: {
    options: justifyContentProperties,
    control: { type: "select" },
    description:
      "This property affects the horizontal alignment of the entire grid in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  alignContent: {
    options: alignContentProperties,
    control: { type: "select" },
    description:
      "This property affects the vertical alignment of the grid content in relation to its container.",
    table: {
      defaultValue: { summary: "flex-start" },
    },
  },

  autoFlow: {
    options: autoFlowProperties,
    control: { type: "select" },
    description:
      "Controls how elements flow within the grid when there is not enough space in a row or column.",
    table: {
      defaultValue: { summary: "row" },
    },
  },

  height: {
    options: heightProperties,
    control: { type: "select" },
    description: "Controls the height of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  width: {
    options: widthProperties,
    control: { type: "select" },
    description: "Controls the width of the grid.",
    table: {
      defaultValue: { summary: "auto" },
    },
  },

  margin: {
    options: inube.spacing,
    control: { type: "select" },
    description: "Sets the outer margin of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },

  padding: {
    options: inube.spacing,
    control: { type: "select" },
    description: "Sets the inner padding of the grid.",
    table: {
      defaultValue: { summary: "s0" },
    },
  },
};
