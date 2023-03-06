import React from "react";
import { Switch } from "../index";
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
const SwitchComponent = (props) => {
  return (
    <StyledFlexBetween>
      {[0, 1].map((item) => (
        <Switch key={item} {...props} checked={item > 0 ? true : false} />
      ))}
    </StyledFlexBetween>
  );
};

export const Disabled = SwitchComponent.bind({});
Disabled.args = {
  id: "idStates",
  isDisabled: true,
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
