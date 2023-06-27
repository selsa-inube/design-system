import React from "react";

import { TextArea } from "..";
import { TextAreaController } from "./TextArea.controller";

import {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  value,
  handleChange,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
  readOnly,
  counter,
  lengthThreshold,
} from "./props";

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
  counter: true,
  lengthThreshold: 20,
  isRequired: true,
  value:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
};

Default.argTypes = {
  parameters,
  label,
  name,
  id,
  placeholder,
  isDisabled,
  state,
  value,
  handleChange,
  maxLength,
  minLength,
  max,
  min,
  isRequired,
  errorMessage,
  validMessage,
  isFullWidth,
  readOnly,
  counter,
  lengthThreshold,
};

export default story;
export { Default };
