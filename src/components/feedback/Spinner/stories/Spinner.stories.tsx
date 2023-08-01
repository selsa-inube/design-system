import { ElementType } from "react";
import { Spinner } from "..";
import { ISpinnerProps } from "../interfaces/Spinner.interface";

import { props } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,

  decorators: [
    (Story: ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    size: "medium",
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: props,
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default story;