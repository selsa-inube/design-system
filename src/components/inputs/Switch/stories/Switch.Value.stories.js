import React from "react";
import { Switch } from "../index";

import { StyledFlexBetween } from "./styles";

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
const logStateValue = (state) => {
  console.log("ToggledValue:", state);
  return state;
};

const ValuesTemplate = ({ ...args }) => (
  <StyledFlexBetween>
    {[false, true].map((value) => (
      <div key={value}>
        <Switch {...args} value={value} />
      </div>
    ))}
  </StyledFlexBetween>
);
export const Values = ValuesTemplate.bind({});
Values.args = {
  id: "idValue",
  isDisabled: false,
  name: "nameValue",
  handleChange: logStateValue,
};
Values.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
