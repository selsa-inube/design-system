import { CountdownBar, ICountdownBarProps } from "..";

import { props } from "../props";

const story = {
  title: "feedback/CountdownBar",
  components: [CountdownBar],
  argTypes: props,
};

export const Default = (args: ICountdownBarProps) => <CountdownBar {...args} />;

Default.args = {
  size: "4px",
  appearance: "primary",
  duration: 3000,
  isPaused: false,
  handleCountdown: () => console.log("countdown complete."),
};

export default story;
