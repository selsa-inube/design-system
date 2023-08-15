import { SkeletonIcon, ISkeletonIconProps } from ".";
import { ThemeProvider } from "styled-components";

import { presente } from "@shared/themes/presente";
import { props, parameters } from "./props";

const story = {
  title: "feedback/SkeletonIcon",
  components: [SkeletonIcon],
  parameters,
  argTypes: props,
};

export const Default = (args: ISkeletonIconProps) => <SkeletonIcon {...args} />;
Default.args = {
  size: "24px",
  animated: false,
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
  animated: false,
};

export default story;
