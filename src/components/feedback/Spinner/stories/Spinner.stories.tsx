import { ElementType } from "react";
import { Spinner, ISpinnerProps } from "..";

import { parameters, size, appearance, isTransparent } from "./props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
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
  argTypes: {
    size,
    appearance,
    isTransparent,
  },
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default story;
