export const sizes = ["large", "medium", "small"] as const;
export type Sizes = typeof sizes[number];

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
      },
    },
  },
  id: {
    control: { type: "text" },
    description: "shall be the id for the text",
  },
  label: {
    control: { type: "text" },
    description: "shall constitute the content to be displayed",
  },
  typo: {
    options: sizes,
    control: { type: "select" },
    description: "indicates the font size used in the component",
  },
  path: {
    control: { type: "text" },
    description: "is the path where the BreadcrumbLink is going to navigate",
  },
};

export { props };
