import { Typos } from "../types/BreadcrumbMenuLink.typos.type";

export interface IBreadcrumbMenuLinkProps {
  label: string;
  path: string;
  id: string;
  typo?: Typos;
}
