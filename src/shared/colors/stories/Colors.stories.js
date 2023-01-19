import React from "react";

import { colors } from "../colors";
import { ColorReference } from "../components/color-reference";
import { SystemReference } from "../components/sytem-table-color";

const story = {
  title: "Shared/Colors",
  components: [ColorReference, SystemReference],
};

const Reference = (args) => <ColorReference {...args} />;
Reference.args = {
  colors,
};

const System = (args) => <SystemReference {...args} />;
System.args = {
  colors,
};

export default story;
export { Reference, System };
