import { ISwitchProps } from "../interfaces/Switch.interface";

import { Switch } from "../index";
import { SwitchController } from "./SwitchController";
import { id, isDisabled, name, handleChange, margin, padding } from "./props";

import { Stack } from "../../../layouts/Stack";
const story = {
  title: "inputs/Switch/Checks",
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
    margin,
    padding,
  },
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
    id: "idValue",
    isDisabled: false,
    name: "nameValue",
    checked: false,
    handleChange: () => {},
    margin: "0px",
    padding: "0px",
  },
  render: (args: ISwitchProps) => <SwitchComponent {...args} />,
};

export default story;
