import { TyposArray } from "../types/BreadcrumbLink.typos.type";

export interface IBreadcrumbLinkProps {
  isActive?: boolean;
  label: string;
  path: string;
  id: string;
  typo?: TyposArray;
  handleClick?: () => void;
}
