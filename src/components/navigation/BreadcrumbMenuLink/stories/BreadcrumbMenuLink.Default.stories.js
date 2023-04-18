import React from "react";
import { BreadcrumbMenuLink } from "../index";
import { BreadcrumbMenuLinkController } from "./BreadcrumbMenuLinkController";
import { BrowserRouter } from "react-router-dom";

import {
  id,
  isActive,
  handleClick,
  label,
  typo,
  destinationPath,
} from "./props";

const story = {
  title: "navigation/BreadcrumbMenuLink/Default",
  components: [BreadcrumbMenuLink],
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

export const Default = (args) => <BreadcrumbMenuLinkController {...args} />;
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
  destinationPath,
};

export default story;
