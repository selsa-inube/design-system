import React, { useState } from "react";
import { Switch, sizes } from "../index";

import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, value, handleChange } from "./props";

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

const SwitchComponent = ({ id, isDisabled, name, value, handleChange }) => {
  const [switchValue, setSwitchValue] = useState(value);
  const [switchValueSmall, setSwitchValueSmall] = useState(value);
  const handleToggleSmall = () => {
    setSwitchValueSmall(!switchValueSmall);
    handleChange(!switchValueSmall);
  };

  const handleToggleLarge = () => {
    setSwitchValue(!switchValue);
    handleChange(!switchValue);
  };

  return (
    <StyledFlexBetween>
      {sizes.map((size) => (
        <div key={size}>
          <Switch
            id={id}
            isDisabled={isDisabled}
            name={name}
            value={size === "small" ? switchValueSmall : switchValue}
            size={size}
            handleChange={
              size === "small" ? handleToggleSmall : handleToggleLarge
            }
          />
        </div>
      ))}
    </StyledFlexBetween>
  );
};

export const Sizes = SwitchComponent.bind({});
Sizes.args = {
  id: "idSize",
  isDisabled: false,
  name: "nameSize",
  value: false,
  handleChange: () => {},
};
Sizes.argTypes = {
  id,
  isDisabled,
  name,
  value,
  handleChange,
};

export default story;
