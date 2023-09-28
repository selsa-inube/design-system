import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, label, onClick } = props;

  return (
    <StyledOptionItem id={id} onClick={onClick}>
      <Text size="medium">{label}</Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
