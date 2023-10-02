import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  label: string;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, label } = props;

  return (
    <StyledOptionItem id={id}>
      <Text size="medium">{label}</Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
