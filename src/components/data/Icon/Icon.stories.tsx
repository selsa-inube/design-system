import { ThemeProvider } from "styled-components";
import { MdAdb } from "react-icons/md";

import { Icon, IIconProps } from ".";

import { props, parameters } from "./props";
import { presente } from "@shared/themes/presente";

const story = {
  title: "data/Icon",
  component: Icon,
  parameters,
  argTypes: props,
};

export const Default = (args: IIconProps) => <Icon {...args} />;

Default.args = {
  appearance: "primary",
  icon: <MdAdb />,
  cursorHover: false,
  parentHover: false,
  disabled: false,
  spacing: "wide",
  variant: "none",
  shape: "rectangle",
  size: "24px",
};

const theme = {
  ...presente,
};
type IThemedProps = IIconProps & { theme: typeof theme };
export const Themed = (args: IThemedProps) => (
  <ThemeProvider theme={theme}>
    <Icon {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
