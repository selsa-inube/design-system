import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { BreadcrumbEllipsis, IBreadcrumbEllipsisProps } from "../index";
import { presente } from "@shared/themes/presente";
import { props } from "../props";

const story = {
  title: "navigation/Breadcrumbs/BreadcrumbEllipsis",
  components: [BreadcrumbEllipsis],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: IBreadcrumbEllipsisProps) => (
  <BreadcrumbEllipsis {...args} />
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
  size: "large",
};

const theme = structuredClone(presente);

const Themed = (args: IBreadcrumbEllipsisProps) => (
  <ThemeProvider theme={theme}>
    <Default {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;

export { Default, Themed };
