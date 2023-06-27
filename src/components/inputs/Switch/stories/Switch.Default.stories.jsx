import React from "react";
import { Switch } from "../index";
import { SwitchController } from "./SwitchController";

import {
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
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => <SwitchController {...args} />;
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
