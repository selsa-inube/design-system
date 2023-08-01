import { Text } from "..";

import { StyledContainer } from "./styles";
import { parameters, props } from "./props";
import { ITextProps } from "../interfaces/Text.interface";

const story = {
  title: "data/Text",
  components: [Text],
  parameters,
  argTypes: props,
};

const Default = (args: ITextProps) => {
  return (
    <StyledContainer>
      <Text {...args}>{args.children}</Text>
    </StyledContainer>
  );
};

Default.args = {
  children: "Title with the Text component",
  as: "h1",
  textAlign: "start",
  margin: "20px 22px 23px 24px",
  padding: "5px",
  appearance: "dark",
  type: "body",
  size: "large",
  isDisabled: false,
  cursorHover: true,
  ellipsis: false,
  parentHover: false,
};

export default story;

export { Default };
