import React from "react";

import { colors } from "../../colors";

import { ColorReference } from "../reference";

const story = {
  title: "Shared/Colors/Reference",
  components: [ColorReference],
};

const Reference = (args) => <ColorReference {...args} />;
Reference.args = {
  colors,
};

export default story;
export { Reference };
