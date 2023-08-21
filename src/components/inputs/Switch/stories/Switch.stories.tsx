import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { props, parameters } from "../props";

const story = {
  title: "inputs/Switch",
  components: Switch,
  parameters,
  argTypes: {
    ...props,
    onChange: { action: "changed" },
  },
};

export const Default = (args: ISwitchProps) => (
  <SwitchController {...args} onSwitchChange={args.onChange} />
);
Default.args = {
  id: "id",
  disabled: false,
  name: "name",
  value: "switchTest1",
  checked: false,
  size: "small",
  margin: "s0",
  padding: "s0",
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
