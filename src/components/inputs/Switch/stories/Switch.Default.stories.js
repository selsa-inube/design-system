import React from "react";
import { Switch } from "../index";

import { id, isDisabled, name, value, handleChange, size } from "./props";

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

const logState = (state) => {
  console.log("Toggled:", state);
  return state;
};

export const Default = (args) => <Switch {...args} />;
Default.args = {
  id: "thisIsAnId",
  isDisabled: false,
  name: "thisIsAName",
  value: false,
  size: "small",
  handleChange: logState,
};
Default.argTypes = {
  id,
  isDisabled,
  name,
  value,
  handleChange,
  size,
};

export default story;
