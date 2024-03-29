import { BrowserRouter } from "react-router-dom";
import { BreadcrumbMenu } from "..";
import { props } from "../props";
import { ThemeProvider } from "styled-components";
import { presente } from "@shared/themes/presente";
import { IBreadcrumbsRoutes } from "../../props";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbMenu",
  components: [BreadcrumbMenu],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbsRoutes) => (
  <div style={{ height: "100px", transform: "translateZ(0)" }}>
    <BreadcrumbMenu {...args} />
  </div>
);
Default.args = {
  routes: [
    {
      label: "Privileges",
      path: "/privileges",
      id: "privileges",
    },
    { label: "Users", path: "/users", id: "users" },
    {
      label: "User edition",
      path: "users/edition",
      id: "usersEdition",
    },
  ],
};

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbsRoutes) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
