import { ISwitchProps } from "../interfaces/Switch.interface";
import { Switch } from "..";
import { SwitchController } from "./SwitchController";

import {
  parameters,
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  size,
  margin,
  padding,
} from "./props";

const story = {
  title: "inputs/Switch/Default",
  components: [Switch],
  parameters,
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
  id: "thisIsAnId",
  isDisabled: false,
  name: "thisIsAName",
  value: "as",
  checked: false,
  size: "small",
  handleChange: () => {},
  margin: "0px",
  padding: "0px",
};
Default.argTypes = {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  size,
  margin,
  padding,
};

export default story;
