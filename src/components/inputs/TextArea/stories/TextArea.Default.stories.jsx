import React from "react";

import { TextArea } from "..";
import { TextAreaController } from "./TextArea.controller";

const story = {
  title: "inputs/TextArea/Default",
  components: [TextArea],
};

const Default = (args) => <TextAreaController {...args} />;
Default.args = {
  label: "TextArea",
  name: "textarea",
  id: "textarea",
  placeholder: "Storybook TextArea",
  isDisabled: false,
  maxLength: 120,
  counter: true,
  value: "prueba",
};

export default story;
export { Default };
