import { Switch } from "@inputs/Switch";

import { useMediaQuery } from "@hooks/useMediaQuery";
import { IExampleSwitch } from "./IExampleSwitch.interface";
import { SwitchController } from "@inputs/Switch/stories/SwitchController";
import { props } from "@inputs/Switch/props";

const story = {
  title: "hooks/useMediaQuery",
  components: [Switch],
  argTypes: props,
};

export const Example = (args: IExampleSwitch) => {
  const isLargeScreen = useMediaQuery("(min-width: 600px)");

  const size = isLargeScreen ? "large" : "small";

  return (
    <SwitchController
      label={""}
      margin="s0"
      padding="s0"
      {...args}
      size={size}
    />
  );
};

Example.args = {
  id: "id",
  disabled: false,
  name: "name",
  value: "switchTest4",
  checked: false,
  size: "small",
  onChange: () => {},
  margin: "0px",
  padding: "0px",
};

export default story;
