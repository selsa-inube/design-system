import { OptionItem } from "@inputs/Select/OptionItem";
import { StyledOptionList } from "./styled";

interface optionItemProps {
  id: string;
  label: string;
}

export interface OptionListProps {
  options: optionItemProps[];
  onClick?: (id: string) => void;
}

const OptionList = (props: OptionListProps) => {
  const { options, onClick } = props;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);
  };

  return (
    <StyledOptionList>
      {options.map((optionItem) => (
        <OptionItem
          key={optionItem.id}
          id={optionItem.id}
          onClick={() => handleOptionClick(optionItem.id)}
        >
          {optionItem.label}
        </OptionItem>
      ))}
    </StyledOptionList>
  );
};

export { OptionList };
