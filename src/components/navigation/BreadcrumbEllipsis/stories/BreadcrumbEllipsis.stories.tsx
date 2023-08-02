import { BrowserRouter } from "react-router-dom";

import { BreadcrumbEllipsis, IBreadcrumbEllipsisProps } from "../index";

import { props } from "../props";

const story = {
  title: "navigation/BreadcrumbEllipsis",
  components: [BreadcrumbEllipsis],
  argTypes: props,
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "2em 2em 7em 2em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

export const Default = (args: IBreadcrumbEllipsisProps) => (
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

export default story;
