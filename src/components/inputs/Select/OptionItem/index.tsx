import { Text } from "@data/Text";
import { StyledOptionItem } from "./styles";

export interface IOptionItemProps {
  id: string;
  children: string;
}

const OptionItem = (props: IOptionItemProps) => {
  const { id, children } = props;

  return (
    <StyledOptionItem id={id}>
      <Text size="medium">{children}</Text>
    </StyledOptionItem>
  );
};

export { OptionItem };
