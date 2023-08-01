import { CountdownBar } from "../index";

import { props } from "../props";
import { ICountdownBarProps } from "../interfaces/CountdownBar.interface";

const story = {
  title: "feedback/CountdownBar",
  components: [CountdownBar],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
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
