import React from "react";

import { typography } from "./typography";

const story = {
  title: "typography",
  components: [typography],
};

const Font = (args) => <typography {...args} />;
Font.args = {
  typography,
};

export default story;
export { Font };
