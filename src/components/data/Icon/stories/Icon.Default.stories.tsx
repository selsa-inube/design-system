import { MdAdb } from "react-icons/md";

import { Icon } from "../index";

import { IIconProps } from "../interfaces/Icon.interface";
import { props } from "./props";
import { presente } from "@src/shared/themes/presente";
import { ThemeProvider } from "styled-components";

const story = {
  title: "data/Icon",
  component: Icon,
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
  handleClick: () => console.log("clicked from Default Icon-story"),
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
