import { SkeletonLine, ISkeletonLineProps } from ".";
import { props, parameters } from "./props";

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

export default story;
export { Default };
