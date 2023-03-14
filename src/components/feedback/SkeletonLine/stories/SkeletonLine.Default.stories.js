import { SkeletonLine } from "..";
import { parameters, width, isAnimated } from "./props";

const story = {
  title: "feedback/SkeletonLine/Default",
  components: [SkeletonLine],
  parameters,
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};
const Default = (args) => <SkeletonLine {...args} />;
Default.args = {
  width: "90%",
  isAnimated: true,
};
Default.argTypes = {
  width,
  isAnimated,
};

export default story;
export { Default };
