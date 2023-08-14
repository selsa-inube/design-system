import { presente } from "@shared/themes/presente";
import { Spinner, ISpinnerProps } from ".";
import { ThemeProvider } from "styled-components";
import { props, parameters } from "./props";

const story = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters,
  args: {
    size: "medium",
    appearance: "primary",
    transparent: false,
  },
  argTypes: props,
};

export const Default = (args: ISpinnerProps) => <Spinner {...args} />;

const theme = {
  ...presente,
};

export const Themed = (args: ISpinnerProps) => (
  <ThemeProvider theme={theme}>
    <Spinner {...args} />
  </ThemeProvider>
);

export default story;
