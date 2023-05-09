import React from "react";

import { SystemReference } from ".";

const story = {
  title: "Shared/Colors/System",
  components: [SystemReference],
};

const System = (args) => <SystemReference {...args} />;

export default story;
export { System };
