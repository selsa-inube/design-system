export interface ITabProps {
  label: string;
  id: string;
  isDisabled: boolean;
  isSelected: boolean;
  handleClick: () => void;
}
