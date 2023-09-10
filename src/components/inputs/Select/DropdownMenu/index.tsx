import { StyledDropdownMenu } from "./styled";
import { DropdownItem } from "@inputs/Select/DropdownItem";

interface DropdownOption {
  id: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface DropdownMenuProps {
  options: DropdownOption[];
  onClick?: () => void;
  onCloseOptions?: () => void;
  onSelect?: (id: string) => void;
  isOpenOptions?: boolean;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { options, onClick, onCloseOptions, onSelect } = props;

  const handleOptionClick = (id: string) => {
    onClick?.();
    onCloseOptions?.();
    onSelect?.(id);
  };

  return (
    <StyledDropdownMenu>
      {options.map((dropDownitem) => (
        <DropdownItem
          key={dropDownitem.id}
          id={dropDownitem.id}
          disabled={dropDownitem.disabled}
          selected={dropDownitem.selected}
          onClick={() => handleOptionClick(dropDownitem.id)}
        >
          {dropDownitem.label}
        </DropdownItem>
      ))}
    </StyledDropdownMenu>
  );
};

export { DropdownMenu };
