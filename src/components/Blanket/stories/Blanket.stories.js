import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
};

const OnClickBlanket = (args) => <BlanketComponent {...args} />;
OnClickBlanket.args = {
  onVisible: true,
  allowClickOut: true,
};

export default story;
export { OnClickBlanket };
