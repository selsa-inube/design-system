import React, { useState } from "react";
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

const SwitchComponent = ({
  id,
  isDisabled,
  name,
  value,
  size,
  handleChange,
}) => {
  const [switchValue, setSwitchValue] = useState(value);

  const handleToggle = () => {
    setSwitchValue(!switchValue);
    handleChange(!switchValue);
  };

  return (
    <Switch
      id={id}
      isDisabled={isDisabled}
      name={name}
      value={switchValue}
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
  value: false,
  size: "small",
  handleChange: () => {},
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
