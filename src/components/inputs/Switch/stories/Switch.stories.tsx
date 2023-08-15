import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";

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
  onChange: () => {},
  margin: "0px",
  padding: "0px",
};

export default story;
