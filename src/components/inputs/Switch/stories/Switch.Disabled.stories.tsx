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
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <SwitchController
          key={item}
          {...args}
          checked={item > 0 ? true : false}
        />
      ))}
    </Stack>
  );
};

export const Disabled = {
  args: {
    id: "id",
    disabled: true,
    name: "name",
    onChange: () => {},
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
