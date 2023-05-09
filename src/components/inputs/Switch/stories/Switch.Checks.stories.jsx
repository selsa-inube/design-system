import React from "react";

import { Switch } from "../index";
import { SwitchController } from "./SwitchController";
import { id, isDisabled, name, handleChange } from "./props";

import { Stack } from "../../../layouts/Stack";
const story = {
  title: "inputs/Switch/Checks",
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
  const { checked } = props;
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <div key={item}>
          <SwitchController
            {...props}
            checked={item > 0 ? !checked : checked}
          />
        </div>
      ))}
    </Stack>
  );
};

export const Checks = SwitchComponent.bind({});
Checks.args = {
  id: "idValue",
  isDisabled: false,
  name: "nameValue",
  checked: false,
  handleChange: () => {},
};
Checks.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
