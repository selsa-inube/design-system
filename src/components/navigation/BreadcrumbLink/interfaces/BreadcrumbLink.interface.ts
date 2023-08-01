import { Typos } from "../props";

export interface IBreadcrumbLinkProps {
  isActive?: boolean;
  label: string;
  path: string;
  id: string;
  typo?: Typos;
  handleClick?: () => void;
}
