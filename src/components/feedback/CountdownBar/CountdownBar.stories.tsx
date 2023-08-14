import { ThemeProvider } from "styled-components";
import { CountdownBar, ICountdownBarProps } from ".";
import { action } from "@storybook/addon-actions";
import { props, parameters } from "./props";
import { presente } from "@shared/themes/presente";

const story = {
  title: "feedback/CountdownBar",
  components: [CountdownBar],
  parameters,
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

const theme = {
  ...presente,
};

export const Themed = (args: ICountdownBarProps) => (
  <ThemeProvider theme={theme}>
    <CountdownBar {...args} />
  </ThemeProvider>
);

export default story;
