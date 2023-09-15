import { Assisted, IAssistedProps } from "..";

const story = {
  title: "Feedback/Assisted",
  component: Assisted,
};

const Default = (args: IAssistedProps) => <Assisted {...args} />;

export default story;

export { Default };
