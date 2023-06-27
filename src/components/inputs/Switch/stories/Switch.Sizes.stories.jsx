import React from "react";

import { Switch, sizes } from "../index";
import { SwitchController } from "./SwitchController";
import {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  margin,
  padding,
} from "./props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch/Sizes",
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
      {sizes.map((size) => (
        <div key={size}>
          <SwitchController
            {...props}
            checked={size === "small" ? checked : !checked}
            size={size}
          />
        </div>
      ))}
    </Stack>
  );
};

export const Sizes = SwitchComponent.bind({});
Sizes.args = {
  id: "idSize",
  isDisabled: false,
  name: "nameSize",
  value: "as",
  checked: false,
  handleChange: () => {},
  margin: "0px",
  padding: "0px",
};
Sizes.argTypes = {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  margin,
  padding,
};

export default story;
