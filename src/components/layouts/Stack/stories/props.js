import { directionAligments, flexAligments } from "../index";

const children = {
  options: [
    [...Array(6 + 1).keys()].slice(1),
    [...Array(5 + 1).keys()].slice(1),
    [...Array(4 + 1).keys()].slice(1),
    [...Array(3 + 1).keys()].slice(1),
    [...Array(2 + 1).keys()].slice(1),
    [...Array(1 + 1).keys()].slice(1),
  ],
  control: { type: "select" },
  description:
    "This prop enables the component to receive React nodes which in turn are the ones that the Stack will organize in a layout.",
};

const wrap = {
  options: [true, false],
  control: { type: "select" },
  description:
    "Indicates whether the container should use more than one row/column to organize its children.",
  table: {
    defaultValue: { summary: false },
  },
};

const direction = {
  options: directionAligments,
  control: { type: "select" },
  description:
    "Defines if the elements will be organized in a row or column manner. ",
  table: {
    defaultValue: { summary: "row" },
  },
};

const justifyContent = {
  options: flexAligments,
  control: { type: "select" },
  description:
    "Defines the horizontal alignment of elements when the direction is row or the vertical alignment of elements when direction is column. ",
  table: {
    defaultValue: { summary: "flex-start" },
  },
};

const alignItems = {
  options: flexAligments,
  control: { type: "select" },
  description:
    "Defines the horizontal alignment of elements when the direction is column or the vertical alignment of elements when direction is row. ",
  table: {
    defaultValue: { summary: "flex-start" },
  },
};

const gap = {
  options: [
    "10px",
    "20px",
    "30px",
    "40px",
    "50px",
    "10px 20px",
    "20px 30px",
    "30px 40px",
  ],
  control: { type: "select" },
  description:
    "Defines a space between elements in the same row or between two rows (if wrap is activate). in order to define one value for row-gaps and another to receive column-gaps, we can get through this prop a string with two different measures (e.g. “16px 8px”, which means a row-gap of 16px and a column-gap of 8px) ",
  table: {
    defaultValue: { summary: "0px" },
  },
};
export { children, wrap, direction, justifyContent, alignItems, gap };
