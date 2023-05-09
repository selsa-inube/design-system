import React from "react";
import { Breadcrumbs } from "../index";
import { BrowserRouter } from "react-router-dom";
import { route } from "./props";

const story = {
  title: "navigation/Breadcrumbs/Mobile",
  components: [Breadcrumbs],
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

export const Mobile = (args) => <Breadcrumbs {...args} />;
Mobile.args = {
  route: "Privileges/Users/Registration",
};
Mobile.argTypes = {
  route,
};

export default story;
