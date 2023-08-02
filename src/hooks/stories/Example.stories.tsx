import { Switch } from "../../components/inputs/Switch";

import { useMediaQuery } from "../useMediaQuery";
import { IExampleSwitch } from "./IExampleSwitch.interface";
import { SwitchController } from "@src/components/inputs/Switch/stories/SwitchController";
import { props } from "@src/components/inputs/Switch/props";

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
      margin={"0px"}
      padding={"0px"}
      {...args}
      size={size}
    />
  );
};

Example.args = {
  id: "id",
  isDisabled: false,
  name: "name",
  value: "switchTest4",
  checked: false,
  size: "small",
  handleChange: () => {},
  margin: "0px",
  padding: "0px",
};

export default story;
