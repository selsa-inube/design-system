import { inube } from "@shared/tokens";

export type Sizes = "large" | "medium" | "small";
export type Appearance = keyof typeof inube.color.text;

const parameters = {
  docs: {
    description: {
      component:
        "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
    },
  },
};

const props = {
  id: {
    description: "shall be the id for the text",
  },

  onClick: {
    options: ["logState"],
    control: { type: "func" },
    description: "shall be determine the behavior of the click event",
  },
  label: {
    control: { type: "text" },
    description: "shall constitute the content to be displayed",
  },
  size: {
    options: ["large", "medium", "small"],
    control: { type: "select" },
    description: "indicates the font size used in the component",
  },
  path: {
    control: { type: "text" },
    description: "is the path where the BreadcrumbLink is going to navigate",
  },
};

export { props, parameters };
