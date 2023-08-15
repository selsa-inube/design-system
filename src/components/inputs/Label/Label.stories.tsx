import { ThemeProvider } from "styled-components";

import { presente } from "@shared/themes/presente";
import { props, parameters } from "./props";
import { Label, ILabelProps } from ".";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

const Default = (args: ILabelProps) => {
  return <Label {...args}>{args.children}</Label>;
};
Default.args = {
  htmlFor: "id",
  children: "Label Text",
  size: "large",
  disabled: false,
  focused: false,
  invalid: false,
};

const theme = {
  ...presente,
};

const Themed = (args: ILabelProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Label {...args}>{args.children}</Label>
    </ThemeProvider>
  );
};

Themed.args = {
  htmlFor: "id",
  children: "Label Text",
  size: "large",
  disabled: false,
  focused: false,
  invalid: false,
};

export default story;

export { Default, Themed };
