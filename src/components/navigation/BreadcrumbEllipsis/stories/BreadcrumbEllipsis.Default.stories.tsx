import { BreadcrumbEllipsis } from "../index";
import { BrowserRouter } from "react-router-dom";

import { routes, typo } from "./props";
import { IBreadcrumbEllipsisProps } from "../interfaces/BreadcrumbEllipsisProps.interface";

const story = {
  title: "navigation/BreadcrumbEllipsis/Default",
  components: [BreadcrumbEllipsis],
  decorators: [
    (Story: React.ElementType) => (
      <div style={{ margin: "3em" }}>
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
};
Default.argTypes = {
  routes,
  typo,
};

export default story;
