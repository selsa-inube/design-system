import { BrowserRouter } from "react-router-dom";
import { MdAdd } from "react-icons/md";

import { Button, IButtonProps } from ".";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { props } from "./props";

const story = {
  title: "inputs/Button",
  components: [Button],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: IButtonProps) => <Button {...args} />;

Default.args = {
  children: "Button",
  appearance: "primary",
  path: "/privilege",
  iconBefore: <MdAdd />,
  loading: false,
  disabled: false,
  type: "button",
  spacing: "wide",
  variant: "filled",
  fullwidth: false,
  handleClick: () => console.log("clicked from Default-story"),
};

const theme = {
  ...presente,
};

export const Themed = (args: IButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};
export default story;