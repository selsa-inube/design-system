import { MdAdb } from "react-icons/md";

import { Icon } from "../index";

import { IIconProps } from "../interfaces/Icon.interface";
import { props } from "../props";
import { presente } from "@src/shared/themes/presente";
import { ThemeProvider } from "styled-components";
import { inube } from "@src/shared/tokens";

const story = {
  title: "data/Icon",
  component: Icon,
  argTypes: props,
};

const themeInube = {
  ...inube,
};

export const Default = (args: IIconProps) => (
  <ThemeProvider theme={themeInube}>
    <Icon {...args} />
  </ThemeProvider>
);

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
