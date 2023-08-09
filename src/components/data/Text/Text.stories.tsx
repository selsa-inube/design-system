import { ThemeProvider } from "styled-components";
import { Text, ITextProps } from ".";

import { props, parameters } from "./props";
import { presente } from "@src/shared/themes/presente";

const story = {
  title: "data/Text",
  components: [Text],
  parameters,
  decoreitors: [
    (Story: any) => (
      <ThemeProvider style={{ margin: "3em" }}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: props,
};

const Default = (args: ITextProps) => {
  return <Text {...args}>{args.children}</Text>;
};

Default.args = {
  children: "Title with the Text component",
  as: "h1",
  textAlign: "start",
  margin: "20px 22px 23px 24px",
  padding: "5px",
  appearance: "primary",
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
