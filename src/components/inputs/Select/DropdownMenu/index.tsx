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
  onClick?: (id: string) => void;
  onCloseOptions?: () => void;
  onSelect?: (id: string) => void;
  isOpenOptions?: boolean;
}

const DropdownMenu = (props: DropdownMenuProps) => {
  const { options, onClick, onCloseOptions } = props;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);

    if (onCloseOptions) onCloseOptions();
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
