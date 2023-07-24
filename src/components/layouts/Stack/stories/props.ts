import { flexAlignments } from "../types/Stack.AlignContent.type";
import { directionAlignments } from "../types/Stack.DirectionAlignment.type";
import { wrapControls } from "../types/Stack.WrapControl.type";

const children = {
  options: "",
  control: { type: "string" },
  description:
    "This prop enables the component to receive React nodes which in turn are the ones that the Stack will organize in a layout.",
};

const wrap = {
  options: wrapControls,
  control: { type: "select" },
  description:
    "Indicates whether the container should use more than one row/column to organize its children.",
  table: {
    defaultValue: { summary: "nowrap" },
  },
};

const direction = {
  options: directionAlignments,
  control: { type: "select" },
  description:
    "Defines if the elements will be organized in a row or column manner. ",
  table: {
    defaultValue: { summary: "row" },
  },
};

const justifyContent = {
  options: flexAlignments,
  control: { type: "select" },
  description:
    "Defines the horizontal alignment of elements when the direction is row or the vertical alignment of elements when direction is column. ",
  table: {
    defaultValue: { summary: "flex-start" },
  },
};

const alignItems = {
  options: flexAlignments,
  control: { type: "select" },
  description:
    "Defines the horizontal alignment of elements when the direction is column or the vertical alignment of elements when direction is row. ",
  table: {
    defaultValue: { summary: "flex-start" },
  },
};

const gap = {
  type: { name: "string", required: false },
  description:
    "Defines a space between elements in the same row or between two rows (if wrap is activate). in order to define one value for row-gaps and another to receive column-gaps, we can get through this prop a string with two different measures (e.g. “16px 8px”, which means a row-gap of 16px and a column-gap of 8px) ",
  table: {
    defaultValue: { summary: "0px" },
  },
};

const margin = {
  type: { name: "string", required: false },
  description:
    "Sets the margin in px or global values for all four sides of the component",
  table: {
    defaultValue: { summary: "0px" },
  },
};

const padding = {
  type: { name: "string", required: false },
  description:
    "Sets the padding in px p global values for all four sides of the component",
  table: {
    defaultValue: { summary: "0px" },
  },
};

export {
  children,
  wrap,
  direction,
  justifyContent,
  alignItems,
  gap,
  margin,
  padding,
};
