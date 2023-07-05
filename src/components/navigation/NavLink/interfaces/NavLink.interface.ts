export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  icon?: Node;
  handleClick?: () => void;
  handleBlur?: () => void;
}
