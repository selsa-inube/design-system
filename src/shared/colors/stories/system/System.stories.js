import React from "react";

import { colors } from "../../colors";

import { SystemReference } from ".";

const story = {
  title: "Shared/Colors/System",
  components: [SystemReference],
};

const System = (args) => <SystemReference {...args} />;
System.args = {
  colors,
};

export default story;
export { System };
