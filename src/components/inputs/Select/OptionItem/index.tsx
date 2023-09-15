import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  disabled?: boolean;
  isFocused?: boolean;
  selectedId?: string;
  children: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}

const OptionItem = (props: IOptionItemProps) => {
  const {
    id,
    disabled,
    selectedId = false,
    children,
    onClick,
    onSelect,
  } = props;

  const isSelected = id === selectedId;

  const handleOptionClick = (id: string) => {
    if (disabled) return;

    if (onClick) onClick(id);

    if (onSelect) onSelect(id);
  };

  return (
    <StyledOptionItem
      id={id}
      disabled={disabled}
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
