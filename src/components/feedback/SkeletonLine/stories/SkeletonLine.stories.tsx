import { SkeletonLine, ISkeletonLineProps } from "..";
import { props } from "../props";

const story = {
  title: "feedback/SkeletonLine",
  components: [SkeletonLine],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};
const Default = (args: ISkeletonLineProps) => <SkeletonLine {...args} />;
Default.args = {
  width: "100%",
  isAnimated: false,
};

export default story;
export { Default };
