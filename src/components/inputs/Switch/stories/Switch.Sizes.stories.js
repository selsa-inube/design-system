import React from "react";
import { Switch, sizes } from "../index";

import { StyledFlexBetween } from "./styles";

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
const logStateSize = (state) => {
  console.log("ToggledSize:", state);
  return state;
};

const SizesTemplate = ({ ...args }) => (
  <StyledFlexBetween>
    {sizes.map((size) => (
      <div key={size}>
        <Switch {...args} size={size} />
      </div>
    ))}
  </StyledFlexBetween>
);
export const Sizes = SizesTemplate.bind({});
Sizes.args = {
  id: "idSize",
  isDisabled: false,
  name: "nameSize",
  value: false,
  handleChange: logStateSize,
};
Sizes.argTypes = {
  id,
  isDisabled,
  name,
  value,
  handleChange,
};

export default story;
