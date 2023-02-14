import React, { useState } from "react";
import { Switch, sizes } from "../index";

import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, value, checked, handleChange } from "./props";

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

const SwitchComponent = ({
  id,
  isDisabled,
  name,
  checked,
  value,
  handleChange,
}) => {
  const [switchChecked, setSwitchValue] = useState(checked);
  const [switchCheckedSmall, setswitchCheckedSmall] = useState(checked);
  const handleToggleSmall = () => {
    setswitchCheckedSmall(!switchCheckedSmall);
    handleChange(!switchCheckedSmall);
  };

  const handleToggleLarge = () => {
    setSwitchValue(!switchChecked);
    handleChange(!switchChecked);
  };

  return (
    <StyledFlexBetween>
      {sizes.map((size) => (
        <div key={size}>
          <Switch
            id={id}
            isDisabled={isDisabled}
            name={name}
            checked={size === "small" ? switchCheckedSmall : !switchChecked}
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
  checked,
  handleChange,
};

export default story;
