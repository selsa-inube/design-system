import { ThemeProvider } from "styled-components";
import { User, IUserProps } from ".";

import { props } from "./props";
import { presente } from "@shared/themes/presente";

const story = {
  title: "data/User",
  components: [User],
  argTypes: props,
};

export const Default = (args: IUserProps) => <User {...args} />;
Default.args = {
  userName: "Leonardo Garzón",
  client: "Sistemas Enlínea S.A",
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

export default story;
