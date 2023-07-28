import { ThemeProvider } from "styled-components";
import { presente } from "@src/shared/themes/presente";
import { User } from "..";
import { IUserProps } from "../interfaces/User.interface";

import { parameters, userName, businessUnit, size } from "./props";

const story = {
  title: "data/User",
  components: [User],
  parameters,
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
  userName: "Leonardo Garzón",
  businessUnit: "Sistemas Enlínea S.A",
  size: "large",
};
Themed.argTypes = {
  userName,
  businessUnit,
  size,
};

export default story;
