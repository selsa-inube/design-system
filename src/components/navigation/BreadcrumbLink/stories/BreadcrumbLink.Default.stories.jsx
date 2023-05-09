import React from "react";
import { BreadcrumbLink } from "../index";
import { BreadcrumbLinkController } from "./BreadcrumbLinkController";
import { BrowserRouter } from "react-router-dom";

import { id, isActive, handleClick, label, typo, path } from "./props";

const story = {
  title: "navigation/BreadcrumbLink/Default",
  components: [BreadcrumbLink],
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

export const Default = (args) => <BreadcrumbLinkController {...args} />;
Default.args = {
  label: "Privileges",
  path: "/privileges",
  id: "privileges",
};
Default.argTypes = {
  id,
  isActive,
  handleClick,
  label,
  typo,
  path,
};

export default story;
