import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: BlanketComponent,
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

const Blanket = (args) => <BlanketComponent {...args} />;

export default story;
export { Blanket };
