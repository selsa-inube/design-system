import { OptionItem } from "@inputs/Select/OptionItem";
import { StyledDropdownMenu } from "./styled";

interface DropdownOption {
  id: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface DropdownMenuProps {
  options: DropdownOption[];
  onClick?: (id: string) => void;
  onCloseOptions?: () => void;
  onSelect?: (id: string) => void;
  isOpenOptions?: boolean;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { options, onClick, onSelect, onCloseOptions } = props;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);
    if (onSelect) onSelect(id);
    if (onCloseOptions) onCloseOptions();
  };

  return (
    <StyledDropdownMenu>
      {options.map((optionItem) => (
        <OptionItem
          key={optionItem.id}
          id={optionItem.id}
          disabled={optionItem.disabled}
          selected={optionItem.selected}
          onClick={() => handleOptionClick(optionItem.id)}
        >
          {optionItem.label}
        </OptionItem>
      ))}
    </StyledDropdownMenu>
  );
};

export { DropdownMenu };
