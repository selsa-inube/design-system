import { useState, useRef } from "react";
import { Text } from "@data/Text";

import { StyledDropdownItem } from "./styles";
import { Themed } from "./props";

export interface IDropdownItemProps extends Themed {
  id: string;
  disabled?: boolean;
  isFocused?: boolean;
  isSelected?: boolean;
  children: string;
  handleClick?: (id: string) => void;
  handleSelect?: (label: string) => void;
}
const DropdownItem = (props: IDropdownItemProps) => {
  const {
    id,
    disabled,
    selected = false,
    children,
    handleClick,
    handleSelect,
  } = props;

  const [select, setSelect] = useState(selected);
  const itemRef = useRef(null);

  const handleOptionClick = (label: string) => {
    if (disabled) return;
    setSelect(true);

    if (handleClick) handleClick(id);

    if (handleSelect) handleSelect(label);
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
