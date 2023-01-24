import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
};

const blanket = (args) => <BlanketComponent {...args} />;
blanket.args = {
  AllowClickOut: false,
};

export default story;

export { blanket };
