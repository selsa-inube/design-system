import { Typos } from "../types/BreadcrumbLink.typos.type";

export interface IBreadcrumbLinkProps {
  isActive?: boolean;
  label: string;
  path: string;
  id: string;
  typo?: Typos;
  handleClick?: () => void;
}
