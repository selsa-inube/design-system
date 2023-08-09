import { SkeletonIcon, ISkeletonIconProps } from "..";
import { ThemeProvider } from "styled-components";

import { presente } from "@shared/themes/presente";
import { props } from "../props";

const story = {
  title: "feedback/SkeletonIcon",
  components: [SkeletonIcon],
  argTypes: props,
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  isAnimated: false,
};
const theme = {
  ...presente,
};

export const Themed = (args: ISkeletonIconProps) => (
  <ThemeProvider theme={theme}>
    <SkeletonIcon {...args} />
  </ThemeProvider>
);
Themed.args = {
  size: "24px",
  isAnimated: false,
};

export default story;
