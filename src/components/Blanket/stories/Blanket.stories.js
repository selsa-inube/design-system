import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
};

const Blanket = (args) => <BlanketComponent {...args} />;
Blanket.args = {
  allowClickOut: true,
};

const VisibleBlankent = BlanketComponent.bind({});
VisibleBlankent.args = {
  onVisible: true,
};

export default story;
export { Blanket, VisibleBlankent };
