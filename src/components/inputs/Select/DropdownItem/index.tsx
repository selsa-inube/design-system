import { useState, useRef } from "react";

import { Text } from "@data/Text";
import { StyledDropdownItem } from "./styles";

export interface IDropdownItemProps {
  id: string;
  disabled?: boolean;
  isFocused?: boolean;
  selected?: boolean;
  children: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}
const DropdownItem = (props: IDropdownItemProps) => {
  const { id, disabled, selected = false, children, onClick, onSelect } = props;

  const [select, setSelect] = useState(selected);
  const itemRef = useRef(null);

  const handleOptionClick = (label: string) => {
    if (disabled) return;
    setSelect(true);

    if (onClick) onClick(label);

    if (onSelect) onSelect(label);
  };

  const interceptorOnBlur = () => {
    setSelect(false);
  };

  return (
    <StyledDropdownItem
      id={id}
      disabled={disabled}
      selected={select}
      onClick={() => handleOptionClick(children)}
      ref={itemRef}
      onBlur={interceptorOnBlur}
      tabIndex={0}
    >
      <Text size="medium" type="body">
        {children}
      </Text>
    </StyledDropdownItem>
  );
};

export { DropdownItem };
