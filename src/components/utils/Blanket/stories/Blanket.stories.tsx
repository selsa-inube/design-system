import { BlanketProps } from "../interfaces/interface.Blanket";

import { Blanket } from "..";

const story = {
  title: "utils/Blanket/Default",
  components: Blanket,
  parameters: {
    docs: {
      description: {
        component:
          "the Blanket is used when you want to render  a screen lock to interact with a component in the foreground",
      },
    },
  },
  argTypes: {
    children: {
      description:
        "property used to determine if the component is capable of hosting nodes **ReactElement**",
    },
  },
};

const Default = (args: BlanketProps) => <Blanket {...args} />;

export default story;
export { Default };