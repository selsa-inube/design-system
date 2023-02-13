import Text from "..";

import {
  parameters,
  children,
  id,
  as,
  align,
  appearance,
  typo,
} from "./stories.args";

const story = {
  title: "components/Data/Text",
  components: [Text],
  parameters,
};

const Title = (args) => <Text {...args} />;
Title.args = {
  children: "texto",
  id: "TextComponent",
  as: "h1",
  align: "center",
  appearance: "primary ",
  typo: "titleLarge",
};

Title.argTypes = {
  children,
  id,
  as,
  align,
  appearance,
  typo,
};

export default story;

export { Title };
