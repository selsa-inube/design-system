import { CountdownBar, ICountdownBarProps } from ".";
import { action } from "@storybook/addon-actions";
import { props } from "./props";

const story = {
  title: "feedback/CountdownBar",
  components: [CountdownBar],
  argTypes: {
    ...props,
    onCountdown: { action: "onAnimationEnd" },
  },
};

export const Default = (args: ICountdownBarProps) => <CountdownBar {...args} />;

Default.args = {
  size: "4px",
  appearance: "primary",
  duration: 3000,
  paused: false,
  onCountdown: action("onAnimationEnd"),
};

export default story;
