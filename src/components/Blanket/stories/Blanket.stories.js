import BlanketComponent from "../Blanket";

const story = {
  title: "components/BlanketComponent",
  components: [BlanketComponent],
  argTypes: {
    children: {
      description:
        "property used to determine if the component is capable of hosting nodes",
      typeof: "element",
    },
  },
};

const Blanket = (args) => <BlanketComponent {...args} />;

const Children = () => {
  const stylesChildren = {
    width: "50%",
    height: "50%",
    "background-color": "azure",
    "border-radius": "5px",
    "box-shadow": "2px 2px 5px 2px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Blanket>
      <div style={stylesChildren} />
    </Blanket>
  );
};

export default story;
export { Blanket, Children };
