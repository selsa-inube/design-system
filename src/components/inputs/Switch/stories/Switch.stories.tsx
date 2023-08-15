import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";
import { ThemeProvider } from "styled-components";

import { presente } from "@shared/themes/presente";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  parameters,
  argTypes: props,
};

export const Default = (args: ISwitchProps) => <SwitchController {...args} />;
Default.args = {
  id: "id",
  isDisabled: false,
  name: "name",
  value: "switchTest1",
  checked: false,
  size: "small",
  handleChange: () => {},
  margin: "0px",
  padding: "0px",
};

const theme = {
  ...presente,
};

export const Themed = (args: ISwitchProps) => (
  <ThemeProvider theme={theme}>
    <SwitchController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
