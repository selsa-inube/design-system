import { Spinner, ISpinnerProps } from "..";

import { props, parameters } from "../props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
  args: {
    size: "medium",
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: props,
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default story;
