export interface TabProps {
  label: string;
  id: string;
  isDisabled: boolean;
  isSelected: boolean;
  handleClick: () => void;
}
