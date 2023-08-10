import { ThemeProvider } from "styled-components";
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
  height: "4px",
  appearance: "primary",
  duration: 3000,
  paused: false,
  onCountdown: action("onAnimationEnd"),
};

export const Themed = (args: ICountdownBarProps) => (
  <ThemeProvider>
    <CountdownBar {...args} />
  </ThemeProvider>
);

export default story;
