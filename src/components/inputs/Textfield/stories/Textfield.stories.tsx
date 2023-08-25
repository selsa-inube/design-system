import { ThemeProvider } from "styled-components";
import { Textfield, ITextfieldProps } from "..";
import { TextfieldController } from "./TextfieldController";

import { props, parameters } from "../props";
import { presente } from "@src/shared/themes/presente";

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
  errorMessage: "Please enter only letters in this field",
  validMessage: "The field has been successfully validated",
  size: "wide",
  readOnly: false,
  disabled: false,
  required: false,
  type: "text",
  errorMessages: "field cannot be empty, special characters cannot be used",
  validMessages: "field has been successfully validated",
};

const theme = {
  ...presente,
};

const Themed = (args: ITextfieldProps) => (
  <ThemeProvider theme={theme}>
    <TextfieldController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
