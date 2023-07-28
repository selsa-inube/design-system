import { ThemeProvider } from "styled-components";
import { presente } from "@src/shared/themes/presente";
import { User } from "../index";
import { IUserProps } from "../interfaces/User.interface";

import { parameters, userName, businessUnit, size } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  businessUnit: "Sistemas Enlínea S.A",
  size: "large",
};

const theme = {
  ...presente,
};

export const Themed = (args: IUserProps) => (
  <ThemeProvider theme={theme}>
    <User {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

Default.argTypes = {
  userName,
  businessUnit,
  size,
};

export default story;
