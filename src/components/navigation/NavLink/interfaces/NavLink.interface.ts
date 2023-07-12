export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  icon?: Record<string, any>;
  handleClick?: () => void;
  handleBlur?: () => void;
}
