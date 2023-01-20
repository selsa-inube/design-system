import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
};

const blanket = (args) => <BlanketComponent {...args} />;

export default story;

export { blanket };
