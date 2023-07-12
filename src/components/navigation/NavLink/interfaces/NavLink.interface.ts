export interface INavLinkProps {
  id: string;
  label: string;
  path: string;
  isDisabled?: boolean;
  isSelected?: boolean;
  icon?: React.ReactNode;
  handleClick?: () => void;
  handleBlur?: () => void;
}
