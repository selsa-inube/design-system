import React, { useState } from "react";
import { Switch } from "../index";
import { withPseudoState } from "storybook-addon-pseudo-states/dist/esm/withPseudoState";
import { StyledFlexBetween } from "./stories.styles";

import { id, isDisabled, name, handleChange } from "./props";

const story = {
  title: "inputs/Switch/States",
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
  const [switchValueNormal, setSwitchValueNormal] = useState(value);
  const [switchValueHover, setSwitchValueHover] = useState(value);
  const [switchValueFocus, setSwitchValueFocus] = useState(value);

  const handleToggleNormal = () => {
    setSwitchValueNormal(!switchValueNormal);
    handleChange(!switchValueNormal);
  };

  const handleToggleHover = () => {
    setSwitchValueHover(!switchValueHover);
    handleChange(!switchValueHover);
  };

  const handleToggleFocus = () => {
    setSwitchValueFocus(!switchValueFocus);
    handleChange(!switchValueFocus);
  };

  return (
    <StyledFlexBetween>
      <div id="one">
        <Switch
          id={id}
          isDisabled={isDisabled}
          name={name}
          value={switchValueNormal || false}
          size={size}
          handleChange={handleToggleNormal}
        />
      </div>
      <div id="two">
        <Switch
          id={id}
          isDisabled={isDisabled}
          name={name}
          value={switchValueHover || false}
          size={size}
          handleChange={handleToggleHover}
        />
      </div>
      <div id="three">
        <Switch
          id={id}
          name={name}
          value={false}
          size={size}
          isDisabled={true}
          handleChange={() => {}}
        />
      </div>
      <div id="four">
        <Switch
          id={id}
          isDisabled={isDisabled}
          name={name}
          value={switchValueFocus || false}
          size={size}
          handleChange={handleToggleFocus}
        />
      </div>
    </StyledFlexBetween>
  );
};

export const States = SwitchComponent.bind({});
States.decorators = [withPseudoState];
States.parameters = {
  pseudo: {
    hover: ["#two"],
    focus: ["#four"],
  },
};
States.args = {
  id: "idStates",
  isDisabled: false,
  name: "nameState",
  handleChange: () => {},
};
States.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
