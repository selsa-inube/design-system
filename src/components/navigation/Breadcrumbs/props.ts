import { Sizes as MenuLinkSizes } from "./BreadcrumbMenuLink/props";

export const sizes = ["large", "small"] as const;
export type Sizes = typeof sizes[number];

export interface IRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: MenuLinkSizes;
}

export interface IBreadcrumbsRoutes {
  routes: IRoute[];
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
