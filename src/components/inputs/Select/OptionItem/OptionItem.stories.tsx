import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { props, parameters } from "./props";
import { OptionItem, IOptionItemProps } from "./index";

const story = {
  title: "Inputs/Select/OptionItem",
  component: [OptionItem],
  parameters,
  argTypes: props,
};

export const Default = (args: IOptionItemProps) => <OptionItem {...args} />;

Default.args = {
  id: "Item 1",
  label: "Item 1",
};

const theme = {
  ...presente,
};

export const Themed = (args: IOptionItemProps) => (
  <ThemeProvider theme={theme}>
    <OptionItem {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
