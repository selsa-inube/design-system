import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  children: string;
  onClick?: (id: string) => void;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, children, onClick } = props;

  const handleOptionClick = (id: string) => {
    if (onClick) onClick(id);
  };

  return (
    <StyledOptionItem id={id} onClick={() => handleOptionClick(id)}>
      <Text size="medium">{children}</Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
