import { Switch, ISwitchProps } from "..";

import { SwitchController } from "./SwitchController";
import { props } from "../props";

import { Stack } from "@layouts/Stack";

const story = {
  title: "inputs/Switch",
  components: [Switch],
  argTypes: props,
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
    id: "id",
    disabled: false,
    name: "name",
    checked: false,
    handleChange: () => {},
    label: "Label",
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
