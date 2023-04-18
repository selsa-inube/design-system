import React from "react";
import { BreadcrumbEllipsis } from "../index";
import { BreadcrumbEllipsisController } from "./BreadcrumbEllipsisController";
import { BrowserRouter } from "react-router-dom";

import { id, isActive, handleClick, typo } from "./props";

const story = {
  title: "navigation/BreadcrumbEllipsis/Default",
  components: [BreadcrumbEllipsis],
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

export const Default = (args) => <BreadcrumbEllipsisController {...args} />;
Default.args = {
  id: "privileges",
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
  id,
  isActive,
  handleClick,
  typo,
};

export default story;
