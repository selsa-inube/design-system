import { SkeletonLine, ISkeletonLineProps } from ".";
import { props, parameters } from "./props";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";

const story = {
  title: "feedback/SkeletonLine",
  components: [SkeletonLine],
  parameters,
  argTypes: props,
};
const Default = (args: ISkeletonLineProps) => <SkeletonLine {...args} />;
Default.args = {
  width: "100%",
  animated: false,
};
const theme = {
  ...presente,
};

export const Themed = (args: ISkeletonLineProps) => (
  <ThemeProvider theme={theme}>
    <SkeletonLine {...args} />
  </ThemeProvider>
);
Themed.args = {
  size: "100%",
  animated: false,
};
export default story;
export { Default };
