import { typos } from "..";
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
const typo = {
  options: typos,
  control: { type: "select" },
  description: "indicates the font size used in the component",
  table: {
    defaultValue: { summary: "labelLarge" },
  },
};

export { id, isActive, handleClick, typo };
