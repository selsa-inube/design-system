import { Switch, ISwitchProps } from "..";
import { SwitchController } from "./SwitchController";

import { props } from "../props";

import { Stack } from "@layouts/Stack";
const story = {
  title: "inputs/Switch",
  components: [Switch],
  argTypes: props,
};

const SwitchComponent = (props: ISwitchProps) => {
  const { checked } = props;
  return (
    <Stack alignItems="center" justifyContent="space-evenly">
      {[0, 1].map((item) => (
        <div key={item}>
          <SwitchController
            {...props}
            checked={item > 0 ? !checked : checked}
          />
        </div>
      ))}
    </Stack>
  );
};

export const Checks = {
  args: {
    id: "id",
    disabled: false,
    name: "name",
    checked: false,
    onChange: () => {},
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
