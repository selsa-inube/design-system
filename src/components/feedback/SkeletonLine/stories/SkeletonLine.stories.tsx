import { SkeletonLine, ISkeletonLineProps } from "..";
import { parameters, width, isAnimated } from "./props";

const story = {
  title: "feedback/SkeletonLine",
  components: [SkeletonLine],
  parameters,
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
Default.argTypes = {
  width,
  isAnimated,
};

export default story;
export { Default };
