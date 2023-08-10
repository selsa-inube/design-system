import { Spinner, ISpinnerProps } from ".";

import { props } from "./props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  args: {
    size: "medium",
    appearance: "blue",
    isTransparent: false,
  },
  argTypes: props,
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

export default story;
