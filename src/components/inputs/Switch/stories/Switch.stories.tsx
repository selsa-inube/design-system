import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";

import { props } from "../props";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
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

export default story;
