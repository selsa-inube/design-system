import { typos } from "../types/BreadcrumbLink.typos.type";

const id = {
  control: { type: "text" },
  description: "shall be the id for the text",
};
const isActive = {
  options: [true, false],
  control: { type: "boolean" },
  description:
    "if the switch is disabled or not. This prevents any interaction.",
  table: {
    defaultValue: { summary: "false" },
  },
};
const handleClick = {
  options: ["logState"],
  control: { type: "func" },
  description: "shall be determine the behavior of the click event",
};
const label = {
  control: { type: "text" },
  description: "shall constitute the content to be displayed",
};
const typo = {
  options: typos,
  control: { type: "select" },
  description: "indicates the font size used in the component",
};
const path = {
  control: { type: "text" },
  description: "is the path where the BreadcrumbLink is going to navigate",
};

export { id, isActive, handleClick, label, typo, path };
