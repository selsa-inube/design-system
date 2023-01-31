import React from "react";

import { ColorReference } from "../reference";

const story = {
  title: "Shared/Colors/Reference",
  components: [ColorReference],
};

const Reference = (args) => <ColorReference {...args} />;

export default story;
export { Reference };
