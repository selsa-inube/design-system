import React, { useState } from "react";
import { Switch } from "../index";

import {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  size,
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

const SwitchComponent = ({
  id,
  isDisabled,
  name,
  value,
  size,
  checked,
  handleChange,
}) => {
  const [switchChecked, setSwitchChecked] = useState(checked);

  const handleToggle = () => {
    setSwitchChecked(!switchChecked);
    handleChange(!switchChecked);
  };

  return (
    <Switch
      id={id}
      isDisabled={isDisabled}
      name={name}
      checked={switchChecked}
      value={"as"}
      size={size}
      handleChange={handleToggle}
    />
  );
};

export const Default = (args) => <SwitchComponent {...args} />;
Default.args = {
  id: "thisIsAnId",
  isDisabled: false,
  name: "thisIsAName",
  value: "as",
  checked: false,
  size: "small",
  handleChange: () => {},
};
Default.argTypes = {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  size,
};

export default story;
