import { BreadcrumbMenu } from "../index";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./props";
import { IBreadcrumbMenuProps } from "../interfaces/BreadcrumbMenu.interface";

const story = {
  title: "navigation/BreadcrumbMenu/Default",
  components: [BreadcrumbMenu],
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

export const Default = (args: IBreadcrumbMenuProps) => (
  <BreadcrumbMenu {...args} />
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
};

export default story;