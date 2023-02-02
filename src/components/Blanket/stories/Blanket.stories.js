import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
  argTypes: {
    onVisible: {
      description: "enables the component",
      default: "false",
    },
    allowClickOut: {
      description: "allow clicking on the elements below the blanket bool",
      d: "false",
    },
    children: {
      description: "child component shown on the blanket",
    },
  },
};

const Blanket = (args) => <BlanketComponent {...args} />;
Blanket.args = {
  onVisible: false,
  allowClickOut: false,
};

export default story;
export { Blanket };
