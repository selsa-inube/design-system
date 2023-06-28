import React from "react";
import { Switch } from "../../components/inputs/Switch";
import { SwitchController } from "../../components/inputs/Switch/stories/SwitchController";
import { useMediaQuery } from "../useMediaQuery";
import { IExampleSwitch } from "./IExampleSwitch.interface";

const story = {
  title: "hooks/useMediaQuery",
  components: [Switch],
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Example = (args: IExampleSwitch) => {
  const isLargeScreen = useMediaQuery("(min-width: 600px)");

  const size = isLargeScreen ? "large" : "small";

  return <SwitchController {...args} size={size} />;
};

Example.args = {
  handleChange: () => {},
  id: "thisIsAnId",
};

export default story;
