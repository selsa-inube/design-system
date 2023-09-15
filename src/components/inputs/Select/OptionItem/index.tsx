import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  isFocused?: boolean;
  selectedId?: string;
  children: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, selectedId = false, children, onClick, onSelect } = props;

  const isSelected = id === selectedId;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);

    if (onSelect) onSelect(id);
  };

  return (
    <StyledOptionItem
      id={id}
      selectedId={isSelected}
      onClick={() => handleOptionClick(id)}
      tabIndex={0}
    >
      <Text size="medium" type="body">
        {children}
      </Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
