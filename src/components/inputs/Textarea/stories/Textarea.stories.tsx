import { ThemeProvider } from "styled-components";

import { presente } from "@shared/themes/presente";
import { props, parameters } from "../props";
import { ITextareaProps, Textarea } from "..";
import { TextareaController } from "./TextareaController";

const story = {
  title: "inputs/Textarea",
  components: [Textarea],
  parameters,
  argTypes: props,
};

const Default = (args: ITextareaProps) => <TextareaController {...args} />;
Default.args = {
  label: "Textarea",
  name: "textarea",
  id: "textarea",
  status: "pending",
  placeholder: "Storybook Textarea",
  disabled: false,
  fullwidth: false,
  lengthThreshold: 20,
  required: true,
  maxLength: 220,
  value:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam, reiciendis ipsum itaque unde odio voluptatum ab cumque deleniti dolore magnam quas hic rem, mollitia adipisci. Officiis accusamus aut consectetur",
};

const theme = {
  ...presente,
};

const Themed = (args: ITextareaProps) => (
  <ThemeProvider theme={theme}>
    <TextareaController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
export { Default, Themed };
