import { useState, useRef } from "react";

import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  isFocused?: boolean;
  selected?: boolean;
  children: string;
  onClick?: (id: string) => void;
  onSelect?: (label: string) => void;
}
const OptionItem = (props: IOptionItemProps) => {
  const { id, selected = false, children, onClick, onSelect } = props;

  const [select, setSelect] = useState(selected);
  const itemRef = useRef(null);

  const handleOptionClick = (id: string) => {
    setSelect(true);

    if (onClick) onClick(id);

    if (onSelect) onSelect(id);
  };

  return (
    <StyledOptionItem
      id={id}
      selected={select}
      onClick={() => handleOptionClick(id)}
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
