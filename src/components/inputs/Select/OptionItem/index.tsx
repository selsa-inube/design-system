import { useRef } from "react";

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
  const itemRef = useRef(null);

  const handleOptionClick = (label: string) => {
    if (disabled) return;

    if (onClick) onClick(label);

    if (onSelect) onSelect(label);
  };

  return (
    <StyledOptionItem
      id={id}
      disabled={disabled}
      selectedId={isSelected}
      onClick={() => handleOptionClick(children)}
      ref={itemRef}
      tabIndex={0}
    >
      <Text size="medium" type="body">
        {children}
      </Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
