import { IOptionItemProps, OptionItem } from "@inputs/Select/OptionItem";
import { StyledOptionList } from "./styled";

export interface OptionListProps {
  options: IOptionItemProps[];
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
          label={optionItem.label}
          onClick={() => handleOptionClick(optionItem.id)}
        />
      ))}
    </StyledOptionList>
  );
};

export { OptionList };
