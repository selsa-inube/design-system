import { ISwitchProps } from "../interfaces/Switch.interface";

import { Switch } from "../index";
import { SwitchController } from "./SwitchController";
import {
  id,
  isDisabled,
  name,
  handleChange,
  label,
  margin,
  padding,
} from "./props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch/WithLabel",
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
    handleChange,
    label,
    margin,
    padding,
  },
};

const SwitchComponent = (args: ISwitchProps) => {
  const { checked } = args;
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <SwitchController
          key={item}
          {...args}
          id={String(item)}
          checked={item > 0 ? !checked : checked}
        />
      ))}
    </Stack>
  );
};

export const WithLabel = {
  args: {
    id: "idValue",
    isDisabled: false,
    name: "nameValue",
    checked: false,
    handleChange: () => {},
    label: "Label",
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;