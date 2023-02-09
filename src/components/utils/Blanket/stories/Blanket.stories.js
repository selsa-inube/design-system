import Blanket from "../index";

const story = {
  title: "components/utils/Blanket",
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

const BlanketS = (args) => <Blanket {...args} />;

export default story;
export { BlanketS };
