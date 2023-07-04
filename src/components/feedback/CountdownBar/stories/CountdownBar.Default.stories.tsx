import { CountdownBar } from "../index";

import { size, appearance, duration, isPaused, handleCountdown } from "./props";
import { ICountdownBarProps } from "../interfaces/CountdownBar.interface";

const story = {
  title: "feedback/CountdownBar/Default",
  components: [CountdownBar],
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
  handleCountdown: () => console.log("countdown complete."),
};
Default.argTypes = {
  size,
  appearance,
  duration,
  isPaused,
  handleCountdown,
};

export default story;
