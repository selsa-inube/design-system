import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { MdHouse } from "react-icons/md";

import { presente } from "@shared/themes/presente";
import { props, parameters } from "../props";
import { NavLinkController } from "./NavLink.Controller";
import { NavLink, INavLinkProps } from "..";

const story = {
  title: "navigation/NavLink",
  components: [NavLink],
  parameters,
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: INavLinkProps) => <NavLinkController {...args} />;

Default.args = {
  id: "privileges",
  label: "Privileges",
  path: "/privileges",
  disabled: false,
  icon: <MdHouse />,
};

const theme = structuredClone(presente);

const Themed = (args: INavLinkProps) => (
  <ThemeProvider theme={theme}>
    <NavLinkController {...args} selected />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
