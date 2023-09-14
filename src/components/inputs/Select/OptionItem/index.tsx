import { useState, useRef } from "react";

import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  disabled?: boolean;
  isFocused?: boolean;
  selected?: boolean;
  children: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}
const OptionItem = (props: IOptionItemProps) => {
  const { id, disabled, selected = false, children, onClick, onSelect } = props;

  const [select, setSelect] = useState(selected);
  const itemRef = useRef(null);

  const handleOptionClick = (id: string) => {
    if (disabled) return;

    setSelect(true);

    if (onClick) onClick(id);

    if (onSelect) onSelect(id);
  };

  const interceptorOnBlur = () => {
    setSelect(false);
  };

  return (
    <StyledOptionItem
      id={id}
      disabled={disabled}
      selected={select}
      onClick={() => handleOptionClick(id)}
      ref={itemRef}
      onBlur={interceptorOnBlur}
      tabIndex={0}
    >
      <Text size="medium" type="body">
        {children}
      </Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
