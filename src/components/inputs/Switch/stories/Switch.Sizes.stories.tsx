import { ISwitchProps } from "../interfaces/Switch.interface";
import { sizes } from "../types/Switch.Size.type";
import { Switch } from "..";
import { SwitchController } from "./SwitchController";
import {
  id,
  isDisabled,
  name,
  value,
  checked,
  handleChange,
  margin,
  padding,
} from "./props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    id,
    isDisabled,
    name,
    value,
    checked,
    handleChange,
    margin,
    padding,
  },
};

const SwitchComponent = (args: ISwitchProps) => {
  const { checked } = args;
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {sizes.map((size) => (
        <div key={size}>
          <SwitchController
            {...args}
            checked={size === "small" ? checked : !checked}
            size={size}
          />
        </div>
      ))}
    </Stack>
  );
};

export const Sizes = {
  args: {
    id: "id",
    isDisabled: false,
    name: "name",
    value: "switchTest2",
    checked: false,
    handleChange: () => {},
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
