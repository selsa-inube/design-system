import React from "react";
import { Switch } from "../index";
import { withPseudoState } from "storybook-addon-pseudo-states/dist/esm/withPseudoState";
import { StyledFlexBetween } from "./styles";

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
const logStates = (state) => {
  console.log("ToggledState:", state);
  return state;
};

const StatesTemplate = ({ ...args }) => (
  <StyledFlexBetween>
    <div id="one">
      <Switch {...args} />
    </div>
    <div id="two">
      <Switch {...args} />
    </div>
    <div id="three">
      <Switch {...args} isDisabled={true} />
    </div>
    <div id="four">
      <Switch {...args} />
    </div>
  </StyledFlexBetween>
);
export const States = StatesTemplate.bind({});
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
  handleChange: logStates,
};
States.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
};

export default story;
