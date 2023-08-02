import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";
import { props, sizes } from "../props";

import { Stack } from "../../../layouts/Stack";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  argTypes: props,
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
