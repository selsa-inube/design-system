import React from "react";
import { Switch, sizes } from "../index";

import { SwitchController } from "./SwitchController";

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

const SwitchComponent = (props) => {
  const { checked } = props;
  return (
    <StyledFlexBetween>
      {sizes.map((size) => (
        <div key={size}>
          <SwitchController
            {...props}
            checked={size === "small" ? checked : !checked}
            size={size}
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
  value: "as",
  checked: false,
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
