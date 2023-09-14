import { OptionItem, IOptionItemProps } from "./index";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { props, parameters } from "./props";

const story = {
  title: "Inputs/OptionItem",
  component: [OptionItem],
  parameters,
  argTypes: props,
};

export const Default = (args: IOptionItemProps) => <OptionItem {...args} />;

Default.args = {
  children: "Item 1",
  selected: false,
  disabled: false,
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
