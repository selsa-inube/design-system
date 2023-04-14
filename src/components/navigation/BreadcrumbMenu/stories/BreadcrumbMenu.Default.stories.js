import React from "react";
import { BreadcrumbMenu } from "../index";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./props";

const story = {
  title: "navigation/BreadcrumbMenu/Default",
  components: [BreadcrumbMenu],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

export const Default = (args) => <BreadcrumbMenu {...args} />;
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
      path: "/usersEdition",
      id: "usersEdition",
    },
  ],
};
Default.argTypes = {
  routes,
};

export default story;
