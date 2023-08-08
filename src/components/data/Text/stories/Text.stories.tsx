import { ThemeProvider } from "styled-components";
import { Text, ITextProps } from "..";

import { StyledContainer } from "./styles";
import { props, parameters } from "../props";
import { presente } from "@src/shared/themes/presente";

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
  disabled: false,
  cursorHover: true,
  ellipsis: false,
  parentHover: false,
};

const theme = {
  ...presente,
};

const Themed = (args: ITextProps) => (
  <ThemeProvider theme={theme}>
    <Text {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};
export default story;

export { Default, Themed };
