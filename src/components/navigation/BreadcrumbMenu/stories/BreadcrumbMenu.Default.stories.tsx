import { BrowserRouter } from "react-router-dom";
import { BreadcrumbMenu } from "../index";
import { parameters, routes } from "./props";
import { IBreadcrumbMenuProps } from "..";

const story = {
  title: "navigation/BreadcrumbMenu",
  components: [BreadcrumbMenu],
  parameters,
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
Default.argTypes = {
  routes,
};

export default story;
