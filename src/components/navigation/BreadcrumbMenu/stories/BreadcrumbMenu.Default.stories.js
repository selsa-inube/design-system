import React from "react";
import { BreadcrumbMenu } from "../index";
import { BrowserRouter } from "react-router-dom";

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
  routes: {
    description:
      "The breadcrumb-component will utilize this routes for display, and consequently, it can be employed to locate the source of breadcrumbLinks present within this component.",
    table: {
      defaultValue: {
        summary: `This structure must be present [{
           label: "",
          path: "",
          id: ""}]`,
      },
    },
  },
};

export default story;
