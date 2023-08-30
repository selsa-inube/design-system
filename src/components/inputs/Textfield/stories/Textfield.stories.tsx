import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";
import { ThemeProvider } from "styled-components";
import { props, parameters } from "../props";
import { presente } from "@shared/themes/presente";

const story = {
  title: "inputs/Textfield",
  components: [Textfield],
  parameters,
  argTypes: props,
};

const Default = (args: ITextfieldProps) => <TextfieldController {...args} />;
Default.args = {
  label: "Username",
  name: "Username",
  id: "Username",
  placeholder: "Write your full name",
  value: "",
  size: "wide",
  readOnly: false,
  disabled: false,
  required: false,
  type: "text",
  message: "",
  fullwidth: false,
};

const theme = {
  ...presente,
};

export const Themed = (args: ITextfieldProps) => (
  <ThemeProvider theme={theme}>
    <TextfieldController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};
export default story;

export { Default };
