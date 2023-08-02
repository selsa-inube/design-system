import { typos } from "../types/BreadcrumbMenuLink.typos.type";

const parameters = {
  docs: {
    description: {
      component:
        "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    },
  },
};

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

export { parameters, id, label, typo, path };