import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
};

const OnClickBlanket = (args) => <BlanketComponent {...args} />;
OnClickBlanket.args = {
  allowClickOut: true,
};

const VisibleBlankent = BlanketComponent.bind({});
VisibleBlankent.args = {
  onVisible: true,
};

export default story;
export { OnClickBlanket, VisibleBlankent };
