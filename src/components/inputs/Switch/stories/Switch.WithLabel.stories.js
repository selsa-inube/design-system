import React from "react";

import { Switch } from "../index";
import { SwitchController } from "./SwitchController";
import { StyledMargin } from "./stories.styles";
import { id, isDisabled, name, handleChange, label } from "./props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch/WithLabel",
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
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <StyledMargin key={item}>
          <SwitchController
            {...props}
            id={String(item)}
            checked={item > 0 ? !checked : checked}
          />
        </StyledMargin>
      ))}
    </Stack>
  );
};

export const WithLabel = SwitchComponent.bind({});
WithLabel.args = {
  id: "idValue",
  isDisabled: false,
  name: "nameValue",
  checked: false,
  handleChange: () => {},
  label: "Label",
};
WithLabel.argTypes = {
  id,
  isDisabled,
  name,
  handleChange,
  label,
};

export default story;
