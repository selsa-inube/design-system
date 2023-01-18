import React from "react";

import { Colors } from ".";
import { colors } from "../colors";

const story = {
  title: "Design System/Colors",
  components: [Colors],
};

const Primary = (args) => <Colors {...args} />;
Primary.args = {
  colors,
};

export default story;
export { Primary };
