export const sizes = ["large", "small"] as const;
export type Sizes = typeof sizes[number];

export interface IBreadcrumbItem {
  path: string;
  label: string;
  id: string;
  isActive: boolean;
}

export interface IBreadcrumbsRoutes {
  routes: IBreadcrumbItem[];
}

const props = {
  parameters: {
    docs: {
      description: {
        component:
          "Breadcrumbs are a navigation system used to show a user's location in a site or app.",
      },
    },
  },
  crumbs: {
    description:
      "An array of objects that contain the path, label, id, and isActive properties.",
  },
};

export { props };
