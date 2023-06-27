import React from "react";

import { Switch } from "../index";
import { SwitchController } from "./SwitchController";
import { id, isDisabled, name, handleChange, margin, padding } from "./props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch/Disabled",
  components: [Switch],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};
const SwitchComponent = (props) => {
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <SwitchController
          key={item}
          {...props}
          checked={item > 0 ? true : false}
        />
      ))}
    </Stack>
  );
};

export const Disabled = SwitchComponent.bind({});
Disabled.args = {
  id: "idStates",
  isDisabled: true,
  name: "nameState",
  handleChange: () => {},
  margin: "0px",
  padding: "0px",
};
Disabled.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
  margin,
  padding,
};

export default story;
