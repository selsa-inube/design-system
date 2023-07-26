import { ISwitchProps } from "../interfaces/Switch.interface";
import { Switch } from "..";
import { SwitchController } from "./SwitchController";
import { id, name, handleChange, margin, padding } from "./props";

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
    name,
    handleChange,
    margin,
    padding,
  },
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
    id: "idStates",
    isDisabled: true,
    name: "nameState",
    handleChange: () => {},
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
