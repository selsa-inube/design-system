import React from "react";
import { BreadcrumbLink } from "../index";
import { BreadcrumbLinkController } from "./BreadcrumbLinkController";
import {
  id,
  isActive,
  handleClick,
  label,
  typo,
  destinationPath,
} from "./props";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "navigation/BreadcrumbLink/Default",
  components: [BreadcrumbLink],
  decorators: [
    (Story) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = (args) => (
  <BrowserRouter>
    <BreadcrumbLinkController {...args} />
  </BrowserRouter>
);
Default.args = {
  label: "Privileges",
  destinationPath: "/privileges",
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
