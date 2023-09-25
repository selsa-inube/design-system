import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  children: string;
  onClick?: (id: string) => void;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, children, onClick } = props;

  return (
    <StyledOptionItem id={id} onClick={onClick}>
      <Text size="medium">{children}</Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
