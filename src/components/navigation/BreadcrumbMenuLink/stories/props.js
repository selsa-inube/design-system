import { typos } from "..";
const id = {
  control: { type: "text" },
  description: "shall be the id for the text",
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

export { id, label, typo, path };
