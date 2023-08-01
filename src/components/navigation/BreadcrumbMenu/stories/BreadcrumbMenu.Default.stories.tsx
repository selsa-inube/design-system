import { BrowserRouter } from "react-router-dom";
import { BreadcrumbMenu } from "../index";
import { props } from "../props";
import { IBreadcrumbMenuProps } from "../interfaces/BreadcrumbMenu.interface";

const story = {
  title: "navigation/BreadcrumbMenu",
  components: [BreadcrumbMenu],
  argTypes: props,
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

export default story;
