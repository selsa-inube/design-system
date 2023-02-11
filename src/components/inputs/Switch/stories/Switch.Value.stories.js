import React, { useState } from "react";
import { Switch } from "../index";

import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, handleChange } from "./props";

const story = {
  title: "inputs/Switch/Values",
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
  const [switchValueInactive, setSwitchValueInactive] = useState(value);
  const handleToggleInactive = () => {
    setSwitchValueInactive(!switchValueInactive);
    handleChange(!switchValueInactive);
  };

  const handleToggleActive = () => {
    setSwitchValue(!switchValue);
    handleChange(!switchValue);
  };

  return (
    <StyledFlexBetween>
      <Switch
        id={id}
        isDisabled={isDisabled}
        name={name}
        size={size}
        handleChange={handleToggleInactive}
        value={switchValueInactive || false}
      />
      <Switch
        id={id}
        isDisabled={isDisabled}
        name={name}
        size={size}
        handleChange={handleToggleActive}
        value={!switchValue || false}
      />
    </StyledFlexBetween>
  );
};

export const Values = SwitchComponent.bind({});
Values.args = {
  id: "idValue",
  isDisabled: false,
  name: "nameValue",
  handleChange: () => {},
};
Values.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
