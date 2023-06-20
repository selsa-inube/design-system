import React from "react";

import { TextArea } from "..";
import { TextAreaController } from "./TextArea.controller";

const story = {
  title: "inputs/TextArea/Default",
  components: [TextArea],
};

const Default = (args) => <TextAreaController {...args} />;

export default story;
export { Default };
