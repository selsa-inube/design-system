import { OptionItem } from "@inputs/Select/OptionItem";
import { StyledOptionList } from "./styled";

interface DropdownOption {
  id: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface OptionListProps {
  options: DropdownOption[];
  onClick?: (id: string) => void;
  onCloseOptions?: () => void;
  onSelect?: (id: string) => void;
  isOpenOptions?: boolean;
}

const OptionList = (props: OptionListProps) => {
  const { options, onClick, onSelect, onCloseOptions } = props;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);
    if (onSelect) onSelect(id);
    if (onCloseOptions) onCloseOptions();
  };

  return (
    <StyledOptionList>
      {options.map((optionItem) => (
        <OptionItem
          key={optionItem.id}
          id={optionItem.id}
          selected={optionItem.selected}
          onClick={() => handleOptionClick(optionItem.id)}
        >
          {optionItem.label}
        </OptionItem>
      ))}
    </StyledOptionList>
  );
};

export { OptionList };
