import React, { useState } from "react";
import { Switch } from "../index";

import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, handleChange } from "./props";

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
  const [switchCheckedInactive, setSwitchCheckedInactive] = useState(checked);
  const handleToggleInactive = () => {
    setSwitchCheckedInactive(!switchCheckedInactive);
    handleChange(!switchCheckedInactive);
    console.log("handleChecksToggleInactive: ", !switchCheckedInactive);
  };

  const handleToggleActive = () => {
    setSwitchChecked(!switchChecked);
    handleChange(!switchChecked);
    console.log("handleChecksToggleActive: ", switchChecked);
  };

  return (
    <StyledFlexBetween>
      <Switch
        id={id}
        isDisabled={isDisabled}
        name={name}
        size={size}
        handleChange={handleToggleInactive}
        checked={switchCheckedInactive || false}
      />
      <Switch
        id={id}
        isDisabled={isDisabled}
        name={name}
        size={size}
        handleChange={handleToggleActive}
        checked={!switchChecked || false}
      />
    </StyledFlexBetween>
  );
};

export const Checks = SwitchComponent.bind({});
Checks.args = {
  id: "idValue",
  isDisabled: false,
  name: "nameValue",
  handleChange: () => {},
};
Checks.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
