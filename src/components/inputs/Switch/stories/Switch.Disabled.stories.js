import React, { useState } from "react";
import { Switch } from "../index";
import { withPseudoState } from "storybook-addon-pseudo-states/dist/esm/withPseudoState";
import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, handleChange } from "./props";

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
  };

  const handleToggleActive = () => {
    setSwitchChecked(!switchChecked);
    handleChange(!switchChecked);
  };

  return (
    <StyledFlexBetween>
      <Switch
        id={id}
        isDisabled={true}
        name={name}
        size={size}
        handleChange={handleToggleInactive}
        checked={switchCheckedInactive || false}
      />
      <Switch
        id={id}
        isDisabled={true}
        name={name}
        size={size}
        handleChange={handleToggleActive}
        checked={!switchChecked || false}
      />
    </StyledFlexBetween>
  );
};

export const Disabled = SwitchComponent.bind({});
Disabled.decorators = [withPseudoState];
Disabled.parameters = {
  pseudo: {
    hover: ["#two"],
    focus: ["#four"],
  },
};
Disabled.args = {
  id: "idStates",
  isDisabled: false,
  name: "nameState",
  handleChange: () => {},
};
Disabled.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
