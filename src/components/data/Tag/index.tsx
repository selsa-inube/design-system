import { StyledTag } from "./styles";
import { Appearance } from "./props";
import { Text } from "@data/Text";

const darkTextAppearances = ["warning", "gray", "light"];

export interface ITagProps {
  appearance: Appearance;
  label: string;
}

const Tag = (props: ITagProps) => {
  const { appearance, label } = props;

  return (
    <StyledTag appearance={appearance}>
      <Text
        type="label"
        appearance={darkTextAppearances.includes(appearance) ? "dark" : "light"}
        size="small"
      >
        {label}
      </Text>
    </StyledTag>
  );
};

export { Tag };
