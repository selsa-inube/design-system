import React from "react";
import { Switch } from "../../components/inputs/Switch";

import { useMediaQuery } from "../useMediaQuery";
import { IExampleSwitch } from "./IExampleSwitch.interface";
import { SwitchController } from "@src/components/inputs/Switch/stories/SwitchController";

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
  handleChange: () => {},
  id: "thisIsAnId",
  label: "",
};

export default story;
