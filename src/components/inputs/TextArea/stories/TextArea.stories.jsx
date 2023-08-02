import React from "react";

import { TextArea } from "..";
import { TextAreaController } from "./TextArea.controller";

import { props } from "../props";

const story = {
  title: "inputs/TextArea",
  components: [TextArea],
  argTypes: props,
};

const Default = (args) => <TextAreaController {...args} />;
Default.args = {
  label: "TextArea",
  name: "textarea",
  id: "textarea",
  state: "pending",
  placeholder: "Storybook TextArea",
  isDisabled: false,
  counter: true,
  lengthThreshold: 20,
  isRequired: true,
  value:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
};

export default story;
export { Default };
